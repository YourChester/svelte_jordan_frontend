<script lang="ts">
	let { name, size = '24px' } = $props();
</script>

<i class="msr" style:font-size={size}>{name}</i>

<style>
	.msr {
		font-family: 'Material Symbols Rounded';
		font-weight: normal;
		font-style: normal;
		display: inline-block;
		line-height: 1;
		text-transform: none;
		letter-spacing: normal;
		word-wrap: normal;
		white-space: nowrap;
		direction: ltr;
		color: var(--icon-color);
	}
</style>
