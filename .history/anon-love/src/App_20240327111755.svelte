<script>
	export let name = 'あのちゃん';
	import page from 'page';
	let currentRoute = '';
		page('*', (ctx) => currentRoute = ctx.path);
		page({
  hashbang: true
});

$: console.log(currentRoute);
</script>
{#if currentRoute === '#/'}
  <p>Home</p>
{:else if currentRoute === '#/about'}
  <p>About</p>
{:else}
  <p>Not Found</p>
{/if}
<main>
	<h1>{name}~Love!</h1>
	<a href="#/">Home</a>
	<a href="#/about">About</a>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>