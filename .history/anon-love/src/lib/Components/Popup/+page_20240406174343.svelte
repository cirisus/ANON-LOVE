<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let showModal = false;
    export let title = '';
    export let buttonText = '';
    export let content = '';

    function toggleModal() {
        showModal = !showModal;
        dispatch('modalToggle', showModal);
    }
</script>

{#if showModal}
    <div class="overlay">
        <div class="modal">
            <h2>{title}</h2>
            <p>{content}</p>
            <button on:click={toggleModal}>{buttonText}</button>
        </div>
    </div>
{/if}


<style lang="scss">
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
</style>