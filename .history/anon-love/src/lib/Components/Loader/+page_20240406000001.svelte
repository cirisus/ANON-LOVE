<script>
    import { onMount } from 'svelte';
    import { destroyLoader ,updateProgress } from './scripts/loader.js';
    import { loadAnimation } from './scripts/lottie.js';
    let progress = 0;

    onMount(async () => {
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
        <div class="progress-text"><span class="progress-percentage">{progress}</span></div>
    </div>
    <div id="open-effects">
        <div class="anon-signature"></div>
        <div class="anon-sprite"></div>
    </div>
    <div class="tip" data-info="tip"><div class="tip-alt">Love!~<span>あのちゃん</span></div><div class="sweep-line"></div><div class="tip-origin">TAP TO CONTINUE</div></div>
</div>

<style lang="scss">
    @import './style.scss';
</style>