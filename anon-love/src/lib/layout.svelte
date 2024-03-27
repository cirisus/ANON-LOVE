<script>
    import { Link } from "svelte-routing";
</script>

<header>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </nav>
</header>

<main>
    <slot></slot>
</main>

<footer>
    <p>©2024 by ANON-LOVE</p>
</footer>