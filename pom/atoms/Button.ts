import type { Locator } from '@playwright/test';
import { BaseAtom } from './BaseAtom';

export class Button extends BaseAtom {
  constructor(locator: Locator) {
    super(locator);
  }

  async click(): Promise<void> {
    await this.locator.click();
  }
}
