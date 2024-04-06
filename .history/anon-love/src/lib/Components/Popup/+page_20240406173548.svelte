<script>
    import { fade } from 'svelte/transition';
    export let content = '';
    export let title = '';
    export let buttonText = '';
    export let showModal = false;

    const toggleModal = () => {
        showModal = !showModal;
    };
</script>

{#if showModal}
    <div class="overlay" transition:fade={{ duration: 500 }}>
        <div class="modal" transition:fade={{ duration: 500 }}>
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