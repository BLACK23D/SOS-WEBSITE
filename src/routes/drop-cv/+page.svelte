<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import ErrorAlert from '$lib/components/shared/ErrorAlert.svelte';
  
  let formError = false;
  let formLoading = true;
  let formSubmitted = false;
  let activeTab = 'upload'; // 'upload' or 'tips'

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
    content="Submit your CV to SOS Recruitment for future job opportunities. Get matched with the perfect job in Kenya or internationally."
  />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  <!-- Hero Section -->
  <div class="relative bg-gradient-to-r from-primary-600 to-primary-800 py-20">
    <div class="absolute inset-0 bg-pattern opacity-10"></div>
    <!-- Animated background elements -->
    <div class="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full animate-blob animation-delay-2000"></div>
    <div class="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full animate-blob animation-delay-4000"></div>
    
    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-12" in:fly={{ y: 20, duration: 800 }}>
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          <span class="inline-block">Drop Your CV</span>
          <span class="block text-2xl md:text-3xl font-normal mt-2 text-white/80">Launch Your Career Today</span>
        </h1>
        <p class="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Take the first step towards your dream career. Submit your CV to our talent pool and let our expert
          recruitment team connect you with the perfect opportunity in Kenya or internationally.
        </p>
      </div>

      <!-- Benefits Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {#each [
          {
            icon: '<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>',
            title: 'Targeted Matching',
            description: 'Our AI-powered system matches your skills with the perfect job opportunities.'
          },
          {
            icon: '<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
            title: 'Global Opportunities',
            description: 'Access job opportunities both locally and internationally.'
          },
          {
            icon: '<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
            title: 'Fast Response',
            description: 'Quick feedback and updates on your application status.'
          }
        ] as any, i} 
          <div 
            class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            in:fly={{ y: 20, duration: 800, delay: 200 + i * 100 }}
          >
            <div class="mb-4" style="height: 40px;">
              {@html [
                '<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>',
                '<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
                '<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
              ][i]}
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">
              {['Targeted Matching', 'Global Opportunities', 'Fast Response'][i]}
            </h3>
            <p class="text-white/80">
              {[
                'Our AI-powered system matches your skills with the perfect job opportunities.',
                'Access job opportunities both locally and internationally.',
                'Quick feedback and updates on your application status.'
              ][i]}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto">
      <!-- Stats Section -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16" in:fly={{ y: 20, duration: 800, delay: 400 }}>
        <!-- Stat 1 -->
        <div class="text-center bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
          <div class="text-4xl font-bold text-primary-600 mb-2">24/7</div>
          <div class="text-gray-600 font-medium">CV Processing</div>
        </div>
        
        <!-- Stat 2 -->
        <div class="text-center bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
          <div class="text-4xl font-bold text-primary-600 mb-2">48h</div>
          <div class="text-gray-600 font-medium">Response Time</div>
        </div>
        
        <!-- Stat 3 -->
        <div class="text-center bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
          <div class="text-4xl font-bold text-primary-600 mb-2">100+</div>
          <div class="text-gray-600 font-medium">Partner Companies</div>
        </div>
        
        <!-- Stat 4 -->
        <div class="text-center bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
          <div class="text-4xl font-bold text-primary-600 mb-2">95%</div>
          <div class="text-gray-600 font-medium">Success Rate</div>
        </div>
      </div>
      
      <!-- Tab Navigation -->
      <div class="flex justify-center mb-8" in:fly={{ y: 20, duration: 800, delay: 500 }}>
        <div class="bg-white rounded-full shadow-md p-1 inline-flex">
          <button 
            class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none"
            class:bg-primary-500={activeTab === 'upload'} 
            class:text-white={activeTab === 'upload'}
            class:text-gray-700={activeTab !== 'upload'}
            on:click={() => activeTab = 'upload'}
          >
            Upload CV
          </button>
          <button 
            class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none"
            class:bg-primary-500={activeTab === 'tips'} 
            class:text-white={activeTab === 'tips'}
            class:text-gray-700={activeTab !== 'tips'}
            on:click={() => activeTab = 'tips'}
          >
            CV Tips
          </button>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-xl overflow-hidden relative border border-gray-100 hover:border-primary/20 transition-all duration-300 transform hover:shadow-2xl" in:fly={{ y: 20, duration: 800, delay: 600 }}>
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
        
        {#if activeTab === 'upload'}
          {#if formLoading}
            <div class="absolute inset-0 flex items-center justify-center bg-white z-50">
              <div class="flex flex-col items-center">
                <div class="animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent mb-4"></div>
                <p class="text-gray-500">Loading form...</p>
              </div>
            </div>
          {/if}
          
          {#if formError}
            <ErrorAlert message="There was an error loading the form. Please try again later." />
          {/if}
          
          {#if formSubmitted}
            <div class="p-12 text-center" in:fade>
              <div class="relative inline-block">
                <div class="absolute inset-0 bg-primary/20 blur-2xl"></div>
                <svg class="w-24 h-24 mx-auto text-primary-500 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Thank You!</h3>
              <p class="text-gray-600 text-lg max-w-lg mx-auto leading-relaxed">
                Your CV has been submitted successfully. Our recruitment team will review it and contact you when a suitable position becomes available.
              </p>
              <div class="mt-10">
                <a 
                  href="/#/jobs" 
                  class="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
                >
                  View Current Openings
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          {:else}
            <div class="p-6 bg-primary-50 border-b border-primary-100 flex items-center">
              <svg class="w-6 h-6 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <h2 class="text-xl font-semibold text-primary-700">Upload Your CV</h2>
            </div>
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
        {:else}
          <!-- CV Tips Tab -->
          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg class="w-6 h-6 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              CV Writing Tips
            </h2>
            
            <div class="space-y-6">
              {#each [
                {
                  title: 'Keep it concise',
                  description: 'Limit your CV to 1-2 pages. Recruiters spend an average of just 6 seconds scanning a CV initially.'
                },
                {
                  title: 'Tailor to the job',
                  description: 'Customize your CV for each position you apply for, highlighting relevant skills and experience.'
                },
                {
                  title: 'Use action verbs',
                  description: 'Start bullet points with action verbs like "achieved," "implemented," or "managed" to showcase your accomplishments.'
                },
                {
                  title: 'Quantify achievements',
                  description: 'Include specific numbers and percentages to demonstrate your impact (e.g., "Increased sales by 25%").'
                },
                {
                  title: 'Include relevant keywords',
                  description: 'Many employers use Applicant Tracking Systems (ATS) to scan CVs for relevant keywords.'
                }
              ] as tip, i}
                <div class="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 class="text-lg font-semibold text-gray-800 mb-2">{tip.title}</h3>
                  <p class="text-gray-600">{tip.description}</p>
                </div>
              {/each}
              
              <div class="bg-primary-50 p-6 rounded-lg border border-primary-100 mt-8">
                <h3 class="text-lg font-semibold text-primary-700 mb-3">Need help with your CV?</h3>
                <p class="text-gray-700 mb-4">Our professional CV writing service can help you create a standout CV that gets results.</p>
                <a 
                  href="/#/services/cv-preparation" 
                  class="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors text-sm"
                >
                  Learn More
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
