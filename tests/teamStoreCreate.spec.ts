
import { expect } from '@playwright/test';
import { test } from "../fixtures/custom-fixture";
import loginData from "../fixtures/csrLoginData.json";
import data from "../fixtures/data.json"


test.describe("Create a Team Store by CSR User", async() => {

  test('CSR User is able to create a team store ', async ({teamStore}) => {

    await test.step('Go to application url', async() => {
      const appURL = "https://proathletics.nop-station.com/login?returnUrl=%2F";
      await teamStore.navigate(appURL);
    })
  
    await test.step('Verify user able to login with valid credential user id and password', async() => {
      await teamStore.enterUserID(loginData.userID)
      await teamStore.enterPassword(loginData.password)
      await teamStore.clickLoginBtn();
      await teamStore.verifyLoginSuccess();
    })

    await test.step("Verify CSR user is able to fill up in Team Store Info Section", async() => {
      await teamStore.clickCSRAdmin();
      await teamStore.clickTeamStore();
      await teamStore.clickAddNew();
      await teamStore.teamStoreName(data._teamstoreName);   
      await teamStore.coachEmail(); 
      await teamStore.pictureUpload();
       await teamStore.openingDate();
       await teamStore.closingDate();
      await teamStore.published();
      await teamStore.canUpdateOrderItem();    
      await teamStore.canCheckReportSection();
      await teamStore.saveAndContinueBtn();
      await teamStore.verifyTeamStoreCreateMessage();
     });

  });



 });





  
//  await page.waitForTimeout(2000)

//   await page.getByText('CSR Dashboard').click();
//  // await page.goto('https://proathletics.nop-station.com/Admin/Csr/Dashboard');
//   await page.waitForTimeout(2000)
//   await page.getByRole('link', { name: 'Team Stores' }).click();
//   await page.waitForTimeout(2000)
//   await page.getByRole('link', { name: 'Add new' }).click();
//   await page.waitForTimeout(2000)
  
//   await page.getByLabel('Name').fill('Rehan Khan');
//   await page.waitForTimeout(2000)
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Choose' }).click();
//   await page.waitForTimeout(2000)

//   const page1 = await page1Promise;
//   await page1.getByLabel('Email').fill('foysal');
//   await page1.getByRole('button', { name: 'Search' }).click();
//  // await page.waitForTimeout(2000);
//   await page1.getByRole('row', { name: 'Select foysal.rabbi@gmail.com Foysal Rabbi' }).getByRole('button').click();
//   //await page.waitForTimeout(2000);

//   await page.locator('div').filter({ hasText: /^Opening Date\*$/ }).getByLabel('select').click();
//   await page.waitForTimeout(2000)
//   await page.getByTitle('Sunday, August 6, 2023').click();
//   //await page.waitForTimeout(2000)
//   await page.locator('div').filter({ hasText: /^Closing Date\*$/ }).getByLabel('select').click();
//   //await page.waitForTimeout(2000)
//  // await page.getByRole('link', { name: '16' }).click();
//   //await page.getByTitle('Wednesday, August 16, 2023').click();
//   await page.waitForTimeout(2000)
//   await page.getByLabel('Published').check();
//  // await page.getByLabel('Published').uncheck();
//   //await page.getByLabel('Published').check();
//   await page.getByLabel('Can update order item').check();
//   await page.getByLabel('Can check report section').check();
//   await page.getByRole('spinbutton', { name: '0', exact: true }).click();
//   await page.getByLabel('Display Order').fill('5');
//   await page.getByRole('spinbutton', { name: '0.0000' }).click();
//   await page.getByLabel('Rebate').fill('2000');
//   await page.getByLabel('Allow Customer Select Size').check();
//   await page.waitForTimeout(2000)
//   await page.getByRole('button', { name: 'Save and Continue Edit' }).click();
//   await page.waitForTimeout(2000)

