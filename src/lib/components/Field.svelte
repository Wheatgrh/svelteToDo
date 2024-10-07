<script lang="ts">
	import type { ItemData } from '../types';
	import Item from './Item.svelte';
	export let items: Array<ItemData>;
</script>

<div class="field">
	{#each items as item}
		<Item itemData={item} />
	{/each}
</div>

<style>
	.field {
		background: white;
		padding: 20px;
		flex-grow: 1;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		overflow-y: auto;
	}
</style>
