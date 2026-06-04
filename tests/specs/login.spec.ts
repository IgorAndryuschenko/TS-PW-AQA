import { test, expect } from '../fixtures/test';
import { users } from '../test-data/users';

test.describe('login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
  });

  test('allows a standard user to sign in', async ({ loginPage, inventoryPage }) => {
    await loginPage.login(users.standard.username, users.standard.password);

    await inventoryPage.expectOpened();
  });

  test('shows an error for a locked out user', async ({ loginPage }) => {
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);

    await expect(loginPage.errorMessage).toContainText(
      'Epic sadface: Sorry, this user has been locked out.',
    );
  });
});
