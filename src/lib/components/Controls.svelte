<script>
	import { createEventDispatcher } from 'svelte';

	let inputVal = '';
	const dispatch = createEventDispatcher();
	function onAdd() {
		dispatch('add', inputVal);
		inputVal = '';
	}
</script>

<div class="controls">
	<input bind:value={inputVal} class="controls__input" type="text" />
	<button on:click={onAdd} class="controls__button">Add</button>
</div>

<style>
	.controls {
		display: grid;
		grid-template-columns: 70% 30%;
	}
	.controls__input {
		border: none;
		padding: 10px 15px;
		border-radius: 10px 0 0 10px;
	}

	.controls__input:focus-visible {
		outline: 0;
	}
	.controls__button {
		border: none;
		background: yellow;
		border-radius: 0 10px 10px 0;
	}
	.controls__button:hover {
		cursor: pointer;
	}
</style>
