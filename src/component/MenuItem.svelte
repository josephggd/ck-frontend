<script lang="ts">
  import Button, {Label} from '@smui/button';
  import {createOrder} from "../api/Api.js";
  import {OrderState} from "../api/OrderState.js";
  export let menuItem:string;
</script>

{#if menuItem!=="ORDERING"}
    <div class="food-col">
        <img
            class="food"
            src={menuItem+".png"}
            alt={menuItem+".png"}
        />
        <Button style="width: 12rem;"
            on:click={()=>{
                createOrder(menuItem);
            }}
            variant="unelevated">
            <Label>{`order a ${menuItem}`}</Label>
        </Button>
    </div>
{/if}


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