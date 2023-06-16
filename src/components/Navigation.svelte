<script>
	import Fa from 'svelte-fa';
	import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { page } from '$app/stores';
	let path;

	$: path = $page.url.pathname;
</script>

<nav class="navigation">
	<ul>
		<li>
			<a href="/" class={path === '/' ? 'active' : ''}
				><Fa icon={faHome} />
				<span>Home</span>
			</a>
		</li>
		<li>
			<a href="/contact" class={path === '/contact' ? 'active' : ''}
				><Fa icon={faEnvelope} /><span>Contact</span></a
			>
		</li>
	</ul>
</nav>

<style lang="scss">
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
