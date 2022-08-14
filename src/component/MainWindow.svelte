<script lang="ts">
  import LayoutGrid, {Cell} from '@smui/layout-grid';
  import Card from "@smui/card";
  import BottomAboutMenu from "./BottomAboutMenu.svelte";
  import OrderMenu from "./OrderMenu.svelte";
</script>

<LayoutGrid style="align-items: center;">
    <Cell span={12}>
        <Card style="background-color: #801f00; opacity: .9;">
            <div class="header">CAFE KAFKA</div>
        </Card>
    </Cell>
    <OrderMenu/>
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
