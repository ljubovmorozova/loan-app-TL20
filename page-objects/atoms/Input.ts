import {expect, Locator, Page} from "@playwright/test";
import BaseAtom from "./BaseAtom";

export default class Input extends BaseAtom {
    constructor(page: Page, container: Locator) {
        super(page, container);
    }

    async fill(text: string): Promise<void> {
        await this._container.fill(text);
    }

    async clear(): Promise<void> {
        await this._container.clear();
    }

    async getValue(): Promise<string> {
        return await this._container.inputValue();
    }

    async checkValue(expected: string): Promise<void> {
        const currentValue = await this.getValue();
        expect(currentValue).toBe(expected);
    }
}