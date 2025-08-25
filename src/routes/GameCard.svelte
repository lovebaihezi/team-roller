<script lang="ts">
	export let gameName: string = '';
	export let gameImage: string = '';
	export let availableUsers: number = 0;
</script>

<div class="game-card relative overflow-hidden rounded-lg shadow-lg">
	<div class="card-image">
		<img
			src={gameImage}
			alt={gameName}
			class="w-[250px] h-[375px] object-cover transition-all duration-300"
		/>
	</div>

	<div
		class="card-overlay absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-4 opacity-0 hover:opacity-80 transition-opacity duration-300"
	>
		<h3 class="text-white text-xl font-bold">{gameName}</h3>
		<p class="text-white text-sm mt-2">
			需要{availableUsers}名玩家
		</p>
		<button class="btn btn-primary mt-4">队伍抽签</button>
	</div>
</div>

<style>
	.game-card {
		width: 250px;
		height: 375px;
	}

	.card-overlay {
		backdrop-filter: blur(2px);
	}
</style>
