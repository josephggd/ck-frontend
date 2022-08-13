<script>
    export const DRAWIO = "LINK";
    export const GITHUB = "LINK";
    export const SWAGGER = "LINK";
</script>

<div class="fadeIn">
    Cafe Kafka is a simulated restaurant ordering experience
    using Springboot, SvelteKit, and Kafka.
</div>

<div class="fadeIn">
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
        display: flex;
        flex-direction: row;
        animation: fadeInUponHover 3s;
        position: relative;
        margin: 1rem;
        padding: 1rem;
        justify-content: space-around;
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