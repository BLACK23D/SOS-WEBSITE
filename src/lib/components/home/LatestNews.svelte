<!-- Latest News Component -->
<script lang="ts">
  import type { TransitionConfig } from 'svelte/transition';
  import { fade } from 'svelte/transition';
  import { getLatestNews } from '$lib/stores/newsStore';

  // Get the latest 3 news items
  const news = getLatestNews(3);

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

<section class="py-16 bg-gray-50 dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest News & Updates</h2>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Stay informed about the latest opportunities, events, and updates from SOS Recruitment.
      </p>
      <a
        href="/news"
        class="inline-flex items-center mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium group"
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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each news as item}
        <article
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
          transition:fade={fadeConfig}
        >
          <div class="relative h-48 overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div
              class="absolute top-0 left-0 m-4 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full"
            >
              {item.category}
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <time class="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(item.date)}
              </time>
              {#if item.author}
                <span class="text-gray-400">•</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  {item.author}
                </span>
              {/if}
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <a href="/news/{item.id}">{item.title}</a>
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {item.description}
            </p>
            <div class="flex items-center justify-between">
              <a
                href="/news/{item.id}"
                class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium group"
              >
                Read more
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
                      class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
