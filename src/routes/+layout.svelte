<script>
	import Author from '../components/Author.svelte';
	import Fa from 'svelte-fa';
	import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import '../app.css';
</script>

<div class="app">
	<div class="container">
		<div class="container-inner">
			<header class="site-header">
				<nav class="navigation">
					<ul>
						<li>
							<a href="/"
								><Fa icon={faHome} />
								<span>Home</span>
							</a>
						</li>
						<li><a href="/contact"><Fa icon={faEnvelope} /><span>Contact</span></a></li>
					</ul>
				</nav>
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
	.navigation {
		display: inline-block;
		border-radius: 4px;
		background-color: #fff;
		margin-block: 20px;

		@media (min-width: 768px) {
			position: fixed;
			top: 20px;
			width: 72px;
		}

		@media (min-width: 1200px) {
			position: unset;
			top: unset;
			margin-block-start: 16px;
		}

		ul {
			display: flex;
			list-style: none;

			@media (min-width: 768px) {
				display: block;
				padding: 0;
				margin: 0;
			}

			li {
				transition: all 0.25s linear;
				min-width: 72px;

				&:not(:last-child) {
					border-right: 1px solid #e3e3e3;

					@media (min-width: 768px) {
						min-width: unset;
						border-bottom: 1px solid #e3e3e3;
					}
				}
			}

			li a {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 8px;
				padding: 16px 4px;
				font-size: 11px;
				line-height: 1;
				font-weight: 500;
				text-transform: uppercase;
				color: #333333;

				&.active,
				&:hover {
					color: #2a65e6;

					svg path {
						fill: #2a65e6;
					}
				}
			}
		}
	}
</style>
