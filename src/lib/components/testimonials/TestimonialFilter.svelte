<script lang="ts">
  import { fade } from 'svelte/transition';

  export let selectedType: 'all' | 'worker' | 'corporate';
  export let onFilterChange: (type: 'all' | 'worker' | 'corporate') => void;

  const filters = [
    { type: 'all', label: 'All Stories' },
    { type: 'worker', label: 'Job Seekers' },
    { type: 'corporate', label: 'Corporate Partners' }
  ] as const;
</script>

<div class="flex flex-wrap justify-center gap-4 mb-12" in:fade={{ delay: 200 }}>
  {#each filters as filter}
    <button
      class="px-6 py-2 rounded-full transition-all duration-300 {selectedType === filter.type
        ? 'bg-primary text-white'
        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}"
      on:click={() => onFilterChange(filter.type)}
    >
      {filter.label}
    </button>
  {/each}
</div>
