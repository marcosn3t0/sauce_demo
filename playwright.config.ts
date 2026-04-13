// @ts-check
import { defineConfig } from '@playwright/test';
import { env } from './config/env';

export default defineConfig({
  workers: env.workers,
  reporter: 'html',
  projects: [
    {
      name:"SauceDemo Tests",
      testDir:'./tests',
      timeout:env.timeout,
      use:{
        testIdAttribute: 'id',
        trace:'retain-on-failure',
        screenshot:'only-on-failure',
        headless:env.headless,
        baseURL:env.baseUrl,
        locale:'pt-BR',
        timezoneId:'America/Sao_Paulo',
        launchOptions:{
          args:[
            '--diable-web-security',
            '--use-fake-ui-for-media-stream'
          ],
        }
      }
    }
  ],
});