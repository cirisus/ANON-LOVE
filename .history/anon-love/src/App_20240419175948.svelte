<script>
	import { onMount } from 'svelte';
	import Router, { location } from 'svelte-spa-router'
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

	let key = 0;

	onMount(() => {
		const unsubscribe = location.subscribe(value => {
			key += 1;
		});

		return unsubscribe;
	});
</script>

<Layout>
	<Router {routes} let:component={Component} key={key}>
		<svelte:component this={Component} {name} />
	</Router>
</Layout>

<style lang="scss">
	@import './global.css';
</style>