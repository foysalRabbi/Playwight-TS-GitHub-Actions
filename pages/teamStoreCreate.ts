import { Page, expect } from "@playwright/test";
export default class TeamStoreCreate{

    page: Page

    private elements = {
        userInput: "Email:",
        passwordInput: "Password:",
        loginBtn: "//button[text()='log in']",
        loginSuccessfull: "//a[text()='log out']",
  
    }

    constructor(page: Page){
        this.page = page;
    }

    async navigate(url: string){
        await this.page.goto(url)
     }
     
     async enterUserID(urserID: string){
         await this.page.getByLabel(this.elements.userInput).fill(urserID)
     }
     
     async enterPassword(password: string){
         await this.page.getByLabel(this.elements.passwordInput).fill(password)
     }

     async clickLoginBtn(){
       await this.page.getByRole('button', { name: 'Log in' }).click()
       // await this.page.waitAndClick((this.elements.loginBtn)).
       //await this.page.locator(this.elements.loginBtn).click();
      
       
     }
     
     async verifyLoginSuccess(){
      await expect(this.page.getByRole('link', { name: 'Log out' })).toBeVisible();
      await this.page.waitForTimeout(5000);
     }

     async clickCSRAdmin(){
        await this.page.getByText('CSR Dashboard').click()

     }
  
      async clickTeamStore(){
        await this.page.getByRole('link', { name: 'Team Stores' }).click()

     }
     async clickAddNew(){
        await this.page.getByRole('link', { name: 'Add new' }).click()
     }
  
       async teamStoreName(name: string){
        await this.page.getByLabel('Name').fill(name);
       }
       
       async coachEmail(){
        // Select button >> //*[@id="customers-grid"]/tbody/tr[1]/td[1]/button
       //Eamil: //*[@id="customers-grid"]/tbody/tr[1]/td[2]
        // const [coachPopup] = await Promise.all([
        // await  this.page.waitForEvent('popup')
        // await   this.page.getByRole('button', { name: 'Choose' }).click()
        
        // ])
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.getByRole('button', { name: 'Choose' }).click();
        await this.page.waitForTimeout(2000)
      
        const page1 = await page1Promise;
        await page1.getByLabel('Email').fill('foysal');
        await page1.getByRole('button', { name: 'Search' }).click();
        await page1.getByRole('row', { name: 'Select foysal.rabbi@gmail.com Foysal Rabbi' }).getByRole('button').click();

       }

      async pictureUpload(){
        await this.page.setInputFiles("input[type='file']",
        ["utility/uploadItems/apple.png"]);
          
       }
        //Month-Day-Year

         async openingDate(){
          let date = "8/7/2023"
          await this.page.fill("id=OpenDate", date);
          await this.page.waitForTimeout(3000)
       }

       //Month-Day-Year
  
         async closingDate(){
          let date = "8/15/2023"
          await this.page.fill("id=CloseDate", date);
       }
  
         async published(){
          await this.page.getByLabel('Published').check();
       }
  
         async canUpdateOrderItem(){
          
          await this.page.locator("[id='CanUpdateOrderItem']").check()
       }
  
         async canCheckReportSection(){
          await this.page.locator("#CanCheckReportSection").check()
       }
  
         async displayOrder(){
          
       }
  
         async rebate(){
          
       }
       
         async pageSize(){
          
       }
  
         async allowCustomerSelectSize(){
          
       }

       async saveAndContinueBtn(){
        await this.page.getByRole('button', { name: 'Save and Continue Edit' }).click();
       }

       async verifyTeamStoreCreateMessage(){
        
       }
  

}