<script>
	import Router from 'svelte-spa-router'
	import Home from './routes/Home.svelte'
	import About from './routes/About.svelte'
	import Test from './routes/Test.svelte'

	let routes = {
		'/': Home,
		'/about': About,
		'/test': Test,
		'*': Home
	}
</script>

<Router {routes} />