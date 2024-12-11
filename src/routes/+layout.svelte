<script>
	let { children } = $props();
    import {onMount} from 'svelte'
    import { base } from "$app/paths";
    onMount(() => {
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        })

        const mobileLinksSelector = document.getElementsByName('mobile-link')


        console.log(mobileLinksSelector)
        if (mobileLinksSelector) {

            let mobileLinks = [...mobileLinksSelector]
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden')
                })
            })

        }



    });
</script>

<header class="bg-sky-800 text-white shadow-md w-full py-6 ">
    <div class="mx-auto flex justify-between items-center">
        <!-- Home Icon -->
        <div class="text-2xl font-bold ml-10">
            <a href="{base}/" class="hover:text-blue-400 flex items-center">
                <svg class="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
            </a>
        </div>

        <!-- Navigation Links -->
        <nav>
            <ul class="hidden md:flex space-x-8 text-lg mr-8">
                <li><a href="{base}/" class="hover:text-blue-400">Skills</a></li>
                <li><a href="{base}/experience" class="hover:text-blue-400">Experience</a></li>
                <li><a href="{base}/contact" class="hover:text-blue-400">Contact</a></li>
            </ul>



            <!-- Hamburger Menu (Mobile) -->
            <button class="block md:hidden focus:outline-none" id="menu-btn">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            <!-- Mobile Menu -->
            <ul id="mobile-menu" class="hidden absolute left-0 w-full bg-sky-800 text-white text-right p-4 z-4">
                <li name='mobile-link'><a href="{base}/" class="hover:text-blue-400">Skills</a></li>
                <li name='mobile-link'><a href="{base}/experience" class="hover:text-blue-400">Experience</a></li>
                <li name='mobile-link'><a href="{base}/contact" class="hover:text-blue-400">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>

{@render children()}


<!--NEXT TIME: finish my 'experience' page and 'contacts' page-->