import { test, expect } from '@playwright/test'

test.describe("Practsing with playwright dev home page", () => {

    test.skip("take a screenshot in main page", async ({ page }) => {
        const url = 'https://playwright.dev/';
        // All page interactions are async, so they must be awaited.
        await page.goto(url);

        // Add an assertion to verify the page loaded correctly.
        await expect(page).toHaveTitle(/Playwright/);

        // Take a screenshot to confirm.
        await page.screenshot({ path: 'playwright-home.png' });
    });

    test.skip("Playing with differemt browser contexts", async ({ browser }) => {

        const contxt1 = await browser.newContext();
        const newpageIncontxt1 = await contxt1.newPage();
        await newpageIncontxt1.goto("https://letcode.in/");
        const admintitle = await newpageIncontxt1.title();
        console.log(admintitle);

        await contxt1.close();

        const contxt2 = await browser.newContext();
        const newpageIncontxt2 = await contxt2.newPage();
        await newpageIncontxt2.goto("https://letcode.in/edit");
        const admintitle2 = await newpageIncontxt2.title();
        console.log(admintitle2);

        await contxt2.close();


    });

    test.skip("Locators - getByRole", ({ page }) => {

        page.goto("https://letcode.in/edit");

        const heading = page.getByRole('heading', { name: 'Account Settings Workspace' });

        //using a regax pattern  -> / slashes just say like quotes before and after
        //i says - flag - insesitive
        const heading1 = page.getByRole('heading', { name: /Settings Workspace/i });

        page.getByRole('button', { name: 'text', exact: false, includeHidden: true, checked: true, selected: true })


//         page.getByRole('role', {
//             name: 'text' | /regex/, // The accessible name pattern
//             exact: false,           // Controls string precision (ignored if regex used)
//             includeHidden: false,   // Set to true to find hidden or display:none elements
//             checked: true | false,  // For checkboxes/radio buttons (aria-checked)
//             disabled: true | false, // For disabled inputs (aria-disabled)
//             expanded: true | false, // For collapsible components (aria-expanded)
//             pressed: true | false,  // For toggle buttons (aria-pressed)
//             selected: true | false, // For list items/tabs (aria-selected)
//             level: 1 | 2 | 3...     // Specifically for the hierarchy of headings (<h1>-<h6>)
// })


        const resetbtn = page.getByRole('button', { name: 'RESET SECURE CREDENTIALS' });

        const savebtn = page.getByRole('button', { name: 'Save Changes Profile' });

        //when visible text is not present go for aria labale value 
        



    })

});

