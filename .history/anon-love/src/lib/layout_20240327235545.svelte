<script>
    import { Link } from "svelte-routing";
</script>

<header>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Test</Link>
    </nav>
</header>

<main>
    <slot></slot>
</main>

<footer>
    <p>©2024 by ANON-LOVE</p>
</footer>

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