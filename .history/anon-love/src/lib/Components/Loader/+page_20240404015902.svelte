<script>
    import { onMount } from 'svelte';
    import { destroyLoader ,updateProgress } from './scripts/loader.js';
    import { loadAnimation } from './scripts/lottie.js';

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
        <div class="progress-text"><span class="progress-percentage"></div>
    </div>
    <div id="open-effects">
        <div class="anon-signature"></div>
        <div class="anon-sprite"></div>
    </div>
</div>

<style lang="scss">
@keyframes blur {to {backdrop-filter: blur(0);-webkit-backdrop-filter: blur(0);}}
@keyframes fadeOut {to {opacity: 0;}}
    #loader, #open-effects {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-backdrop-filter: blur(1rem);
        backdrop-filter: blur(1rem);
        z-index: 9999;
    }
    #open-effects {
            -webkit-backdrop-filter: none;
            backdrop-filter: none;
        }
    .progress-bar-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 15px;
        background-image: url(/anon-love/public/asset/progress_bg.png);
        background-size: contain;
        display: flex;
        justify-content: space-between;
       > .progress-bar {
            height: 100%;
            position: relative;
            background-color: transparent;
            width: 0;
            z-index: 0;
            transition-property: width;
            transition-duration: 0.5s;
            box-shadow: 0 0 4px var(--anon-faint),1px 0 3px 0 var(--anon-base),inset 0 0 15px var(--anon-light);
            &[data-pos="mid"] {
                width: 100%;
                box-shadow: none;
                background-color: rgb(from var(--anon-faint) r g b / 100%);
            }
            &[data-pos="right"] {
                box-shadow: 0 0 4px var(--anon-faint),1px 0 3px 0 var(--anon-base),inset 0 0 15px var(--anon-light);
            }
        }
        > .progress-text {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Meglona_italic', serif;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 4rem;
            color: var(--anon-base);
            text-shadow: 0 0 7px var(--anon-light);
            > span::first-letter {
                display: inline-block;
                font-size: 6rem;
            }
        }
    }
    .anon-signature {
        position: fixed;
        display: flex;
        width: 50%;
        height: 50%;
        transform: translateY(-10%);
    }
</style>