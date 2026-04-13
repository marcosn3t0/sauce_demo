import { Locator, Page } from "@playwright/test";
import { BasePage } from "./sauceDemoBase.page";
import { sauceDemoHomeLocator } from "../locator/sauceDemoHome.locator";
import { Product } from "../types/product.type";

export class SauceDemoHome extends BasePage {
    readonly locators;

    private readonly prodCart: Product[] = [];

    constructor(page: Page) {
        super(page);
        this.locators = sauceDemoHomeLocator(this.page);
    }

    get cartProducts(): Product[] {
        return this.prodCart;
    };

    navigateToHomePage = async (): Promise<void> => {
        await this.page.goto('/inventory.html');
    }

    /**
     * Adds specific products to the cart based on an array of names provided.
     * @param productNames - Array of strings containing the exact names of products to add.
     */
    addProductsByName = async (productNames: readonly string[]): Promise<void> => {
        const items = await this.locators.productInvetary.all();
        for (const item of items) {
            const name = await this.locators.productName(item).innerText();
            
            if (productNames.includes(name)) {
                const button = this.locators.addToCartBtn(item);
                
                const buttonText = await button.innerText();
                if (buttonText.toLowerCase() === 'add to cart') {
                    await button.click();
                }

                this.prodCart.push({
                    description: await this.locators.productDesc(item).innerText(),
                    productName: name,
                    price: parseFloat((await this.locators.productPrice(item).innerText()).replace('$', ''))
                });
            };
 
        }
    };

    clickOnCartIcon = async ():Promise<void> => {
        await this.locators.cartIcon.click();
    }
}