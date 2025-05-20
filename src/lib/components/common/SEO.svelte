<!-- SEO Component -->
<script lang="ts">
  export let title = 'SOS Recruitment - Your Gateway to Global Opportunities';
  export let description = 'Leading recruitment agency connecting talented professionals with international and local job opportunities. Find your dream job today.';
  export let keywords = 'recruitment, jobs, careers, employment, hiring, international jobs, local jobs';
  export let ogImage = '/images/og-image.jpg';
  export let canonicalUrl = '';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
  
  <!-- Canonical URL -->
  {#if canonicalUrl}
    <link rel="canonical" href={canonicalUrl} />
  {/if}
  
  <!-- Additional Meta Tags -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#4F46E5" />
</svelte:head>
