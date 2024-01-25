import { Page, expect } from "@playwright/test";

export default class NopOrderPlaceTeamStore{
    
    page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    private webElements ={
        tsNameStoreManu: "(//span[text()=' Team Stores'])[1]",
        tsSearchBox: "#forums-small-searchterms",
        searcIconClk: "//button[text()='search']",
        tsName : "//a[contains(text(),'HeadStrong Lehigh')]",
        tsProductName: "//h2[@class='product-title']//a[1]",
        tsQty: "(//label[text()='Qty:']/following::input)[1]",
        addToCart: "(//button[@type='button'])[1]",
        tsShoppingCart: "(//span[text()='Shopping cart'])[2]",
        tsSize: "(//select[@class='valid'])[1]",
        tsGroup: "(//select[@class='valid'])[2]",
        tsAttributeName: "(//input[@class='textbox'])[1]",
        tsAttributeNumber: "(//input[@class='textbox'])[2]",
        tsTermService: "//input[@id='termsofservice']/following-sibling::label[1]",
        tsCheckoutBtn: "#checkout",
        tsBillingAndShipping: "(//button[@name='save'])[1]",
        tsbillingAdd: "//button[@id='checkout']",
        tsShippingMethod: "(//button[text()='Continue'])[3]",
        tsPaymentMethod: "(//button[@name='save'])[2]",
        tsPaymentInfo: "//button[@class='button-1 payment-info-next-step-button']",
        tsConfirmOrder: "//button[@class='button-1 confirm-order-next-step-button']",
        tsOrderSuccessfull: "(//div[@class='title']//strong)[1]"

    }

    async clickTeamStoreInPublicSite(){
        await this.page.click(this.webElements.tsNameStoreManu);
        //await this.page.getByRole('link', { name: 'Team Stores' }).click();
    }
    async teamStoreNameInputInSearchBox(teamStoreName: string){
        await this.page.type(this.webElements.tsSearchBox, teamStoreName);
    } 
    async clickSearchBtn() {
    // await this.page.locator(this.webElements.searcIconClk).click();
    // await this.page.waitForTimeout(2000);
     await this.page.getByRole('button', { name: 'Search' }).click();
      //  await this.page.click("//button[text()='search']");
    }
    async clickTeamStoreName(){
    await this.page.locator(this.webElements.tsName).click();
       
   //  await this.page.getByRole('link', { name: 'Team Stores' }).click();

    }
    async  productDetailsPage(){
        await this.page.locator(this.webElements.tsProductName).click()
     //   await this.page.getByRole('link', { name: 'HeadStrong Lehigh' }).click();
        
     //  await this.page.getByRole('link', { name: 'Headstrong Shooting Shirt', exact: true }).click();
    }

    async groupSelect(){
       // await this.page.locator(this.webElements.tsGroup).selectOption('4501');

        await this.page.locator('#product_attribute_4185').selectOption('4502');
    }
    async nameInput(){
        await this.page.locator(this.webElements.tsAttributeName).fill('Foysal')
    }
    async numberInput(){
        await this.page.locator(this.webElements.tsAttributeNumber).fill('420');
    }
    async sizeSelect(){
       //await this.page.locator('#product_attribute_4182').selectOption('4495');
       await this.page.locator("//select[@id='product_attribute_4182']").selectOption({label:'Youth Large'})
       //await this.page.locator('select.valid').selectOption({index:2})
      // await this.page.locator("//select[@class='valid']").click();
        // await this.page
        // .locator('selelc.valid')
        // .filter({hasText:/^Youth Large$/})
        // .click();
       // await this.page.locator(this.webElements.tsSize).selectOption('4495');
    }
    async quantityInput(){
        await this.page.locator(this.webElements.tsQty).fill('6');
    }
    async addToCart(){
        await this.page.locator(this.webElements.addToCart).click();
     //   await this.page.getByRole('button', { name: 'Add to cart' }).click();
    }
    async shoppingCartBtn(){
       await this.page.locator(this.webElements.tsShoppingCart).click();
     
   // await this.page.getByRole('link', { name: 'shopping cart', exact: true }).click();

    }
    async termsOfServiceCheckboxClick(){
       await this.page.locator(this.webElements.tsTermService).check();
        //await this.page.getByText('I agree with the terms of service and I adhere to them unconditionally (read)').click();

    }

    async clkCheckout(){
        await this.page.click(this.webElements.tsCheckoutBtn);
        await this.page.waitForTimeout(3000);
    }
    async billingShippingSameButtonClick(){
        await this.page.click(this.webElements.tsBillingAndShipping);
    }
    async billingAddress(){
       await this.page.locator(this.webElements.tsbillingAdd).click();
    }
    async shippingAddress(){
      //  this.page.locator(this.webElements).click();
    }
    async shippingMethod(){
       await this.page.locator(this.webElements.tsShippingMethod).click();
    }
    async paymentMethod(){
        await this.page.locator(this.webElements.tsPaymentMethod).click();
    }
    async paymentInformation(){
       await this.page.locator(this.webElements.tsPaymentInfo).click();
    }
    async confirmOrder(){
       await this.page.locator(this.webElements.tsConfirmOrder).click();

    }
    async orderSuccessfullyMessage(){
        await expect(this.page.getByText('Your order has been successfully processed!',{ exact: true})).toBeVisible();
   //     await expect(this.page.getByText('Your order has been successfully processed!')).toContainText('Your order has been successfully processed!');

    }

}