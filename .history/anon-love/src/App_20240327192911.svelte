<script>
	import { Router, Route, Link } from "svelte-routing";
	import Layout from "./layout.svelte";
	export let name;
</script>

<Router>
	<Layout>
		<main>
			<h1>{name}~Love!</h1>
			<Link to="/">Home</Link>
			<Link to="about">About</Link>

			<Route path="/" let:params>
				<p>Home</p>
			</Route>
			<Route path="about" let:params>
				<p>About</p>
			</Route>
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