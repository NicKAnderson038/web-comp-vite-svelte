<svelte:options tag="cool-button" />

<script>
    // Component props
    export let type = 'solid'
    export let num = null
    export let alert = false
    let count = 0

    function handleClick() {
        count = count + Number(num)
    }
</script>

<button
    on:click={alert ? () => console.log('Did Something!') : () => handleClick()}
    class={type == 'solid' ? 'btn-solid' : 'btn-outline'}
>
    <slot />
</button>
{#if !alert}
    <h2>{count}</h2>
{/if}

<style>
    button {
        padding: 10px;
        color: #fff;
        font-size: 17px;
        border-radius: 5px;
        border: 1px solid #ccc;
        cursor: pointer;
        min-width: 180px;
    }
    .btn-solid {
        background: #20c997;
        border-color: #4cae4c;
    }
    .btn-outline {
        color: #20c997;
        background: transparent;
        border-color: #20c997;
    }

    h2 {
        display: flex;
        justify-content: center;
    }
</style>
