<script lang="ts">
  import { onMount } from 'svelte';
  import { jobs } from '$lib/data/jobs';
  import JobFilter from '$lib/components/jobs/JobFilter.svelte';
  import type { Job, JobType, JobLocation } from '$lib/types/job';
  
  // Client-side data loading
  let allJobs = jobs;
  let filteredJobs = [...allJobs];
  let searchTerm = '';
  let selectedType: JobType = 'all';
  let selectedLocation: JobLocation = 'all';
  
  // Filter jobs based on search term and filters
  function filterJobs() {
    filteredJobs = allJobs.filter(job => {
      const matchesSearch = searchTerm === '' || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (job.category?.toLowerCase().includes(searchTerm.toLowerCase()) || false);
      
      const matchesType = selectedType === 'all' || job.type === selectedType;
      const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
      
      return matchesSearch && matchesType && matchesLocation;
    });
  }
  
  // Direct filter change handler for JobFilter component
  function handleFilterChange(type: JobType, location: JobLocation) {
    selectedType = type;
    selectedLocation = location;
    filterJobs();
  }
  
  // Handle search term changes
  function handleSearchChange(event: Event) {
    searchTerm = (event.target as HTMLInputElement).value;
    filterJobs();
  }
  
  // Get unique locations and types for filters
  const locations = [...new Set(allJobs.map(job => job.location))];
  const types = [...new Set(allJobs.map(job => job.type))];
</script>

<div class="bg-gray-50 min-h-screen py-12">
  <div class="container mx-auto px-4">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-2">Job Opportunities</h1>
      <p class="text-center text-gray-600 mb-8">
        Explore our current openings and find your perfect role
      </p>

      <!-- Job Filter -->
      <div class="mb-8">
        <JobFilter 
          selectedType={selectedType}
          selectedLocation={selectedLocation}
          onFilterChange={handleFilterChange}
        />
        
        <div class="mt-4">
          <input
            type="text"
            placeholder="Search jobs..."
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            on:input={handleSearchChange}
          />
        </div>
      </div>

      <!-- Job Listings -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each filteredJobs as job}
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <h2 class="text-xl font-semibold text-gray-800">{job.title}</h2>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  {job.type}
                </span>
              </div>
              
              <div class="mb-4 text-sm text-gray-600">
                <div class="flex items-center mb-2">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </div>
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {job.category || 'General'}
                </div>
              </div>
              
              <p class="text-gray-600 mb-4 line-clamp-3">{job.description}</p>
              
              <div class="flex justify-between items-center">
                <a 
                  href={`#/jobs/${job.id}`} 
                  class="text-primary-600 hover:text-primary-800 font-medium"
                >
                  View Details
                </a>
                <a 
                  href={`#/local-application?position=${encodeURIComponent(job.title)}&employer=${encodeURIComponent(job.employer ?? 'Not specified')}`}
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <!-- No Jobs Message -->
      {#if filteredJobs.length === 0}
        <div class="text-center py-12">
          <h2 class="text-2xl font-semibold text-gray-600">
            No jobs match your search criteria
          </h2>
          <p class="mt-2 text-gray-500">
            Try adjusting your filters or search term
          </p>
        </div>
      {/if}
    </div>
  </div>
</div>
