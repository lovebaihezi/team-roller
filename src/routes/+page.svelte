<script lang="ts">
	import GameCard from './GameCard.svelte';
  import l4d2 from '$lib/images/l4d2.jpg';
</script>

<div class="container mx-auto p-8">
	<h1 class="text-3xl font-bold mb-8">Available Games</h1>

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
		<GameCard
			gameName="Left 4 Dead 2"
			gameImage={l4d2}
			availableUsers={8}
		/>
	</div>
</div>
