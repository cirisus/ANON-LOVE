<script>
    export let nodes = 5;
    let value = 1;

    let content = 'Content 1';
    function updateContent() {
        content = 'Content ' + value;
    }
</script>

<input type="range" min="1" max={nodes} bind:value={value} on:input="{updateContent}" />

<p>Value: {value}</p>

<p>{content}</p>