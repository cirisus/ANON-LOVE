<script>
    export let slots;
</script>

<div class="scroller">
    <slot name="scrollbox-1"></slot>
    <slot name="scrollbox-2"></slot>
    <slot name="scrollbox-3"></slot>
</div>
<style lang="scss">
    .scroller {
        display: flex;
        gap: 10px;
        overflow: hidden;
    }
    ::slotted(div) {
        flex: 1;
        min-width: 100%;
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>