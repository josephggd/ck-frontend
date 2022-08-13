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
    let orderedList = ["ORDERED", "PAID", "DELIVERED"];
    let paidList = ["DELIVERED", "PAID"];
    let deliveredList = ["DELIVERED"];
</script>

<div>
    <div class="box">
        <h1>Order Status:</h1>
        <div class="line-and-dot">
            {#if orderedList.includes(order.currentState)}
                <div class="finished progress"></div>
            {:else}
                <div class="unfinished progress"></div>
            {/if}
            <div class="checkpoint-w-text">
                {#if orderedList.includes(order.currentState)}
                    <div class="finished checkpoint"></div>
                {:else}
                    <div class="unfinished checkpoint"></div>
                {/if}
                <h3 class="centered-header">PREPARED</h3>
            </div>
        </div>
        <div class="line-and-dot">
            {#if deliveredList.includes(order.currentState)}
                <div class="finished progress"></div>
            {:else}
                <div class="unfinished progress"></div>
            {/if}
            <div class="checkpoint-w-text">
                {#if deliveredList.includes(order.currentState)}
                    <div class="finished checkpoint"></div>
                {:else}
                    <div class="unfinished checkpoint"></div>
                {/if}
                <h3 class="centered-header">PREPARED</h3>
            </div>
        </div>
        <div class="line-and-dot">
            {#if deliveredList.includes(order.currentState)}
                <div class="finished progress"></div>
            {:else}
                <div class="unfinished progress"></div>
            {/if}
            <div class="checkpoint-w-text">
                {#if deliveredList.includes(order.currentState)}
                    <div class="finished checkpoint"></div>
                {:else}
                    <div class="unfinished checkpoint"></div>
                {/if}
                <h3 class="centered-header">PREPARED</h3>
            </div>
        </div>
    </div>
</div>

<style>
    .unfinished {
        background: darkorange;
    }
    .finished {
        background: greenyellow;
    }
    .checkpoint {
        display: block;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }
    .progress {
        animation-fill-mode: forwards;
        display: flex;
        width: 1px;
        /*animation: progression 2s;*/
        position: relative;
        justify-content: space-evenly;
        margin: 1rem;
        padding: 1rem;
    }

    @keyframes progression {
        from {
            bottom: 0;
            height: 0;
        }
        to {
            top: 6rem;
            height: 6rem;
        }
    }
    .centered-header {
        text-align: center;
    }
    .checkpoint-w-text {
        justify-content:space-evenly;
        display: flex;
        flex-direction: row;
    }
    .box {
        margin-left: 2rem;
        margin-right: 2rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .line-and-dot {
        position:relative;
        top: 0;
        height:8rem;
    }
</style>