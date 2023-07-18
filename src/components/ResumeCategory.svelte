<script>
	import Fa from 'svelte-fa';
	import ResumeCategoryItem from './ResumeCategoryItem.svelte';
	export let heading;
	export let headingIcon;
	export let items;
</script>

<div class="resume-category">
	<h3 class="resume-category-heading">
		<Fa icon={headingIcon} style="margin-right:10px;color:#2a65e6;" />{heading}
	</h3>

	{#each items as item}
		<ResumeCategoryItem {item} />
	{/each}
</div>

<style lang="scss">
	.resume-category {
		background-color: transparent;

		.resume-category-heading {
			padding-block: 0 16px;
			margin-block: 0 32px;
			font-size: 20px;
			font-weight: 600;
			border-bottom: 1px solid #e3e3e3;
		}
	}
</style>
