<script>
    import { onDestroy } from 'svelte';
    import { showLoader, hideLoader } from './scripts/loader.js';
    export let isLoading = true;
    export let progress = 0;

    showLoader();
    onDestroy(() => {
        hideLoader();
    });
    onMount(() => {
        pageLoadListener.onDOMContentLoaded((newProgress) => {
          progress = newProgress;
        });
        pageLoadListener.onLoad((newProgress) => {
          progress = newProgress;
        });
        pageLoadListener.onBeforeUnload((newProgress) => {
          progress = newProgress;
        });
        pageLoadListener.onUnload((newProgress) => {
          progress = newProgress;
    });
  });
    import './scripts/progressbar.js'
</script>

<div class="progress-bar-container">
    <div class="progress-bar"></div>
    <div class="progress-text">{progress}%</div>
</div>

<style>
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
        width: 80%;
        height: 20px;
        background-color: #f3f3f3;
        border-radius: 10px;
        overflow: hidden;
    }

    .progress-bar {
        height: 100%;
        background-color: #3498db;
        width: 0%;
    }

    .progress-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
    }
</style>

{#if isLoading}
    <div class="loader">
        <div class="spinner"></div>
    </div>
{/if}
