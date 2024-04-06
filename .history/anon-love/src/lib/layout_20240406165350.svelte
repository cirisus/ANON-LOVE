<script>
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Modal from './Components/Popup/+page.svelte';
	import markdown from '../../../docs/RESOURCES.md';

	let title = ' CONTENT USAGE SPECIFICATIONS';
	let buttonText = `I'VE READ IT`;

	let content;

	onMount(() => {
		content = markdown;
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
	<Modal {title} {buttonText}>
		<SvelteMarkdown source={content} />
	</Modal>
</footer>