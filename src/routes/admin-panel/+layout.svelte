<script lang="ts">
	let { children } = $props()
</script>

<div class="admin-layout">
	<header>Панель администратора</header>
	<aside>
		<ul>
			<li>
				<a href="admin-panel/settings/genders">Пол</a>
			</li>
		</ul>
	</aside>
	<div class="admin-layout__page__conteiner">
		<main class="admin-layout__page">
			{@render children()}
		</main>
	</div>
</div>
