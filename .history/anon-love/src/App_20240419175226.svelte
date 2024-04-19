<script>
	import { onMount } from 'svelte';
	import Router from 'svelte-spa-router'
	import Layout from "./lib/layout.svelte";
	import Home from "./lib/Home/+page.svelte";
	import About from "./lib/About/+page.svelte";
	import Test from "./lib/Test/+page.svelte";
	import Loader from '../Components/Loader/+page.svelte';
	export let name = 'ANON';

	let routes = {
		'/': Home,
		'/about': About,
		'/test': Test,
		'*': Home
	}

	let loading = true;

	function handleRouteChange() {
		loading = false;
	}
</script>

<Layout>
	{#if loading}
		<Loader />
	{/if}
	<Router {routes} let:component={Component} on:routeLoaded={handleRouteChange}>
		<svelte:component this={Component} {name} />
	</Router>
</Layout>

<style lang="scss">
	@import './global.css';
</style>