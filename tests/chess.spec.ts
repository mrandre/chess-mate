import { test, expect } from '@playwright/test';

test('should have header', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByText('Your Turn')).toBeVisible();
});