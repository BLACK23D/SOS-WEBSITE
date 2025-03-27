<script lang="ts">
  import { fade } from 'svelte/transition';
  import Button from '$lib/components/shared/Button.svelte';

  const jobs = [
    {
      title: 'Healthcare Workers - Saudi Arabia',
      location: 'Saudi Arabia',
      type: 'Full-time',
      description:
        'Join leading healthcare facilities in Saudi Arabia. Seeking qualified nurses and medical professionals.',
      requirements: [
        "Bachelor's degree in Nursing or related field",
        'Minimum 2 years experience',
        'Valid nursing license',
        'English proficiency'
      ]
    },
    {
      title: 'Construction Workers - Qatar',
      location: 'Qatar',
      type: 'Contract',
      description: 'Major construction projects seeking skilled workers for immediate deployment.',
      requirements: [
        'Relevant trade certification',
        '3+ years experience',
        'Physical fitness',
        'Basic English communication'
      ]
    },
    {
      title: 'Hospitality Staff - Dubai',
      location: 'UAE',
      type: 'Full-time',
      description:
        'Luxury hotels in Dubai hiring for various positions including front desk, housekeeping, and F&B.',
      requirements: [
        'Hospitality experience',
        'Customer service skills',
        'English proficiency',
        'Professional appearance'
      ]
    }
  ];
</script>

<svelte:head>
  <title>International Jobs - SOS Recruitment</title>
  <meta
    name="description"
    content="Explore international job opportunities with SOS Recruitment. Find your next career abroad."
  />
</svelte:head>

<div class="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <!-- Hero Section -->
    <div class="text-center mb-12" in:fade>
      <h1 class="text-4xl md:text-5xl font-bold mb-6">International Job Opportunities</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        Take your career global with our international job placements. We connect talented
        professionals with opportunities worldwide.
      </p>
      <div class="flex justify-center">
        <a
          href="/international-jobs/apply"
          class="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary hover:bg-primary-600 rounded-lg transition duration-150 ease-in-out transform hover:scale-105"
        >
          Apply Now
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Jobs Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {#each jobs as job}
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
          in:fade={{ delay: 200 }}
        >
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{job.title}</h3>
            <div class="flex items-center text-gray-600 dark:text-gray-400 mb-4">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{job.location}</span>
              <span class="mx-2">•</span>
              <span>{job.type}</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
            <div class="space-y-2">
              <h4 class="font-medium">Requirements:</h4>
              <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                {#each job.requirements as requirement}
                  <li>{requirement}</li>
                {/each}
              </ul>
            </div>
          </div>
          <div class="px-6 py-4 bg-gray-50 dark:bg-gray-700">
            <a
              href="/international-jobs/apply"
              class="block w-full text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition duration-150 ease-in-out"
            >
              Apply for this Position
            </a>
          </div>
        </div>
      {/each}
    </div>

    <!-- Call to Action -->
    <div class="bg-primary text-white rounded-lg p-8 text-center" in:fade={{ delay: 400 }}>
      <h2 class="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your International Career?</h2>
      <p class="text-lg mb-6 max-w-2xl mx-auto">
        Submit your application today and take the first step towards your dream job abroad.
      </p>
      <a
        href="/international-jobs/apply"
        class="inline-flex items-center px-6 py-3 text-lg font-medium bg-white text-primary rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out"
      >
        Apply Now
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  </div>
</div>

<style>
  /* Smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
