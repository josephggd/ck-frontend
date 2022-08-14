<script lang="ts">
  import {Cell} from '@smui/layout-grid';
  import Card from "@smui/card";
  import CircularProgress from "@smui/circular-progress";
  import {MenuItem} from "../api/MenuItem";
  import {OrderState} from "../api/OrderState";
  import {OrderNav} from "../api/OrderNav";
  import Button, {Label} from "@smui/button";
  import {createOrder, deliverOrder, payOrder} from "../api/Api.js";
  import {deliveredList, paidList, preparedList, receivedList} from "../CommonStrings.js";
  import type {OrderHistory} from "../api/OrderHistory";
  import {getOrderHistoryAggregate} from "../api/Api";

  let orderState : OrderNav = OrderNav.BROWSING;
  let blankOrder:OrderHistory = {
    number : null,
    menuItem : null,
    currentState : null,
    receivedDate : null,
    preparedDate : null,
    paidDate : null,
    deliveredDate : null,
  };
  let order:OrderHistory = blankOrder;
  function blankIfNull( input:string | null){
    if (input==null){
      return "";
    }
    return input;
  }
  function updateHistory(){
    getOrderHistoryAggregate().then((data: OrderHistory)=>{
      order = data;
      return order;
    }).catch(()=>{
      order = blankOrder;
    });
  }
</script>

<Cell span={9}>
    <Card style="background-color: #801f00; opacity: .9;">
        {#if orderState===OrderNav.LOADING}
        <div style="display: flex; align-items: center; justify-content: center; margin: 5rem auto;">
            <CircularProgress style="height: 20rem; width: 20rem;" intermediate></CircularProgress>
        </div>
        {:else if orderState===OrderNav.BROWSING}
            <div style="display: flex; align-items: center; justify-content: center; margin: 15rem auto;">
                <Button style="width: 12rem;"
                        on:click={()=>orderState=OrderNav.ORDERING}
                        variant="unelevated">
                    <Label>May we take your order?</Label>
                </Button>
            </div>
        {:else if orderState===OrderNav.ORDERING}
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
                            createOrder(MenuItem.PIZZA).then(()=>{
                                updateHistory();
                            }).then(()=>{
                                orderState = OrderNav.PAYING;
                            });
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
                    <Button
                            style="width: 12rem;"
                            on:click={()=>{
                            createOrder(MenuItem.HAMBURGER).then(()=>{
                                updateHistory();
                            }).then(()=>{
                                orderState = OrderNav.PAYING;
                            });
                        }}
                            variant="unelevated">
                        <Label>{`order a ${MenuItem.HAMBURGER}`}</Label>
                    </Button>
                </div>
            </div>
        {:else if orderState===OrderNav.PAYING}
            <div style="display: flex; align-items: center; justify-content: center; margin: 15rem auto;">
                <Button style="width: 12rem;"
                        on:click={()=>{
                            payOrder().then(()=>{
                                updateHistory();
                            }).then(()=>{
                                orderState = OrderNav.DELIVERING;
                            });
                        }}
                        variant="unelevated">
                    <Label>PAY FOR ORDER?</Label>
                </Button>
            </div>
        {:else if orderState===OrderNav.DELIVERING}
            <div style="display: flex; align-items: center; justify-content: center; margin: 15rem auto;">
                <Button style="width: 12rem;"
                        on:click={()=>{
                            deliverOrder().then(()=>{
                                updateHistory();
                            }).then(()=>{
                                orderState = OrderNav.DELIVERED;
                            });
                        }}
                        variant="unelevated">
                    <Label>DELIVER THE ORDER?</Label>
                </Button>
            </div>
        {:else if orderState===OrderNav.DELIVERED}
            <div style="display: flex; align-items: center; justify-content: center; margin: 15rem auto;">
                <h2>THANK YOU FOR ORDERING!</h2>
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
                <h3 class="centered-header">{OrderState.RECEIVED}<br>{blankIfNull(order.receivedDate)}</h3>
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
                <h3 class="centered-header">{OrderState.PAID}<br>{blankIfNull(order.paidDate)}</h3>
            </div>
            <div class="checkpoint-w-text">
                {#if deliveredList.includes(order.currentState)}
                    <div class="finished checkpoint"></div>
                {:else}
                    <div class="unfinished checkpoint"></div>
                {/if}
                <h3 class="centered-header">{OrderState.DELIVERED}<br>{blankIfNull(order.deliveredDate)}</h3>
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