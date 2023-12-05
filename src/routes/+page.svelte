<script>

    import Footer from "$lib/Footer.svelte";

</script>

<div class="homepage">
    <div class="center-vertical">
        <h1 id="name" class="title-page">Jason Barrett</h1>
        <h2 id="role" class="title-page">Software Engineer</h2>
    </div>

    <Footer></Footer>
</div>


<style>

.homepage {
    display: flex;
    flex-direction: column;
}

.center-vertical {
    margin-top: 20vh;
    align-content: center;
}

#name {
    font-size: 10vh;
}

.title-page {
    text-align: center;
}
</style>