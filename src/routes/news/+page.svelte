<script lang="ts">
  import { fade, fly } from 'svelte/transition';
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

<div class="relative bg-gray-50 min-h-screen py-16">
  <!-- Background Pattern -->
  <div class="absolute inset-0 z-0 opacity-40">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); background-size: 30px 30px;"></div>
  </div>
  <div class="container mx-auto px-4 relative z-10">
    <!-- Header -->
    <header class="text-center mb-12" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
      <h1 class="group text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
        Latest News & Updates
        <div class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
        Stay informed about the latest opportunities, events, and industry insights from SOS
        Recruitment.
      </p>
    </header>

    <!-- Search and Filter -->
    <div class="max-w-6xl mx-auto mb-12">
      <div class="bg-white rounded-xl shadow-lg p-6 backdrop-blur-lg bg-opacity-90 border border-gray-200">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Search -->
          <div class="col-span-1 md:col-span-2">
            <input
              type="text"
              bind:value={searchQuery}
              placeholder="Search news..."
              class="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary transition-all duration-200"
            />
          </div>
          <!-- Category Filter -->
          <div>
            <select
              bind:value={selectedCategory}
              class="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary transition-all duration-200"
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
              class="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary/10 transition-all duration-200 hover:shadow-md"
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
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
        {#each featuredNews as item, i}
          <article
            class="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
            in:fly={{ y: 50, duration: 1000, delay: i * 200 }}
          >
            <div class="relative h-64">
              <img src={item.imageUrl} alt={item.title} class="w-full h-full object-cover" />
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full shadow-md">
                  {item.category}
                </span>
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
              <h2
                class="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors"
              >
                <a href="/news/{item.id}">{item.title}</a>
              </h2>
              <p class="text-gray-600 mb-4">
                {item.description}
              </p>
              <div class="flex items-center justify-between">
                <a
                  href="/news/{item.id}"
                  class="inline-flex items-center text-primary hover:underline font-medium group transition-all duration-200"
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
                        class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full hover:bg-primary/10 transition-all duration-200 hover:shadow-sm"
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
      {#each sortedNews.filter((item) => !item.featured || selectedCategory !== 'All' || searchQuery || selectedTag) as item, i}
        <article
          class="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
          in:fly={{ y: 50, duration: 1000, delay: i * 200 }}
        >
          <div class="relative h-48 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img
              src={item.imageUrl}
              alt={item.title}
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full shadow-md transform group-hover:scale-105 transition-transform duration-300">
                {item.category}
              </span>
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
            <h2
              class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary transition-colors"
            >
              <a href="/news/{item.id}">{item.title}</a>
            </h2>
            <p class="text-gray-600 mb-4 line-clamp-2">
              {item.description}
            </p>
            <div class="flex items-center justify-between">
              <a
                href="/news/{item.id}"
                class="inline-flex items-center text-primary hover:underline font-medium group transition-all duration-200"
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
                      class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full hover:bg-primary/10 transition-all duration-200 hover:shadow-sm"
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
        <h2 class="text-2xl font-bold text-gray-900 mb-4">No Results Found</h2>
        <p class="text-gray-600 mb-6">
          Try adjusting your search or filter to find what you're looking for.
        </p>
        <button
          on:click={clearFilters}
          class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg"
        >
          Clear All Filters
        </button>
      </div>
    {/if}
  </div>
</div>
