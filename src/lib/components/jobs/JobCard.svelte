<script lang="ts">
  import type { Job } from '$lib/types/job';
  import { fade } from 'svelte/transition';
  import { formatSalary } from '$lib/utils/format';
  import CountryFlag from '$lib/components/shared/CountryFlag.svelte';

  export let job: Job;

  // Format salary with proper spacing
  $: formattedSalary = job.salary ? formatSalary(job.salary) : 'Not specified';

  // Get country code for flag
  $: countryCode = job.location.toLowerCase() === 'qatar' ? 'qa' : 'kw';
</script>

<div
  class="bg-white rounded-lg shadow-lg overflow-hidden job-card h-full flex flex-col"
  in:fade={{ delay: 200 }}
  role="article"
  aria-labelledby="job-title-{job.id}"
>
  <div class="p-6 flex-grow">
    <!-- Job Header -->
    <div class="flex justify-between items-start mb-4">
      <div>
        <h3 id="job-title-{job.id}" class="text-xl font-semibold text-gray-900">
          {job.title}
        </h3>
        <div class="flex items-center mt-2 space-x-2">
          <CountryFlag country={countryCode} size="sm" />
          <span class="text-gray-600">{job.location}</span>
          <span class="text-gray-400">•</span>
          <span class="text-gray-600">{job.type}</span>
        </div>
      </div>
      <!-- Prominent Salary Display -->
      <div class="bg-primary-100/20 px-4 py-2 rounded-lg">
        <div class="text-xs text-primary-700 uppercase font-medium">Salary</div>
        <div class="text-lg font-bold text-primary-800">{formattedSalary}</div>
      </div>
    </div>

    <!-- Job Description -->
    <p class="text-gray-600 mb-6">{job.description}</p>

    <!-- Requirements Section -->
    <div class="space-y-4">
      <div class="bg-gray-50 rounded-lg p-4">
        <h4 class="font-medium text-gray-900 flex items-center mb-3">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Requirements
        </h4>
        <ul class="list-disc list-inside text-gray-600 space-y-1" role="list">
          {#each job.requirements as requirement}
            <li>{requirement}</li>
          {/each}
        </ul>
      </div>

      {#if job.benefits && job.benefits.length > 0}
        <div class="bg-green-50 rounded-lg p-4">
          <h4 class="font-medium text-gray-900 flex items-center mb-3">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Benefits Package
          </h4>
          <ul class="flex flex-col space-y-2" role="list">
            {#each job.benefits as benefit}
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">{benefit}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </div>

  <!-- Application Section -->
  <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 mt-auto">
    <div class="flex flex-col space-y-3">
      <div class="flex flex-wrap gap-4">
        {#if job.type === 'international'}
          <a
            href="/apply/international?position={encodeURIComponent(job.title)}&employer={encodeURIComponent(job.employer ?? 'Not specified')}"
            class="flex-1 inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            Apply Now
            <span class="ml-2 text-sm">(Registration Fee: 5,000 KSH)</span>
          </a>
        {:else}
          <a
            href="/apply/local?position={encodeURIComponent(job.title)}&employer={encodeURIComponent(job.employer ?? 'Not specified')}"
            class="flex-1 inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            Apply Now
          </a>
        {/if}
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .job-card {
    @apply transition-all duration-300;
  }
  .job-card:hover {
    @apply shadow-lg transform -translate-y-1;
  }
</style>
