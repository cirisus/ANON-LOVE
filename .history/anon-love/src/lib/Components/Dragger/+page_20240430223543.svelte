<script>
    export let nodes = 5;
    let value = 1;

    let content = 'Content 1';
    function updateContent() {
        content = 'Content ' + value;
    }
</script>

<style>
    input[type="range"] {
        width: 100%;
        height: 25px;
        background: #ddd;
        outline: none;
        opacity: 0.7;
        transition: opacity 0.2s;
    }

    input[type="range"]::-webkit-slider-thumb {
        width: 25px;
        height: 25px;
        background: #4CAF50;
        cursor: pointer;
        appearance: none;
    }

    input[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: #3071A9;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }
    .slider {
        position: relative;
        width: 100%;
    }

    .slider div {
        position: absolute;
        height: 10px;
        width: 1px;
        background: black;
    }
</style>

<div class="slider">
    <input type="range" min="1" max={nodes} bind:value={value} on:input="{updateContent}" step="1" />

    {#each Array(nodes) as _, i (i)}
        <div style="left: {i / (nodes - 1) * 100}%"></div>
    {/each}
</div>

<p>Value: {value}</p>

<p>{content}</p>