import { SauceDemoCartPage } from "@pages/sauceDemoCart.page";
import { SauceDemoHome } from "@pages/sauceDemoHome.page";
import { test as base } from "./custom.fixture";

type CustomFixtures = {
    sauceDemoHomePage:SauceDemoHome;
    sauceDemoCartPage:SauceDemoCartPage;
};

export const test = base.extend<CustomFixtures>({
    sauceDemoHomePage: async ({customPage}, use) => {
        const sauceDemoHomePage = new SauceDemoHome(customPage);
        await use(sauceDemoHomePage);
    },
    sauceDemoCartPage: async ({customPage}, use) => {
        const sauceDemoCartPage = new SauceDemoCartPage(customPage);
        await use(sauceDemoCartPage);
    }
});

export { expect } from '@playwright/test';
