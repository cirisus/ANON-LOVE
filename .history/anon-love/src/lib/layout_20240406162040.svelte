<script>
    import { onMount } from 'svelte';
    import marked from 'marked';
    import { promises as fs } from 'fs';
    import Modal from './Modal.svelte';

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

<style lang="scss">
	footer {
    	color: rgb(163 53 68);
    	font-variant-caps: small-caps;
		span {
			white-space: nowrap;
			> button {
				color: var(--anon-base);
				text-decoration: none;
				position: relative;
				font-weight: 600;
				transition: all .3s;
				&:hover {
					color: #333;
					font-weight: 300;
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
}
</style>