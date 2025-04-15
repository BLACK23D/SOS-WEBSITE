<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

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

  const processSteps = [
    {
      title: 'Submit Application',
      description: 'Fill out the form with your details and qualifications',
      icon: '📝'
    },
    {
      title: 'Initial Review',
      description: 'Our team reviews your application within 48 hours',
      icon: '👀'
    },
    {
      title: 'Interview Process',
      description: 'Selected candidates will be invited for interviews',
      icon: '🤝'
    },
    {
      title: 'Final Selection',
      description: 'Successful candidates receive job offers',
      icon: '🎉'
    }
  ];
</script>

<svelte:head>
  <title>Apply Now - SOS Recruitment</title>
  <meta
    name="description"
    content="Apply for local job opportunities at SOS Recruitment. Submit your CV and documents for consideration."
  />
  <!-- JotForm Script for responsive iframe -->
  <script>
    var ifr = document.getElementById('JotFormIFrame');
    if (ifr) {
      var src = ifr.src;
      var iframeParams = [];
      if (window.location.href && window.location.href.indexOf('?') > -1) {
        iframeParams = iframeParams.concat(
          window.location.href.substr(window.location.href.indexOf('?') + 1).split('&')
        );
      }
      if (src && src.indexOf('?') > -1) {
        iframeParams = iframeParams.concat(src.substr(src.indexOf('?') + 1).split('&'));
        src = src.substr(0, src.indexOf('?'));
      }
      iframeParams.push('isIframeEmbed=1');
      ifr.src = src + '?' + iframeParams.join('&');
    }
    window.handleIFrameMessage = function (e) {
      if (typeof e.data === 'object') {
        return;
      }
      var args = e.data.split(':');
      if (args.length > 2) {
        iframe = document.getElementById('JotFormIFrame');
      }
      if (!iframe) {
        return;
      }
      switch (args[0]) {
        case 'scrollIntoView':
          iframe.scrollIntoView();
          break;
        case 'setHeight':
          iframe.style.height = args[1] + 'px';
          break;
        case 'collapseErrorPage':
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = window.innerHeight + 'px';
          }
          break;
        case 'reloadPage':
          window.location.reload();
          break;
      }
    };
    if (window.addEventListener) {
      window.addEventListener('message', handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent('onmessage', handleIFrameMessage);
    }
  </script>
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  <!-- Hero Section -->
  <div class="relative bg-primary py-16">
    <div class="absolute inset-0 bg-primary-dark/10"></div>
    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Apply for Local Jobs</h1>
        <p class="text-xl text-white/90 max-w-3xl mx-auto">
          Your dream career awaits. Join our network of successful professionals and let us help you
          find the perfect opportunity that matches your skills and aspirations.
        </p>
      </div>

      <!-- Application Process Steps -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
        {#each processSteps as step, i}
          <div class="relative">
            <!-- Step connector -->
            {#if i < processSteps.length - 1}
              <div class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/20">
                <div class="absolute inset-0 bg-white/40 w-1/2"></div>
              </div>
            {/if}
            <!-- Step content -->
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div class="text-4xl mb-4">{step.icon}</div>
              <h3 class="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p class="text-white/80">{step.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto">
      <!-- Why Choose Us Section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-12 relative inline-block">
          Why Work With Us
          <div class="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></div>
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="text-primary text-4xl mb-4">🌟</div>
            <h3 class="text-xl font-semibold mb-2">Career Growth</h3>
            <p class="text-gray-600">Opportunities for advancement and professional development</p>
          </div>
          <div class="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="text-primary text-4xl mb-4">💪</div>
            <h3 class="text-xl font-semibold mb-2">Strong Support</h3>
            <p class="text-gray-600">Dedicated team to help you succeed in your role</p>
          </div>
          <div class="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="text-primary text-4xl mb-4">🎯</div>
            <h3 class="text-xl font-semibold mb-2">Perfect Match</h3>
            <p class="text-gray-600">We ensure the right fit for both you and the employer</p>
          </div>
        </div>
      </div>

      <!-- Application Form Section -->
      <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-primary/20 transition-colors duration-300 relative" in:fade={{ delay: 200 }}>
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
        
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold mb-4">Application Form</h2>
          <p class="text-gray-600">Please fill out all required fields. Our team will review your application within 48 hours.</p>
        </div>
        {#if formLoading}
          <div class="absolute inset-0 flex items-center justify-center bg-white">
            <div class="animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"></div>
          </div>
        {/if}

        {#if formSubmitted}
          <div class="p-8 text-center" in:fade>
            <div class="relative inline-block">
              <div class="absolute inset-0 bg-primary/20 blur-2xl"></div>
              <svg class="w-20 h-20 mx-auto text-primary relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mt-6 mb-4">Application Submitted!</h3>
            <p class="text-gray-600 text-lg max-w-md mx-auto">
              Thank you for applying. Our recruitment team will review your application and contact you within 48 hours.
            </p>
            <div class="mt-8">
              <a href="/jobs" class="inline-flex items-center text-primary hover:text-primary-600 font-medium">
                View More Jobs
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        {:else}
          <iframe
            id="JotFormIFrame"
            title="Job Application Form"
            src="https://form.jotform.com/250825144033549"
            style="min-width: 100%; width: 1px; height: 800px; border: none; background: transparent;"
            scrolling="no"
            on:load={() => formLoading = false}
          >
            Loading application form...
          </iframe>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  /* Smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
