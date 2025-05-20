<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let formLoading = true;
  let formSubmitted = false;
  let formError = false;

  // Benefits of working internationally
  const benefits = [
    {
      icon: '🌍',
      title: 'Global Experience',
      description: 'Gain valuable international work experience that enhances your resume'
    },
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Earn tax-free income with comprehensive benefits package'
    },
    {
      icon: '🏠',
      title: 'Free Accommodation',
      description: 'Enjoy comfortable housing provided by your employer'
    },
    {
      icon: '🚗',
      title: 'Transportation',
      description: 'Free transportation to and from work'
    }
  ];

  // Countries with opportunities
  const countries = [
    { name: 'Qatar', flag: '🇶🇦' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'Saudi Arabia', flag: '🇸🇦' },
    { name: 'Kuwait', flag: '🇰🇼' },
    { name: 'Bahrain', flag: '🇧🇭' },
    { name: 'Oman', flag: '🇴🇲' }
  ];

  onMount(() => {
    const handleIFrameMessage = (e: MessageEvent) => {
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

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  <!-- Hero Section -->
  <div class="relative bg-primary py-16">
    <div class="absolute inset-0 bg-primary-dark/10"></div>
    <div class="container mx-auto px-4 relative">
      <div class="flex items-center mb-6">
        <a href="/#/international-jobs" class="text-white hover:text-white/80 flex items-center">
          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to International Jobs</span>
        </a>
      </div>
      
      <div class="text-center mb-12" in:fade>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">International Job Application</h1>
        <p class="text-xl text-white/90 max-w-3xl mx-auto">
          Take the first step towards your international career. Complete the form below to apply for exciting opportunities abroad.
        </p>
      </div>

      <!-- Countries Section -->
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        {#each countries as country, i}
          <div 
            class="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 flex items-center" 
            in:fly={{ y: 20, delay: 100 + i * 50, duration: 400 }}
          >
            <span class="text-2xl mr-2">{country.flag}</span>
            <span class="text-white font-medium">{country.name}</span>
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

      <!-- Application Form Section -->
      <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-primary/20 transition-colors duration-300 relative" in:fade={{ delay: 300 }}>
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
        
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold mb-4">Application Form</h2>
          <p class="text-gray-600">Please fill out all required fields. Our recruitment team will review your application within 48 hours.</p>
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
              <a href="/#/jobs" class="inline-flex items-center text-primary hover:text-primary-600 font-medium">
                View More Jobs
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
            scrolling="no"
            on:load={() => formLoading = false}
            on:error={() => {
              formError = true;
              formLoading = false;
            }}
          ></iframe>
        {/if}
      </div>

      <!-- Testimonial Section -->
      <div class="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200" in:fade={{ delay: 400 }}>
        <div class="flex flex-col md:flex-row items-center">
          <div class="mb-6 md:mb-0 md:mr-8">
            <div class="w-24 h-24 rounded-full bg-gray-300 mx-auto overflow-hidden">
              <img src="/images/testimonial-1.jpg" alt="Testimonial" class="w-full h-full object-cover" onerror="this.src='/images/placeholder.jpg'" />
            </div>
          </div>
          <div>
            <svg class="w-10 h-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p class="text-lg text-gray-700 italic mb-4">
              "Working abroad through SOS Recruitment changed my life. The application process was smooth, and they supported me every step of the way. Now I'm earning more than I ever thought possible while experiencing a new culture."
            </p>
            <div class="font-medium text-gray-900">Sarah K.</div>
            <div class="text-sm text-gray-500">Nurse in Dubai, UAE</div>
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
