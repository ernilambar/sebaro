<script>
	import Social from './Social.svelte';
</script>

<div class="author">
	<div class="author-content">
		<div class="author-avatar">
			<img src="./images/avatar.jpeg" alt="avatar" />
		</div>
	</div>
	<div class="author-details">
		<h2 class="author-name">Nilambar Sharma</h2>
		<span class="author-position">Software Developer</span>
		<Social />
	</div>
	<div class="author-footer">
		<ul class="author-footer-links">
			<li><a href="/">Home</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</div>
</div>

<style lang="scss">
	.author {
		position: relative;
		z-index: 10;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 4px;
		background-color: #fff;
		text-align: center;
		box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
	}

	.author-avatar {
		clip-path: polygon(100% 0, 100% 88%, 50% 100%, 0 88%, 0 0);
		border-radius: 4px;
		overflow: hidden;

		img {
			display: block;
			width: 100%;
			max-width: 100%;
		}
	}

	.author-details {
		padding-block: 32px;
	}

	.author-name,
	.author-position {
		margin: 0;
		font-weight: 400;
	}

	.author-name {
		font-size: 34px;
	}

	.author-position {
		margin-block-start: 4px;
		font-size: 16px;
		color: #2a65e6;
		border: 1px solid transparent;
	}

	.author-footer-links {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		padding: 0;
		margin: 0;
		list-style: none;
		border-top: 1px solid #e3e3e3;
		font-size: 14px;
		font-weight: 500;

		li {
			text-transform: uppercase;

			&:first-child {
				border-right: 1px solid #e3e3e3;
			}
		}

		a {
			display: block;
			padding: 20px;
		}
	}
</style>
