import { Page, expect } from "@playwright/test";
export default class SubmitForProductionPage{

    page: Page

    private elements = {
        name: "//*[@id = 'SearchTeamStoreName']",
        searchBtn: "//button[@id='search-teamstores']",
        editBtn: "//a[contains(text(),'Edit')]",
        notSentForProductionDropdown: "//*[@id='SearchTeamStoreNopOrderStatusId']",
        notSentForProductionSearchBtn: "//*[@id='search-nop-orders']",
        checkboxClick:"//table[@id='team-store-nop-orders-grid']/tbody[1]/tr[1]/td[1]/input[1]", 
        createBtn: "//button[@data-toggle='dropdown']",
        submitPOPUP: " //button[@id='SubmitForProduction']",
        productionAll: "//button[@id='create-production-all']",
        popUPSuccessfulMessage: "(//span[text()='Ok'])[1]"


    }

    constructor(page: Page){
        this.page = page;
    }

    async nameInput(_name: string){
        await this.page.locator(this.elements.name).fill(_name);
    }

    async clickSearchBtn(){
        await this.page.locator(this.elements.searchBtn).click();

    }

    async clickEditBtn(){
        await this.page.locator(this.elements.editBtn).click();
    }

    async sentForProductionDropdownSelect(){
        await this.page.locator(this.elements.notSentForProductionDropdown).selectOption('5');

    }

    async notsentForProductionDropdownSelect(){
        await this.page.locator(this.elements.notSentForProductionDropdown).selectOption('10');

    }
    async searchBtnClickSendforProduction(){
        await this.page.locator(this.elements.notSentForProductionSearchBtn).click();
    }

    async selectCheckbox(){
        await this.page.locator("(//input[@name='teamstorenopordercheckbox'])[1]").check();
       // await this.page.locator("(//input[@name='teamstorenopordercheckbox'])[2]").check();
    }


    async selectOrderId(){
        await this.page.locator("(//input[@name='teamstorenopordercheckbox'])[1]")
    }
    
    async selectAllOrderID(){
       // (//input[@class='mastercheckbox'])[1]
    }
    async CreateButtonClick(){
        await this.page.locator('#teamstore-nop-orders').getByRole('button').nth(2).click();

    }

    async selectedButtonclickFromDropdown(){
        await this.page.locator("//button[@id='create-production-order-selected']").click();

    }

    async submitPopUpBtn(){
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }
    async cancelPopUpBtn(){
        //button[@id='ModalCloseBtn']
    }

    async popUpSuccessfulMSG(){
      await this.page.locator('#CreateProductionOrderSelectedMessage-action-alert').getByText('Ok').click();
    }

}