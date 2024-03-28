<script>
	import { Router, Route, Link } from "svelte-routing";
	import Layout from "./lib/layout.svelte";
	import Home from "./lib/Home.svelte";
	import About from "./lib/About.svelte";
	export let name;
</script>

<Router>
	<Layout>
		<main>
			<h1>{name}~Love!</h1>

			<Route path="/" component={Home} />
			<Route path="about" component={About} />
	</Layout>
</Router>

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