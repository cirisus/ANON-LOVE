<script>
	import Router from 'svelte-spa-router'
	import Layout from "./lib/layout.svelte";
	import Home from "./lib/Home/+page.svelte";
	import About from "./lib/About/+page.svelte";
	import Test from "./lib/Test/+page.svelte";
	export let name = 'ANON';

	let routes = {
		'/': Home,
		'/about': About,
		'/test': Test,
		'*': Home
	}
</script>

<Layout>
	<Router {routes} let:component={Component}>
		<svelte:component this={Component} {name} />
	</Router>
</Layout>