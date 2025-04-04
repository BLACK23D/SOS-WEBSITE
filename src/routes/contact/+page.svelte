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
  <title>Drop your CV - SOS Recruitment</title>
  <meta
    name="description"
    content="Submit your CV to SOS Recruitment and explore exciting job opportunities worldwide."
  />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" in:fade>
  <div class="container mx-auto px-4 py-16">
    <!-- Header Section -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h1 class="text-5xl font-bold text-primary dark:text-white mb-6">
        Drop your CV
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300">
        Take the first step towards your dream career. Submit your CV and let our expert recruitment team connect you with the perfect opportunity.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 items-start">
      <!-- Contact Information -->
      <div class="space-y-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <div>
          <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Offices
          </h2>

          <div class="space-y-8">
            <!-- Kenya Office -->
            <div class="transform transition-all duration-300 hover:scale-105">
              <div class="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-gray-700 dark:to-gray-700 rounded-xl p-6">
                <h3 class="text-2xl font-semibold mb-4 text-primary dark:text-white flex items-center gap-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  Kenya HQ
                </h3>
                <div class="space-y-2 text-gray-600 dark:text-gray-300">
                  <p class="flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Nairobi, Kenya
                  </p>
                  <p class="flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +254 736 887668
                  </p>
                  <p class="flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@sosrecruitment.co.ke
                  </p>
                </div>
              </div>
            </div>

            <!-- Qatar Office -->
            <div class="transform transition-all duration-300 hover:scale-105">
              <div class="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-gray-700 dark:to-gray-700 rounded-xl p-6">
                <h3 class="text-2xl font-semibold mb-4 text-primary dark:text-white flex items-center gap-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  Qatar Office
                </h3>
                <div class="space-y-2 text-gray-600 dark:text-gray-300">
                  <p class="flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Doha, Qatar
                  </p>
                  <p class="flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +974 4012 3456
                  </p>
                  <p class="flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    qatar@sosrecruitment.co.ke
                  </p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="pt-6">
              <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Connect With Us</h3>
              <div class="flex space-x-4">
                <a
                  href="https://wa.me/254736887668"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                >
                  <span class="sr-only">WhatsApp</span>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
                <a
                  href="/"
                  aria-label="Social media link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  <span class="sr-only">LinkedIn</span>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- JotForm -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <iframe
          id="JotFormIFrame"
          title="Drop your CV"
          src="https://form.jotform.com/250844509337562"
          style="width: 1px; min-width: 100%; height: 100%; min-height: 1200px; border: none;"
          {scrolling}
        />
      </div>
    </div>
  </div>
</div>
