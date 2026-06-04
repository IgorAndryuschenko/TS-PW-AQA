import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutCompletePage {
  readonly title: Locator;
  readonly backHomeButton: Locator;
  readonly checkoutCompleteHeader: Locator;

  constructor(private readonly page: Page) {
    this.title = page.getByTestId('title');
    this.backHomeButton = page.getByTestId('back-to-products');
    this.checkoutCompleteHeader = page.getByTestId('complete-header');
  }

  async expectOpened(): Promise<void> {
    await expect(this.page).toHaveURL(/\/checkout-complete\.html$/);
    await expect(this.title).toHaveText('Checkout: Complete!');
  }
}
