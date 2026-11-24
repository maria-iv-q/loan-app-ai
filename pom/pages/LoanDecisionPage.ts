import type { Page } from '@playwright/test';
import { LoanDetails } from '../organisms/LoanDetails';
import { YourInformation } from '../organisms/YourInformation';
import { BasePage } from './BasePage';

export class LoanDecisionPage extends BasePage {
  readonly loanDetails: LoanDetails;
  readonly yourInformation: YourInformation;

  constructor(page: Page) {
    super(page);
    this.loanDetails = new LoanDetails(page);
    this.yourInformation = new YourInformation(page);
  }

  async open(): Promise<void> {
    await this.navigateTo('/loan-decision');
  }
}
