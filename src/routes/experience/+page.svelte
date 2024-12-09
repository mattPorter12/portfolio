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

<div class='body px-10  '>
    <div class='flex flex-row w-full   justify-center rounded-2xl p-4'>
        <span class='flex flex-col'>
            <div class='text-6xl text-center mb-10 py-10 '>Professional Experience</div>
            <Carousel {jobs}></Carousel> <!--#TODO add in an image to the other half of the div-->

        </span>
    </div>

    <div class='flex flex-row w-full   justify-center items-center text-center '>
        <div class='text-6xl p-10 '>Personal Projects </div>

    </div>
    <div class=' flex flex-row w-full bg-blue-100 rounded-3xl p-10'>

        <span class='w-1/2 '>
            <div class='flex flex-col'>
                <h1 class='text-4xl justify-center items-center text-center pb-10'>Gift Nerd</h1>
                <p class='text-xl'>Gift nerd is a tool I built to recommend gifts for your signicant others. It uses OpenAI API to get a gift recomendation based on a few variables including gender, age, and a few input interests. Built using React, Flask, and Firebase functions, this was an exciting personal project that delivers real-world value. 
                    <a href='https://giftnerd.io' class='text-blue-400'>
                        Check it out now! 
                     </a>
                </p>
            </div>
        </span>
        <span class='w-1/2'>
            <div class="justify-items-start">
                <img src="/src/images/giftnerd.png" alt="giftnerd" 
                    class=" object-cover rounded-3xl " />
            </div>
        </span>
    </div>
    <div class=' flex flex-row w-full bg-sky-800 rounded-3xl mt-10 p-10'>

        <span class='w-1/2 h-full'>
            <div class="  justify-items-start">
                <img src="/src/images/ccrayons.png" alt="ccrayonspic" 
                    class=" object-cover rounded-3xl " />
            </div>
        </span>

        <span class='w-1/2 text-white'>
            <div class='flex flex-col'>
                <h1 class='text-4xl justify-center items-center text-center pb-10'>Cash and Crayons</h1>
            </div>
                <p class='text-xl p-10'>Cash and Crayons is a blog I built for my wife! It is a WordPress/PhP blog that I manage. Filled with posts, backstory, affiliate links, forms, and everything else you'd want in a blog. <a href='https://cashandcrayons.com' class='text-blue-400'>Check it out now!</a>
                </p>

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