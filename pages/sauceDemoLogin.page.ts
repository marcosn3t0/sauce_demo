import { Page } from "@playwright/test";
import { BasePage } from "./sauceDemoBase.page";
import { sauceDemoLoginPageLocator } from "../locator/sauceDemoLogin.locator";

export class SauceDemoLoginPage extends BasePage {

    private readonly locators;
    
    constructor(page:Page){
        super(page);
        this.locators = sauceDemoLoginPageLocator(this.page);
    };

    async navigateToLoginPage(){
        await this.page.goto('/');
    }

    async login(username:string,password:string){
        await this.locators.usernameInput.fill(username);
        await this.locators.passwordInput.fill(password);
        await this.locators.loginButton.click();
    }
}