<script lang="ts">
	import Icon from './Icon.svelte';
	import type { TableHeader, TablePagination } from '$lib/types';

	let {
		headers = [],
		rows = [],
		rowPrivateKey = 'id',
		pagination = {
			page: 1,
			perPage: 10,
			totalCount: 0,
			totalPages: 1,
		},
	}: {
		headers: TableHeader[];
		rows?: any[];
		rowPrivateKey?: string;
		pagination?: TablePagination;
	} = $props();
</script>

{#snippet text(row: any, key: string)}
	<td class="table__td">{row[key]}</td>
{/snippet}

{#snippet dateTime(row: any, key: string)}
	<td class="table__td">
		{new Date(row[key])
			.toLocaleString('ru-RU', {
				day: '2-digit',
				month: '2-digit',
				year: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
			})
			.replace(', ', ' ')}
	</td>
{/snippet}

<div class="table__container">
	<div class="table__wrap">
		<table class="table" class:table--empty={rows.length === 0}>
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
								{#if head.type === 'string'}
									{@render text(row, head.key)}
								{:else if head.type === 'date-time'}
									{@render dateTime(row, head.key)}
								{/if}
							{/each}
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
	<div class="table__footer">
		<div class="table__pagination">
			{#if pagination.page > 1}
				<a href="/admin-panel/settings/genders?page={pagination.page - 1}">
					<Icon size="28px" name="chevron_left"></Icon>
				</a>
			{/if}
			<a
				class="table__pagination__page table__pagination__page--current"
				href="/admin-panel/settings/genders?page={pagination.page}"
			>
				{pagination.page}
			</a>
			{#if pagination.totalPages > pagination.page}
				<a href="/admin-panel/settings/genders?page={pagination.page + 1}">
					<Icon size="28px" name="chevron_right"></Icon>
				</a>
			{/if}
		</div>
	</div>
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
		max-height: 100%;
		border-spacing: 0;
		border-collapse: collapse;
	}

	.table--empty {
		height: 100%;
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

	.table__td {
		height: 38px;
		font-size: 14px;
		padding: 10px 12px;
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
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 60px;
		padding: 0 24px;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		background-color: var(--table-footer-bg);
	}

	.table__pagination {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.table__pagination__page {
		display: block;
		text-decoration: none;
		color: var(--table-page-color);
		padding: 8px 10px;
		border-radius: 10px;
	}

	.table__pagination__page--current {
		background-color: var(--table-page-curent-bg);
		color: var(--table-page-curent-color);
	}
</style>
