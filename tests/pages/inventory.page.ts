import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly addToCartButtonsBackpack: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(private readonly page: Page) {
    this.title = page.getByTestId('title');
    this.inventoryItems = page.getByTestId('inventory-item');
    this.addToCartButtonsBackpack = page.getByTestId('add-to-cart-sauce-labs-backpack');
    this.shoppingCartBadge = page.getByTestId('shopping-cart-link');
  }

  async expectOpened(): Promise<void> {
    await expect(this.page).toHaveURL(/\/inventory\.html$/);
    await expect(this.title).toHaveText('Products');
    await expect(this.inventoryItems.first()).toBeVisible();
  }
}
