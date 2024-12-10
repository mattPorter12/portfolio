<script>
    import ContactButton from "$lib/buttons/contact_button.svelte";
    import SkillsButton from "$lib/buttons/skills_button.svelte";
    import Carousel from "$lib/components/carousel.svelte";
    import { onMount } from "svelte";

    let currentJobIndex = 0;
    let jobs = []
    onMount(async () => {
        const response = await fetch('/src/data/jobs.json')
        jobs = await response.json();
        console.log(jobs)
    })
</script>

<div class='body px-2 md:px-10  '>
        <div class="flex flex-col w-full justify-center items-center rounded-2xl ">
            <div class="text-4xl sm:text-6xl text-center mb-8 py-6 sm:py-10 text-sky-800">
                Professional Experience
            </div>
            <div class="relative w-full max-w-full sm:max-w-4xl mx-auto">
                    <!-- Ensure the carousel respects the width constraints -->
                    <Carousel {jobs} />
            </div>
        </div>

    <div class='flex flex-row w-full   justify-center items-center text-center '>
        <div class='text-6xl p-10 text-sky-800'>Personal Projects </div>

    </div>
    <div class=' flex flex-col sm:flex-row w-full bg-blue-100 rounded-3xl p-10'>

        <span class='md:w-1/2 w-full flex flex-col '>
                <h1 class='text-4xl justify-center items-center text-center pb-10'>Gift Nerd</h1>
                <p class='text-xl'>Gift nerd is a tool I built to recommend gifts for your signicant others. It uses OpenAI API to get a gift recomendation based on a few variables including gender, age, and a few input interests. Built using React, Flask, and Firebase functions, this was an exciting personal project that delivers real-world value. 
                    <a href='https://giftnerd.io' class='text-blue-400'>
                        Check it out now! 
                     </a>
                </p>
        </span>
        <span class='sm:w-1/2 flex  justify-center items-center sm:justify-items-center sm: '>
            <div class="justify-items-start ">
                <img src="/src/images/giftnerd.png" alt="giftnerd" 
                    class=" object-cover rounded-3xl " />
            </div>
        </span>
    </div>


    <div class=' flex flex-col sm:flex-row w-full bg-sky-800 rounded-3xl mt-10 p-10'>

        <span class='sm:w-1/2 flex  justify-center items-center sm:justify-items-center sm: '>
            <div class="justify-items-start ">
                <img src="/src/images/ccrayons.png" alt="ccrayonspic" 
                    class=" object-cover rounded-3xl " />
            </div>
        </span>

        <span class='md:w-1/2 w-full flex flex-col text-white'>
                <h1 class='text-4xl justify-center items-center text-center sm:pb-10'>Cash and Crayons</h1>
                <p class='text-xl p-10'>Cash and Crayons is a blog I built for my wife! It is a WordPress/PhP blog that I manage. Filled with posts, backstory, affiliate links, forms, and everything else you'd want in a blog. <a href='https://cashandcrayons.com' class='text-blue-400'>Check it out now!</a></p>
                
        </span>
    </div>

 
                     


    <!--buttons row-->
    <div class='flex flex-row '>


        <span class='w-1/3  justify-items-end'>
            <SkillsButton class= ' justify-items-end' ></SkillsButton>
        </span>
        <span class='w-1/3 '></span>
        <span class='w-1/3 justify-items-start'>
        <ContactButton ></ContactButton>
        </span>
    </div>

</div>