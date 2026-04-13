import { Locator, Page } from "@playwright/test";

export class BasePage {
    protected readonly page: Page;

    constructor(page:Page){
        this.page = page;
    };

    /**
     * Retrieves the current page title.
     *
     * Useful for validating navigation results or confirming the user is
     * on the expected page after an action.
     *
     * @returns Promise containing the page title.
     */
    public async getPageTitle(): Promise<string> {
        return await this.page.title();
    };

    /**
     * Generic helper to extract structured data from a list of UI elements.
     *
     * This method iterates over a collection of locators and applies a mapping
     * function to each element. It allows page objects to transform UI lists
     * into strongly typed objects in a reusable and consistent way.
     *
     * Common use cases include:
     * - extracting search results
     * - reading table rows
     * - collecting dropdown options
     * - retrieving card or grid data
     *
     * @typeParam T The shape of the object returned for each list item.
     *
     * @param itemsLocator Locator that identifies the list of elements.
     * @param mapper Function that defines how each element should be transformed.
     *
     * @returns Promise containing an array of mapped objects.
     */
    async mapList<T>(
        itemsLocator: Locator,
        mapper: (item: Locator) => Promise<T>,
        limit?: number
    ): Promise<T[]> {

        await itemsLocator.last().waitFor({state:'visible'});
        const count = limit !==undefined ? limit : await itemsLocator.count();

        const results: T[] = [];

        for (let i = 0; i < count; i++) {

            const item = itemsLocator.nth(i);

            results.push(await mapper(item));

        }

        return results;
    }
}