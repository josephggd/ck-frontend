<script>
    export const DRAWIO = "LINK";
    export const GITHUB = "https://github.com/josephggd/cafe-kafka";
    export const SWAGGER = "/api/swagger-ui/index.html";
</script>

<div class="fadeIn explanation center-text">
    <h3>
        Cafe Kafka simulates a restaurant ordering experience
        using Springboot, SvelteKit, and Kafka.
    </h3><br>
    <p>
        Orders made from the frontend (left) are used to send Kafka
        messages. The messages are then aggregated to show an
        up-to-date status (right). No payment information and no
        "real-life" services are being processed.
    </p>
</div>

<div class="fadeIn docs">
    <a href={GITHUB} target="_blank">
        <img alt="missing" src="GitHub-Mark-64px.png">
    </a>
    <a href={DRAWIO} target="_blank">
        <img alt="missing" src="draw-io.png" class="logo">
    </a>
    <a href={SWAGGER} target="_blank">
        <img alt="missing" src="Swagger-logo.png" class="logo">
    </a>
</div>
<style>
    .center-text {
        text-align: center;
    }
    .fadeIn {
        animation: fadeUpAndIn 2s;
    }
    .docs {
        display: flex;
        flex-direction: row;
        position: relative;
        margin: 1rem;
        padding: 1rem;
        justify-content: space-around;
    }
    .explanation {
        display: flex;
        flex-direction: column;
        position: relative;
        margin: 1rem;
        padding: 1rem;
        align-items: center;
    }
    @keyframes fadeUpAndIn {
        from { opacity: 0; top:20px; }
        to { opacity: 100; top:0; }
    }
    .logo {
        height: 64px;
        width: 64px;
    }
</style>