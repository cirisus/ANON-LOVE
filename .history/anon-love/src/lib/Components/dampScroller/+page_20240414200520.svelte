<script>
    import DynSlots from "./dynSlots.svelte";
    export let slots = 3;
    let slotArray = Array(slots).fill(0);
</script>

<div class="scroller">
    {#each slotArray as _, i}
        <DynSlots>
            <div></div>
        </DynSlots>
    {/each}
</div>

<style lang="scss">
    .scroller {
        display: flex;
        gap: 10px;
    }
</style>