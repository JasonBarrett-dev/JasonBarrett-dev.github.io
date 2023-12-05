<script>
    import JobCard from "$lib/JobCard.svelte";
    import StravaProfile from "$lib/StravaProfile.svelte";

</script>

<p>About me</p>

<JobCard
    startDate={new Date(2020, 9)} endDate={new Date(2023, 3)}
    technologies={["Java", "Python", "JavaScript", "AWS", "Ruby", "SQL"]}>
    <ul>
        <li>
            Developing and maintaining high-scale services for orchestrating question-answering in Alexa. Primarily
            using Java for EC2 & Fargate services.
        </li>
        <li>
            Independently expanded coverage of a low-latency question-answering system (using OpenFST & Java) for
    answering spelling and calculation questions, reducing overall Alexa latency significantly across multiple
    locales.
        </li>
    </ul>
</JobCard>

<!--
    TODO add timeline of jobs / things here. Make a timeline element component and combine them.
    Copy content for timeline from latest CV.
 -->

<hr>

Outside of work, I'm a keen runner. I train with the Oxford University Cross Country Club and enjoy racing
distances from 5km to half marathons. At the time of writing, my 5km PB is 17:06 and my half-marathon PB is 76:55.



<StravaProfile></StravaProfile>


<style>
    hr {
        margin: 3em 1em;

    }
</style>
