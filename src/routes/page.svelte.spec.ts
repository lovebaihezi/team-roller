import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('Render one navbar displaying icon and Team Roller', async () => {
		const { getByAltText, getByText } = render(Page);

		expect(getByAltText('LqxcLqxc Logo')).toBeInTheDocument();
		expect(getByText('Team Roller')).toBeInTheDocument();
	});
});
