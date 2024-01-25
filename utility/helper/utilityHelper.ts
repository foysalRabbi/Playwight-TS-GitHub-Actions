
import { Page } from "@playwright/test";

export default class DifferentUtilityHelper{

    constructor(private page: Page){  
        this.page = page;
      }


    async goto(url: string){
        await this.page.goto(url,{
            waitUntil: "domcontentloaded"
        });
    }

    //Using Promise.all in this way ensures that both actions are executed concurrently.
    async navigateTo(link: string){
        await Promise.all([
            this.page.click(link),
            this.page.waitForNavigation({
                waitUntil: 'networkidle'
            })
        ])
    }


    async waitAndClick(locator: string){
        const el = this.page.locator(locator);
        await el.waitFor({
            state: "visible"

        });
        
        await el.click();
    }

    async scrollInToView(locatorName: string){
        let el = this. page.locator(locatorName);
        await el.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(3000);
    }


}