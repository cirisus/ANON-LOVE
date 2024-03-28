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
	<Layout>
		<svelte:component this={$routes} {name} />
	</Layout>
</Router>