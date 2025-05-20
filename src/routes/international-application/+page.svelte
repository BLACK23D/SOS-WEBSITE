<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import CountryFlag from '$lib/components/shared/CountryFlag.svelte';
  import { browser } from '$app/environment';
  
  let formError = false;
  let formLoading = true;
  let formSubmitted = false;

  // Countries with opportunities
  const countries = [
    { name: 'Qatar', code: 'qa', jobs: 120 },
    { name: 'Kuwait', code: 'kw', jobs: 85 },
    { name: 'UAE', code: 'ae', jobs: 64 },
    { name: 'Saudi Arabia', code: 'sa', jobs: 92 }
  ];

  // Benefits of working internationally
  const benefits = [
    {
      icon: '✈️',
      title: 'International Experience',
      description: 'Build your global career with valuable international work experience'
    },
    {
      icon: '🏠',
      title: 'Free Accommodation',
      description: 'Enjoy company-provided housing with all utilities included'
    },
    {
      icon: '🚗',
      title: 'Transportation',
      description: 'Free transportation between accommodation and workplace'
    },
    {
      icon: '🍽️',
      title: 'Meals Provided',
      description: 'Daily meals provided at no additional cost'
    }
  ];

  // Get URL parameters
  let position = '';
  let employer = '';

  onMount(() => {
    // Get URL parameters if any - handle both hash and non-hash routing
    let paramString = window.location.search.substring(1);
        
    // Also check hash-based parameters for backward compatibility
    if (window.location.hash && window.location.hash.includes('?')) {
      const hashParams = window.location.hash.split('?')[1];
      if (hashParams && !paramString) {
        paramString = hashParams;
      }
    }
    
    const urlParams = new URLSearchParams(paramString);
    position = urlParams.get('position') || '';
    employer = urlParams.get('employer') || '';

    // Set a timeout to ensure form is considered loaded even if events don't fire
    const loadingTimeout = setTimeout(() => {
      formLoading = false;
    }, 8000);
    
    // Form initialization complete

    const handleIFrameMessage = (e: MessageEvent) => {
      try {
        if (typeof e.data === 'object') return;
        
        const args = e.data.split(':');
        const iframe = document.getElementById('JotFormIFrame-International') as HTMLIFrameElement;
        
        if (!iframe) return;
        
        switch (args[0]) {
          case 'scrollIntoView':
            iframe.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'setHeight':
            iframe.style.height = args[1] + 'px';
            formLoading = false;
            clearTimeout(loadingTimeout);
            break;
          case 'formSubmitted':
            formSubmitted = true;
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
      } catch (error) {
        console.error('Error handling iframe message:', error);
        formError = true;
        formLoading = false;
        clearTimeout(loadingTimeout);
      }
    };

    window.addEventListener('message', handleIFrameMessage, false);
    return () => {
      window.removeEventListener('message', handleIFrameMessage);
      clearTimeout(loadingTimeout);
    };
  });
</script>

<svelte:head>
  <title>Apply for International Jobs - SOS Recruitment</title>
  <meta
    name="description"
    content="Apply for international job opportunities in Qatar, Kuwait, UAE and Saudi Arabia. SOS Recruitment offers positions with accommodation, transportation, and meals included."
  />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  <!-- Hero Section -->
  <div class="relative bg-primary py-16">
    <div class="absolute inset-0 bg-primary-dark/10"></div>
    <div class="container mx-auto px-4 relative">
      <div class="flex items-center mb-6">
        <a href="#/international-jobs" class="text-white hover:text-white/80 flex items-center">
          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to International Jobs</span>
        </a>
      </div>
      
      <!-- Logo and Title -->
      <div class="flex flex-col items-center mb-12" in:fade>
        <div class="w-32 h-32 mb-6 bg-white/10 backdrop-blur-sm rounded-full p-4 flex items-center justify-center">
          <img src="/images/logo.jpeg" alt="SOS Recruitment Logo" class="w-24 h-24 object-contain" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Apply for International Jobs</h1>
        <p class="text-xl text-white/90 max-w-3xl mx-auto">
          Take the first step towards your dream career abroad. Complete the application form to access opportunities with top employers in the Middle East.
        </p>
      </div>

      <!-- Countries Section -->
      <div class="flex flex-wrap justify-center gap-6 mb-8">
        {#each countries as country, i}
          <div 
            class="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 flex items-center" 
            in:fly={{ y: 20, delay: 100 + i * 50, duration: 400 }}
          >
            <CountryFlag country={country.code} size="md" />
            <div class="ml-3">
              <div class="text-white font-medium">{country.name}</div>
              <div class="text-white/70 text-sm">{country.jobs}+ opportunities</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container mx-auto px-4 py-16 -mt-8">
    <div class="max-w-5xl mx-auto">
      <!-- Benefits Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {#each benefits as benefit, i}
          <div 
            class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-primary/20 transition-colors duration-300" 
            in:fly={{ y: 20, delay: 200 + i * 100, duration: 400 }}
          >
            <div class="text-4xl mb-4">{benefit.icon}</div>
            <h3 class="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p class="text-gray-600">{benefit.description}</p>
          </div>
        {/each}
      </div>

      <!-- Payment Information -->
      <div class="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-100" in:fade={{ delay: 300 }}>
        <div class="flex items-center mb-6">
          <div class="bg-blue-100 rounded-full p-3 mr-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold">Registration Fee Information</h2>
        </div>
        <div class="p-6 bg-blue-50 rounded-xl border border-blue-100">
          <p class="text-blue-800 text-lg mb-4">
            International job applications require a registration fee of 5,000 KSH. This fee covers processing, documentation, and placement services.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-semibold text-blue-900 mb-2">Payment Details:</h3>
              <ul class="space-y-3 text-blue-700">
                <li class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Bank:</strong> NCBA BANK</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Account Number:</strong> 1004836169</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Business Number:</strong> 880100</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Amount:</strong> 5,000 KSH</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold text-blue-900 mb-2">What's Included:</h3>
              <ul class="space-y-3 text-blue-700">
                <li class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Application processing</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Document verification</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Employer matching</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Interview preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Application Form Section -->
      <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-primary/20 transition-colors duration-300 relative" id="application-form" in:fade={{ delay: 400 }}>
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
        
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold mb-4">International Job Application Form</h2>
          <p class="text-gray-600">
            {#if position}
              You are applying for the position of <strong>{position}</strong>
              {#if employer && employer !== 'Not specified'}
                at <strong>{employer}</strong>
              {/if}
            {:else}
              Please fill out all required fields. Our recruitment team will review your application within 48 hours.
            {/if}
          </p>
        </div>

        {#if formLoading}
          <div class="absolute inset-0 flex items-center justify-center bg-white z-10 rounded-2xl">
            <div class="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          </div>
        {/if}
        
        {#if formError}
          <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm text-red-700">
                  There was an error loading the form. Please try again later or contact us directly.
                </p>
              </div>
            </div>
          </div>
        {/if}

        <!-- CV Upload Section -->  
        <div class="mb-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 class="text-xl font-semibold text-blue-900 mb-4">Upload Your CV</h3>
          <p class="text-blue-700 mb-4">Please upload your CV before submitting the application form below.</p>
          
          <div class="flex flex-col space-y-4">
            <a 
              href="https://form.jotform.com/250844509337562" 
              target="_blank"
              class="relative overflow-hidden inline-flex items-center justify-center px-6 py-3.5 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 w-full md:w-auto group"
            >
              <span class="absolute inset-0 w-full h-full bg-white/10 group-hover:bg-white/20 transition-all duration-300"></span>
              <span class="relative flex items-center">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span class="font-semibold">Drop CV</span>
              </span>
            </a>
            <p class="text-sm text-gray-600 mt-2">This will open a secure form where you can upload your CV document.</p>
          </div>
        </div>
          
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
              <a href="#/international-jobs" class="inline-flex items-center text-primary hover:text-primary-600 font-medium">
                View More International Jobs
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        {:else}
          <iframe
            id="JotFormIFrame-International"
            title="International Job Application Form"
            src="https://form.jotform.com/250826034464556"
            style="width: 100%; min-height: 800px; border: none; background: transparent;"
            scrolling="yes"
            allow="geolocation; microphone; camera"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation"
            on:load={() => {
              console.log('JotForm iframe loaded');
              formLoading = false; // Ensure form is marked as loaded when iframe loads
              // The main loading state is also handled by the onMount timeout and message handler
            }}
            on:error={() => {
              console.error('JotForm iframe error');
              formError = true;
              formLoading = false;
            }}
          ></iframe>
        {/if}
      </div>

      <!-- Testimonial Section -->
      <div class="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200" in:fade={{ delay: 500 }}>
        <div class="flex flex-col md:flex-row items-center">
          <div class="mb-6 md:mb-0 md:mr-8">
            <div class="w-24 h-24 rounded-full bg-gray-300 mx-auto overflow-hidden">
              <!-- Fallback handled in CSS with background image -->
              <img src="/images/testimonial-1.jpg" alt="Testimonial" class="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <svg class="w-10 h-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p class="text-lg text-gray-700 italic mb-4">
              "Working with SOS Recruitment changed my life. I'm now working in Qatar with a great salary and benefits package. The application process was smooth, and they guided me through every step of the way."
            </p>
            <div class="font-medium text-gray-900">Sarah K.</div>
            <div class="text-sm text-gray-500">Healthcare Professional in Qatar</div>
          </div>
        </div>
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
