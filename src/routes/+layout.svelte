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
    }

    .nav-right {
        display: flex;
        margin-right: auto;
        float: right;
    }

    nav ul {
        margin-top: 0;;
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
</style>