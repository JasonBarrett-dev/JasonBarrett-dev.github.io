<script lang="ts">
    export let startDate: Date;
    export let endDate: Date;
    export let technologies: Array<string>;

    const LOCALE = 'en-gb'
    let formattedStartDate = startDate.toLocaleDateString('en-gb', { year: "numeric", month: "short"})
    let formattedEndDate = endDate.toLocaleDateString('en-gb', { year: "numeric", month: "short"})


</script>


<div class="job-card">
    <p>{formattedStartDate} - {formattedEndDate}</p>
    <slot></slot>
    <ul class="technology-list">
    {#each technologies as tech}
        <li>{tech}</li>
    {/each}
    </ul>
</div>


<style>
.job-card {
    width: 80%;
}

.technology-list {
    display: flex;
}

.technology-list > li {
    margin: 10px;
}
</style>