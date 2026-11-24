import type { Locator, Page } from '@playwright/test';
import { BaseOrganism } from './BaseOrganism';

export class LoanDetails extends BaseOrganism {
  readonly loanDetailsHeading: Locator;
  readonly amount: Locator;
  readonly monthlyPayment: Locator;
  readonly period: Locator;

  constructor(page: Page) {
    super(page);
    this.loanDetailsHeading = this.page.getByRole('heading', { name: 'Loan Details' });
    this.amount = this.page.getByTestId('final-page-amount');
    this.monthlyPayment = this.page.getByTestId('final-page-monthly-payment');
    this.period = this.page.getByTestId('final-page-period');
  }
}
