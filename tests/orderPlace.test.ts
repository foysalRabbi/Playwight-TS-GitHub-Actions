
import { test } from "../fixtures/custom-fixture";
import userLoginData from "../fixtures/csrLoginData.json";
import nopOrderData from "../utility/testData/teamStoreTestData.json"
import DifferentUtilityHelper from "../utility/helper/utilityHelper";

test.describe("Order Place in Team Store",async () => {

    
   
    test("Verify that login user able to order place under any Team store", async({orderPlace,teamStore}) => {

        await test.step('Go to application url', async() => {
            const appURL = "https://proathletics.nop-station.com/login?returnUrl=%2F";
            await teamStore.navigate(appURL);
          })

          await test.step('Verify user able to login with valid credential user id and password', async() => {
            
            await teamStore.enterUserID(userLoginData.b2cUserID)
            await teamStore.enterPassword(userLoginData.b2cPassword)
            await teamStore.clickLoginBtn();
             await teamStore.verifyLoginSuccess();
          })         

          
       await test.step("Verify product search of a team store and go to product details page", async() => {
         await orderPlace.clickTeamStoreInPublicSite()
         await orderPlace.teamStoreNameInputInSearchBox(nopOrderData.tamStoreNameInputData) 
         await orderPlace.clickSearchBtn()   
         await orderPlace.clickTeamStoreName()
         await orderPlace.productDetailsPage()
                
        
       });

       await test.step("Verify all product attribut fill up with valid information",async() => {
        await orderPlace.sizeSelect()
       await orderPlace.groupSelect()
       await orderPlace.nameInput()
       await orderPlace.numberInput()
     
       })

       await test.step("Verify user able to add to cart the product",async() => {
       await orderPlace.quantityInput()
       await orderPlace.addToCart()
       await orderPlace.shoppingCartBtn()
       await orderPlace.termsOfServiceCheckboxClick()        
       })

       await test.step("Verify user able to checkout all steps",async() => {
       await orderPlace.clkCheckout()
       await orderPlace.billingShippingSameButtonClick();
    //    await orderPlace.billingAddress()
    //    await orderPlace.shippingAddress()
       await orderPlace.shippingMethod()
       await orderPlace.paymentMethod()
       await orderPlace.paymentInformation()
       await orderPlace.confirmOrder()
       await orderPlace.orderSuccessfullyMessage()
       })
    
     });

    })
    