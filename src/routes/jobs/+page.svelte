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

  // Helper function to determine job category
  function getJobCategory(title: string): string {
    const title_lower = title.toLowerCase();
    if (title_lower.includes('nurse') || title_lower.includes('medical') || title_lower.includes('healthcare')) {
      return 'healthcare';
    }
    if (title_lower.includes('barista') || title_lower.includes('waiter') || title_lower.includes('waitress') || 
        title_lower.includes('butler') || title_lower.includes('hospitality')) {
      return 'hospitality';
    }
    if (title_lower.includes('driver') || title_lower.includes('rider') || title_lower.includes('transport')) {
      return 'transport';
    }
    if (title_lower.includes('cleaner') || title_lower.includes('washer')) {
      return 'cleaning';
    }
    if (title_lower.includes('safety') || title_lower.includes('security')) {
      return 'safety';
    }
    return 'other';
  }

  const jobCategories = [
    {
      title: 'International Jobs',
      description: 'Explore opportunities in Qatar, Kuwait, and beyond',
      count: data.jobs.filter(job => job.type === 'international').length,
      icon: '🌍'
    },
    {
      title: 'Healthcare',
      description: 'Nursing and medical positions',
      count: data.jobs.filter(job => getJobCategory(job.title) === 'healthcare').length,
      icon: '⚕️'
    },
    {
      title: 'Hospitality',
      description: 'Barista, waitstaff, and butler positions',
      count: data.jobs.filter(job => getJobCategory(job.title) === 'hospitality').length,
      icon: '🏨'
    },
    {
      title: 'Transport',
      description: 'Drivers and delivery positions',
      count: data.jobs.filter(job => getJobCategory(job.title) === 'transport').length,
      icon: '🚗'
    },
    {
      title: 'Cleaning Services',
      description: 'Cleaning and car wash positions',
      count: data.jobs.filter(job => getJobCategory(job.title) === 'cleaning').length,
      icon: '🧹'
    },
    {
      title: 'Safety & Security',
      description: 'Safety officer positions',
      count: data.jobs.filter(job => getJobCategory(job.title) === 'safety').length,
      icon: '🛡️'
    }
  ];
</script>

<svelte:head>
  <title>Job Listings - SOS Recruitment</title>
  <meta name="description" content="Browse our current job openings in Kenya and internationally. Find opportunities in healthcare, hospitality, transport, cleaning services, and safety & security." />
  
  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="Job Listings - SOS Recruitment" />
  <meta property="og:description" content="Browse our current job openings in Kenya and internationally. Find opportunities in healthcare, hospitality, transport, cleaning services, and safety & security." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://sos-recruitment.com/jobs" />
  
  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Job Listings - SOS Recruitment" />
  <meta name="twitter:description" content="Browse our current job openings in Kenya and internationally. Find opportunities in healthcare, hospitality, transport, cleaning services, and safety & security." />
</svelte:head>

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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Available Positions</h2>
        <div class="w-full md:w-auto">
          <JobFilter
            {selectedType}
            {selectedLocation}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>
      <JobList jobs={filteredJobs} />
    </div>
  </div>
</div>
