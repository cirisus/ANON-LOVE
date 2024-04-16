<script>
	import Modal from './Components/Popup/+page.svelte';
	import { ripple } from './universal';
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

<main use:ripple>
	<slot></slot>
</main>
<footer>
	<span class="footer">©2024 ANON-LOVE|<button on:click|preventDefault={handleToggleModal} aria-label="open">CONTENT USAGE SPECIFICATION</button></span>
    <Modal {title} {buttonText} {showModal} {content} on:toggleModal={handleToggleModal} />
</footer>

<style lang="scss">
@keyframes ripple {
to {transform: scale(4);opacity: 0;}}
footer > span {
	white-space: nowrap;
		> button {
		font-family: inherit;
		font-size: inherit;
		-webkit-padding: revert;
		padding: 0;
		margin: revert;
		box-sizing: border-box;
		border: none;
		border-radius: 0;
		background-color: transparent !important;

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
			width: 100%;
			box-shadow: 0 0 1px 1px var(--anon-light);
			transition: all .3s;
		}
	}
}
</style>