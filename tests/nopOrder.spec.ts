import { test, expect } from '@playwright/test';

test('User is able to palce an order from a specific team store in Proathletics', async ({ page }) => {

//Log in

  await page.goto('https://proathletics.nop-station.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').fill('qa@gmail.com');
  await page.getByLabel('Password:').fill('12345');
  await page.getByRole('button', { name: 'Log in' }).click();

  // Team store creat

  await page.getByRole('link', { name: 'CSR Dashboard' }).click();
  await page.getByRole('link', { name: ' Team Stores' }).click();
  await page.getByRole('link', { name: ' Add new' }).click();
  await page.getByLabel('Name').fill('Rehan Khan on Augest 7');

  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Choose' }).click();
  const page1 = await page1Promise;
  await page1.getByLabel('Email').fill('foysal');
  await page1.getByRole('button', { name: 'Search' }).click();
  await page1.getByRole('row', { name: 'Select foysal.rabbi@gmail.com Foysal Rabbi ' }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Opening Date\*$/ }).getByLabel('select').click();
  await page.getByTitle('Friday, August 4, 2023').click();
  await page.locator('div').filter({ hasText: /^Closing Date\*$/ }).getByLabel('select').click();
  await page.getByRole('link', { name: '24' }).click();
  await page.getByLabel('Published').check();
  await page.getByRole('button', { name: ' Save and Continue Edit' }).click();

  //nopOrder Section

  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Add Product to Team store' }).click();
  const page2 = await page2Promise;
  await page2.getByLabel('Product name').fill('icon');
  await page2.getByRole('button', { name: 'Search' }).click();
  await page2.getByRole('row', { name: 'Icon Vest Armor 87 9995 Team Store Product' }).getByRole('checkbox').check();
  await page2.getByRole('row', { name: 'Icon Squad Backpack 153 0 ' }).getByRole('checkbox').check();
  await page2.getByRole('row', { name: 'Icon Stronghold Bag + Rain Cover 138 0 Simple product ' }).getByRole('checkbox').check();
  await page2.getByRole('button', { name: 'Add Selected' }).click();
  await page.getByRole('button', { name: 'Save and Continue Edit' }).click();
 // await page.getByRole('cell', { name: '7691' }).first().click();
  await page.locator('input[name="teamstorenopordercheckbox"]').check();
  await page.getByRole('cell', { name: '7691' }).first().click();
  await page.locator('#teamstore-nop-orders').getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Selected' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#CreateProductionOrderSelectedMessage-action-alert').getByText('Ok').click();
  await page.locator('div').filter({ hasText: /^Production Orders$/ }).first().click();
 
  await page.getByLabel('Search', { exact: true }).fill('7722'); //Product ID
  await page.locator('#search-additionalOrders').click();
  
  await page.getByLabel('Status').selectOption('5'); 
  await page.getByLabel('Status').selectOption('10');

  await page.locator('#search-nop-orders').click();
  await page.locator('#team-store-nop-orders-grid').getByRole('cell', { name: '' }).click();
  await page.getByRole('cell', { name: '7691' }).first().click();

});