<script>
	import Router from 'svelte-spa-router'
	import Layout from "./lib/layout.svelte";
	import Home from "./lib/Home/+page.svelte";
	import About from "./lib/About/+page.svelte";
	import Test from "./lib/Test/+page.svelte";
	export let name;

	let routes = {
		'/': Home,
		'/about': About,
		'/test': Test,
		'*': Home
	}
</script>

<Router {routes}>
	{#each $routes as route (route.path)}
		<Layout>
			<svelte:component this={route.component} {name} />
		</Layout>
	{/each}
</Router>