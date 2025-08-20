<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/images/favicon.svg';
</script>

<header>
	<div class="navbar bg-base-100 shadow-sm mx-auto mt-2 w-[94%]">
		<div class="flex-none">
			<button class="btn btn-square btn-ghost">
        <img src={logo} alt="LqxcLqxc Logo" class="corner" />
			</button>
		</div>
		<div class="flex-1">
			<a href="/" class="btn btn-ghost text-xl">Team Roller</a>
		</div>
		<div class="flex-none">
			<button class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-5 w-5 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
					></path>
				</svg>
			</button>
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
</style>
