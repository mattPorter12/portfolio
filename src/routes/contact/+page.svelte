<script>
  import ContactButton from "$lib/buttons/contact_button.svelte";
  import ExperienceButton from "$lib/buttons/experience_button.svelte";

  import gmail from '$lib/images/gmail.png'
  import linkedin from '$lib/images/linkedin.png'
  import instagram from '$lib/images/instagram.png'

  let icons = [[gmail, 'Send me an email: porter.matthew17@gmail.com', 'mailto:porter.matthew17@gmail.com'], [linkedin,'Add me as a connection', 'https://www.linkedin.com/in/mattporter12/'], [instagram, 'Want a sneak peek into my life?', 'https://www.instagram.com/matthew_p0rter/' ]]

</script>



<!--<div class='bg-sky-200 m-4 rounded-3xl h-screen'>-->

<div class='bg-img h-screen p-3'>
    <div class='flex flex-row justify-center items-center'>
        <h1 class='text-7xl p-10 text-center text-sky-800'>Want to get in touch?</h1>

    </div>
    <div class="flex flex-row items-center justify-center">
        <div class="flex flex-col w-3/4">
            {#each icons as icon}
            <a href={icon[2]}>
                <div class="flex flex-row items-center space-x-4 p-4 m-4 bg-sky-800 rounded-xl">
                    <img 
                        src={icon[0]}
                        class="w-32 h-32 object-contain" />
                    <p class=" flex text-l sm:text-3xl text-white overflow-wrap break-all">{icon[1]}</p>
                </div>
            </a>
            {/each}
        </div>
    </div>

    <div class='flex flex-row'>
        <span class='w-1/3  justify-items-end'>
            <ExperienceButton></ExperienceButton>
        </span>
    </div>
</div>