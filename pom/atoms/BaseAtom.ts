import type { Locator } from '@playwright/test';

export abstract class BaseAtom {
  protected constructor(readonly locator: Locator) {}
}
