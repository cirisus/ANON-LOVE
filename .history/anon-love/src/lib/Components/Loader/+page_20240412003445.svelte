<script>
    import { onMount } from 'svelte';
    import { destroyLoader ,updateProgress } from './scripts/loader.js';
    import { loadAnimation } from './scripts/lottie.js';
    import { addMouseMoveListener } from './scripts/interact.js';
    let progress = 0;
    let svgElement;
    let overlayElement;

    onMount(async () => {
        addMouseMoveListener(svgElement, overlayElement);
        const container = document.querySelector('.anon-signature');
        await loadAnimation(container);
        destroyLoader();
    });
</script>

<div id="loader">
    <div class="progress-bar-container">
        <div class="progress-bar" data-pos="left"></div>
        <div class="progress-bar" data-pos="mid"></div>
        <div class="progress-bar" data-pos="right"></div>
    </div>
    <div class="progress-text"><span class="progress-percentage">{progress}</span></div>
    <div id="open-effects">
        <div class="anon-signature" bind:this={svgElement}></div>
        <div class="overlay" bind:this={overlayElement}></div> <!-- Add this line -->
        <!--<div class="anon-sprite"></div>-->
    </div>
    <div class="tip" data-info="tip"><div class="tip-alt">Love!~<span>あのちゃん</span></div><div class="sweep-line"></div><div class="tip-origin">TAP TO CONTINUE</div></div>
</div>

<style lang="scss">
    @import './style.scss';
    .overlay { /* Add this block */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
    }
</style>