<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div>
	<Header />

	<main>
		<div class="content-wrapper">
			{@render children()}
		</div>
	</main>

	<footer></footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
