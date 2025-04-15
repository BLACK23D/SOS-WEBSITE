<script lang="ts">
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import { getNewsById } from '$lib/stores/newsStore';

  // Get the current news item based on the ID parameter
  $: currentNews = getNewsById(parseInt($page.params.id));

  // Format date to a more readable format
  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Format content with Markdown-like syntax
  function formatContent(content: string): string[] {
    return content
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line);
  }

  // Check if a line is a heading
  function isHeading(line: string): boolean {
    return line.startsWith('##');
  }

  // Get heading level (h1, h2, h3)
  function getHeadingLevel(line: string): number {
    return line.split('#').length - 1;
  }

  // Remove heading markers
  function cleanHeading(line: string): string {
    return line.replace(/^#+\s*/, '');
  }

  // Check if a line is a list item
  function isListItem(line: string): boolean {
    return line.startsWith('-');
  }

  // Clean list item
  function cleanListItem(line: string): string {
    return line.replace(/^-\s*/, '');
  }
</script>

<svelte:head>
  <title
    >{currentNews
      ? `${currentNews.title} - SOS Recruitment`
      : 'News Not Found - SOS Recruitment'}</title
  >
  <meta name="description" content={currentNews?.description || 'News article not found'} />
</svelte:head>

{#if currentNews}
  <article class="py-16 bg-gray-50" transition:fade>
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Navigation -->
        <nav class="mb-8">
          <a
            href="/news"
            class="inline-flex items-center text-blue-600 hover:underline font-medium group"
          >
            <svg
              class="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to News
          </a>
        </nav>

        <!-- Header -->
        <header class="mb-8">
          <div class="flex flex-wrap items-center gap-4 mb-4">
            <span class="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
              {currentNews.category}
            </span>
            <time class="text-sm text-gray-500">
              {formatDate(currentNews.date)}
            </time>
            {#if currentNews.author}
              <span class="text-gray-400">•</span>
              <span class="text-sm text-gray-500">
                By {currentNews.author}
              </span>
            {/if}
          </div>
          <h1 class="text-4xl font-bold text-gray-900 mb-6">
            {currentNews.title}
          </h1>
          <p class="text-xl text-gray-600">
            {currentNews.description}
          </p>
        </header>

        <!-- Featured Image -->
        <div class="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <img
            src={currentNews.imageUrl}
            alt={currentNews.title}
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content -->
        <div class="prose prose-lg max-w-none">
          {#each formatContent(currentNews.content) as line}
            {#if isHeading(line)}
              {#if getHeadingLevel(line) === 2}
                <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {cleanHeading(line)}
                </h2>
              {:else if getHeadingLevel(line) === 3}
                <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">
                  {cleanHeading(line)}
                </h3>
              {/if}
            {:else if isListItem(line)}
              <div class="flex items-start gap-2 mb-2">
                <span class="text-blue-600 mt-1.5">•</span>
                <p class="text-gray-600">
                  {cleanListItem(line)}
                </p>
              </div>
            {:else}
              <p class="text-gray-600 mb-4">
                {line}
              </p>
            {/if}
          {/each}
        </div>

        <!-- Tags -->
        {#if currentNews.tags}
          <div class="mt-12 pt-8 border-t border-gray-200">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">Related Topics</h2>
            <div class="flex flex-wrap gap-2">
              {#each currentNews.tags as tag}
                <a
                  href="/news?tag={tag}"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  {tag}
                </a>
              {/each}
            </div>
          </div>
        {/if}

        <!-- Navigation -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/news"
            class="inline-flex items-center text-blue-600 hover:underline font-medium group"
          >
            <svg
              class="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to News
          </a>
        </div>
      </div>
    </div>
  </article>
{:else}
  <div class="py-16 bg-gray-50 min-h-screen" transition:fade>
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">
          News Article Not Found
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          The news article you're looking for doesn't exist or has been removed.
        </p>
        <a
          href="/news"
          class="inline-flex items-center text-blue-600 hover:underline font-medium group"
        >
          <svg
            class="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to News
        </a>
      </div>
    </div>
  </div>
{/if}
