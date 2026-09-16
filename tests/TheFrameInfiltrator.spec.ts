import { test, expect } from "@playwright/test";

test("Nested iFrames in Playwright", async ({ page }) => {
    await page.goto("https://letcode.in/frame");

    // 1. Define the parent frame locator
    const parentFrame = page.frameLocator('#firstFr');

    // 2. Interact normally. Playwright automatically handles the context switch.
    await parentFrame.locator('input[name="fname"]').fill("Subhan");
    await parentFrame.locator('input[name="lname"]').fill("Vali");

    // 3. CHAIN the child frame locator directly off the parent frame
    const childFrame = parentFrame.frameLocator('iframe[src="innerframe"]');

    // 4. Interact with the inner frame
    await childFrame.locator('input[name="email"]').fill("test@example.com");
});