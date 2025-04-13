<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import Button from '$lib/components/shared/Button.svelte';
  import heroImage from '$lib/assets/images/hero/recruitment-hero.webp';

  let mounted = false;
  let currentHighlight = 0;
  const highlights = [
    'Global Opportunities',
    'Career Growth',
    'Expert Guidance'
  ];

  const stats = [
    { number: '1000+', label: 'Successful Placements', icon: '🌟' },
    { number: '50+', label: 'Corporate Partners', icon: '🤝' },
    { number: '6+', label: 'Countries', icon: '🌍' },
    { number: '95%', label: 'Client Satisfaction', icon: '💯' }
  ];

  onMount(() => {
    mounted = true;
    setInterval(() => {
      currentHighlight = (currentHighlight + 1) % highlights.length;
    }, 3000);
  });
</script>

<section class="relative min-h-[90vh] flex items-center overflow-hidden">
  <!-- Background Image with Overlay -->
  <div class="absolute inset-0 z-0">
    <img
      src={heroImage}
      alt="SOS Recruitment Office"
      class="w-full h-full object-cover scale-105 motion-safe:animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
      loading="eager"
      fetchpriority="high"
    />
    <div
      class="absolute inset-0 bg-gradient-to-r from-[#174e4f]/95 to-[#174e4f]/85 mix-blend-multiply"
    ></div>
    <!-- Decorative Pattern -->
    <div class="absolute inset-0 opacity-30">
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="grid" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="white" stroke-width="0.5"/>
        </pattern>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>
  </div>

  <!-- Content -->
  <div class="container mx-auto px-4 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-[62px]">
      <!-- Text Content -->
      <div class="text-white">
        {#if mounted}
          <div in:fly={{ y: 50, duration: 1000 }}>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Gateway to
              <span class="relative inline-block z-10">
                {#key currentHighlight}
                  <span
                    in:fly={{ y: 20, duration: 500 }}
                    out:fly={{ y: -20, duration: 500 }}
                    class="absolute left-0 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent font-extrabold drop-shadow-lg"
                  >
                    {highlights[currentHighlight]}
                  </span>
                {/key}
                <span class="invisible">{highlights[currentHighlight]}</span>
              </span>
            </h1>
            <p class="text-lg md:text-xl mb-8 text-white font-medium tracking-wide leading-relaxed max-w-2xl relative z-0 drop-shadow-sm bg-black/20 p-4 rounded-lg backdrop-blur-sm border border-white/10 mt-[60px]">
              We connect exceptional talent with leading companies worldwide. Let us help you find your
              perfect match and unlock your full potential.
            </p>
          </div>
        {/if}
        <div class="flex flex-wrap gap-4">
          <Button href="/jobs" variant="secondary">Browse Jobs</Button>
          <Button
            href="https://wa.me/254736887668"
            variant="outline"
            className="text-white hover:bg-white hover:text-[#174e4f] flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            WhatsApp Us
          </Button>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 gap-6">
        {#each stats as { number, label, icon }, i}
          {#if mounted}
            <div
              in:fly={{ y: 50, duration: 1000, delay: 200 + i * 100 }}
              class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20 hover:bg-white/20 transition-colors duration-300 group"
            >
              <div class="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
              <div class="text-3xl md:text-4xl font-bold mb-2">{number}</div>
              <div class="text-sm md:text-base text-gray-100">{label}</div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</section>
