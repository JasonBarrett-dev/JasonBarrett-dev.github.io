<script lang="ts">
    export let startDate: Date;
    export let endDate: Date;
    export let company: string;
    export let title: string;
    export let technologies: Array<string>;

    const LOCALE = 'en-gb'
    let formattedStartDate = startDate.toLocaleDateString(LOCALE, { year: "numeric", month: "short"})
    let formattedEndDate = endDate.toLocaleDateString(LOCALE, { year: "numeric", month: "short"})

</script>


<div class="job-card">
    <p>{formattedStartDate} - {formattedEndDate}, {company}</p>
    <p>{title}</p>
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
    margin: auto;
    border-color: var(--selected-color);
    border-style: solid;
    border: 1px;
    padding: 20px;
}

.technology-list {
    display: flex;
}

.technology-list > li {
    margin: 10px;
}
</style>