<script>
    import { onMount, onDestroy } from 'svelte';

    export let nodes = 5;
    let value = 1;
    let content = 'Content 1';

    function updateContent() {
        content = 'Content ' + value;
    }

    let slider;
    let thumb;
    let dragging = false;

    onMount(() => {
        thumb = slider.querySelector('.thumb');
        slider.addEventListener('mousedown', startDrag);
        slider.addEventListener('mousemove', drag);
        slider.addEventListener('mouseup', endDrag);
        slider.addEventListener('mouseleave', endDrag);
    });

    onDestroy(() => {
        slider.removeEventListener('mousedown', startDrag);
        slider.removeEventListener('mousemove', drag);
        slider.removeEventListener('mouseup', endDrag);
        slider.removeEventListener('mouseleave', endDrag);
    });

    function startDrag(e) {
        if (e.target === thumb) {
            dragging = true;
            thumb.style.transition = 'none'; // Remove transition
        } else {
            moveThumb(e);
        }
    }

    function drag(e) {
        if (dragging) {
            moveThumb(e);
        }
    }

    function endDrag() {
        if (dragging) {
            dragging = false;
            thumb.style.transition = 'left 0.2s'; // Add transition back
        }
    }

    function moveThumb(e) {
        let rect = slider.getBoundingClientRect();
        let x = e.clientX - rect.left; // x position within the element
        let width = rect.right - rect.left;
        let position = x / width;
        position = Math.max(0, Math.min(1, position)); // Ensure position is between 0 and 1
        let newValue = Math.round(position * (nodes - 1)) + 1;

        thumb.style.left = position * 100 + '%';

        if (newValue !== value) {
            value = newValue;
            updateContent();
        }
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
        transition: left 0.2s;
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