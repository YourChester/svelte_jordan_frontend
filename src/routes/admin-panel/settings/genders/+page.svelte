<script lang="ts">
	import Table from '$components/table.svelte';
	import Btn from '$components/Btn.svelte';
	import { genderTableHeader } from '$lib/settings';

	let { data } = $props();
</script>

<div class="flex justify-end p-y-10">
	<Btn to="genders/create" text="Создать"></Btn>
</div>
<Table headers={genderTableHeader} rows={data.data}></Table>
