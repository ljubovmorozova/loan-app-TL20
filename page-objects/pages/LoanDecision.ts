import BasePage from "./BasePage";
import {expect, Locator, Page} from "@playwright/test";
import Button from "../atoms/Button";
import Select from "../atoms/Select";

export default class LoanDecision extends BasePage {
    readonly amountSpan: Locator;
    readonly languageSelect: Select;
    readonly continueButton: Button;
    readonly popupOkButton: Button;

    constructor(page: Page) {
        super(page, "/loan-decision");
        this.languageSelect = new Select(page, page.getByTestId("final-page-communication-language"));
        this.continueButton = new Button(page, page.getByTestId("final-page-continue-button"));
        this.amountSpan = page.getByTestId("final-page-amount");
        this.popupOkButton = new Button(page, page.getByTestId("final-page-success-ok-button"));
    }

    async checkFinalAmount(expected: string): Promise<void> {
        const currentAmount = await this.amountSpan.innerText();
        expect(currentAmount.split(" ")[0]).toBe(expected);
    }
}