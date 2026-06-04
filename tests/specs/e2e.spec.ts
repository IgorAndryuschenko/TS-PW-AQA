import { test, expect } from '../fixtures/test';
import { users } from '../test-data/users';

test.describe('end-to-end', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
  });

  test('placing an order through the shopping cart', async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,
    checkoutStepTwoPage,
    checkoutCompletePage,
  }) => {
    // Login
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectOpened();

    // Add item to cart and proceed to checkout
    await inventoryPage.addToCartButtonsBackpack.click();
    await expect(inventoryPage.shoppingCartBadge).toHaveText('1');
    await inventoryPage.shoppingCartBadge.click();

    // Checkout process
    await cartPage.expectOpened();
    await expect(cartPage.cartItems).toHaveText('Sauce Labs Backpack');
    await cartPage.checkoutButton.click();

    // Fill in checkout information and continue
    await checkoutPage.expectOpened();
    await checkoutPage.fillCheckoutInformation(
      users.checkoutInformation.firstName,
      users.checkoutInformation.lastName,
      users.checkoutInformation.postalCode,
    );
    await checkoutPage.continueButton.click();

    // Verify checkout step two details
    await checkoutStepTwoPage.expectOpened();
    await expect(checkoutStepTwoPage.checkoutItem).toHaveText('Sauce Labs Backpack');
    await expect(checkoutStepTwoPage.totalPrice).toHaveText('Total: $32.39');
    await checkoutStepTwoPage.finishButton.click();

    // Verify order completion
    await checkoutCompletePage.expectOpened();
    await expect(checkoutCompletePage.checkoutCompleteHeader).toHaveText(
      'Thank you for your order!',
    );
    await checkoutCompletePage.backHomeButton.click();
    await inventoryPage.expectOpened();
  });
});
