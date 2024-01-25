import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://proathletics.nop-station.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').fill('qa@gmail.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('12345');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'CSR Dashboard' }).click();
  await page.getByRole('link', { name: ' Team Stores' }).click();
  await page.getByRole('link', { name: ' Add new' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('Rehan Khan on Augest 7');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Choose' }).click();
  const page1 = await page1Promise;
  await page1.getByLabel('Email').click();
  await page1.getByLabel('Email').fill('foysal');
  await page1.getByRole('button', { name: ' Search' }).click();
  await page1.getByRole('row', { name: 'Select foysal.rabbi@gmail.com Foysal Rabbi ' }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Opening Date\*$/ }).getByLabel('select').click();
  await page.getByTitle('Friday, August 4, 2023').click();
  await page.locator('div').filter({ hasText: /^Closing Date\*$/ }).getByLabel('select').click();
  await page.getByRole('link', { name: '24' }).click();
  await page.getByLabel('Published').check();
  await page.getByRole('button', { name: ' Save and Continue Edit' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: ' Add Product to Team store' }).click();
  const page2 = await page2Promise;
  await page2.getByLabel('Product name').click();
  await page2.getByLabel('Product name').fill('icon');
  await page2.getByRole('button', { name: ' Search' }).click();

  await page2.getByRole('row', { name: 'Icon Vest Armor 87 9995 Team Store Product ' }).getByRole('checkbox').check();
  await page2.getByRole('row', { name: 'Icon Squad Backpack 153 0 ' }).getByRole('checkbox').check();
  await page2.getByRole('row', { name: 'Icon Stronghold Bag + Rain Cover 138 0 Simple product ' }).getByRole('checkbox').check();
  await page2.getByRole('button', { name: ' Add Selected' }).click();

  await page.getByRole('button', { name: ' Save and Continue Edit' }).click();

  // Orders Section


  

});