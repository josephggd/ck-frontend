<script lang="ts">
  import LayoutGrid, {Cell} from '@smui/layout-grid';
  import Card from "@smui/card";
  import CircularProgress from "@smui/circular-progress";
  import MenuItem from "./MenuItem.svelte";
  import RightOrderStatus from "./RightOrderStatus.svelte";
  import BottomAboutMenu from "./BottomAboutMenu.svelte";
  import {OrderState} from "../api/OrderState";
  import Button, {Label} from "@smui/button";
  let orderState : OrderState = OrderState.BROWSING;
</script>

<LayoutGrid style="align-items: center;">
    <Cell span={12}>
        <Card style="background-color: #801f00; opacity: .9;">
            <div class="header">HOME</div>
        </Card>
    </Cell>
    {#if orderState===OrderState.BROWSING}
        <Cell span={9}>
            <Card style="height:30rem; background-color: #801f00; opacity: .9;">
                <div style="display: flex; align-items: center; justify-content: center; margin: 15rem auto;">
                    <Button style="width: 12rem;"
                            on:click={()=>orderState=OrderState.ORDERING}
                            variant="unelevated">
                        <Label>May we take your order?</Label>
                    </Button>
                </div>
            </Card>
        </Cell>
    {:else if orderState===OrderState.ORDERING}
        <Cell span={9}>
            <Card style="height:30rem; background-color: #801f00; opacity: .9;">
                <div style="margin: 4rem; display: flex; flex-direction: row; justify-content: space-evenly; ">
                    <MenuItem
                        orderState={orderState}
                        menuItem={"PIZZA"}
                    />
                    <MenuItem
                        orderState={orderState}
                        menuItem={"HAMBURGER"}
                    />
                </div>
            </Card>
        </Cell>
    {:else if orderState===OrderState.ORDERED}
        <Cell span={9}>
            <Card style="background-color: #801f00; opacity: .9;">
                <div style="margin: 4rem; display: flex; flex-direction: row; justify-content: space-evenly; ">
                    <CircularProgress style="height: 30rem; width: 30rem;" intermediate></CircularProgress>
                </div>
            </Card>
        </Cell>
    {/if}
    <Cell span={3}>
        <Card style="height:30rem; background-color: #801f00; opacity: .9;">
            <svelte:component this={RightOrderStatus}></svelte:component>
        </Card>
    </Cell>
    <Cell span={12}>
        <Card style="background-color: #801f00; opacity: .9;">
            <svelte:component this={BottomAboutMenu}></svelte:component>
        </Card>
    </Cell>
</LayoutGrid>

<style>
    .header {
        color: lightcoral;
        background-color: transparent;
        height: 120px;
        font-size: 5rem;
        margin: 2rem;
    }
</style>
