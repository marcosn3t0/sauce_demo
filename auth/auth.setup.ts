import { expect, Page } from "@playwright/test";
import { SauceDemoLoginPage } from "../pages/sauceDemoLogin.page";

export async function verifyAndSaveAuthState(baseURL: string | undefined, page: Page, user: { username: string, password: string }) {
    const loginPage = new SauceDemoLoginPage(page);
    const username = user.username ?? '';
    const password = user.password ?? '';

    if (!baseURL) throw new Error('baseURL is not defined.');

    await page.goto('/');
    if (username===""  || password==="") {
        throw new Error('Username or password not configured');
    }
    await loginPage.navigateToLoginPage();
    await loginPage.login(username, password);

    await expect(page).toHaveTitle('Swag Labs');
}