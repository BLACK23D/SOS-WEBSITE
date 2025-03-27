<!-- Team component -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import janeImg from '$lib/assets/images/SOS-Recruits-CEO-Jane-Mwaura.png';
  import andrewImg from '$lib/assets/images/Mr Andrew Director..jpeg';
  import waitheraImg from '$lib/assets/images/SOS-Recruits-Waithera.png';
  import susanImg from '$lib/assets/images/SOS-Recruits-Susan.png';
  import { onMount } from 'svelte';

  const teamMembers = [
    {
      name: 'Jane Mwaura',
      role: 'Chief Executive Officer (CEO)',
      image: janeImg,
      bio: 'Over 15 years of experience in international recruitment.',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'Mr Andrew',
      role: 'Director',
      image: andrewImg,
      bio: 'Experienced director overseeing strategic operations and growth.',
      social: {
        linkedin: 'https://linkedin.com'
      }
    },
    {
      name: 'Sarah Waithera',
      role: 'Senior Recruitment Consultant',
      image: waitheraImg,
      bio: 'Expert in healthcare and hospitality recruitment.',
      social: {
        linkedin: 'https://linkedin.com'
      }
    },
    {
      name: 'Susan',
      role: 'Head of Local Recruitment',
      image: susanImg,
      bio: 'Specialized in local market recruitment with extensive industry network.',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    }
  ];

  let loaded = Array(teamMembers.length).fill(false);
  
  function handleImageLoad(index: number) {
    loaded[index] = true;
  }
</script>

<section class="py-20 bg-gray-50 dark:bg-gray-800">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Team</h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Meet the dedicated professionals behind SOS Recruitment's success
      </p>
    </div>

    <div class="flex flex-nowrap gap-4 overflow-x-auto pb-4 snap-x">
      {#each teamMembers as member, i}
        <div 
          class="flex-none w-72 snap-start bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
          in:fade={{ duration: 300, delay: i * 150 }}
        >
          <div class="relative aspect-w-4 aspect-h-5">
            <div class="absolute inset-0 bg-gray-200 animate-pulse" class:hidden={loaded[i]}></div>
            <img
              src={member.image}
              alt={member.name}
              class="w-full h-full object-cover transition-opacity duration-300"
              class:opacity-0={!loaded[i]}
              class:opacity-100={loaded[i]}
              on:load={() => handleImageLoad(i)}
            />
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
            <p class="text-primary-600 dark:text-primary-400 mb-3">{member.role}</p>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
            
            <div class="flex space-x-4">
              {#if member.social.linkedin}
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              {/if}
              {#if member.social.twitter}
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <span class="sr-only">Twitter</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .overflow-x-auto::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .overflow-x-auto {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>
