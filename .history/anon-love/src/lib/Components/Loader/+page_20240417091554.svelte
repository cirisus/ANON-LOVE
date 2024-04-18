<script>
    import { onMount, onDestroy } from 'svelte';
    import { destroyLoader ,updateProgress } from './scripts/loader.js';
    import { loadAnimation } from './scripts/lottie.js';
    import { addMouseMoveListener } from './scripts/mouseSensing.js';
    let progress = 0;
    let svgElement;

    const loadPage = async () => {
        setTimeout(() => {
            addMouseMoveListener(svgElement);
        }, 0);
        const container = document.querySelector('.anon-signature');
        if (container === null) {
            console.error('Could not find element');
            return;
        }
        let animationLoaded = false;
        try {
            await loadAnimation(container);
            animationLoaded = true;
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Animation loading was aborted');
            } else {
                throw error;
            }
        }
        if (animationLoaded) {
            updateProgress(progress); // Update the progress bar
            destroyLoader();
        }
    };

    onMount(() => {
        loadPage();
        window.addEventListener('hashchange', loadPage);
    });

    onDestroy(() => {
        window.removeEventListener('hashchange', loadPage);
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
        <!--<div class="anon-sprite"></div>-->
    </div>
    <div class="tip" data-info="tip"><div class="tip-alt">Love!~<span>あのちゃん</span></div><div class="sweep-line"></div><div class="tip-origin">TAP TO CONTINUE</div></div>
</div>

<style lang="scss">
    @import './style.scss';
</style>