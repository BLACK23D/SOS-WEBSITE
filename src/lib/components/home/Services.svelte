<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import ServiceCard from '$lib/components/services/ServiceCard.svelte';
  import internationalImg from '$lib/assets/images/services/international.webp';
  import localImg from '$lib/assets/images/services/local.webp';
  import cvImg from '$lib/assets/images/services/cv.webp';
  import counselingImg from '$lib/assets/images/services/counseling.webp';

  let mounted = false;
  onMount(() => {
    mounted = true;
  });

  const services = [
    {
      title: 'International Recruitment',
      description:
        'Connect with top employers across the Middle East. We specialize in placing talent in UAE, Qatar, Saudi Arabia, and beyond.',
      image: internationalImg,
      href: '/services/international-recruitment',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`
    },
    {
      title: 'Local Recruitment',
      description:
        'Find the perfect job opportunities within Kenya. We work with leading companies across all major industries.',
      image: localImg,
      href: '/services/local-recruitment',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>`
    },
    {
      title: 'CV & Interview Preparation',
      description:
        'Get expert guidance on CV writing and interview techniques. We help you present your best self to potential employers.',
      image: cvImg,
      href: '/services/cv-preparation',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>`
    },
    {
      title: 'Career Counseling',
      description:
        'Receive personalized career advice and guidance. Our experts help you make informed decisions about your professional future.',
      image: counselingImg,
      href: '/services/career-counseling',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`
    }
  ];
</script>

<section class="py-20 relative overflow-hidden">
  <!-- Background Pattern -->
  <div class="absolute inset-0 bg-gradient-to-b from-accent/5 via-accent/10 to-accent/5">
    <div class="absolute inset-0 opacity-30">
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" class="text-accent" />
        </pattern>
        <rect width="100" height="100" fill="url(#dots)" />
      </svg>
    </div>
  </div>

  <div class="container mx-auto px-4 relative">
    <div class="text-center mb-16">
      {#if mounted}
        <div in:fly={{ y: 50, duration: 1000 }}>
          <h2 class="text-4xl font-bold mb-4 relative inline-block">
            Our Services
            <div class="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></div>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Comprehensive recruitment solutions tailored to your needs. We provide end-to-end support
            for your career journey.
          </p>
        </div>
      {/if}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each services as service, i}
        {#if mounted}
          <div
            in:fly={{ y: 50, duration: 1000, delay: 200 + i * 200 }}
            class="group relative"
          >
            <!-- Decorative background blur -->
            <div class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <ServiceCard {...service} />
            </div>
          </div>
        {/if}
      {/each}
    </div>

    <!-- Bottom Pattern -->
    <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
  </div>
</section>
