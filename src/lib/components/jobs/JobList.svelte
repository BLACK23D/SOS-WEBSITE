<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { Job, JobType, JobLocation } from '$lib/types/job';
  import JobCard from './JobCard.svelte';
  import JobFilter from './JobFilter.svelte';

  export let jobs: Job[];

  let selectedType: JobType = 'all';
  let selectedLocation: JobLocation = 'all';

  $: filteredJobs = jobs.filter((job) => {
    const matchesType = selectedType === 'all' || job.type === selectedType;
    const matchesLocation =
      selectedLocation === 'all' || job.location.toLowerCase() === selectedLocation;
    return matchesType && matchesLocation;
  });

  function handleFilterChange(type: JobType, location: JobLocation) {
    selectedType = type;
    selectedLocation = location;
  }
</script>

<div class="container mx-auto px-4 py-12">
  <div class="text-center mb-12">
    <h1 class="text-4xl font-bold mb-4">Available Positions</h1>
    <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Explore our current job openings and find the perfect opportunity for your career growth.
    </p>
  </div>

  <JobFilter {selectedType} {selectedLocation} onFilterChange={handleFilterChange} />

  <div class="grid gap-8" in:fade={{ delay: 200 }}>
    {#each filteredJobs as job}
      <a
        href="/jobs/{job.id}"
        class="block transform transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg"
      >
        <JobCard {job} />
      </a>
    {/each}
  </div>

  {#if filteredJobs.length === 0}
    <div class="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg" in:fade>
      <svg
        class="w-16 h-16 mx-auto mb-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No jobs found</h2>
      <p class="text-gray-600 dark:text-gray-400">
        Try adjusting your filters or check back later for new opportunities.
      </p>
    </div>
  {/if}
</div>
