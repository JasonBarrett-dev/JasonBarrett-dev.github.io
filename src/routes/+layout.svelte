<script lang="ts">
import { onNavigate } from '$app/navigation';

onNavigate((navigation) => {
    if (!document.startViewTransition) return;


    return new Promise((resolve) => {
        document.startViewTransition(async () => {
            resolve();
            await navigation.complete;
        });
    });
});
</script>

<nav>
    <div class="max-page-width">
        <a href="/">JB</a>
        <ul class="nav-right">
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
        </ul>
    </div>
</nav>

<div class="max-page-width">
    <slot></slot>
</div>

<style>
    nav {
        width: 100%;
        top: 0;
        margin: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 20px;
        position: sticky;
        /* backdrop-filter: blur(0.8); */
        /* background-color: rgb(15, 23, 42, 0.5); */
        display: flex;
        align-items: center;
        view-transition-name: header;
    }

    .nav-right {
        display: flex;
        margin-right: auto;
        float: right;
    }

    nav ul {
        margin-top: 0;
    }

    nav li {
        list-style-type: none;
        margin: 0;
        padding: 0 10px;
        display: inline;
    }

    li {
        display: inline;
    }

    .max-page-width {
        max-width: 900px;
        width: 100%;
        margin: auto;
        align-items: center;
        justify-content: center;
    }

    a, a:link, a:visited, a:hover, a:active {
        color: inherit;
        text-decoration: none;
    }

    /* View transitions */
    @keyframes fade-in {
        from {
            opacity: 0;
        }
    }

    @keyframes fade-out {
        to {
            opacity: 0;
        }
    }

    @keyframes slide-from-right {
        from {
            transform: translateX(30px);
        }
    }

    @keyframes slide-to-left {
        to {
            transform: translateX(-30px);
        }
    }

    :root::view-transition-old(root) {
        animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
    }

    :root::view-transition-new(root) {
        animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in, 300ms cubic-bezier(0.4, 0, 0.2, 1) both
                slide-from-right;
}
</style>