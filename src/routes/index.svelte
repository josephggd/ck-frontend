<script>
    import MainWindow from "../component/MainWindow.svelte";
</script>

<svelte:head>
    <title>Cafe Kafka</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@1,300&display=swap" rel="stylesheet">
</svelte:head>
<svelte:component this={MainWindow}></svelte:component>
<style>
    :global(body) {
        font-family: Chivo,serif;
        background-color: #f2eee2;
        transition: background-color 3s
    }
</style>