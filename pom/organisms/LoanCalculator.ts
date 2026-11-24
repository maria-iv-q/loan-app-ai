import type { Locator, Page } from '@playwright/test';
import { Button } from '../atoms/Button';
import { RangeInput } from '../atoms/RangeInput';
import { SelectInput } from '../atoms/SelectInput';
import { TextInput } from '../atoms/TextInput';
import { BaseOrganism } from './BaseOrganism';

export class LoanCalculator extends BaseOrganism {
  readonly amountInput: TextInput;
  readonly amountSlider: RangeInput;
  readonly periodSelect: SelectInput;
  readonly periodSlider: RangeInput;
  readonly monthlyPayment: Locator;
  readonly applyButton: Button;

  constructor(page: Page) {
    super(page);
    this.amountInput = new TextInput(this.page.getByTestId('id-small-loan-calculator-field-amount'));
    this.amountSlider = new RangeInput(this.page.getByTestId('id-small-loan-calculator-field-amount-slider'));
    this.periodSelect = new SelectInput(this.page.getByTestId('ib-small-loan-calculator-field-period'));
    this.periodSlider = new RangeInput(this.page.getByTestId('ib-small-loan-calculator-field-period-slider'));
    this.monthlyPayment = this.page.getByTestId('ib-small-loan-calculator-field-monthlyPayment');
    this.applyButton = new Button(this.page.getByTestId('id-small-loan-calculator-field-apply'));
  }

  async setLoanAmount(amount: string): Promise<void> {
    await this.amountInput.fill(amount);
    await this.amountInput.press('Tab');
  }

  async applyForLoan(): Promise<void> {
    await this.applyButton.click();
  }
}
