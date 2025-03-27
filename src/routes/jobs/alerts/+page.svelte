<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { JobType } from '$lib/types';

  let email = '';
  let selectedTypes: string[] = [];
  let selectedLocations: string[] = [];
  let isSubmitting = false;
  let submitStatus: 'idle' | 'success' | 'error' = 'idle';

  const jobTypes: JobType[] = [
    { value: 'international', label: 'International Jobs' },
    { value: 'internal', label: 'Local Jobs' }
  ];

  const locations = [
    { value: 'saudi-arabia', label: 'Saudi Arabia' },
    { value: 'uae', label: 'United Arab Emirates' },
    { value: 'qatar', label: 'Qatar' },
    { value: 'kuwait', label: 'Kuwait' },
    { value: 'kenya', label: 'Kenya' }
  ];

  async function handleSubmit() {
    if (!email || selectedTypes.length === 0) return;

    isSubmitting = true;
    submitStatus = 'idle';

    try {
      const response = await fetch('/api/job-alerts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          jobTypes: selectedTypes,
          locations: selectedLocations
        })
      });

      if (response.ok) {
        submitStatus = 'success';
        email = '';
        selectedTypes = [];
        selectedLocations = [];
      } else {
        throw new Error('Failed to subscribe to job alerts');
      }
    } catch (error) {
      submitStatus = 'error';
      console.error('Job alerts subscription error:', error);
    } finally {
      isSubmitting = false;
    }
  }
</script>

<svelte:head>
  <title>Job Alerts - SOS Recruitment</title>
  <meta
    name="description"
    content="Subscribe to job alerts and get notified about new job opportunities that match your preferences."
  />
</svelte:head>

<div class="min-h-screen py-12 bg-gray-50 dark:bg-gray-900" in:fade>
  <div class="container mx-auto px-4">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Job Alerts</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Stay updated with the latest job opportunities. We'll notify you when new positions
          matching your preferences become available.
        </p>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <!-- Email -->
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              bind:value={email}
              required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>

          <!-- Job Types -->
          <div>
            <label for="jobTypes" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Job Types *
            </label>
            <div class="space-y-2">
              {#each jobTypes as type}
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    value={type.value}
                    bind:group={selectedTypes}
                    class="h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                  />
                  <span class="ml-2 text-gray-700 dark:text-gray-300">{type.label}</span>
                </label>
              {/each}
            </div>
          </div>

          <!-- Locations -->
          <div>
            <label for="locations" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Preferred Locations
            </label>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {#each locations as location}
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    value={location.value}
                    bind:group={selectedLocations}
                    class="h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                  />
                  <span class="ml-2 text-gray-700 dark:text-gray-300">{location.label}</span>
                </label>
              {/each}
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            disabled={isSubmitting || !email || selectedTypes.length === 0}
          >
            {#if isSubmitting}
              <span class="flex items-center justify-center">
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Subscribing...
              </span>
            {:else}
              Subscribe to Job Alerts
            {/if}
          </button>

          <!-- Status Messages -->
          {#if submitStatus === 'success'}
            <div
              class="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg"
            >
              Successfully subscribed to job alerts! We'll notify you when new matching positions
              become available.
            </div>
          {:else if submitStatus === 'error'}
            <div class="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg">
              Failed to subscribe to job alerts. Please try again later.
            </div>
          {/if}
        </form>
      </div>
    </div>
  </div>
</div>
