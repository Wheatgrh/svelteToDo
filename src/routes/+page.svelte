<script lang="ts">
	import Controls from '$lib/components/Controls.svelte';
	import Field from '$lib/components/Field.svelte';
	import { text } from '@sveltejs/kit';
	import type { ItemData } from '../lib/types';
	let items: Array<ItemData> = [
		{
			id: 1,
			text: 'Some ToDo',
			isDone: false
		},
		{
			id: 2,
			text: 'Some ToDo',
			isDone: true
		}
	];

	function onAdd(event: CustomEvent) {
		console.log(event.detail);
		const newItem: ItemData = {
			id: 3,
			text: event.detail,
			isDone: false
		};
		items.push(newItem);
		items = items;
	}
</script>

<div class="main">
	<div class="app">
		<Controls on:add={onAdd} />
		<Field {items} />
	</div>
</div>

<style>
	.main {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.app {
		width: 600px;
		height: 800px;
		background: #e6e6e6;
		padding: 20px;
		border-radius: 15px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
