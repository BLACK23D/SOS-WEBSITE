<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import ErrorAlert from '$lib/components/shared/ErrorAlert.svelte';
  
  let formError = false;
  let formLoading = true;
  let formSubmitted = false;

  onMount(() => {
    const handleIFrameMessage = (e: MessageEvent) => {
      if (typeof e.data === 'object') return;
      
      const args = e.data.split(':');
      const iframe = document.getElementById('JotFormIFrame') as HTMLIFrameElement;
      
      if (!iframe) return;
      
      switch (args[0]) {
        case 'setHeight':
          iframe.style.height = args[1] + 'px';
          break;
        case 'formSubmitted':
          formSubmitted = true;
          break;
      }
    };

    window.addEventListener('message', handleIFrameMessage, false);
    return () => window.removeEventListener('message', handleIFrameMessage);
  });
</script>

<svelte:head>
  <title>Drop Your CV - SOS Recruitment</title>
  <meta
    name="description"
    content="Submit your CV to SOS Recruitment for future job opportunities."
  />
</svelte:head>

<div class="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-8" in:fade>
        <h1 class="text-4xl font-bold mb-4">Drop Your CV</h1>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Submit your CV to our database for future job opportunities. We'll contact you when a suitable position becomes available.
        </p>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
        {#if formLoading}
          <div class="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800">
            <div class="animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"></div>
          </div>
        {/if}
        
        {#if formError}
          <ErrorAlert message="There was an error loading the form. Please try again later." />
        {/if}
        
        {#if formSubmitted}
          <div class="p-8 text-center" in:fade>
            <svg class="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
            <p class="text-gray-600 dark:text-gray-300">Your CV has been submitted successfully. We'll contact you when a suitable position becomes available.</p>
          </div>
        {:else}
          <iframe
            id="JotFormIFrame"
            title="Drop CV Form"
            src="https://form.jotform.com/250844509337562"
            style="width: 1px; min-width: 100%; height: 100%; min-height: 1200px; border: none;"
            scrolling="yes"
            on:load={() => formLoading = false}
            on:error={() => {
              formError = true;
              formLoading = false;
            }}
          />
        {/if}
      </div>
    </div>
  </div>
</div>
