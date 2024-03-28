<script>
	import Link from "svelte-spa-router/Link.svelte";
</script>

<header>
	<nav>
		<Link href="/">Home</Link>
		<Link href="/about">About</Link>
		<Link href="/test">Test</Link>
	</nav>
</header>

<main>
    <slot></slot>
</main>

<footer>
    <span class="footer">©2024 by ANON-LOVE</span>
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	span.footer {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1rem;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>