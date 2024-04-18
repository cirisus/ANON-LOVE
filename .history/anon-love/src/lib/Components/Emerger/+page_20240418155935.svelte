<script>
    import { onMount } from 'svelte';
    import { observe } from './emerge.js';
    export let className;

    let element;
    let visible = false;

    onMount(() => {
        observe(element, () => {
            visible = true;
        });
    });
</script>

<div class={className} bind:this={element} class:fade-in={visible}>
    <slot></slot>
</div>

<style lang="scss">
    @import './style.scss';
</style>