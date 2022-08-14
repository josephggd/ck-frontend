<script>
    export const DRAWIO = "LINK";
    export const GITHUB = "LINK";
    export const SWAGGER = "LINK";
</script>

<div class="fadeIn explanation">
    <h3>Cafe Kafka is a simulated restaurant ordering experience
        using Springboot, SvelteKit, and Kafka.</h3><br>
    <p>Orders made from the frontend (left) are used to send Kafka
        messages. The messages are then aggregated to show an
        up-to-date status (right).</p>
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
    .fadeIn {
        animation: fadeInUponHover 3s;
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
    @keyframes fadeInUponHover {
        from { opacity: 0; top:20px; }
        to { opacity: 100; top:0; }
    }
    .logo {
        height: 64px;
        width: 64px;
    }
</style>