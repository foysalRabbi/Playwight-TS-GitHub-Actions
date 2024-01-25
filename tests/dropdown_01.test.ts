
import { test } from "@playwright/test";

test('country dropdown', async ({page}) =>{
    await page.goto('http://autopract.com/selenium/dropdown4/')
    await page.locator('button.dropdown-toggle').click()
    
    await page
        .locator('ul.dropdown-menu')
        .locator('li') //a[contains(.,'Antarctica')]
        .filter({ hasText:/^Antarctica$/})
        .click();

})

test('ngx dropdown', async ({page}) =>{
    await page.goto('https://www.akveo.com/ngx-admin')
    await page.locator("img[alt='Material Light Theme']").click()

   await page.locator("(//span[text()='Material Light']/following-sibling::nb-icon)[1]").click()
    
    await page
        .locator("//ul[@class ='option-list']")  //ul[@class ='option-list']
        .locator('nb-option')
        .filter({ hasText:/^Dark$/})
        .click();
})