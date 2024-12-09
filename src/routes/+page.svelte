
<script>

    import ExperienceButton from "$lib/buttons/experience_button.svelte";
import SkillsButton from "$lib/buttons/skills_button.svelte";
import Skills from "$lib/buttons/skills_button.svelte";

    let skills = {
        'Languages I speak': ['Python', 'Javascript', 'SQL', 'C#', 'C++', 'Swift/SwiftUI', 'R' , 'java'],
        'My favorite frameworks and tools': ['Django', 'React', 'Svelte', 'Tawilwind CSS', 'AWS S3', 'Google Cloud Storage', 'Git', 'Github Actions', 'Firebase', 'Firestore', 'MatPlotLib', 'Pandas'],
        'Soft Skills': [' Effective communicator', 'Proven leadership', 'Team-first mentality', 'Results Driven']

    }
    
    let skills_array = Object.entries(skills)
</script>


<div class="body px-10 ">

    <!-- Hero Section with Image, Name, and Descriptive Words -->
     <div id='outer_hero_wrapper' class="relative justify-between">
        <div id="hero_image" class="flex flex-row  items-center p-10 rounded-3xl " > <!--row-->

            <span class='flex flex-col w-1/4'></span>
            <!-- Image -->
            <span class='flex flex-col w-1/4'>
                <div class=" flex items-center justify-end ">
                    <img src="/src/images/hero.jpg" alt="heroimg" 
                        class=" object-cover rounded-3xl " />
                </div>
            </span>
        
            <!-- Text -->
            <span class='flex flex-col pl-10'>
                <div class="text-left justify-start">
                    <p class="text-[11rem] font-bold m-0 leading-[1]" >Matt</p>
                    <p class="text-[11rem] font-bold m-0 leading-[1] pb-8">Porter</p>

                    <!-- Descriptive words -->
                    <div class="flex flex-wrap   ">
                        <div class="items-center">
                            <p class="text-4xl font-medium flex items-center">
                                Innovator
                                <span class="block w-2 h-2 bg-gray-400 rounded-full mx-4"></span>
                            </p>
                        </div>
                        <div class="flex items-center">
                            <p class="text-4xl font-medium flex items-center">
                                Problem Solver
                                <span class="block w-2 h-2 bg-gray-400 rounded-full mx-4"></span>
                            </p>
                        </div>
                        <div class="flex items-center">
                            <p class="text-4xl font-medium">Tech Junky</p>
                        </div>
                    </div> <!--end descriptive words-->

                    <!-- Blue Box -->
                </div> <!--end right column-->
            </span>

        </div> <!-- end wrapper div-->
    </div>
                    <div class="bg-sky-800 shadow-md  rounded-xl p-4 text-white flex flex-wrap text-left text-2xl mb-32 mt-8 mx-96">
                        <p>I’m Matt Porter, a passionate full-stack developer with a strong focus on innovation and problem-solving. With a blend of creative thinking and technical expertise, I build solutions that drive efficiency and growth. Whether I'm architecting complex systems or solving challenging problems, my goal is always to deliver impactful results. Let’s build something great together!</p>
                    </div><!--blue box wrapper-->

    <div id='skills'  class="flex flex-row mt-16">
        <span class="w-1/3 "></span>
        <div class="flex flex-col flex-wrap items-center">
            {#each skills_array as [skill_type, skills]}
            <!-- Skill Type Title -->
            <div class="text-4xl font-bold text-sky-800 pb-6">{skill_type}</div>
        
            <!-- Skill Bubbles -->
            <div class="flex flex-wrap items-center justify-center gap-4 pb-8">
                {#each skills as skill}
                <div class="bubble">{skill}</div>
                {/each}
            </div>
            {/each}
        </div>
        <div class="w-1/3 ">
        </div>

    </div> <!--end skills row-->

    <div class="flex flex-row justify-items-start mt-16 ">
        <span class='w-2/3 '></span>
        <span class='w-1/3 '>
            <ExperienceButton></ExperienceButton>
        </span>
    </div> <!--end button row-->

</div>

