<script lang="ts">
  import type { Job } from '$lib/types/job';
  import { fade } from 'svelte/transition';
  import { formatSalary } from '$lib/utils/format';
  import CountryFlag from '$lib/components/shared/CountryFlag.svelte';

  export let job: Job;

  // Format salary with proper spacing
  $: formattedSalary = formatSalary(job.salary || '');

  // Get country code for flag
  $: countryCode = job.location.toLowerCase() === 'qatar' ? 'qa' : 'kw';
</script>

<div
  class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 job-card"
  in:fade={{ delay: 200 }}
  role="article"
  aria-labelledby="job-title-{job.id}"
>
  <div class="p-6">
    <!-- Job Header -->
    <div class="flex justify-between items-start mb-4">
      <div>
        <h3 id="job-title-{job.id}" class="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {job.title}
        </h3>
        <div class="flex items-center mt-2 space-x-2">
          <CountryFlag country={countryCode} size="sm" />
          <span class="text-gray-600 dark:text-gray-400">{job.location}</span>
          <span class="text-gray-400 dark:text-gray-500">•</span>
          <span class="text-gray-600 dark:text-gray-400">{job.type}</span>
        </div>
      </div>
      <!-- Prominent Salary Display -->
      <div class="bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-lg">
        <div class="text-xs text-primary dark:text-primary-light uppercase font-medium">Salary</div>
        <div class="text-lg font-bold text-primary dark:text-primary-light">{formattedSalary}</div>
      </div>
    </div>

    <!-- Job Description -->
    <p class="text-gray-600 dark:text-gray-400 mb-6">{job.description}</p>

    <!-- Requirements Section -->
    <div class="space-y-4">
      <div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
        <h4 class="font-medium text-gray-900 dark:text-gray-100 flex items-center mb-3">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Requirements
        </h4>
        <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1" role="list">
          {#each job.requirements as requirement}
            <li>{requirement}</li>
          {/each}
        </ul>
      </div>

      {#if job.type === 'international' && job.benefits && job.benefits.length > 0}
        <div class="mt-4">
          <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Benefits:</h4>
          <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {#each job.benefits as benefit}
              <li>{benefit}</li>
            {/each}
          </ul>
        </div>
      {/if}

      {#if job.benefits}
        <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <h4 class="font-medium text-gray-900 dark:text-gray-100 flex items-center mb-3">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Benefits Package
          </h4>
          <ul class="grid grid-cols-2 gap-2" role="list">
            {#each job.benefits as benefit}
              <li class="flex items-center text-gray-600 dark:text-gray-400">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {benefit}
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </div>

  <!-- Application Section -->
  <div class="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700">
    <div class="flex flex-col space-y-3">
      <div class="mt-6 flex flex-wrap gap-4">
        {#if job.type === 'international'}
          <a
            href="/apply/international?position={encodeURIComponent(job.title)}&employer={encodeURIComponent(job.employer || '')}"
            class="flex-1 inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            Apply Now
            <span class="ml-2 text-sm">(Registration Fee: 5,000 KSH)</span>
          </a>
        {:else}
          <a
            href="/apply/local?position={encodeURIComponent(job.title)}&employer={encodeURIComponent(job.employer || '')}"
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
    @apply transition-all duration-300 hover:shadow-lg;
  }
  .job-card:hover {
    transform: translateY(-4px);
  }
</style>
