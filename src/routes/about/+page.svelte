<svelte:head>
	<title>关于</title>
	<meta name="description" content="关于此团队分配器应用" />
</svelte:head>

<div class="text-column">
	<h1>关于此应用</h1>

	<p>
		这是一个基于 <a href="https://svelte.dev/docs/kit">SvelteKit</a> 的应用，具有自定义的团队分配功能。
	</p>

	<h2>团队分配器</h2>
	<p>
		<a href="/">团队分配器</a> 页面允许您为各种游戏随机分配玩家到团队。 目前支持 L4D2 游戏（4 名幸存者
		vs 4 名僵尸）。
	</p>

	<h3>使用方法</h3>
	<ul>
		<li>使用输入框添加玩家名称</li>
		<li>从左侧边栏选择游戏</li>
		<li>当有足够的玩家时，点击"分配团队"按钮</li>
		<li>查看弹出窗口中的团队分配结果</li>
	</ul>

	<p>
		<a href="/sverdle">Sverdle</a> 页面展示了 SvelteKit 的数据加载和表单处理功能。 尝试在禁用 JavaScript
		的情况下使用它！
	</p>
</div>

<style>
	.text-column {
		display: flex;
		flex-direction: column;
		max-width: 48rem;
		flex: 0.6;
		margin: 0 auto;
	}

	ul {
		text-align: left;
		margin: 1rem 0;
		padding-left: 1.5rem;
	}
</style>
