import { Page } from "@playwright/test";

export default class Form{

    page: Page
    firstName = "#firstName"
    lastName = "#lastName"

    constructor(page : Page){
        this.page = page
    }
async navigate(url: string){
   await this.page.goto(url)
}

async enterFirstName(fname: string){
    await this.page.locator(this.firstName).type(fname)

}

async enterLastName(lname: string){
    await this.page.locator(this.lastName).type(lname)
}


}