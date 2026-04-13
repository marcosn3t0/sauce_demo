import { Locator, Page } from "@playwright/test";

type TodoPageLocator = {
    todoCartList: Locator;
    productDesc: (product: Locator) => Locator;
    productName: (product: Locator) => Locator;
    productPrice: (product: Locator) => Locator;
};

export const todoPageLocator = (page:Page):TodoPageLocator =>({
    todoCartList: page.locator(".cart_list > div.cart_item"),
    productName: (item: Locator) => item.locator(".inventory_item_name"),
    productDesc: (item: Locator) => item.locator(".inventory_item_desc"),
    productPrice: (item: Locator) => item.locator(".inventory_item_price")
});