<script>
    import { onMount } from 'svelte';
    import { updateProgress } from './scripts/loader.js';
    export let progress = 0;

    onMount(() => {
        document.addEventListener('DOMContentLoaded', function() {
            updateProgress(10);
        });

        window.addEventListener('load', function() {
            updateProgress(60);
        });

        window.addEventListener('beforeunload', function() {
            updateProgress(90);
        });

        window.addEventListener('unload', function() {
            updateProgress(100);
        });
    });
</script>
<div class="loader">
<div class="progress-bar-container">
    <div class="progress-bar"></div>
    <div class="progress-text">{progress}%</div>
</div>
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