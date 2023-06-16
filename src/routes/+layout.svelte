<script>
	import Author from '../components/Author.svelte';
	import Navigation from '../components/Navigation.svelte';
	import '../app.css';
</script>

<div class="app">
	<div class="container">
		<div class="container-inner">
			<header class="site-header">
				<Navigation />
			</header>

			<Author />

			<div class="content">
				<div class="content-wrap">
					<slot />
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.app {
		height: 100dvh;
	}

	@media (min-width: 1200px) {
		.app {
			display: grid;
			place-content: center;
		}
	}

	.container {
		width: 100%;
		padding-inline: 20px;
		margin-inline: auto;

		@media (min-width: 768px) {
			max-width: 720px;
			padding-inline: 40px;
		}

		@media (min-width: 1200px) {
			max-width: 1280px;
		}
	}

	.container-inner {
		display: block;

		@media (min-width: 768px) {
			display: grid;
			grid-template-columns: 80px 1fr;
			margin-block-start: 20px;
		}

		@media (min-width: 1200px) {
			grid-template-columns: 80px 1.2fr 2fr;
			margin-block-start: 0;
			height: 84dvh;
			max-height: 700px;
		}
	}
	.site-header {
		height: auto;

		@media (min-width: 768px) {
			width: 72px;
			height: unset;
			margin-right: 8px;
		}
	}
	.content {
		grid-column: span 2;
		position: relative;
		padding-block: 24px;
		margin-block: 16px;
		margin-inline-start: 0;
		border-radius: 4px;
		background-color: #fff;
		color: #434343;
		overflow: auto;

		@media (min-width: 768px) {
			margin-inline-start: 80px;
		}

		@media (min-width: 1200px) {
			grid-column: unset;
			margin-inline-start: unset;
			border-radius: 0 4px 4px 0;
		}
	}

	.content-wrap {
		height: 100%;
		padding-inline: 24px;
		overflow: auto;
	}
</style>
