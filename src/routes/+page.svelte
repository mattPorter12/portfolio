
<script>

    let skills = {
        'Languages I speak': ['Python', 'Javascript', 'SQL', 'C#', 'C++', 'Swift/SwiftUI', 'R'],
        'My favorite frameworks and tools': ['Django', 'React', 'Svelte', 'Tawilwind CSS', 'MatplotLib', 'AWS S3', 'Google Cloud Storage', 'Git', 'Github Actions'],
        'Soft Skills': [' Effective communicator', 'Proven leadership', 'Team-first mentality']

    }
    
    let skills_array = Object.entries(skills)
</script>


<div class="body">
    <!-- Hero Section with Image, Name, and Descriptive Words -->
     <div id='outer_hero_wrapper' class="py-12 sm:py-0 relative justify-between">
        <div id="hero_image" class="flex mb-8 flex-col sm:flex-row justify-start items-center mx-auto w-full sm:w-auto h-[75vh] sm:ml-10 ">
            <!-- Image -->
            <div class="w-1/2 flex items-center justify-end pr-10">
                <img src="/src/images/hero.jpg" alt="heroimg" 
                    class=" object-cover rounded-3xl sm:w-1/2 sm:h-5/12" />
            </div>
        
            <!-- Text -->
            <div class="text-left justify-start sm:w-1/2 sm:flex sm:flex-col sm:items-start sm:pt-32">
                <p class="text-[11rem] font-bold m-0 leading-[1]" >Matt</p>
                <p class="text-[11rem] font-bold m-0 leading-[1] pb-8">Porter</p>

                <!-- Descriptive words -->
                <div class="flex flex-wrap sm:flex-nowrap items-center sm:justify-start gap-y-2 gap-x-4">
                    <div class="flex items-center">
                        <p class="text-3xl font-medium flex items-center">
                            Innovator
                            <span class="hidden sm:block w-2 h-2 bg-gray-400 rounded-full mx-4"></span>
                        </p>
                    </div>
                    <div class="flex items-center">
                        <p class="text-3xl font-medium flex items-center">
                            Problem Solver
                            <span class="hidden sm:block w-2 h-2 bg-gray-400 rounded-full mx-4"></span>
                        </p>
                    </div>
                    <div class="flex items-center">
                        <p class="text-3xl font-medium">Tech Junky</p>
                    </div>
                </div>
                <!-- Blue Box -->
                <div class='mb-32'>
                    <div class="bg-sky-800 shadow-md hover:scale-105 rounded-xl p-4 text-white flex flex-wrap text-left text-xl sm:w-1/2 sm:h-5/12 sm:flex sm:items-start sm:mt-8 ">
                        <p>I’m Matt Porter, a passionate full-stack developer with a strong focus on innovation and problem-solving. With a blend of creative thinking and technical expertise, I build solutions that drive efficiency and growth. Whether I'm architecting complex systems or solving challenging problems, my goal is always to deliver impactful results. Let’s build something great together!</p>
                    </div>
                </div>
            </div> <!--end right column-->
        </div> <!-- end wrapper div-->
    </div>

    <div id='skills'  class="flex flex-row">
        <div class="w-1/2"></div>
        <div class="flex flex-col flex-wrap items-center">
            {#each skills_array as [skill_type, skills]}
            <!-- Skill Type Title -->
            <div class="text-4xl font-bold text-sky-800 pb-6">{skill_type}</div>
        
            <!-- Skill Bubbles -->
            <div class="flex flex-wrap justify-start gap-4 pb-8">
                {#each skills as skill}
                <div class="bubble">{skill}</div>
                {/each}
            </div>
            {/each}
        </div>
        <div class="w-1/2">
        <!-- Button -->
        </div>

    </div> <!--end skills row-->

    <div class="flex flex-row justify-start mt-16 ">
        <span class='w-2/3'></span>
        <button class="bg-sky-800 text-white py-3 px-8 rounded-lg text-lg hover:bg-sky-600 transition">
            Check out my skills in action
        </button>
    </div> <!--end button row-->

</div>

