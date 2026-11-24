import type { Locator, Page } from '@playwright/test';
import { Button } from '../atoms/Button';
import { SelectInput } from '../atoms/SelectInput';
import { TextInput } from '../atoms/TextInput';
import { BaseOrganism } from './BaseOrganism';

export class YourInformation extends BaseOrganism {
  readonly yourInformationHeading: Locator;
  readonly fullNameInput: TextInput;
  readonly communicationLanguageSelect: SelectInput;
  readonly continueButton: Button;

  constructor(page: Page) {
    super(page);
    this.yourInformationHeading = this.page.getByRole('heading', { name: 'Your Information' });
    this.fullNameInput = new TextInput(this.page.getByTestId('final-page-full-name'));
    this.communicationLanguageSelect = new SelectInput(
      this.page.getByTestId('final-page-communication-language'),
    );
    this.continueButton = new Button(this.page.getByTestId('final-page-continue-button'));
  }

  async continue(): Promise<void> {
    await this.continueButton.click();
  }
}
