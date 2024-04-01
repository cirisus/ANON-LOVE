<script>
    import { onMount } from 'svelte';
    import { updateProgress, destroyLoader } from './scripts/loader.js';
    let progress = 0;
    let isLoading = true;

    onMount(() => {
        document.addEventListener('DOMContentLoaded', function() {
            updateProgress(30, (newProgress) => {
                progress = newProgress;
            });
        });

        window.addEventListener('load', function() {
            updateProgress(100, (newProgress) => {
                progress = newProgress;
                if (newProgress === 100) {
                    destroyLoader();
                    isLoading = false;
                }
            });
        });
    });
</script>

{#if isLoading}
<div class="loader">
<div class="progress-bar-container">
    <div class="progress-bar" data-pos="left"></div>
    <div class="progress-bar" data-pos="mid"></div>
    <div class="progress-bar" data-pos="right"></div>
    <div class="progress-text">{progress}%</div>
</div>
</div>
{/if}

<style lang="scss">
    .loader {
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
    }

    .progress-bar {
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
            background-color: rgb(from var(--anon-faint) r g b / 75%);
        }
        &[data-pos="right"] {
            box-shadow: 0 0 4px var(--anon-faint),1px 0 3px 0 var(--anon-base),inset 0 0 15px var(--anon-light);
        }
    }
.progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    color: var(--anon-base);
    text-shadow: 0 0 7px var(--anon-light);
}
</style>