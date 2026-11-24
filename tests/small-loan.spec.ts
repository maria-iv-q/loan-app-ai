import { expect, test } from '@playwright/test';
import { LoanDecisionPage } from '../pom/pages/LoanDecisionPage';
import { SmallLoanPage } from '../pom/pages/SmallLoanPage';

test.describe('Small loan critical path', () => {
  let smallLoanPage: SmallLoanPage;

  test.beforeEach(async ({ page }) => {
    smallLoanPage = new SmallLoanPage(page);
    await smallLoanPage.open();
  });

  test('TL-20 - 1: Verify default calculator values', async () => {
    const { loanCalculator } = smallLoanPage;

    await expect(loanCalculator.amountInput.locator).toHaveValue('500');
    await expect(loanCalculator.periodSelect.locator).toHaveValue('12');
    await expect(loanCalculator.monthlyPayment).toHaveText('42.8 €');
  });

  test('TL-20 - 2: Recalculate monthly payment after changing loan amount', async () => {
    const { loanCalculator } = smallLoanPage;

    await loanCalculator.setLoanAmount('1000');

    await expect(loanCalculator.amountInput.locator).toHaveValue('1000');
    await expect(loanCalculator.monthlyPayment).toHaveText('85.61 €');
  });

  test('TL-20 - 3: Open the login form from Apply Now', async () => {
    const { loanCalculator, loginForm } = smallLoanPage;

    await loanCalculator.applyForLoan();

    await expect(loginForm.loginHeading).toBeVisible();
    await expect(loginForm.usernameInput.locator).toBeVisible();
  });

  test('TL-20 - 4: Navigate to Loan Details after authentication', async ({ page }) => {
    const loanDecisionPage = new LoanDecisionPage(page);

    await smallLoanPage.loanCalculator.applyForLoan();
    await smallLoanPage.loginForm.signIn('test.user', 'TestPassword123');

    await expect(loanDecisionPage.loanDetails.loanDetailsHeading).toBeVisible();
  });
});
