<script>
    import { onMount } from 'svelte';

    export let nodes = 5;
    let value = 1;
    let content = 'Content 1';

    function updateContent() {
        content = 'Content ' + value;
    }

    let slider;
    let thumb;

    onMount(() => {
        thumb = slider.querySelector('.thumb');
        slider.addEventListener('click', moveThumb);
    });

    function moveThumb(e) {
        let rect = slider.getBoundingClientRect();
        let x = e.clientX - rect.left; // x position within the element
        let width = rect.right - rect.left;
        let position = x / width;
        value = Math.round(position * (nodes - 1)) + 1;
        thumb.style.left = (value - 1) / (nodes - 1) * 100 + '%';
        updateContent();
    }
</script>

<style>
    .slider {
        position: relative;
        width: 100%;
        height: 25px;
        background: #ddd;
    }

    .thumb {
        position: absolute;
        height: 25px;
        width: 25px;
        background: #4CAF50;
        cursor: pointer;
    }

    .node {
        position: absolute;
        height: 10px;
        width: 1px;
        background: black;
    }
</style>

<div class="slider" bind:this={slider}>
    <div class="thumb" style="left: 0"></div>

    {#each Array(nodes) as _, i (i)}
        <div class="node" style="left: {i / (nodes - 1) * 100}%"></div>
    {/each}
</div>

<p>Value: {value}</p>

<p>{content}</p>