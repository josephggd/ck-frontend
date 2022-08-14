<script lang="ts">
    export interface Order {
      number : string;
      menuItem : string;
      currentState : string;
      lastUpdated : string;
    }
    let order:Order = {
      number : "1",
      menuItem : null,
      currentState : "DELIVERED",
      lastUpdated : "2022-02-02",
    }
    import {deliveredList, orderedList, paidList} from "../CommonStrings.js";
</script>

<div class="box-col">
    <h1 class="centered-header">Order Status:</h1>
    <div class="checkpoint-w-text">
        {#if orderedList.includes(order.currentState)}
            <div class="finished checkpoint"></div>
        {:else}
            <div class="unfinished checkpoint"></div>
        {/if}
        <h3 class="centered-header">PREPARED: {order.orderedDate}</h3>
    </div>
    <div class="checkpoint-w-text">
        {#if paidList.includes(order.currentState)}
            <div class="finished checkpoint"></div>
        {:else}
            <div class="unfinished checkpoint"></div>
        {/if}
        <h3 class="centered-header">PAID: {order.paidDate}</h3>
    </div>
    <div class="checkpoint-w-text">
        {#if deliveredList.includes(order.currentState)}
            <div class="finished checkpoint"></div>
        {:else}
            <div class="unfinished checkpoint"></div>
        {/if}
        <h3 class="centered-header">DELIVERED: {order.deliveredDate}</h3>
    </div>
</div>

<style>
    .checkpoint {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }
    .checkpoint-w-text {
        justify-content: space-between;
        flex-direction: row;
        display: flex;
    }
    .box-col {
        margin-left: 1rem;
        margin-right: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }
    .unfinished {
        background: darkorange;
    }
    .finished {
        background: greenyellow;
    }
    .centered-header {
        text-align: center;
    }
</style>