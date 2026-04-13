import path from 'path';
import { test as base, Browser, BrowserContext, Page, expect } from '@playwright/test'
import { invokeBrowser } from '../browser/browser'
import { env } from '../config/env'
import { verifyAndSaveAuthState } from '../auth/auth.setup';

const AUTH_PATH = path.join(__dirname, '../auth/auth.json');

type CustomFixtures = {
  browser: Browser;
  context: BrowserContext;
  customPage: Page;
  useAuth: boolean;
}

export const test = base.extend<CustomFixtures>({
  useAuth: [false, { option: true }],
  browser: async ({}, use) => {
    const browser = await invokeBrowser();

    await use(browser)

    await browser.close()
  },

context: async ({ browser, useAuth }, use) => {
    let storageState: string | undefined = undefined;

    if (useAuth) {
      const tempContext = await browser.newContext();
      const tempPage = await tempContext.newPage();

      await verifyAndSaveAuthState(env.baseUrl, tempPage, {
        username: env.username ?? "",
        password: env.password ?? ""
      });

      await tempPage.context().storageState({ path: AUTH_PATH });
      await tempContext.close();
    
      storageState = AUTH_PATH;
    }
    
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      baseURL: env.baseUrl,
      storageState: storageState
    });

    await use(context);
    await context.close();
  },

  customPage: async ({ context }, use) => {
    const customPage = await context.newPage()

    await use(customPage)

    await customPage.close()
  }

});

export { expect };