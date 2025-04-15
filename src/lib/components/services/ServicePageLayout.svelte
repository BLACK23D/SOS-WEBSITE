<script lang="ts">
  import { fade } from 'svelte/transition';
  import Button from '$lib/components/shared/Button.svelte';

  export let title: string;
  export let description: string;
  export let heroImage: string;
  export let heroAlt: string;
  export let ctaText: string = 'Get Started';
  export let ctaLink: string = 'https://wa.me/254736887668';
  export let ctaVariant: 'primary' | 'secondary' = 'primary';
</script>

<div in:fade>
  <!-- Hero Section -->
  <div class="relative bg-gradient-to-br from-[#174e4f] to-[#1a5f60] text-white min-h-[60vh] flex items-center">
    <div class="absolute inset-0 z-0">
      <img
        src={heroImage}
        alt={heroAlt}
        class="w-full h-full object-cover opacity-20"
      />
      <!-- Overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#174e4f]/50"></div>
    </div>
    <div class="relative z-10 container mx-auto px-4 py-20 md:py-32">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          {title}
        </h1>
        <p class="text-xl md:text-2xl text-gray-100 mb-8">
          {description}
        </p>
        <Button
          href={ctaLink}
          variant={ctaVariant}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container mx-auto p-4 pt-16">
    <slot />
  </div>
</div>

<style>
  /* Service Card Styles */
  :global(.service-card) {
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #ffffff;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    transition: all 0.3s;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }

  :global(.service-card:hover) {
    transform: translateY(-1px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    @apply transform -translate-y-1 shadow-xl;
  }

  :global(.service-heading) {
    @apply text-3xl font-bold text-gray-900 mb-6;
  }

  :global(.service-subheading) {
    @apply text-xl font-bold text-gray-800 mb-3;
  }

  :global(.service-text) {
    @apply text-gray-700;
  }

  :global(.service-list) {
    @apply space-y-4 list-none;
  }

  :global(.service-list-item) {
    @apply flex items-start space-x-3 text-gray-700;
  }

  :global(.service-icon) {
    @apply w-6 h-6 text-[#174e4f] mt-1 flex-shrink-0;
  }

  :global(.service-section) {
    @apply mb-16;
  }

  :global(.service-grid) {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
  }

  :global(.service-feature-card) {
    @apply p-6 rounded-lg bg-gray-50 transition-all duration-300;
  }
</style>
