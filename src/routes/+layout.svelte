<!-- Main layout component -->
<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import Chatbot from '$lib/components/chat/Chatbot.svelte';
  import BackToTop from '$lib/components/common/BackToTop.svelte';
  import { onMount } from 'svelte';
  import { setupScrollAnimations } from '$lib/utils/scroll';

  // SEO metadata
  const siteTitle = 'SOS Recruitment - Your Gateway to Global Opportunities';
  const siteDescription =
    'Leading recruitment agency connecting talented professionals with international and local job opportunities. Find your dream job today.';

  function preloadCriticalAssets() {
    const assets = [{ href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2' }];

    assets.forEach((asset) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = asset.href;
      link.as = asset.as;
      if (asset.type) link.type = asset.type;
      document.head.appendChild(link);
    });
  }

  onMount(() => {
    // Preload critical assets
    const links = document.head.querySelectorAll('link[rel="preload"]');
    if (!links.length) {
      preloadCriticalAssets();
    }

    // Setup scroll animations
    const cleanup = setupScrollAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  });
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{siteTitle}</title>
  <meta name="title" content={siteTitle} />
  <meta name="description" content={siteDescription} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={siteTitle} />
  <meta property="og:description" content={siteDescription} />
  <meta property="og:image" content="/images/sos-recruitment-og.jpg" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={siteTitle} />
  <meta property="twitter:description" content={siteDescription} />
  <meta property="twitter:image" content="/images/sos-recruitment-og.jpg" />

  <!-- Performance Optimizations -->
  <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
  <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
  <meta name="theme-color" content="#174e4f" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/manifest.json" />
</svelte:head>

<div class="flex flex-col min-h-screen bg-white">
  <Navbar />

  <main class="flex-grow">
    <slot />
  </main>

  <Footer />
  <Chatbot />
  <BackToTop />
</div>

<style>
  :global(.theme-updated) {
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }
  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    @apply antialiased;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :global(img) {
    max-width: 100%;
    height: auto;
  }

  :global(.lazy-image) {
    opacity: 0;
    transition: opacity 300ms;
  }

  :global(.lazy-image.loaded) {
    opacity: 1;
  }
</style>
