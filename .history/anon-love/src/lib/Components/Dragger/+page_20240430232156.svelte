<script>
    import { onMount } from 'svelte';
    import { createSlider } from './scripts/thumb.js';

    let slider;
    let sliderInstance;
    export let nodes = 5;

    onMount(() => {
        sliderInstance = createSlider(slider, 5);
    });
</script>

<style lang="scss">
    .slider {
        position: relative;
        width: 100%;
        height: 10px;
        background: #ddd;
    }

    .thumb {
        position: absolute;
        height: 16px;
        width: 20px;
        background: #4CAF50;
        cursor: pointer;
        transition: left 0.2s;
        transform: translate(-50%, -3px);
        &:hover {
            background: #285c2a;
        }
    }

    .node {
        position: absolute;
        height: 10px;
        width: 10px;
        background: black;
        transform: rotate(45deg);
        backdrop-filter: 10px;
        z-index: 2;
    }
</style>

<div class="slider" bind:this={slider}>
    <div class="thumb" style="left: 0"></div>

    {#each Array(nodes) as _, i (i)}
        <div class="node" style="left: {i / (nodes - 1) * 100}%"></div>
    {/each}
</div>
``
<p>Value: {sliderInstance ? sliderInstance.getValue() : ''}</p>

<p>{sliderInstance ? sliderInstance.getContent() : ''}</p>