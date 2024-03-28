<script>
	import { Router, Route, Link } from "svelte-routing";
	import Layout from "./layout.svelte";
	export let name;
</script>

<Router>
		<main>
			<h1>{name}~Love!</h1>
</Router>