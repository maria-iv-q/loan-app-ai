import type { Locator, Page } from '@playwright/test';
import { Button } from '../atoms/Button';
import { TextInput } from '../atoms/TextInput';
import { BaseOrganism } from './BaseOrganism';

export class LoginForm extends BaseOrganism {
  readonly loginHeading: Locator;
  readonly usernameInput: TextInput;
  readonly passwordInput: TextInput;
  readonly continueButton: Button;
  readonly closeButton: Button;

  constructor(page: Page) {
    super(page);
    this.loginHeading = this.page.getByRole('heading', { name: 'Login' });
    this.usernameInput = new TextInput(this.page.getByTestId('login-popup-username-input'));
    this.passwordInput = new TextInput(this.page.getByTestId('login-popup-password-input'));
    this.continueButton = new Button(this.page.getByTestId('login-popup-continue-button'));
    this.closeButton = new Button(this.page.getByTestId('login-popup-close-button'));
  }

  async signIn(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.continueButton.click();
  }
}
