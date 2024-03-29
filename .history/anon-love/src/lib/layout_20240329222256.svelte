<script>
	import Link from "svelte-spa-router";
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/test">Test</a>
	</nav>
</header>

<main>
    <slot></slot>
</main>

<footer>
    <span class="footer">©2024 by ANON-LOVE</span>
</footer>