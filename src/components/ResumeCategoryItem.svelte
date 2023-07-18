<script>
	import classnames from 'classnames';
	export let item;
	const { title, duration, company, description, active } = item;
</script>

<div class="resume-category-item">
	<div
		class={classnames('resume-category-item-duration', {
			active
		})}
	>
		{duration}
	</div>
	<div class="resume-category-item-title">{title}</div>
	<div class="resume-category-item-company">{company}</div>
	{#if description}
		<div class="resume-category-item-description">
			<p>{description}</p>
		</div>
	{/if}
</div>

<style lang="scss">
	.resume-category-item {
		padding-bottom: 15px;
		margin-bottom: 15px;

		.resume-category-item-duration {
			color: #999;
			font-size: 13px;
			border: 1px solid #999;
			border-radius: 4px;
			display: inline-block;
			padding: 1px 5px;

			&.active {
				color: #2a65e6;
				border: 1px solid #2a65e6;
			}
		}

		.resume-category-item-title {
			font-size: 17px;
			font-weight: 600;
			margin-top: 5px;
		}
		.resume-category-item-company {
			color: #999999;
		}
		.resume-category-item-description {
			margin-top: 15px;

			p {
				padding-top: 0;
				margin-top: 0;
				color: #646464;
			}
		}
	}
</style>
