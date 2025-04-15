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

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  <!-- Hero Section -->
  <div class="relative bg-primary py-16">
    <div class="absolute inset-0 bg-primary-dark/10"></div>
    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Drop Your CV</h1>
        <p class="text-xl text-white/90 max-w-3xl mx-auto">
          Take the first step towards your dream career. Submit your CV to our talent pool and let our expert
          recruitment team connect you with the perfect opportunity.
        </p>
      </div>

      <!-- Benefits Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
          <div class="text-4xl mb-4">🎯</div>
          <h3 class="text-xl font-semibold text-white mb-2">Targeted Matching</h3>
          <p class="text-white/80">Our AI-powered system matches your skills with the perfect job opportunities.</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
          <div class="text-4xl mb-4">🌍</div>
          <h3 class="text-xl font-semibold text-white mb-2">Global Opportunities</h3>
          <p class="text-white/80">Access job opportunities both locally and internationally.</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
          <div class="text-4xl mb-4">⚡</div>
          <h3 class="text-xl font-semibold text-white mb-2">Fast Response</h3>
          <p class="text-white/80">Quick feedback and updates on your application status.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto">
      <!-- Stats Section -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">24/7</div>
          <div class="text-gray-600">CV Processing</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">48h</div>
          <div class="text-gray-600">Response Time</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">100+</div>
          <div class="text-gray-600">Partner Companies</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">95%</div>
          <div class="text-gray-600">Success Rate</div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-xl overflow-hidden relative border border-gray-100 hover:border-primary/20 transition-colors duration-300">
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
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
            <div class="relative inline-block">
              <div class="absolute inset-0 bg-primary/20 blur-2xl"></div>
              <svg class="w-20 h-20 mx-auto text-primary relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mt-6 mb-4">Thank You!</h3>
            <p class="text-gray-600 text-lg max-w-md mx-auto">
              Your CV has been submitted successfully. Our recruitment team will review it and contact you when a suitable position becomes available.
            </p>
            <div class="mt-8">
              <a href="/jobs" class="inline-flex items-center text-primary hover:text-primary-600 font-medium">
                View Current Openings
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        {:else}
          <iframe
            id="JotFormIFrame"
            title="Drop CV Form"
            src="https://form.jotform.com/250844509337562"
            style="width: 1px; min-width: 100%; height: 100%; min-height: 800px; border: none; background: transparent;"
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
