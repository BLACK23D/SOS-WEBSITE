<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { NewsItem } from '$lib/stores/newsStore';
  import { newsStore, getFeaturedNews } from '$lib/stores/newsStore';

  // Get featured news
  const featuredNews = getFeaturedNews();

  // Available categories for filtering
  const categories = [...new Set($newsStore.map((item) => item.category))];

  let selectedCategory = 'All';
  let searchQuery = '';
  let selectedTag: string | null = null;

  // Get all unique tags
  $: allTags = [...new Set($newsStore.flatMap((item) => item.tags || []))].sort();

  // Filter news items based on category, search query, and tag
  $: filteredNews = $newsStore.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags || []).some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = !selectedTag || (item.tags || []).includes(selectedTag);
    return matchesCategory && matchesSearch && matchesTag;
  });

  // Sort news by date
  $: sortedNews = [...filteredNews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Format date to a more readable format
  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Clear all filters
  function clearFilters() {
    selectedCategory = 'All';
    searchQuery = '';
    selectedTag = null;
  }
</script>

<svelte:head>
  <title>Latest News - SOS Recruitment</title>
  <meta
    name="description"
    content="Stay updated with the latest news, events, and opportunities from SOS Recruitment."
  />
</svelte:head>

<div class="bg-gray-50 dark:bg-gray-900 min-h-screen py-16" transition:fade>
  <div class="container mx-auto px-4">
    <!-- Header -->
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest News & Updates</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Stay informed about the latest opportunities, events, and industry insights from SOS
        Recruitment.
      </p>
    </header>

    <!-- Search and Filter -->
    <div class="max-w-6xl mx-auto mb-12">
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Search -->
          <div class="col-span-1 md:col-span-2">
            <input
              type="text"
              bind:value={searchQuery}
              placeholder="Search news..."
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
          <!-- Category Filter -->
          <div>
            <select
              bind:value={selectedCategory}
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            >
              <option>All</option>
              {#each categories as category}
                <option>{category}</option>
              {/each}
            </select>
          </div>
          <!-- Clear Filters -->
          <div>
            <button
              on:click={clearFilters}
              class="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        </div>

        <!-- Tags -->
        <div class="mt-4">
          <div class="flex flex-wrap gap-2">
            {#each allTags as tag}
              <button
                class={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                on:click={() => (selectedTag = selectedTag === tag ? null : tag)}
              >
                {tag}
              </button>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <!-- Featured News -->
    {#if selectedCategory === 'All' && !searchQuery && !selectedTag}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {#each featuredNews as item}
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            transition:fade
          >
            <div class="relative h-64">
              <img src={item.imageUrl} alt={item.title} class="w-full h-full object-cover" />
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                  {item.category}
                </span>
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
              <h2
                class="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <a href="/news/{item.id}">{item.title}</a>
              </h2>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
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
                    {#each item.tags as tag}
                      <button
                        class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        on:click={() => (selectedTag = tag)}
                      >
                        {tag}
                      </button>
                    {/each}
                  </div>
                {/if}
              </div>
            </div>
          </article>
        {/each}
      </div>
    {/if}

    <!-- All News Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each sortedNews.filter((item) => !item.featured || selectedCategory !== 'All' || searchQuery || selectedTag) as item}
        <article
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
          transition:fade
        >
          <div class="relative h-48">
            <img
              src={item.imageUrl}
              alt={item.title}
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                {item.category}
              </span>
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
            <h2
              class="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <a href="/news/{item.id}">{item.title}</a>
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
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
                  {#each item.tags as tag}
                    <button
                      class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      on:click={() => (selectedTag = tag)}
                    >
                      {tag}
                    </button>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        </article>
      {/each}
    </div>

    <!-- No Results Message -->
    {#if sortedNews.length === 0}
      <div class="text-center py-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">No Results Found</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Try adjusting your search or filter to find what you're looking for.
        </p>
        <button
          on:click={clearFilters}
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Clear All Filters
        </button>
      </div>
    {/if}
  </div>
</div>
