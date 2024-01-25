// import{test, expect} from "@playwright/test"
// import Form from "../pages/formPage"

// test("form test", async({page}) => {

//     const form = new Form(page)
//     const appURL = "https://demoqa.com/automation-practice-form"

//     await form.navigate(appURL)
//     await form.enterFirstName("Rehan")
//     await form.enterLastName("Khan")
    
//     expect(page.url()).toBe(appURL)

//  });

import{expect} from "@playwright/test"
import { test } from "../fixtures/custom-fixture"
import data1 from "../fixtures/data.json"


test("form test", async({page, formPage}) => {

    
    await test.step('Go to application url', async() => {
      const appURL = "https://demoqa.com/automation-practice-form"
      await formPage.navigate(appURL);
    })

    await test.step('Enter first and last name', async() => {
      await formPage.enterFirstName(data1.fname)
      await formPage.enterLastName(data1.lname)
    })
    
   // expect(page.url()).toBe(appURL)

 });

 test("Test 3", async({page, formPage}) => {
    console.log(data1.place);
 
  });