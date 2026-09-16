import { expect, test } from "@playwright/test";
const pageurl = "https://letcode.in/shadow" ;

test.describe("shadow dom",()=>{

    test("test 1", async ({page})=> {
        await page.goto(pageurl);
        await page.locator("#fname").fill("My name here");

    })
})