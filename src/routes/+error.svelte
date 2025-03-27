<script lang="ts">
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import Button from '$lib/components/shared/Button.svelte';
</script>

<div class="min-h-[60vh] flex items-center justify-center px-4" in:fade>
  <div class="text-center">
    <h1 class="text-6xl font-bold text-primary mb-4">
      {$page.status}
    </h1>
    <p class="text-2xl text-gray-600 dark:text-gray-400 mb-8">
      {#if $page.status === 404}
        Page not found
      {:else}
        {$page.error?.message || 'Something went wrong'}
      {/if}
    </p>
    <div class="flex justify-center gap-4">
      <Button href="/">Go Home</Button>
      <Button variant="secondary" href="/contact">Contact Support</Button>
    </div>
  </div>
</div>
