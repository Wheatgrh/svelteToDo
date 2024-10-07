<script lang="ts">
	import type { ItemData } from '../types';

	export let itemData: ItemData;
</script>

<div class="item" class:item_done={itemData.isDone}>
	<input type="checkbox" />
	<p>{itemData.text}</p>
	<button>Del</button>
</div>

<style>
	.item {
		display: grid;
		grid-template-columns: 30px auto 50px;
		gap: 10px;
		background: red;
	}
	.item_done {
		background: green;
	}
</style>
