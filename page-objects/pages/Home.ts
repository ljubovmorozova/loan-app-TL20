import BasePage from "./BasePage";
import {Locator, Page} from "@playwright/test";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Select from "../atoms/Select";

export default class Home extends BasePage {
    readonly amountInput: Input;
    readonly applyNowButton: Button;
    readonly amountSlider: Input;
    readonly periodSelect: Select;
    readonly periodSlider: Input;
    readonly popup: Locator;
    readonly usernameField: Input;
    readonly passwordField: Input;
    readonly continueButton: Button;
    readonly applyForLoanButton: Button;

    constructor(page: Page) {
        super(page, "/");
        this.amountInput = new Input(page, page.getByTestId("id-small-loan-calculator-field-amount"));
        this.applyNowButton = new Button(page, page.getByTestId("id-small-loan-calculator-field-apply"));
        this.amountSlider = new Input(page, page.getByTestId("id-small-loan-calculator-field-amount-slider"));
        this.periodSelect = new Select(page, page.getByTestId("ib-small-loan-calculator-field-period"));
        this.periodSlider = new Input(page, page.getByTestId("ib-small-loan-calculator-field-period-slider"));
        this.popup = page.locator(".popup-container");
        this.usernameField = new Input(page, this.popup.getByTestId("login-popup-username-input"));
        this.passwordField = new Input(page, this.popup.getByTestId("login-popup-password-input"));
        this.continueButton = new Button(page, this.popup.getByTestId("login-popup-continue-button"));
        this.applyForLoanButton = new Button(page, page.getByTestId("id-image-element-button-image-2"));
    }
}