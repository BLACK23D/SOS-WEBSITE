<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { Job } from '$lib/types/job';
  import JobApplicationForm from '$lib/components/jobs/JobApplicationForm.svelte';
  import Button from '$lib/components/shared/Button.svelte';

  export let data: { job: Job };
  let showApplicationForm = false;

  function toggleApplicationForm() {
    showApplicationForm = !showApplicationForm;
  }
</script>

<div class="container mx-auto px-4 py-12" in:fade>
  <!-- Job Header -->
  <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">
      {data.job.title}
    </h1>

    <div class="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
      {#if data.job.company}
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          {data.job.company}
        </div>
      {/if}

      <div class="flex items-center">
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
        {data.job.location}
      </div>

      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        {data.job.type === 'local' ? 'Local Position' : 'International Position'}
      </div>

      {#if data.job.salary}
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {data.job.salary}
        </div>
      {/if}

      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Posted: {data.job.postedDate}
      </div>

      {#if data.job.deadline}
        <div class="flex items-center text-red-600">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Deadline: {data.job.deadline}
        </div>
      {/if}
    </div>

    <Button on:click={toggleApplicationForm}>
      {showApplicationForm ? 'Hide Application Form' : 'Apply Now'}
    </Button>
  </div>

  <!-- Job Details -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div class="lg:col-span-2 space-y-8">
      <!-- Description -->
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
        <div class="prose max-w-none">
          {data.job.description}
        </div>
      </div>

      <!-- Requirements -->
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          {#each data.job.requirements as requirement}
            <li>{requirement}</li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Application Form -->
    <div class="lg:col-span-3">
      {#if showApplicationForm}
        <div transition:fade>
          <JobApplicationForm job={data.job} />
        </div>
      {/if}
    </div>
  </div>
</div>
