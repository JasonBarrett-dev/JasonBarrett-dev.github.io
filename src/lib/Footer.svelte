<script>
    import 'iconify-icon';
</script>
<footer>
    <div class="footer-row-1">
        Website made by me using&nbsp;<a href="https://kit.svelte.dev">SvelteKit</a>
    </div>

    <div class="footer-row-2">
        <a href="https://github.com/JasonBarrett-dev" target="_blank"><iconify-icon icon="mdi:github"></iconify-icon></a>
        <a href="https://www.linkedin.com/in/jasonbarrett55/" target="_blank"><iconify-icon icon="mdi:linkedin"></iconify-icon></a>
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
        margin-top: 10px;
        margin-bottom: 10px;
        width: 100%;
        left: 0;
        right: 0;
        view-transition-name: footer;
    }

    footer a {
        color: var(--link-color);
    }

    .footer-row-1 {
        margin-bottom: 2px;
    }

    .footer-row-2 {
        font-size: 1.2em;
        line-height: 2em;
    }
</style>