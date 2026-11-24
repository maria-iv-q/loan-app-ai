import type { Locator } from '@playwright/test';
import { BaseAtom } from './BaseAtom';

export class SelectInput extends BaseAtom {
  constructor(locator: Locator) {
    super(locator);
  }

  async selectOption(value: string): Promise<void> {
    await this.locator.selectOption(value);
  }
}
