<script>
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import Modal from './Components/Popup/+page.svelte';
	import markdown from '../../../docs/RESOURCES.md';

	let content = '';
	let title = ' CONTENT USAGE SPECIFICATIONS';
	let buttonText = `I'VE READ IT`;

	onMount(() => {
		content = marked(markdown);
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