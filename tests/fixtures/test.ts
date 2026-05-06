import { test as base, expect } from '@playwright/test';

import { InventoryPage } from '../pages/inventory.page';
import { LoginPage } from '../pages/login.page';

type AppFixtures = {
  inventoryPage: InventoryPage;
  loginPage: LoginPage;
};

export const test = base.extend<AppFixtures>({
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect };
