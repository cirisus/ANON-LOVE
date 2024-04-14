<script>

</script>

<div class="scroller">
    <div class="scrollbox">
        <slot name="scrollbox-1"></slot>
    </div>
    <div class="scrollbox">
        <slot name="scrollbox-2"></slot>
    </div>
    <div class="scrollbox">
        <slot name="scrollbox-3"></slot>
    </div>
</div>

<style lang="scss">
    .scroller {
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow: hidden;
    }
    .scrollbox {
        width: 100vw;
        height: 100vh;
        padding: 2rem 0;
    }
</style>