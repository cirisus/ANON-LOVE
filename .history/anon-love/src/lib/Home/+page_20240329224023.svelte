<script lang="js">
	import Loading from "./loading.js";
	import Behavior from "./script.js";
	import Navigator from './Navigator/+page.svelte';

	let links = [//navigator stack
		{ href: '/home', text: 'Home' },
		{ href: '/about', text: 'About' },
	];
</script>

<body>
	<h1>Home page</h1>
	<Navigator {links} />
</body>

<style lang="scss">
	@import './style.scss';
</style>