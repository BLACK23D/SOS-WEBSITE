<!-- Latest News Component -->
<script lang="ts">
  import type { TransitionConfig } from 'svelte/transition';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { getLatestNews } from '$lib/stores/newsStore';

  // Get the latest 3 news items
  const news = getLatestNews(3);

  let mounted = false;
  onMount(() => {
    mounted = true;
  });

  // Format date to a more readable format
  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Transition config
  const fadeConfig: TransitionConfig = { duration: 300 };
</script>

<section class="py-16 relative overflow-hidden">
  <!-- Background Pattern -->
  <div class="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-50">
    <div class="absolute inset-0 opacity-30">
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="news-grid" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="currentColor" stroke-width="0.5" class="text-primary/20"/>
        </pattern>
        <rect width="100" height="100" fill="url(#news-grid)" />
      </svg>
    </div>
  </div>

  <div class="container mx-auto px-4 relative">
    <div class="text-center mb-12">
      {#if mounted}
        <div in:fly={{ y: 50, duration: 1000 }}>
          <h2 class="text-3xl font-bold mb-4 relative inline-block">
            Latest News & Updates
            <div class="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></div>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto mt-6">
            Stay informed about the latest opportunities, events, and updates from SOS Recruitment.
            Your success story begins with staying connected.
          </p>
        </div>
      {/if}
      {#if mounted}
        <div in:fly={{ y: 30, duration: 1000, delay: 200 }}>
          <a
            href="/news"
            class="inline-flex items-center mt-8 px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-medium group"
          >
            View all news
            <svg
              class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      {/if}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each news as item, i}
        {#if mounted}
          <article
            in:fly={{ y: 50, duration: 1000, delay: 400 + i * 200 }}
            class="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <!-- Decorative background blur -->
            <div class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
        >
          <div class="relative h-48 overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div
              class="absolute top-0 left-0 m-4 px-3 py-1 bg-primary text-white text-sm font-medium rounded-full backdrop-blur-sm bg-opacity-90 border border-white/20"
            >
              {item.category}
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <time class="text-sm text-gray-500">
                {formatDate(item.date)}
              </time>
              {#if item.author}
                <span class="text-gray-400">•</span>
                <span class="text-sm text-gray-500">
                  {item.author}
                </span>
              {/if}
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors"
            >
              <a href="/news/{item.id}">{item.title}</a>
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3">
              {item.description}
            </p>
            <div class="flex items-center justify-between">
              <a
                href="/news/{item.id}"
                class="inline-flex items-center text-primary hover:text-primary-dark font-medium group"
              >
                <span class="relative">
                  <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  Read more
                </span>
                <svg
                  class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              {#if item.tags}
                <div class="flex gap-2">
                  {#each item.tags.slice(0, 2) as tag}
                    <span
                      class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        </article>
      {/if}
      {/each}
    </div>
  </div>
</section>
