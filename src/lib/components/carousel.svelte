<script>
  import { onMount } from "svelte";

    export let jobs = []; // Expect job data as a prop
    let currentIndex = 0;
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + jobs.length) % jobs.length;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % jobs.length;
    }
    
    onMount(() => {

        console.log("Trying to render carousel")
        console.log("jobs" + jobs.length)
    })

    $: console.log("Updated jobs:", jobs);
  </script>
  
  <div class='flex flex-row bg-sky-800 shadow-md rounded-3xl w-full p-20'>
    <div class="flex flex-col  items-center justify-center p-3 ">
        <!-- Navigation Buttons -->
        <button
        on:click={prevSlide}
        class=" self-center justify-center bg-gray-800 text-white px-4 py-2 rounded-full"
        >
        Prev
        </button>

    </div>
    <div class='flex flex-col items-center'>
        <div class="relative w-full max-w-4xl  overflow-hidden">
            <!-- Carousel Container -->
            <div
            class="flex transition-transform duration-500 ease-in-out"
            style="transform: translateX(-{currentIndex * 100}%);"
            >
            {#if jobs.length > 0}
            {#each jobs as job}
                <!-- Job Card -->
                <div class="min-w-full bg-white p-6  rounded-lg">
                <h2 class="text-xl font-bold mb-2">{job.job_name}</h2>
                <p class="text-gray-600 mb-1">{job.company_name}</p>
                <p class="text-gray-500 mb-4">{job.date_range[0] + " - " + job.date_range[1]}</p>
                <ul class="list-disc pl-6">
                    {#each job.bullet_points as point}
                    <li>{point}</li>
                    {/each}
                </ul>
                </div>
            {/each}
            {:else}
            <p>Loading jobs...</p>
            {/if}
            </div>
    </div>
    </div>

    
    <div class="flex flex-col  items-center justify-center p-3">
        <button
        on:click={nextSlide}
        class="  bg-gray-800 text-white px-4 py-2 rounded-full"
        >
        Next
        </button>
    </div>
  </div>