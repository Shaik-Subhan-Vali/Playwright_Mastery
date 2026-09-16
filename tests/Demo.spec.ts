import { test, expect } from '@playwright/test';

test.describe('Todo App CI Validation', () => {
  test('Create and complete a task', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    const newTodo = page.getByPlaceholder('What needs to be done?');
    await newTodo.fill('Verify Jenkins pipeline integration');
    await newTodo.press('Enter');

    const todoItem = page.getByTestId('todo-title');
    await expect(todoItem).toHaveText('Verify Jenkins pipeline integration');

    await page.waitForTimeout(5000);

    // Toggle completion
    await page.locator('.toggle').first().check();
    await expect(page.locator('li.completed')).toBeVisible();
  });
});