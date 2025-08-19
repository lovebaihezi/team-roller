<script lang="ts">
	import { onMount } from 'svelte';

	let playerName = $state('');
	let players = $state<string[]>([]);
	let selectedGame = $state('l4d2');
	let showModal = $state(false);
	let team1 = $state<string[]>([]);
	let team2 = $state<string[]>([]);

	function addPlayer() {
		if (playerName.trim() !== '' && players.length < 8) {
			players = [...players, playerName.trim()];
			playerName = '';
		}
	}

	function removePlayer(index: number) {
		players = players.filter((_, i) => i !== index);
	}

	function rollTeams() {
		if (players.length < 8) return;

		// Shuffle players
		const shuffled = [...players].sort(() => Math.random() - 0.5);

		// Split into teams
		team1 = shuffled.slice(0, 4);
		team2 = shuffled.slice(4, 8);

		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}

	function handleKeyPress(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			addPlayer();
		}
	}

	function handleModalClick(e: Event) {
		// Close modal when clicking on the overlay (but not the content)
		if (e.target !== e.currentTarget) return;
		closeModal();
	}

	onMount(() => {
		// Focus the input when the component mounts
		const input = document.querySelector('input');
		if (input) {
			input.focus();
		}
	});
</script>

<div class="team-roller-container flex h-full">
	<!-- Game Selection Sidebar -->
	<aside class="game-sidebar bg-base-200 p-4 rounded-lg w-48 mr-4">
		<h2 class="text-xl font-bold mb-4">Games</h2>
		<ul class="menu">
			<li>
				<button
					class="btn btn-block justify-start {selectedGame === 'l4d2'
						? 'btn-primary'
						: 'btn-ghost'}"
					onclick={() => (selectedGame = 'l4d2')}
					role="tab"
					aria-selected={selectedGame === 'l4d2'}
				>
					L4D2
				</button>
			</li>
		</ul>
	</aside>

	<!-- Main Content -->
	<main class="main-content flex-1 flex flex-col items-center justify-center">
		<div class="input-section w-full max-w-md text-center">
			<h1 class="text-3xl font-bold mb-2">Team Roller</h1>
			<p class="instructions mb-4 text-base-content/70">
				Add 8 player names to roll teams for L4D2 (4 survivors vs 4 zombies)
			</p>

			<div class="player-input-container flex gap-2 mb-4">
				<input
					type="text"
					placeholder="Enter player name"
					bind:value={playerName}
					onkeydown={handleKeyPress}
					class="player-input input input-bordered flex-1"
				/>
				<button
					class="add-button btn btn-primary"
					onclick={addPlayer}
					disabled={players.length >= 8}
					type="button"
				>
					Add
				</button>
			</div>

			<div class="players-list flex flex-wrap gap-2 justify-center min-h-[100px] mb-6">
				{#each players as player, index (player)}
					<div class="badge badge-primary gap-2">
						<span>{player}</span>
						<button
							class="btn btn-xs btn-circle btn-ghost"
							onclick={() => removePlayer(index)}
							type="button"
							aria-label="Remove player"
						>
							×
						</button>
					</div>
				{/each}
			</div>

			<button
				class="roll-button btn btn-accent btn-lg"
				onclick={rollTeams}
				disabled={players.length < 8}
				type="button"
			>
				Roll Teams
			</button>
		</div>
	</main>
</div>

<!-- Modal for Results -->
{#if showModal}
	<div
		class="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
		onclick={handleModalClick}
		onkeydown={(e) => {
			if (e.key === 'Escape') closeModal();
		}}
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		tabindex="-1"
	>
		<div
			class="modal-content bg-base-100 p-6 rounded-lg max-w-md w-full text-center"
			role="document"
		>
			<h2 id="modal-title" class="text-2xl font-bold mb-4">Versus Teams</h2>
			<div class="teams-container flex gap-8 justify-center">
				<div class="team bg-primary text-primary-content p-4 rounded-lg">
					<h3 class="text-xl font-bold mb-2">Survivors</h3>
					<ul class="text-left">
						{#each team1 as player (player)}
							<li class="py-1 border-b border-primary-content/20">{player}</li>
						{/each}
					</ul>
				</div>

				<div class="team bg-secondary text-secondary-content p-4 rounded-lg">
					<h3 class="text-xl font-bold mb-2">Zombies</h3>
					<ul class="text-left">
						{#each team2 as player (player)}
							<li class="py-1 border-b border-secondary-content/20">{player}</li>
						{/each}
					</ul>
				</div>
			</div>

			<button class="btn btn-secondary mt-6" onclick={closeModal} type="button"> Close </button>
		</div>
	</div>
{/if}
