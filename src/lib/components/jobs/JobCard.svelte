<script lang="ts">
  import type { Job } from '$lib/types/job';
  import { fade } from 'svelte/transition';
  import Button from '$lib/components/shared/Button.svelte';

  export let job: Job;

  const getApplyLink = (jobType: 'internal' | 'international') => {
    return jobType === 'international' ? '/apply/international' : '/apply';
  };
</script>

<div
  class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
  in:fade
>
  <div class="flex justify-between items-start mb-4">
    <div>
      <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {job.title}
      </h3>
      {#if job.company}
        <p class="text-gray-600 dark:text-gray-400 mt-1">{job.company}</p>
      {/if}
    </div>
    <div class="flex items-center space-x-2">
      <span
        class="px-3 py-1 text-sm rounded-full {job.type === 'international'
          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}"
      >
        {job.type === 'international' ? 'International' : 'Local'}
      </span>
    </div>
  </div>

  <div class="space-y-2 mb-4">
    <div class="flex items-center text-gray-600 dark:text-gray-400">
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
    </div>
    {#if job.salary}
      <div class="flex items-center text-gray-600 dark:text-gray-400">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{job.salary}</span>
      </div>
    {/if}
    <div class="flex items-center text-gray-600 dark:text-gray-400">
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span>Posted: {job.postedDate}</span>
    </div>
    {#if job.deadline}
      <div class="flex items-center text-gray-600 dark:text-gray-400">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Deadline: {job.deadline}</span>
      </div>
    {/if}
  </div>

  <div class="prose dark:prose-invert max-w-none mb-6">
    <p class="text-gray-700 dark:text-gray-300">{job.description}</p>
  </div>

  <div class="mb-6">
    <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Requirements:</h4>
    <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
      {#each job.requirements as requirement}
        <li>{requirement}</li>
      {/each}
    </ul>
  </div>

  <div class="flex justify-end">
    <a href={getApplyLink(job.type)} class="inline-block">
      <Button>
        Apply Now
        {#if job.type === 'international'}
          <span class="ml-1 text-sm">(Registration Fee: 5000 KSH)</span>
        {/if}
      </Button>
    </a>
  </div>
</div>
