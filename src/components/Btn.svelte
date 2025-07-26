<script lang="ts">
	let { to, text }: { to: string; text: string } = $props();
</script>

<a class="btn" href={to}>
	{text}
</a>

<style>
	.btn {
		display: inline-block;
		padding: 12px 18px;
		border-radius: 4px;
		color: var(--btn-colol);
		background-color: var(--btn-bg);
		text-decoration: none;
	}
</style>
