import BaseAtom from "./BaseAtom";
import {Locator, Page} from "@playwright/test";

export default class Select extends BaseAtom {

    constructor (page: Page, container: Locator) {
        super(page, container);
      }

    async chooseOption (option: string): Promise<void> {
        await this._container.selectOption(option);
    }

}