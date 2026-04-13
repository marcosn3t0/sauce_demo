import { Locator, Page } from "@playwright/test";

export type SauceDemoLoginPageLocator = {
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
};

export const sauceDemoLoginPageLocator = (page:Page) => ({
    usernameInput: page.locator('#user-name'),
    passwordInput: page.locator('#password'),
    loginButton: page.getByRole('button',{
        name:'Login'
    }),
});