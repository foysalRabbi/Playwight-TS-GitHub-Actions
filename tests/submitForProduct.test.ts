
import { test } from "../fixtures/custom-fixture";
import loginData from "../fixtures/csrLoginData.json"

test("CSR user able to Submit orders for production", async({submitForProductionForFactory,teamStore}) => {


  await test.step('Go to application url in Proathletics', async() => {
    const appURL = "https://proathletics.nop-station.com/login?returnUrl=%2F";
    await teamStore.navigate(appURL);
  })

  await test.step('Verify user able to login with valid credential user id and password', async() => {
    await teamStore.enterUserID(loginData.userID)
    await teamStore.enterPassword(loginData.password)
    await teamStore.clickLoginBtn();
   // await teamStore.verifyLoginSuccess();
  })
  
  await test.step("Verify submit for product with positive data", async() => {
    await teamStore.clickCSRAdmin();
    await teamStore.clickTeamStore();
    await submitForProductionForFactory.nameInput("HeadStrong ");
    await submitForProductionForFactory.clickSearchBtn();
    await submitForProductionForFactory.clickEditBtn();
    await submitForProductionForFactory.notsentForProductionDropdownSelect();
    await submitForProductionForFactory.searchBtnClickSendforProduction();
    await submitForProductionForFactory.selectCheckbox()
    await submitForProductionForFactory.CreateButtonClick();
    await submitForProductionForFactory.selectedButtonclickFromDropdown();
    await submitForProductionForFactory.submitPopUpBtn();
    await submitForProductionForFactory.popUpSuccessfulMSG();
  
   });



 });