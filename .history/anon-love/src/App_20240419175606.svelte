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

	onMount(() => {
		const unsubscribe = location.subscribe(value => {
			console.log('Route changed to', value);
		});

		return unsubscribe;  // 在组件卸载时取消订阅
	});
</script>

<Layout>
	<Router {routes} let:component={Component}>
		<svelte:component this={Component} {name} />
	</Router>
</Layout>

<style lang="scss">
	@import './global.css';
</style>