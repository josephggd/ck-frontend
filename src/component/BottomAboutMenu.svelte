<script>
    import Fab, { Icon } from '@smui/fab';
    import DocsButtons from "./DocsButtons.svelte";
    let show = false;
</script>

<div class="common">
    <div class="show">
        <Fab color="primary" on:click={()=>show=!show}>
            <Icon class="material-icons">question_mark</Icon>
        </Fab>
    </div>
    {#if show}
        <DocsButtons/>
    {/if}
</div>

<style>
    .common {
        margin: 2rem;
    }
    .show {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>