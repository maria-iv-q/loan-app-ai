import type { Page } from '@playwright/test';

export abstract class BaseOrganism {
  protected constructor(protected readonly page: Page) {}
}
