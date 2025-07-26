<script lang="ts">
	let props: { name: string; size?: string } = $props();
</script>

<i class="msr" style:font-size={props.size}>
	{props.name}
</i>

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
