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
        position: fixed;
        right: -200px;
        top: 0;
        width: 200px;
        height: 100%;
        background-color: #f5f5f5;
        transition: right 0.5s;
        > a {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>