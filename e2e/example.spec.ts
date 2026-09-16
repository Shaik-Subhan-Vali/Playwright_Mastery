import {test, expect} from '@playwright/test';
test("Example", async({page})=>{

  await page.goto("url here");
  await page.getByRole('button', { name: /login/i }).click();
  await page.getByRole('checkbox', { name: /remember me/i, checked: true}).click();

})