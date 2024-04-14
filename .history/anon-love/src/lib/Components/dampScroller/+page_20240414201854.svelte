<script>
    import DynSlots from "./DynSlots.svelte";
    export let slots = 3;
    let slotArray = Array(slots).fill(0);
</script>

<div class="scroller">
    {#each slotArray as _, i (i)}
        <DynSlots>
            <slot name="scrollbox-1"></slot>
            <slot name="scrollbox-2"></slot>
            <slot name="scrollbox-3"></slot>
            <slot name="scrollbox-4"></slot>
            <slot name="scrollbox-5"></slot>
            <slot name="scrollbox-6"></slot>
            <slot name="scrollbox-7"></slot>
            <slot name="scrollbox-8"></slot>
            <slot name="scrollbox-9"></slot>
            <slot name="scrollbox-10"></slot>
            <slot name="scrollbox-11"></slot>
            <slot name="scrollbox-12"></slot>
        </DynSlots>
    {/each}
</div>

<style lang="scss">
    .scroller {
        display: flex;
        gap: 10px;
    }
</style>