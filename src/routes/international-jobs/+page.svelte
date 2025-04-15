<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import JobCard from '$lib/components/jobs/JobCard.svelte';
  import JobFilter from '$lib/components/jobs/JobFilter.svelte';
  import LoadingSpinner from '$lib/components/shared/LoadingSpinner.svelte';
  import ErrorAlert from '$lib/components/shared/ErrorAlert.svelte';
  import { generateJobSchema } from '$lib/utils/jobSchema';
  import type { PageData } from './$types';
  import type { JobType, JobLocation } from '$lib/types/jobTypes';
  import type { Job } from '$lib/types/job';

  export let data: PageData;
  const { jobs } = data;

  let isLoading = false;
  let error: string | null = null;
  let filteredJobs = jobs;
  let selectedType: JobType = 'international';
  let selectedLocation: JobLocation = 'all';

  // Generate JSON-LD schema for all jobs
  const jobSchemas = jobs.map((job, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'item': generateJobSchema(job)
  }));

  function handleFilterChange(type: JobType, location: JobLocation) {
    selectedType = type;
    selectedLocation = location;
    filterJobs();
  }

  function filterJobs() {
    filteredJobs = jobs.filter((job) => {
      const matchesType = selectedType === 'international';
      const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
      return matchesType && matchesLocation;
    });
  }
</script>

<svelte:head>
  <title>International Jobs in Qatar & Kuwait - SOS Recruitment</title>
  <meta
    name="description"
    content="Find international job opportunities in Qatar and Kuwait. Apply now for positions in healthcare, hospitality, transportation, and more. All jobs include food, transport, and accommodation."
  />
  
  <!-- JSON-LD -->
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": jobSchemas
    })}
  </script>
</svelte:head>

<div class="min-h-screen py-12 bg-gray-50">
  <div class="container mx-auto px-4">
    <!-- Hero Section -->
    <div class="text-center mb-12" in:fade>
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        International Job Opportunities
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Discover exciting career opportunities abroad with comprehensive benefits including food, transport, and accommodation.
      </p>
      <div class="flex justify-center space-x-4">
        <a
          href="/apply/international"
          class="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
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

    <!-- Job Filter -->
    <JobFilter
      {selectedType}
      {selectedLocation}
      onFilterChange={handleFilterChange}
    />

    <!-- Loading State -->
    {#if isLoading}
      <div class="flex justify-center py-12" in:fade>
        <LoadingSpinner size="lg" />
      </div>
    {:else if error}
      <ErrorAlert message={error} />
    {:else}
      <!-- No Results State -->
      {#if filteredJobs.length === 0}
        <div
          class="text-center py-12 bg-white rounded-lg shadow-lg"
          in:fade
        >
          <svg
            class="w-16 h-16 mx-auto mb-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 class="text-xl font-semibold text-gray-700 mb-2">
            No jobs found
          </h2>
          <p class="text-gray-600">
            Try adjusting your filters or check back later for new opportunities.
          </p>
        </div>
      {:else}
        <!-- Jobs Grid -->
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          role="list"
          aria-label="Job Listings"
        >
          {#each filteredJobs as job (job.id)}
            <JobCard {job} />
          {/each}
        </div>
      {/if}
    {/if}

    <!-- Call to Action -->
    <div class="bg-primary-500 text-white rounded-lg p-8 text-center mt-12" in:fade={{ delay: 400 }}>
      <h2 class="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your International Career?</h2>
      <p class="text-lg mb-6 max-w-2xl mx-auto">
        Submit your application today and take the first step towards your dream job abroad.
      </p>
      <a
        href="/apply/international"
        class="inline-flex items-center px-6 py-3 text-lg font-medium bg-white text-primary-500 rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
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

<style lang="postcss">
  /* Smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }

  /* Optimize touch targets on mobile */
  @media (max-width: 640px) {
    a {
      min-height: 44px;
      min-width: 44px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
