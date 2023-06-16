<script>
	export let heading, heading2;
</script>

<div class="box">
	<h2 class="box-heading"><span>{heading}</span>{heading2}</h2>
	<div class="box-content">
		<slot />
	</div>
</div>

<style lang="scss">
	.box {
		.box-heading {
			padding-block: 0 16px;
			margin-block: 0 32px;
			font-style: 20px;
			font-weight: 600;
			border-bottom: 1px solid #e3e3e3;

			span {
				color: #2a65e6;
				margin-right: 5px;
			}
		}

		.box-content {
			font-size: 16px;
		}
	}
</style>
