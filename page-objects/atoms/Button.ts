import BaseAtom from "./BaseAtom";
import {Locator, Page} from "@playwright/test";

export default class Button extends BaseAtom {
    constructor(page: Page, container: Locator) {
        super(page, container);
    }

    async click(force = false): Promise<void> {
        await this._container.click({force});
    }

}