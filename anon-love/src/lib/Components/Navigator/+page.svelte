<script>
    import { onMount } from 'svelte';
    import { setupSideNav } from './trigger.js';

    export let sideNavigator = [];
    let sideNav;

    onMount(() => {
        setupSideNav(sideNav);
    });
</script>

<nav id="sideNav" bind:this={sideNav}>
    <slot name="extra-top"></slot>
    {#each sideNavigator as link (link.href)}
        <a href="{link.href}">{link.text}</a>
    {/each}
    <slot name="extra-bottom"></slot>
</nav>

<style lang="scss">
    #sideNav {
        z-index: 2;
        position: fixed;
        right: 0;
        top: 0;
        width: min(300px,30vw);
        height: 100%;
        background-color: #f5f5f5;
        /* Dynamic Calc */
        transform: rotateY(-30deg);
        transform-origin: right;
        scale: .875;
        opacity: 0;
        pointer-events: none;
        transition: scale .4s;
        padding: .5rem;
        box-shadow: 0 0 15px 1px black;
        border-radius: 1rem;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        &:hover {
            scale: .9;
        }
        > a {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>