<script lang="ts">
  import {Cell} from '@smui/layout-grid';
  import Card from "@smui/card";
  import CircularProgress from "@smui/circular-progress";
  import {MenuItem} from "../api/MenuItem";
  import {OrderState} from "../api/OrderState";
  import Button, {Label} from "@smui/button";
  import {createOrder, deliverOrder, payOrder} from "../api/Api.js";
  import {deliveredList, paidList, preparedList, receivedList} from "../CommonStrings.js";
  import type {OrderHistory} from "../api/OrderHistory";
  import {onMount} from "svelte";
  import {getOrderHistoryAggregate} from "../api/Api";

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
      return data;
    }).then((data: OrderHistory)=>{
      orderState = data.currentState;
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
  let orderState : OrderState = OrderState.BROWSING;
</script>

<Cell span={9}>
    <Card style="background-color: #801f00; opacity: .9;">
        {#if orderState===OrderState.LOADING}
        <div style="display: flex; align-items: center; justify-content: center; margin: 5rem auto;">
            <CircularProgress style="height: 20rem; width: 20rem;" intermediate></CircularProgress>
        </div>
        {:else if orderState===OrderState.BROWSING}
            <div style="display: flex; align-items: center; justify-content: center; margin: 15rem auto;">
                <Button style="width: 12rem;"
                        on:click={()=>orderState=OrderState.ORDERING}
                        variant="unelevated">
                    <Label>May we take your order?</Label>
                </Button>
            </div>
        {:else if orderState===OrderState.ORDERING}
            <div style="margin: 4rem; display: flex; flex-direction: row; justify-content: space-evenly; ">
                <div class="food-col">
                    <img
                        class="food"
                        src={MenuItem.PIZZA+".png"}
                        alt={MenuItem.PIZZA+".png"}
                    />
                    <Button
                        style="width: 12rem;"
                        on:click={()=>{
                            createOrder(MenuItem.PIZZA);
                            }}
                        variant="unelevated">
                        <Label>{`order a ${MenuItem.PIZZA}`}</Label>
                    </Button>
                </div>
                <div class="food-col">
                    <img
                        class="food"
                        src={MenuItem.HAMBURGER+".png"}
                        alt={MenuItem.HAMBURGER+".png"}
                    />
                    <Button style="width: 12rem;"
                        on:click={()=>createOrder(MenuItem.HAMBURGER)}
                        variant="unelevated">
                        <Label>{`order a ${MenuItem.HAMBURGER}`}</Label>
                    </Button>
                </div>
            </div>
        {:else if orderState===OrderState.PREPARED}
            <div style="display: flex; align-items: center; justify-content: center; margin: 15rem auto;">
                <Button style="width: 12rem;"
                        on:click={()=>{
                                orderState=OrderState.LOADING;
                                payOrder();
                        }}
                        variant="unelevated">
                    <Label>PAY FOR ORDER?</Label>
                </Button>
            </div>
        {:else if orderState===OrderState.PAID}
            <div style="display: flex; align-items: center; justify-content: center; margin: 15rem auto;">
                <p>THANK YOU FOR ORDERING!</p>
                <Button style="width: 12rem;"
                        on:click={()=>{
                            orderState=OrderState.LOADING;
                            deliverOrder();
                        }}
                        variant="unelevated">
                    <Label>DELIVER THE ORDER?</Label>
                </Button>
            </div>
        {:else if orderState===OrderState.DELIVERED}
            <div style="display: flex; align-items: center; justify-content: center; margin: 15rem auto;">
                <p>THANK YOU FOR ORDERING!</p>
            </div>
        {/if}
    </Card>
</Cell>
<Cell span={3}>
    <Card style="height:30rem; background-color: #801f00; opacity: .9;">
        <div class="box-col">
            <h1 class="centered-header">Order Status:</h1>
            <div class="checkpoint-w-text">
                {#if receivedList.includes(order.currentState)}
                    <div class="finished checkpoint"></div>
                {:else}
                    <div class="unfinished checkpoint"></div>
                {/if}
                <h3 class="centered-header">{OrderState.RECEIVED}<br>{blankIfNull(order.preparedDate)}</h3>
            </div>
            <div class="checkpoint-w-text">
                {#if preparedList.includes(order.currentState)}
                    <div class="finished checkpoint"></div>
                {:else}
                    <div class="unfinished checkpoint"></div>
                {/if}
                <h3 class="centered-header">{OrderState.PREPARED}<br>{blankIfNull(order.preparedDate)}</h3>
            </div>
            <div class="checkpoint-w-text">
                {#if paidList.includes(order.currentState)}
                    <div class="finished checkpoint"></div>
                {:else}
                    <div class="unfinished checkpoint"></div>
                {/if}
                <h3 class="centered-header">{OrderState.PAID}<br>{blankIfNull(order.preparedDate)}</h3>
            </div>
            <div class="checkpoint-w-text">
                {#if deliveredList.includes(order.currentState)}
                    <div class="finished checkpoint"></div>
                {:else}
                    <div class="unfinished checkpoint"></div>
                {/if}
                <h3 class="centered-header">{OrderState.DELIVERED}<br>{blankIfNull(order.preparedDate)}</h3>
            </div>
        </div>
    </Card>
</Cell>


<style>
    .food {
        width: 360px;
        height: 360px;
    }
    .food-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin: 1rem;
        padding: 1rem;
        justify-content: space-evenly;
    }
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