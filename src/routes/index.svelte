<script>
    import MainWindow from "../component/MainWindow.svelte";
</script>

<svelte:head>
    <title>Cafe Kafka</title>
</svelte:head>
<svelte:component this={MainWindow}></svelte:component>
<style>
    :global(body) {
        background-color: #f2eee2;
        transition: background-color 3s
    }
</style>