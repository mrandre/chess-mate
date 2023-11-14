import { test, expect } from '@playwright/test';

test('should have header', async ({ page }) => {
  page.goto('http://localhost:5173/');
  await expect(page.getByText('Your Turn')).toBeVisible();
});

test('should move piece', async({ page }) => {
  page.goto('http://localhost:5173/');
  const piece = page.getByTestId('wP-d2');
  await expect(piece).toBeVisible();
  await page.locator('[data-testid=wP-d2]').hover();
  await page.mouse.down();
  await page.locator('[data-squareid="d4"]').hover();
  await page.mouse.up();
  await expect(page.locator('[data-testid=wP-d4]')).toBeVisible();
  await expect(page.getByText('Thinking...')).toBeVisible();
});
test('should prevent illegal moves', async ({ page }) => {
  page.goto('http://localhost:5173/');
  const piece = page.getByTestId('wP-d2');
  await expect(piece).toBeVisible();
  await page.locator('[data-testid=wP-d2]').hover();
  await page.mouse.down();
  await page.locator('[data-squareid="d5"]').hover();
  await page.mouse.up();
  await expect(page.locator('[data-testid=wP-d4]')).toHaveCount(0);
  await expect(page.getByText('Your Turn')).toBeVisible();
});