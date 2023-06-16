<div class="author">
	<div class="author-content">
		<div class="author-avatar">
			<img
				src="https://via.placeholder.com/800x600.png?text=Avatar"
				alt="avatar"
				class="w-full block max-w-full"
			/>
		</div>

		<div>
			<div class="p-10">
				<h2 class="m-0 text-3xl">Nilambar Sharma</h2>
				<span class="m-0 text-base text-sky-600">Software Developer</span>
			</div>
		</div>
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
</style>
