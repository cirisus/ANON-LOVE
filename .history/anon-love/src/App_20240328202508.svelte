<script>
	import { Router, Route, Link } from "svelte-routing";
	import Layout from "./lib/layout.svelte";
	import Home from "./lib/Home/+page.svelte";
	import About from "./lib/About/+page.svelte";
	import Test from "./lib/Test/+page.svelte";
	export let name;
</script>

<Router basepath="/">
	<Layout>
		<Route path="about" let:params>
			<p>About</p>
			<About {name} />
		</Route>
		<Route path="test" let:params>
			<Test/>
		</Route>
		<Route path="*" let:params>
			<p>Home</p>
			<Home {name} />
		</Route>
	</Layout>
</Router>