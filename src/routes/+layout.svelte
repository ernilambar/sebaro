<script>
  import Author from "../components/Author.svelte";
	import '../app.css';
</script>

<div class="bg-body-pattern h-screen">
	<div class="w-full mx-auto my-0 px-5 md:px-10 md:max-w-3xl xl:max-w-7xl">
		<div
			class="block md:grid md:ml-5 md:grid-cols-[80px_1fr] xl:ml-0 xl:grid-cols-[80px_1fr_2fr] xl:h-[84dvh] xl:max-h-[700px]"
		>
			<header>
				<nav>
					<a href="/">Home</a>
					<a href="/contact">Contact</a>
				</nav>
			</header>

			<Author />

			<slot />
		</div>
	</div>
</div>
