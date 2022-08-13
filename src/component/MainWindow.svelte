<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Card from "@smui/card";
  import CircularProgress from "@smui/circular-progress";
  import MenuItem from "./MenuItem.svelte";
  import RightOrderStatus from "./RightOrderStatus.svelte";
  import BottomAboutMenu from "./BottomAboutMenu.svelte";
  let showPizzaButton = false;
  let showHamburgerButton = false;

  let ordering = false;
</script>

<LayoutGrid style="align-items: center;">
    <Cell span={12}>
        <Card style="background-color: #801f00; opacity: .9;">
            <div class="header">HOME</div>
        </Card>
    </Cell>
    {#if ordering}
        <Cell span={9}>
            <Card style="background-color: #801f00; opacity: .9;">
                <div style="margin: 4rem; display: flex; flex-direction: row; justify-content: space-evenly; ">
                    <CircularProgress style="height: 30rem; width: 30rem;" intermediate></CircularProgress>
                </div>
            </Card>
        </Cell>
    {:else}
        <Cell span={9}>
            <Card style="background-color: #801f00; opacity: .9;">
                <div style="margin: 4rem; display: flex; flex-direction: row; justify-content: space-evenly; ">
                    <MenuItem
                        menuItem="pizza"
                    />
                    <MenuItem
                        menuItem="hamburger"
                    />
                </div>
            </Card>
        </Cell>
    {/if}
    <Cell span={3}>
        <Card style="background-color: #801f00; opacity: .9;">
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
