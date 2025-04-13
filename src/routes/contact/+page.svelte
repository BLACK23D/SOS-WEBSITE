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

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white" in:fade>
  <div class="container mx-auto px-4 py-16 relative">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
    <!-- Header Section -->
    <div class="text-center max-w-3xl mx-auto mb-16 relative">
      <!-- Decorative elements -->
      <div class="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <svg class="w-16 h-16 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
        </svg>
      </div>
      <h1 class="text-5xl font-bold text-primary mb-6 relative inline-block">
        Get in Touch
        <div class="absolute bottom-0 left-0 w-full h-2 bg-primary/20 -z-10 transform skew-x-12"></div>
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Whether you're looking for your next career move or seeking top talent for your organization,
        we're here to help you succeed.
        <span class="block mt-4 text-primary font-medium">Let's start a conversation!</span>
      </p>
    </div>

    <!-- Stats Section -->
    <div class="max-w-5xl mx-auto mb-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">10+</div>
          <div class="text-gray-600">Years Experience</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">5K+</div>
          <div class="text-gray-600">Successful Placements</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">98%</div>
          <div class="text-gray-600">Client Satisfaction</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">20+</div>
          <div class="text-gray-600">Partner Countries</div>
        </div>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <div class="max-w-5xl mx-auto mb-16">
      <h2 class="text-3xl font-bold text-center mb-12 relative inline-block">
        Why Choose SOS Recruitment
        <div class="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></div>
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div class="text-primary mb-4">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Fast Response</h3>
          <p class="text-gray-600">Quick turnaround time with dedicated support throughout your journey.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div class="text-primary mb-4">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Trusted Network</h3>
          <p class="text-gray-600">Access to a wide network of verified employers and opportunities.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div class="text-primary mb-4">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Career Growth</h3>
          <p class="text-gray-600">Personalized guidance to help you achieve your career goals.</p>
        </div>
      </div>
    </div>

    <!-- Contact Form and Offices Section -->
    <div class="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto bg-white/50 backdrop-blur-sm rounded-3xl p-8 relative overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-5">
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      <!-- Contact Information -->
      <div class="space-y-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-primary/20 transition-colors duration-300">
        <div>
          <h2 class="text-3xl font-bold mb-6 text-gray-900">
            Our Offices
          </h2>

          <div class="space-y-8 relative">
            <!-- Decorative line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 to-transparent -z-10"></div>
            <!-- Kenya Office -->
            <div class="transform transition-all duration-300 hover:scale-105">
              <div class="bg-gradient-to-r from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30 transition-all duration-300 rounded-xl p-6">
                <h3 class="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  Kenya HQ
                </h3>
                <div class="space-y-2 text-gray-600">
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
              <div class="bg-gradient-to-r from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30 transition-all duration-300 rounded-xl p-6">
                <h3 class="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  Qatar Office
                </h3>
                <div class="space-y-2 text-gray-600">
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
              <h3 class="text-xl font-semibold mb-4 text-gray-900">Connect With Us</h3>
              <div class="flex space-x-6 items-center">
              <a
                href="tel:+254736887668"
                class="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call us</span>
              </a>
                <a
                  href="https://wa.me/254736887668"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-green-500 hover:text-green-600 transition-colors"
                >
                  <span class="sr-only">WhatsApp</span>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="/"
                  aria-label="Social media link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-blue-500 hover:text-blue-600 transition-colors"
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
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-primary/20 transition-colors duration-300 relative group">
        <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <iframe
          id="JotFormIFrame"
          title="Drop your CV"
          src="https://form.jotform.com/250844509337562"
          style="width: 1px; min-width: 100%; height: 100%; min-height: 800px; border: none; background: transparent;"
          {scrolling}
        />
      </div>
    </div>

    <!-- FAQ Preview Section -->
    <div class="max-w-4xl mx-auto mt-16 mb-8">
      <h2 class="text-3xl font-bold text-center mb-8 relative inline-block">
        Frequently Asked Questions
        <div class="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></div>
      </h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
          <h3 class="text-lg font-semibold mb-2">How long does the recruitment process take?</h3>
          <p class="text-gray-600">The process typically takes 2-4 weeks, depending on the position and requirements.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
          <h3 class="text-lg font-semibold mb-2">What documents do I need to submit?</h3>
          <p class="text-gray-600">You'll need your updated CV, cover letter, and relevant certifications.</p>
        </div>
      </div>
      <div class="text-center mt-8">
        <a href="/faq" class="inline-flex items-center text-primary hover:text-primary-600 font-medium">
          View all FAQs
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
