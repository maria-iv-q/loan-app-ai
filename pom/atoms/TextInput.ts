import type { Locator } from '@playwright/test';
import { BaseAtom } from './BaseAtom';

export class TextInput extends BaseAtom {
  constructor(locator: Locator) {
    super(locator);
  }

  async fill(value: string): Promise<void> {
    await this.locator.fill(value);
  }

  async press(key: string): Promise<void> {
    await this.locator.press(key);
  }
}
