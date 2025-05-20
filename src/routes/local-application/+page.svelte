<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let formError = false;
  let formLoading = true;
  let formSubmitted = false;

  // Industries with opportunities in Kenya
  const industries = [
    { name: 'Healthcare', icon: '⚕️', jobs: 45 },
    { name: 'Hospitality', icon: '🏨', jobs: 38 },
    { name: 'Technology', icon: '💻', jobs: 52 },
    { name: 'Finance', icon: '📊', jobs: 31 },
    { name: 'Education', icon: '🎓', jobs: 27 },
    { name: 'Manufacturing', icon: '🏭', jobs: 35 }
  ];

  // Benefits of working locally in Kenya
  const benefits = [
    {
      icon: '🏢',
      title: 'Local Opportunities',
      description: 'Work with top companies in Kenya'
    },
    {
      icon: '💼',
      title: 'Career Growth',
      description: 'Advance your career with structured development paths'
    },
    {
      icon: '🤝',
      title: 'Networking',
      description: 'Build valuable professional connections'
    },
    {
      icon: '🏆',
      title: 'Recognition',
      description: 'Be rewarded for your skills and hard work'
    }
  ];

  // Get URL parameters
  let position = '';
  let employer = '';

  onMount(() => {
    // Get URL parameters using SvelteKit's URL handling
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

    const handleIFrameMessage = (e: MessageEvent) => {
      try {
        if (typeof e.data === 'object') return;
        
        const args = e.data.split(':');
        const iframe = document.getElementById('JotFormIFrame-Local') as HTMLIFrameElement;
        
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
  <title>Apply for Local Jobs - SOS Recruitment</title>
  <meta
    name="description"
    content="Apply for local job opportunities in Kenya. SOS Recruitment offers positions in healthcare, technology, finance, education and more sectors."
  />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  <!-- Hero Section -->
  <div class="relative bg-primary py-16">
    <div class="absolute inset-0 bg-primary-dark/10"></div>
    <div class="container mx-auto px-4 relative">
      <div class="flex items-center mb-6">
        <a href="#/internal-jobs" class="text-white hover:text-white/80 flex items-center">
          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Local Jobs</span>
        </a>
      </div>
      
      <!-- Logo and Title -->
      <div class="flex flex-col items-center mb-12" in:fade>
        <div class="w-32 h-32 mb-6 bg-white/10 backdrop-blur-sm rounded-full p-4 flex items-center justify-center">
          <img src="/images/logo.jpeg" alt="SOS Recruitment Logo" class="w-24 h-24 object-contain" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Apply for Local Jobs</h1>
        <p class="text-xl text-white/90 max-w-3xl mx-auto">
          Take the first step towards your dream career in Kenya. Complete the application form to access opportunities with top employers across various industries.
        </p>
      </div>

      <!-- Industries Section -->
      <div class="flex flex-wrap justify-center gap-6 mb-8">
        {#each industries as industry, i}
          <div 
            class="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 flex items-center" 
            in:fly={{ y: 20, delay: 100 + i * 50, duration: 400 }}
          >
            <div class="text-2xl mr-3">{industry.icon}</div>
            <div class="ml-3">
              <div class="text-white font-medium">{industry.name}</div>
              <div class="text-white/70 text-sm">{industry.jobs}+ opportunities</div>
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
            class="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300" 
            in:fly={{ y: 20, delay: 200 + i * 100, duration: 400 }}
          >
            <div class="text-4xl mb-4">{benefit.icon}</div>
            <h3 class="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p class="text-gray-600">{benefit.description}</p>
          </div>
        {/each}
      </div>

      <!-- Application Form Section -->
      <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-primary/20 transition-colors duration-300 relative" in:fade={{ delay: 300 }}>
        <!-- Background decoration -->
        <div class="absolute inset-0 overflow-hidden rounded-2xl">
          <div class="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full"></div>
          <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full"></div>
        </div>

        <div class="relative z-10">
          <div class="flex items-center mb-6">
            <div class="bg-primary-100 rounded-full p-3 mr-4">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold">Local Job Application Form</h2>
          </div>

          {#if position || employer}
            <div class="bg-blue-50 rounded-lg p-4 mb-6">
              <div class="font-medium text-blue-800">Application Details:</div>
              {#if position}
                <div class="text-blue-700">Position: <span class="font-semibold">{position}</span></div>
              {/if}
              {#if employer}
                <div class="text-blue-700">Employer: <span class="font-semibold">{employer}</span></div>
              {/if}
            </div>
          {/if}
        </div>

        {#if formLoading}
          <div class="absolute inset-0 flex items-center justify-center bg-white z-10">
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
              <a href="#/internal-jobs" class="inline-flex items-center text-primary hover:text-primary-600 font-medium">
                View More Local Jobs
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        {:else}
          <iframe
            id="JotFormIFrame-Local"
            title="Local Job Application Form"
            src="https://form.jotform.com/250825144033549"
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
              <img src="/images/testimonial-2.jpg" alt="Testimonial" class="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <svg class="w-10 h-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p class="text-lg text-gray-700 italic mb-4">
              "SOS Recruitment helped me find the perfect job that matches my skills and career goals. The application process was straightforward, and I received excellent support throughout my job search journey."
            </p>
            <div class="font-medium text-gray-900">John M.</div>
            <div class="text-sm text-gray-500">Software Developer in Nairobi</div>
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
