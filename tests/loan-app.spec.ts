import { test, expect } from '@playwright/test';
import Home from "../page-objects/pages/Home";
import LoanDecision from "../page-objects/pages/LoanDecision";

test.describe("Loan APP tests", async () => {
    test('TL-20-1 Basic flow', async ({ page }) => {
        const td = {
            initialAmount: "500",
            amountToSet: "1000",
            initialPeriod: "12",
            periodToSet: "28"
        }
        const home = new Home(page);
        const loanDecision = new LoanDecision(page);

        await home.goto();
        await home.amountSlider.checkValue(td.initialAmount);
        await home.amountInput.fill(td.amountToSet);
        await home.amountSlider.checkValue(td.amountToSet);
        await home.periodSlider.checkValue(td.initialPeriod);
        await home.periodSelect.click();
        await home.periodSelect.chooseOption(td.periodToSet);
        await home.periodSlider.checkValue(td.periodToSet);
        await home.applyNowButton.click();
        await home.usernameField.fill("test");
        await home.passwordField.fill("pass");
        await home.continueButton.click();

        await loanDecision.checkFinalAmount(td.amountToSet);
        await loanDecision.languageSelect.chooseOption("Estonian");
        await loanDecision.continueButton.click();
        await loanDecision.popupOkButton.checkVisible();
    });

    test('TL-20-2 Check scroll and press button', async ({ page }) => {
        const home = new Home(page);

        await home.goto();
        await home.amountInput.checkInViewport(true);
        await home.applyForLoanButton.scrollTo()
        await home.amountInput.checkInViewport(false);
        await home.applyForLoanButton.checkInViewport(true)
        await home.applyForLoanButton.click(true)
        await home.amountInput.checkInViewport(true)
    });
})
