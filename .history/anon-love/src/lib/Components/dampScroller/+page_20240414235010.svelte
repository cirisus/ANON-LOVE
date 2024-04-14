<script>
    import { onMount } from 'svelte';
    import handleScroll from './damper.js';

    let scroller;
    let scrollBoxes = [];

    onMount(() => {
        scrollBoxes = Array.from(scroller.children);
        handleScroll(scroller, scrollBoxes);
    });
</script>

<div id="viewbox">
    <div class="scroller" bind:this={scroller}>
        <div class="scrollbox">
            <slot name="scrollbox-1"></slot>
        </div>
        <div class="scrollbox">
            <slot name="scrollbox-2"></slot>
        </div>
        <div class="scrollbox">
            <slot name="scrollbox-3"></slot>
        </div>
        <div class="scrollbox">
            <slot name="scrollbox-4"></slot>
        </div>
        <div class="scrollbox">
            <slot name="scrollbox-5"></slot>
        </div>
    </div>
</div>

<style lang="scss">
    @import './style.scss';
</style>