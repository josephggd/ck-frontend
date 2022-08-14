<script lang="ts">
    import Button, { Label } from '@smui/button';
    export let menuItem = "question";
</script>

<div class="food-col">
    <img
        class="food"
        src={menuItem+".png"}
        alt={menuItem+".png"}
    />
    <Button style="width: 12rem;"
        on:click={()=>console.log("SOMETHING")}
        variant="unelevated">
        <Label>{`order a ${menuItem}`}</Label>
    </Button>
</div>


<style>
    .food {
        width: 360px;
        height: 360px;
        display: flex;
        flex-direction:column;
        justify-content: space-evenly;
    }
    .food-col {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>