<script>
	import { Router, Route, Link } from "svelte-routing";
	import Layout from "./lib/layout.svelte";
	import Home from "./lib/Home/+page.svelte";
	import About from "./lib/About/+page.svelte";
	import Test from "./lib/Test/+page.svelte";
	export let name;
</script>

<Router hash={true}>
    <Layout>
        <Route path="/" let:params>
            <Home {name} />
        </Route>
		<Route path="#/about" let:params>
            <About {name} />
        </Route>
		<Route path="#/test" let:params>
			<Test/>
		</Route>
	</Layout>
</Router>