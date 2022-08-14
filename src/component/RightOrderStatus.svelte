<script lang="ts">
    import {receivedList, preparedList, paidList, deliveredList} from "../CommonStrings.js";
    import type {OrderHistory} from "../api/OrderHistory";
    import {onMount} from "svelte";
    import {getOrderHistoryAggregate} from "../api/Api";
    import {OrderState} from "../api/OrderState.js";
    import {MenuItem} from "../api/MenuItem";
    let order:OrderHistory = {
      number : "",
      menuItem : MenuItem.ORDERING,
      currentState : OrderState.ORDERING,
      receivedDate : null,
      preparedDate : null,
      paidDate : null,
      deliveredDate : null,
    };
    onMount(async () => {
      getOrderHistoryAggregate().then((data: OrderHistory)=>{
        order = data;
      }).catch(()=>{
        order = {
          number : "",
          menuItem : MenuItem.ORDERING,
          currentState : OrderState.ORDERING,
          receivedDate : null,
          preparedDate : null,
          paidDate : null,
          deliveredDate : null,
        };
      });
    });
    function blankIfNull( input:string | null){
      if (input==null){
        return "";
      }
      return input;
    }
</script>

<div class="box-col">
    <h1 class="centered-header">Order Status:</h1>
    <div class="checkpoint-w-text">
        {#if receivedList.includes(order.currentState)}
            <div class="finished checkpoint"></div>
        {:else}
            <div class="unfinished checkpoint"></div>
        {/if}
        <h3 class="centered-header">{OrderState.RECEIVED}: {blankIfNull(order.preparedDate)}</h3>
    </div>
    <div class="checkpoint-w-text">
        {#if preparedList.includes(order.currentState)}
            <div class="finished checkpoint"></div>
        {:else}
            <div class="unfinished checkpoint"></div>
        {/if}
        <h3 class="centered-header">{OrderState.PREPARED}: {blankIfNull(order.preparedDate)}</h3>
    </div>
    <div class="checkpoint-w-text">
        {#if paidList.includes(order.currentState)}
            <div class="finished checkpoint"></div>
        {:else}
            <div class="unfinished checkpoint"></div>
        {/if}
        <h3 class="centered-header">{OrderState.PAID}: {blankIfNull(order.preparedDate)}</h3>
    </div>
    <div class="checkpoint-w-text">
        {#if deliveredList.includes(order.currentState)}
            <div class="finished checkpoint"></div>
        {:else}
            <div class="unfinished checkpoint"></div>
        {/if}
        <h3 class="centered-header">{OrderState.DELIVERED}: {blankIfNull(order.preparedDate)}</h3>
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