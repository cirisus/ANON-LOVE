<script>
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import { promises as fs } from 'fs';
	import Modal from './Components/Popup/+page.svelte';

	let content = '';
	let title = ' CONTENT USAGE SPECIFICATIONS';
	let buttonText = `I'VE READ IT`;

	onMount(async () => {
		const md = await fs.readFile('/docs/RESOURCES.md', 'utf-8');
		content = marked(md);
	});
</script>

<header>
	<nav>
	</nav>
</header>

<main>
	<slot></slot>
</main>

<footer>
	<span class="footer">©2024 ANON-LOVE|<button on:click={Modal.toggleModal}>CONTENT USAGE SPECIFICATIONS</button></span>
	<Modal {content} {title} {buttonText} />
</footer>