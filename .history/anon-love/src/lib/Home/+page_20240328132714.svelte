<script>
	import { Router, Route, Link } from "svelte-routing";
	export let name;
</script>

<Router>
		<main>
			<h1>{name}~Love!</h1>
</Router>