import {Page} from "@playwright/test";
import {SERVICE_URL} from "../../env/env-data";

export default class BasePage {
    readonly page: Page;
    readonly _url: string;

    protected constructor(page: Page, path: string) {
        this.page = page;
        this._url = `${SERVICE_URL}${path}`;
    }

    async goto(): Promise<void> {
        await this.page.goto(this._url);
    }
}