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
    {#each sideNavigator as group (group.navTitle)}
        <div class="navTitle">{group.navTitle}</div>
        {#each group.links as link (link.href)}
        <div class="navLink"><a href="{link.href}">{link.text}</a></div>
        {/each}
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
        background-color: #f5f5f5a0;
        /* Dynamic Calc */
        transform: rotateY(-30deg);
        transform-origin: right;
        scale: .875;
        opacity: 0;
        pointer-events: none;
        transition: scale .4s;
        padding: .5rem;
        box-shadow: 0 0 15px 1px rgb(233, 152, 166);
        border-radius: 1rem;
        backdrop-filter: blur(5px);
        text-transform: uppercase;
        &:hover {
            scale: .925;
        }
        > .navLink {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 2.5rem;
            border-radius: .5rem;
            margin: .15rem 0;
            transition: .3s background-color cubic-bezier(0, 0.6, 0.75, 1);
            &:hover {
                background-color: var(--anon-light);
            }
            > a {
                text-decoration: none;
                color: 333;
                font-size: 1.2rem;
                font-weight: bold;
                font-family: "Overpass", sans-serif;
                font-variant-caps: small-caps;
                display: flex;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
            }
        }
        > .navTitle {
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
            margin: 1rem 0;
            font-family: "Overpass", sans-serif;
            font-variant-caps: small-caps;
            &::first-letter {
                font-size: 1.1em;
        }
    }
}
</style>