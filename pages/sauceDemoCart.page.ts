import { Page } from "@playwright/test";
import { BasePage } from "./sauceDemoBase.page";
import { Product } from "../types/product.type";
import { todoPageLocator } from "../locator/sauceDemoCart.locator";

export class SauceDemoCartPage extends BasePage{

    readonly locators;

    constructor(page:Page){
        super(page);
        this.locators = todoPageLocator(page);
    };

    getCartItems = async (): Promise<Product[]> => {
        return this.mapList<Product>(
            this.locators.todoCartList,
            async (item) => {
                const name = await this.locators.productName(item).innerText();
                const desc = await this.locators.productDesc(item).innerText();
                const priceRaw = await this.locators.productPrice(item).innerText();

                return {
                    productName: name,
                    description: desc,
                    //do not remove numbers
                    price: parseFloat(priceRaw.replace(/[^0-9.]/g, ''))
                };
            }
        );
    }
}