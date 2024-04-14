<script>
    export let slots = 3;
</script>

<div class="scroller">
  <slot name="scroll-container" />
</div>

<style lang="scss">
    .scroller {
        display: flex;
        gap: 10px;
    }
</style>