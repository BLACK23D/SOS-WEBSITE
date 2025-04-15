<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import ErrorAlert from '$lib/components/shared/ErrorAlert.svelte';
  
  let formError = false;
  let formLoading = true;
  let formSubmitted = false;
  const scrolling = "yes";

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
  <title>Apply for International Jobs - SOS Recruitment</title>
  <meta
    name="description"
    content="Apply for international job opportunities at SOS Recruitment. Submit your CV and documents for consideration."
  />
</svelte:head>

<div class="min-h-screen py-12 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-8" in:fade>
        <h1 class="text-4xl font-bold mb-4">Apply for International Jobs</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Take the first step towards your international career. Fill out the form below and we'll get back to you soon.
        </p>
      </div>

      <!-- Payment Information -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8" in:fade={{ delay: 100 }}>
        <div class="p-4 bg-blue-50 rounded-lg">
          <p class="text-blue-800">
            <strong>Note:</strong> International job applications require a registration fee of 5000 KSH.
            Please make the payment to:
          </p>
          <ul class="mt-4 space-y-2 text-blue-700">
            <li><strong>Bank:</strong> NCBA BANK</li>
            <li><strong>Account Number:</strong> 1004836169</li>
            <li><strong>Business Number:</strong> 880100</li>
            <li><strong>Amount:</strong> 5,000 KSH</li>
          </ul>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg overflow-hidden relative">
        {#if formLoading}
          <div class="absolute inset-0 flex items-center justify-center bg-white">
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
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p class="text-gray-600">Your application has been submitted successfully. We'll get back to you soon.</p>
          </div>
        {:else}
          <iframe
            id="JotFormIFrame"
            title="International Job Application Form"
            src="https://form.jotform.com/250826034464556"
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
