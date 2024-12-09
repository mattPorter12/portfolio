<script>
  import ContactButton from "$lib/buttons/contact_button.svelte";
  import ExperienceButton from "$lib/buttons/experience_button.svelte";

  let icons = [['gmail', 'Send me an email: porter.matthew17@gmail.com', 'mailto:porter.matthew17@gmail.com'], ['linkedin','Add me as a connection', 'https://www.linkedin.com/in/mattporter12/'], ['instagram', 'Want a sneak peek into my life?', 'https://www.instagram.com/matthew_p0rter/' ]]

</script>



<div class="bg-gradient-to-b from-blue-200 to-sky-800 h-screen"> 
<!--<div class='bg-img h-screen'>-->
    <div class='flex flex-row justify-center items-center'>
        <h1 class='text-7xl p-10 text-center text-white'>Want to get in touch?</h1>

    </div>
    <div class="flex flex-row items-center justify-center">
        <div class="flex flex-col w-3/4">
            {#each icons as icon}
            <a href={icon[2]}>
                <div class="flex flex-row items-center space-x-4 p-4 m-4 bg-sky-800 rounded-xl">
                    <img 
                        src={'/src/images/' + icon[0] + '.png'}
                        class="w-32 h-32 object-contain" />
                    <p class="text-3xl text-white">{icon[1]}</p>
                </div>
            </a>
            {/each}
        </div>
        <!--
        <div class='flex flex-col'>
            <span class='flex flex-col w-1/2'>
                <div class=" flex items-end">
                    <img src="/src/images/hero.jpg" alt="heroimg" 
                        class=" object-cover rounded-3xl " />
                </div>
            </span>

        </div>
    -->
    </div>

    <div class='flex flex-row'>
        <span class='w-1/3  justify-items-end'>
            <ExperienceButton></ExperienceButton>
        </span>
    </div>
</div>