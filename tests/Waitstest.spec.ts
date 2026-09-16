import { test, expect } from '@playwright/test';

const pageurl = "https://demoqa.com/dynamic-properties";

test.describe("Dynamic Elements", () => {
  
  test("Button visibility and interaction", async ({ page }) => {
    await page.goto(pageurl);
    
    // 1. Define the locator ONCE. 
    // Note: Locators are lazy. It doesn't look for the element until an action is called.
    const dynamicButton = page.getByRole('button', { name: 'Visible After 5 Seconds' });

    // 2. Web-First Assertion. 
    // This automatically waits for the element to be visible AND checks the text in one step.
    await expect(dynamicButton).toHaveText("Visible After 5 Seconds", { timeout: 7000 }); // Wait up to 7 seconds for the text to appear

    // 3. Actionability. 
    // .click() automatically waits for the element to be visible, stable, and enabled before clicking.
    await dynamicButton.click();
  });

});