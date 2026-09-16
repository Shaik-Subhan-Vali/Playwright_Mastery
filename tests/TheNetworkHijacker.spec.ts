import { test, expect } from '@playwright/test';

test('Network Hijacker - Block Images in Playwright', async ({ page }) => {
  // 1. Setup the interception BEFORE navigating.
  // We use a regex pattern or wildcard to match image extensions, or check the resource type.
  await page.route('**/*', (route) => {
    const resourceType = route.request().resourceType();
    
    if (resourceType === 'image') {
      // Abort the request entirely
      route.abort('failed'); 
    } else {
      // Allow all other requests (HTML, JS, CSS) to continue normally
      route.continue();
    }
  });

  // 2. Navigate to the page
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');

  // 3. Assert the page title is correct to confirm it loaded
  await expect(page).toHaveTitle(/Wikipedia/);

  // 4. Take a full-page screenshot to visually verify images are blocked
  await page.screenshot({ path: 'playwright-blocked-images.png', fullPage: true });
});