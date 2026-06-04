import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutPageStepTwoPage {
  readonly title: Locator;
  readonly finishButton: Locator;
  readonly checkoutItem: Locator;
  readonly totalPrice: Locator;

  constructor(private readonly page: Page) {
    this.title = page.getByTestId('title');
    this.finishButton = page.getByTestId('finish');
    this.checkoutItem = page.getByTestId('inventory-item-name');
    this.totalPrice = page.getByTestId('total-label');
  }

  async expectOpened(): Promise<void> {
    await expect(this.page).toHaveURL(/\/checkout-step-two\.html$/);
    await expect(this.title).toHaveText('Checkout: Overview');
  }
}
