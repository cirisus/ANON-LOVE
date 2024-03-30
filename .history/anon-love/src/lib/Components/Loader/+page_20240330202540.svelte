<script>
    import { onMount } from 'svelte';
    import { updateProgress, destroyLoader } from './scripts/loader.js';
    export let progress = 0;
    let isLoading = true;

    onMount(() => {
        document.addEventListener('DOMContentLoaded', function() {
            updateProgress(30);
        });

        window.addEventListener('load', function() {
            updateProgress(70);
            destroyLoader();
            isLoading = false;
        });

        window.addEventListener('beforeunload', function() {
            updateProgress(109);
        });
    });
</script>

{#if isLoading}
<div class="loader">
<div class="progress-bar-container">
    <div class="progress-bar" style="width: {progress}%;"></div>
    <div class="progress-text">{progress}%</div>
</div>
</div>
{/if}

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
    }

    .progress-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
    }
</style>