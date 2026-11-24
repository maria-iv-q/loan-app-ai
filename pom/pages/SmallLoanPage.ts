import type { Page } from '@playwright/test';
import { LoanCalculator } from '../organisms/LoanCalculator';
import { LoginForm } from '../organisms/LoginForm';
import { BasePage } from './BasePage';

export class SmallLoanPage extends BasePage {
  readonly loanCalculator: LoanCalculator;
  readonly loginForm: LoginForm;

  constructor(page: Page) {
    super(page);
    this.loanCalculator = new LoanCalculator(page);
    this.loginForm = new LoginForm(page);
  }

  async open(): Promise<void> {
    await this.navigateTo('/small-loan');
  }
}
