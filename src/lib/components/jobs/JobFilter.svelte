<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { JobType, JobLocation } from '$lib/types/job';

  export let selectedType: JobType = 'all';
  export let selectedLocation: JobLocation = 'all';
  export let onFilterChange: (type: JobType, location: JobLocation) => void;

  const jobTypes: (JobType | 'all')[] = ['all', 'international', 'local'];
  
  const jobLocations: JobLocation[] = ['all', 'Qatar', 'Kuwait'];

  function handleTypeChange(event: Event) {
    const type = (event.target as HTMLSelectElement).value as JobType;
    onFilterChange(type, selectedLocation);
  }

  function handleLocationChange(event: Event) {
    const location = (event.target as HTMLSelectElement).value as JobLocation;
    onFilterChange(selectedType, location);
  }
</script>

<div class="bg-gray-50 rounded-lg p-4" in:fade>
  <div class="flex flex-col sm:flex-row gap-4">
    <div>
      <label for="type" class="block text-sm font-medium text-gray-700 mb-2">
        Job Type
      </label>
      <select
        id="type"
        class="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
        value={selectedType}
        on:change={handleTypeChange}
      >
        {#each jobTypes as type}
          <option value={type}>
            {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        {/each}
      </select>
    </div>

    <div>
      <label for="location" class="block text-sm font-medium text-gray-700 mb-2">
        Location
      </label>
      <select
        id="location"
        class="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
        value={selectedLocation}
        on:change={handleLocationChange}
      >
        {#each jobLocations as location}
          <option value={location}>
            {location === 'all' ? 'All Locations' : location}
          </option>
        {/each}
      </select>
    </div>
  </div>
</div>
