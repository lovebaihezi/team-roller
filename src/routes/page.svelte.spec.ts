import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('Render game cards', async () => {
		const { container } = render(Page);

		// Check that game cards are rendered
		expect(container.querySelector('.game-card')).toBeInTheDocument();
	});
});
