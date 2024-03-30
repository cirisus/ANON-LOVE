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
                    setTimeout(() => {
                        destroyLoader();
                        isLoading = false;
                    }, 500);
                }
            });
        });
    });
</script>

{#if isLoading}
<div class="loader">
<div class="progress-bar-container">
    <div class="progress-bar" data-pos="left"></div>
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
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .progress-bar-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 15px;
        background-color: #f3f3f3;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
    }

    .progress-bar {
        height: 100%;
        background-color: #3498db;
        transition: transform 0.5s;
        transition-delay: -.5s;
        transition-behavior: smooth;
        width: 100%;
        &[data-pos="left"] {
            transform-origin: left;
        }
        &[data-pos="right"] {
            transform-origin: right;
        }
    }

    .progress-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
    }
</style>