import{test, expect} from "@playwright/test";

test('test', async ({ page }) => {
  await page.goto('https://proathletics.nop-station.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('qa@gmail.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('12345');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'CSR Dashboard' }).click();
  await page.getByRole('link', { name: ' Team Stores' }).click();
  await page.getByRole('cell', { name: 'abc@gmail.com' }).click();
  await page.locator('.even > td:nth-child(7)').first().click();

  await page.getByLabel('Status').selectOption('5');
  await page.getByLabel('Status').selectOption('0');
  await page.getByLabel('Status').selectOption('10');
  await page.locator('#search-nop-orders').click();
  await page.locator('#teamstore-nop-orders div').filter({ hasText: 'Create Production All Found Selected' }).nth(1).click();
  await page.locator('#teamstore-nop-orders').getByRole('button').nth(2).click();
  await page.locator('.btn-group > button:nth-child(2)').click();
  await page.locator('#teamstore-nop-orders').getByRole('button').nth(2).click();

   await page.locator('.even > td:nth-child(8)').first().click();
  await page.getByRole('row', { name: 'HeadStrong Lehigh 8/2/2023 8/18/2023 info@proathletics.com    0   Edit' }).getByRole('link').click({
    button: 'right'
  });
  await page.locator('tr:nth-child(3) > td:nth-child(11)').click();
  await page.getByRole('row', { name: 'Best In Class 8/2/2023 8/31/2023 ccherami1@gmail.com    0   Edit' }).getByRole('link').click({
    button: 'right'
  });
  await page.getByLabel('Status').selectOption('10');
  await page.locator('#search-nop-orders').click();
  await page.getByRole('row', { name: 'HeadStrong Lehigh 8/2/2023 8/18/2023 info@proathletics.com    0   Edit' }).getByRole('link').click();
  await page.getByLabel('Status').selectOption('10');
  await page.locator('#search-nop-orders').click();
  await page.getByRole('row', { name: '8742 8742 Jaber Kibria $435.00 8/16/2023   View' }).getByRole('checkbox').check();
  await page.getByRole('row', { name: '8741 8741 Jaber Kibria $225.00 8/16/2023   View' }).getByRole('checkbox').check();
  await page.getByRole('cell', { name: '8742' }).first().click();
  await page.getByRole('cell', { name: '8741' }).first().click();
  await page.getByRole('row', { name: '8740 8740 Jaber Kibria $225.00 8/16/2023   View' }).getByRole('checkbox').check();
  await page.getByRole('cell', { name: '8740' }).first().click();
  await page.locator('#teamstore-nop-orders').getByRole('button').nth(2).click();
  await page.getByRole('button', { name: ' Selected' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#CreateProductionOrderSelectedMessage-action-alert').getByText('Ok').click();
  await page.getByRole('row', { name: '8734 8734 test user $400.00 8/14/2023   View' }).getByRole('checkbox').check();
  await page.locator('#teamstore-nop-orders').getByRole('button').nth(2).click();
  await page.getByRole('button', { name: ' Selected' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#CreateProductionOrderSelectedMessage-action-alert').getByText('Ok').click();
});


