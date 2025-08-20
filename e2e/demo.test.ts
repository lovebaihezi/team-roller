import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
		expect(page.getByAltText('LqxcLqxc Logo').isVisible())
		expect(page.getByText('Team Roller').isVisible())
});
