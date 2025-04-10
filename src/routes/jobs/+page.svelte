<script lang="ts">
  import { fade } from 'svelte/transition';
  import JobList from '$lib/components/jobs/JobList.svelte';
  import JobFilter from '$lib/components/jobs/JobFilter.svelte';
  import type { PageData } from './$types';
  import type { JobType, JobLocation } from '$lib/types/job';

  export let data: PageData;
  
  let filteredJobs = data.jobs;
  let selectedType: JobType = 'all';
  let selectedLocation: JobLocation = 'all';

  function handleFilterChange(type: JobType, location: JobLocation) {
    selectedType = type;
    selectedLocation = location;
    filterJobs();
  }

  function filterJobs() {
    filteredJobs = data.jobs.filter((job) => {
      const matchesType = selectedType === 'all' || job.type === selectedType;
      const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
      return matchesType && matchesLocation;
    });
  }

  // Initial filter
  filterJobs();

  const jobCategories = [
    {
      title: 'International Jobs',
      description: 'Explore opportunities in the Middle East, Europe, and beyond',
      count: data.jobs.filter(job => job.type === 'international').length,
      icon: '🌍'
    },
    {
      title: 'Local Jobs',
      description: 'Find the best positions within Kenya',
      count: data.jobs.filter(job => job.type === 'local').length,
      icon: '🏢'
    },
    {
      title: 'Healthcare',
      description: 'Medical and healthcare positions worldwide',
      count: data.jobs.filter(job => job.category === 'healthcare').length,
      icon: '⚕️'
    },
    {
      title: 'Hospitality',
      description: 'Hotels, restaurants, and tourism opportunities',
      count: data.jobs.filter(job => job.category === 'hospitality').length,
      icon: '🏨'
    }
  ];
</script>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" in:fade>
  <!-- Hero Section -->
  <div class="relative bg-primary py-16">
    <div class="absolute inset-0 bg-primary-dark/10"></div>
    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Career Opportunities</h1>
        <p class="text-xl text-white max-w-3xl mx-auto">
          Discover your next career move with SOS Recruitment. We connect talented professionals with
          outstanding opportunities both locally and internationally.
        </p>
      </div>

      <!-- Job Categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {#each jobCategories as category}
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div class="text-4xl mb-4">{category.icon}</div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {category.title}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-3">{category.description}</p>
            <div class="text-primary font-medium">{category.count} positions</div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Job Listings -->
  <div class="container mx-auto px-4 py-16">
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Available Positions</h2>
        <JobFilter
          {selectedType}
          {selectedLocation}
          onFilterChange={handleFilterChange}
        />
      </div>
      <JobList jobs={filteredJobs} />
    </div>
  </div>
</div>
