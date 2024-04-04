<script>
    import { onMount, fade } from 'svelte';
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
</div>

<style lang="scss">
@keyframes cutProgressBar {to {width: 0;}}
@keyframes leftIn {from {transform: translateX(0);} to {transform: translateX(-100%);}}
@keyframes fade {from {opacity: 1;} to {opacity: 0;}}
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
        animation: cutProgressBar .25s cubic-bezier(.4,0,.6,1) 2.5s 1 forwards;
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
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 4rem;
            color: var(--anon-base);
            text-shadow: 0 0 7px var(--anon-light);
            animation: leftIn .3s ease 2s 1 forwards, fade .3s ease 2s 1 forwards;
        }
    }
    .anon-signature {
        position: fixed;
        display: flex;
        width: 50%;
        height: 50%;
        transform: translateY(-10%);
    }
    .anon-sprite {
        position: fixed;
        display: flex;
        top: 20%;
        right: -100%;
        width: 80%;
        height: 100%;
        transform: translateY(10%);
        opacity: 0;
        background-image: url(/anon-love/public/asset/chara_anon.png);
        background-size: contain;
        animation: leftIn .4s cubic-bezier(.4,0,.6,1) 2s 1 forwards, fade .4s cubic-bezier(.4,0,.6,1) 2.5s 1 reverse forwards;
    }
</style>