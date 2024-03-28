<script>
	import { Router, Route, Link } from "svelte-routing";
	import Layout from "./layout.svelte";
	export let name;
</script>

<Router>
	<Layout>
		<main>
			<h1>About Page of {name}</h1>
		</main>
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