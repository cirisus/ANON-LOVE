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
        <div class="navLink"><a href="{link.href}" data-hint="{link.altTxt}">{link.text}</a></div>
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
        width: min(300px,40vw);
        height: 100%;
        background-color: #f5f5f5a0;
        /* Dynamic Calc */
        transform: rotateY(-30deg);
        transform-origin: right;
        scale: .875;
        opacity: 0;
        pointer-events: none;
        transition: scale .4s;
        box-shadow: 0 0 15px 1px rgb(233, 152, 166);
        border-radius: 1rem;
        backdrop-filter: blur(1rem);
        text-transform: uppercase;
        &:hover {
            scale: .925;
        }
        > .navLink {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: -webkit-fill-available;
            height: 2.5rem;
            border-radius: .5rem;
            margin: .15rem .75rem;
            transition: .3s background-color cubic-bezier(0, 0.6, 0.75, 1);
            padding: 0 1rem;
            &:hover {
                background-color: var(--anon-light);
            }
            > a {
                text-decoration: none;
                font-size: 1.2rem;
                font-weight: bold;
                font-family: "Overpass", sans-serif;
                font-variant-caps: small-caps;
                display: flex;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                position: relative;
                padding: 0 .5rem;
                transition: padding .4s ease-in-out;
                word-break: keep-all;
                white-space: nowrap;
                &:hover {
                    padding: 0rem;
                    transition: padding .4s ease-out;
                }
                &::after {
                    position: relative;
                    content: attr(data-hint);
                    font-size: .75em;
                    word-break: keep-all;
                    white-space: nowrap;
                    width: 0;
                    height: 100%;
                    transition: width .3s cubic-bezier(0, 0, 0.5, 1), color .2s ease-in-out, filter .2s ease-in-out;//fade out
                    color: transparent;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    filter:blur(1rem);
                }
                &:hover::after {
                    width: 100%;
                    transition: width .3s ease-out, color .3s ease-out, filter .3s ease-out;//fade in
                    color: #583c3c;
                    filter: blur(0);
                }
            }
        }
        > .navTitle {
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
            margin: 1rem 0;
            font-family: "Overpass", sans-serif;
            font-variant-caps: small-caps;
            -webkit-userp-select: none;
            user-select: none;
            &::first-letter {
                font-size: 1.1em;
        }
    }
}
</style>