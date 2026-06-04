import { test as base, expect } from '@playwright/test';

import { InventoryPage } from '../pages/inventory.page';
import { LoginPage } from '../pages/login.page';
import { CheckoutPage } from '../pages/checkout.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPageStepTwoPage } from '../pages/checkoutStepTwo.page';
import { CheckoutCompletePage } from '../pages/checkoutComplete.page';

type AppFixtures = {
  inventoryPage: InventoryPage;
  loginPage: LoginPage;
  checkoutPage: CheckoutPage;
  cartPage: CartPage;
  checkoutStepTwoPage: CheckoutPageStepTwoPage;
  checkoutCompletePage: CheckoutCompletePage;
};

export const test = base.extend<AppFixtures>({
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutStepTwoPage: async ({ page }, use) => {
    await use(new CheckoutPageStepTwoPage(page));
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
});

export { expect };
