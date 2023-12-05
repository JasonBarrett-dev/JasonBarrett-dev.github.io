
<nav>
    <div class="max-page-width">
        <a href="/">JB</a>
        <ul class="nav-right">
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
        </ul>
    </div>
</nav>

<style>
    nav {
        width: 100%;
        top: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 20px;
        position: sticky;
        /* backdrop-filter: blur(0.8); */
        /* background-color: rgb(15, 23, 42, 0.5); */
        display: flex;
        align-items: center;
        background: transparent;
        backdrop-filter: blur(10px);
        view-transition-name: header;
    }

    .nav-right {
        display: flex;
        margin-right: auto;
        float: right;
    }

    nav ul {
        margin: 0;
    }

    nav li {
        list-style-type: none;
        margin: 0;
        display: inline;
    }

    nav a {
        padding: 10px
    }

    li {
        display: inline;
    }

    nav a {
        color: inherit;
        text-decoration: none;
    }

</style>