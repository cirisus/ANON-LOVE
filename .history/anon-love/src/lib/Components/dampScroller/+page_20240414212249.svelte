<script>
    import dampScroller from "./damper.js";
    import { onMount } from 'svelte';
    let scrollboxes = [];
    let currentIndex = 0;

onMount(() => {
    scrollBoxes = Array.from(document.querySelectorAll('.scrollbox'));

    window.addEventListener('wheel', event => {
        event.preventDefault();

        if (event.deltaY > 0) {
            currentIndex = Math.min(currentIndex + 1, scrollBoxes.length - 1);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }
        scrollBoxes[currentIndex].scrollIntoView({ behavior: 'smooth' });
    });
});
</script>
<div id="viewbox">
    <div class="scroller">
        <div class="scrollbox">
            <slot name="scrollbox-1"></slot>
        </div>
        <div class="scrollbox">
            <slot name="scrollbox-2"></slot>
        </div>
        <div class="scrollbox">
            <slot name="scrollbox-3"></slot>
        </div>
    </div>
</div>

<style lang="scss">
    #viewbox {
        position: fixed;
        top: 0;
        display: flex;
        align-items: flex-start;
        width: 100%;
        height: 100vh;
    }
    .scroller {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
        transition: all .15s ease;
        overflow: hidden;
    }
    .scrollbox {
        width: 100vw;
        height: 100vh;
        padding: 2rem 0;
    }
</style>