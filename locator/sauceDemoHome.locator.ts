import { Locator, Page } from "@playwright/test";

type SauceDemoHomeLocator = {
    productInvetary: Locator;
    cartItems: Locator;
    productDesc: (product: Locator) => Locator;
    productName: (product: Locator) => Locator;
    addToCartBtn: (product: Locator) => Locator;
    productPrice: (product: Locator) => Locator;
    cartIcon: Locator;
};

export const sauceDemoHomeLocator = (page: Page): SauceDemoHomeLocator => (
    {
        productInvetary: page.locator(".inventory_list div.inventory_item"),
        cartItems: page.locator(".cart_list > div.cart_item"),
        productDesc: (product: Locator) => product.locator('div.inventory_item_desc'),
        productName: (product: Locator) => product.locator('.inventory_item_name'),
        addToCartBtn: (product: Locator) => product.locator('button.btn_inventory'),
        productPrice: (product: Locator) => product.locator('.inventory_item_price'),
        cartIcon: page.locator('#shopping_cart_container')
    }
);