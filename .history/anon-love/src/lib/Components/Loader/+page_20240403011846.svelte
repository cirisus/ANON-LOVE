<script>
    import { onMount } from 'svelte';
    import { updateProgress } from './scripts/loader.js';
    import { loadAnimation } from './scripts/lottie.js';
    let progress = 0;
    let isLoading = false;

    function smeltingBlur({ duration }) {
        return {
            duration,
            css: t => `
                backdrop-filter: blur(${(1-t)*10}rem);
                -webkit-backdrop-filter: blur(${(1-t)*10}rem);
            `
        };
    }
    function smeltingBlurReverse({ duration }) {
        return {
            duration,
            css: t => `
                backdrop-filter: blur(${t*5}rem);
                -webkit-backdrop-filter: blur(${t*5}rem);
            `
        };
    }
    function smeltingOpacity({ duration }) {
        return {
            duration,
            css: t => `
                opacity: ${1 - t};
            `
        };
    }
    onMount(async () => {
        isLoading = true;
        const container = document.querySelector('.anon-signature');
        await loadAnimation(container);
        isLoading = false;
    });
</script>

{#if isLoading}
<div id="loader" outro:fade="{smeltingBlur({duration: 2000})}">
    <div class="progress-bar-container" outro:fade="{smeltingOpacity({duration: 1000})}">
        <div class="progress-bar" data-pos="left" outro="{smeltingBlurReverse({duration: 2000})}"></div>
        <div class="progress-bar" data-pos="mid" outro="{smeltingBlurReverse({duration: 2000})}"></div>
        <div class="progress-bar" data-pos="right" outro="{smeltingBlurReverse({duration: 2000})}"></div>
        <div class="progress-text">{progress}%</div>
    </div>
    <div id="open-effects" outro:fade="{smeltingBlur({duration: 2000})}">
        <div class="anon-signature" outro="{smeltingBlurReverse({duration: 2000})}"></div>
        <div class="anon-sprite" outro="{smeltingBlurReverse({duration: 2000})}"></div>
    </div>
</div>
{/if}

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
        box-shadow: 0 0 10px 1px rgb(from var(--mygo-reverse) r g b / 30%);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
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
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2rem;
            color: var(--anon-base);
            text-shadow: 0 0 7px var(--anon-light);
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