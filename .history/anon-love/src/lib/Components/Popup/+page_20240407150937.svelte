<script>
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    import SvelteMarkdown from 'svelte-markdown';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    export let content = '';
    export let title = '';
    export let buttonText = '';
    export let showModal = false;

    const dispatch = createEventDispatcher();

    const blur = tweened(0, { duration: 300, easing: cubicOut });

    const toggleModal = async () => {
        showModal = !showModal;
        dispatch('toggleModal', showModal);
        if (showModal) {
            await blur.set(0);
        } else {
            await blur.set(12);
        }
    };
</script>

{#if showModal}
    <div class="overlay" transition:fade={{ duration: 200 }} style="backdrop-filter: blur({$blur}px);">
        <div class="modal" transition:fade={{ duration: 300 }}>
            <div class="modal-head">
            <h2>{title}</h2>
            </div>
            <div class="modal-body">
            <SvelteMarkdown source={content} />
            </div>
            <div class="modal-footer">
            <button on:click={toggleModal}>{buttonText}</button>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(253,253,253);
    margin-inline: auto;
    margin-block: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 1.9px -4px rgba(0, 0, 0, 0.1), 0px 6px 15px -4px rgba(0, 0, 0, 0.2);
    color: rgb(50, 50, 53);
    &::after, &::before {
        content: '';
        position: absolute;
        height: 98%;
        width: 98%;
        z-index: -1;
        left: -5px;
        top: 4px;
        transform: rotate(-2.5deg);
        background-color: rgb(240, 240, 240);
        box-shadow: 0px 1px 1.9px -4px rgba(0, 0, 0, 0.1), 0px 6px 15px -4px rgba(0, 0, 0, 0.2);
    }
    &::after {
        right: -3px;
        top: 1px;
        transform: rotate(1.4deg);
    }
    > .modal-head {
        width: 100%;
        padding: .5rem;
        padding-bottom: .25rem;
        background: rgb(253,253,253);
        h2 {
          border-bottom: 2px solid rgb(50, 50, 53);
          margin-block: 1rem .25rem;
        }
    }
    > .modal-body {
        width: 100%;
        padding: .5rem;
        background: rgb(253,253,253);
        overflow-y: scroll;
        max-height: 40vh;
        p {
            margin-block: .5rem;
        }
        &::-webkit-scrollbar {
            width: 4px;
        }
        &::-webkit-scrollbar-thumb {
            background: rgb(50, 50, 53);
            border-radius: 2px;
        }
    }
    > .modal-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: .5rem;
        background: rgb(253,253,253);
        button {
            padding: .5rem 1rem;
            margin: 0;
            background: rgb(50, 50, 53);
            color: rgb(253,253,253);
            border: none;
            border: 2px solid rgb(50, 50, 53);
            border-radius: 4px;
            cursor: pointer;
            transition: all .3s;
            &:hover {
                background: rgb(253,253,253);
                color: rgb(50, 50, 53);
            }
        }
    }
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    background-color: blur(1rem);
}
</style>