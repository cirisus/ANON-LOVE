<script>
    import { onMount } from 'svelte';
    import { destroyLoader ,updateProgress } from './scripts/loader.js';
    import { loadAnimation } from './scripts/lottie.js';
    let progress = 0;
    let rotateX = 0;
    let rotateY = 0;

    onMount(async () => {
        const container = document.querySelector('.anon-signature');
        await loadAnimation(container);
        destroyLoader();
        container.addEventListener('mousemove', handleMouseMove);
    });

    function handleMouseMove(e) {
        const svgElement = e.currentTarget.querySelector('svg');
        const width = svgElement.offsetWidth;
        const height = svgElement.offsetHeight;
        const x = e.pageX - svgElement.offsetLeft - width / 2;
        const y = e.pageY - svgElement.offsetTop - height / 2;
        rotateY = x / width * 30;
        rotateX = -y / height * 30;
        svgElement.style.transform = `translate3d(0px, 0px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
</script>

<div id="loader">
    <div class="progress-bar-container">
        <div class="progress-bar" data-pos="left"></div>
        <div class="progress-bar" data-pos="mid"></div>
        <div class="progress-bar" data-pos="right"></div>
    </div>
    <div class="progress-text"><span class="progress-percentage">{progress}</span></div>
    <div id="open-effects">
        <div class="anon-signature"></div>
        <!--- <div class="anon-sprite"></div> --->
    </div>
    <div class="tip" data-info="tip"><div class="tip-alt">Love!~<span>あのちゃん</span></div><div class="sweep-line"></div><div class="tip-origin">TAP TO CONTINUE</div></div>
</div>

<style lang="scss">
    @import './style.scss';
</style>