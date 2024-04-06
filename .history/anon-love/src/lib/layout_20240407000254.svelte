<script>
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Modal from './Components/Popup/+page.svelte';
	import markdown from '../../../docs/RESOURCES.md';

	let title = ' CONTENT USAGE SPECIFICATIONS';
	let buttonText = `I'VE READ IT`;
	let showModal = false;
	let content = markdown;

	const handleToggleModal = () => {
		showModal = !showModal;
	};
</script>


<header>
	<nav>
	</nav>
</header>

<main>
	<Modal {title} {buttonText} {showModal} {content} on:toggleModal={handleToggleModal} />
	<slot></slot>
</main>
<footer>
	<span class="footer">©2024 ANON-LOVE|<a on:click={handleToggleModal}>CONTENT USAGE SPECIFICATIONS</a></span>
</footer>

<style lang="scss">
footer > span {
	white-space: nowrap;
	> a {
		color: var(--anon-vivid);
		text-decoration: none;
		position: relative;
		font-weight: 400;
		transition: all .3s;
		cursor: pointer;
		user-select: text;
		&:hover {
			color: #333;
			font-weight: 600;
		}
		&::before {
			position: absolute;
			content:"";
			width: 0;
			height: 90%;
			z-index: -1;
			background-color: var(--anon-light);
			box-shadow: 0 0 0 0 transparent;
			transition: all .3s;
		}
		&:hover::before {
			width: 103%;
			box-shadow: 0 0 1px 1px var(--anon-light);
			transition: all .3s;
		}
	}
}
</style>