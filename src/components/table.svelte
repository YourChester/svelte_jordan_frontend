<script lang="ts">
	import Icon from './Icon.svelte';
	import type { TableHeader } from '$lib/types';

	let {
		headers = [],
		rows = [],
		rowPrivateKey = 'id',
	}: { headers: TableHeader[]; rows?: any[]; rowPrivateKey?: string } = $props();
</script>

<div class="table__container">
	<table class="table">
		<thead class="table__thead">
			<tr class="table__thead__tr">
				{#each headers as head (head.key)}
					<th class="table__th">{head.name}</th>
				{/each}
			</tr>
		</thead>
		<tbody class="table__tbody">
			{#if rows.length === 0}
				<tr class="table__tr--empty">
					<td class="table__td--empty" colspan={headers.length}>
						<span>
							<Icon name="warning"></Icon>
							Пока данных нет
						</span>
					</td>
				</tr>
			{:else}
				{#each rows as row (row[rowPrivateKey])}
					<tr class="table__tbody__tr">
						{#each headers as head (head.key + row[rowPrivateKey])}
							<td class="table__td">{row[head.key]}</td>
						{/each}
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
	<div class="table__footer"></div>
</div>

<style>
	.table__container {
		display: grid;
		grid-template-rows: 1fr max-content;
		width: 100%;
		height: 100%;
	}

	.table {
		width: 100%;
		height: 100%;
		border-spacing: 0;
		border-collapse: collapse;
	}

	.table__th {
		padding: 12px;
		font-size: 14px;
		font-weight: 400;
		line-height: 14px;
		text-align: left;
		background-color: var(--table-th-bg);
		border-right: 1px solid var(--table-th-border);
	}

	.table__th:first-child {
		border-top-left-radius: 8px;
	}

	.table__th:last-child {
		border-top-right-radius: 8px;
		border: none;
	}

	.table__td--empty {
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		line-height: 24px;
	}

	.table__td--empty span {
		display: flex;
		width: 100%;
		height: 100%;
		gap: 8px;
		justify-content: center;
		align-items: center;
	}

	.table__footer {
		height: 40px;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		background-color: var(--table-footer-bg);
	}
</style>
