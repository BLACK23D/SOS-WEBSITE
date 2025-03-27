<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { JobType, JobLocation } from '$lib/types/job';

  export let selectedType: JobType;
  export let selectedLocation: JobLocation;
  export let onFilterChange: (type: JobType, location: JobLocation) => void;

  const jobTypes: { value: JobType; label: string }[] = [
    { value: 'all', label: 'All Jobs' },
    { value: 'internal', label: 'Local Jobs' },
    { value: 'international', label: 'International Jobs' }
  ];

  const locations: { value: JobLocation; label: string }[] = [
    { value: 'all', label: 'All Locations' },
    { value: 'kenya', label: 'Kenya' },
    { value: 'qatar', label: 'Qatar' },
    { value: 'uae', label: 'UAE' },
    { value: 'saudi arabia', label: 'Saudi Arabia' },
    { value: 'bahrain', label: 'Bahrain' }
  ];

  function handleTypeChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    onFilterChange(select.value as JobType, selectedLocation);
  }

  function handleLocationChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    onFilterChange(selectedType, select.value as JobLocation);
  }
</script>

<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8" in:fade>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Job Type Filter -->
    <div>
      <label for="jobType" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Job Type
      </label>
      <select
        id="jobType"
        class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-primary"
        value={selectedType}
        on:change={handleTypeChange}
      >
        {#each jobTypes as type}
          <option value={type.value}>{type.label}</option>
        {/each}
      </select>
    </div>

    <!-- Location Filter -->
    <div>
      <label for="location" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Location
      </label>
      <select
        id="location"
        class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-primary"
        value={selectedLocation}
        on:change={handleLocationChange}
      >
        {#each locations as location}
          <option value={location.value}>{location.label}</option>
        {/each}
      </select>
    </div>
  </div>

  {#if selectedType === 'international'}
    <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg" in:fade>
      <p class="text-blue-800 dark:text-blue-200">
        <strong>Note:</strong> International job applications require a registration fee of 5000 KSH.
      </p>
    </div>
  {/if}
</div>
