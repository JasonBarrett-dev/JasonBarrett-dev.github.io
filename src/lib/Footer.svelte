<script>
    import 'iconify-icon';
</script>
<footer>
    <div class="footer-row-1">
        Website made by me using&nbsp;<a href="https://kit.svelte.dev">SvelteKit</a>
    </div>

    <div class="footer-row-2">
        <iconify-icon icon="mdi:github"></iconify-icon>
        <iconify-icon icon="mdi:linkedin"></iconify-icon>
    </div>

    <!-- TODO add Github & LinkedIn icons & links here -->
</footer>

<style>
    footer {
        position: absolute;
        height: 2.5em;
        bottom: 0;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        left: 0;
        right: 0;
        view-transition-name: footer;
    }

    footer a {
        color: var(--link-color);
    }
</style>