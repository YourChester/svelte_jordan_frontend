<script lang="ts">
	import Header from "./components/header.svelte";
	import Aside from "./components/aside.svelte";

	let { children } = $props()
</script>

<div class="admin-layout">
	<Header></Header>
	<Aside></Aside>
	<div class="admin-layout__page__conteiner">
		<main class="admin-layout__page">
			{@render children()}
		</main>
	</div>
</div>

<style>
	.admin-layout {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.admin-layout__page__conteiner {
		padding-top: var(--header-height);
		padding-left: var(--aside-width);
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.admin-layout__page {
		width: 100%;
		height: 100%;
		overflow: hidden;
		padding: 12px;
	}
</style>
