import { test, expect } from '@playwright/test';

test('User able to place an order from a specific team store', async ({ page }) => {

  await page.goto('https://proathletics.nop-station.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('jaber333@gmail.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('12345');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Team Stores' }).click();
  await page.getByRole('link', { name: 'Team Store 2' }).click();
  await page.getByRole('link', { name: 'Team Store Product 2', exact: true }).click();
  await page.getByText('Name Number Size *Please selectAdult SmallAdult MediumAdult LargeAdult XLAdult X').click();
  await page.locator('#product_attribute_3126').click();
  await page.locator('#product_attribute_3126').fill('Rehan');
  await page.locator('#product_attribute_3127').click();
  await page.locator('#product_attribute_3127').fill('1242');
  await page.locator('#product_attribute_3128').selectOption('3364');
  await page.locator('#product_attribute_label_3129').click();
  await page.locator('#product_attribute_3129').selectOption('3367');
  await page.locator('#product_enteredQuantity_101').click();
  await page.locator('#product_enteredQuantity_101').fill('8');
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Shopping cart (0)' }).click();
  await page.getByText('I agree with the terms of service and I adhere to them unconditionally (read)').click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.locator('.button-1').first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByText('Your order has been successfully processed!').click();
  await page.locator('div').filter({ hasText: /^Order number: 7724$/ }).click();
  await page.getByRole('link', { name: 'Click here for order details.' }).click();

});