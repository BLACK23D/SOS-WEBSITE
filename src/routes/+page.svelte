<script lang="ts">
  import { fade } from 'svelte/transition';
  import Hero from '$lib/components/home/Hero.svelte';
  import Services from '$lib/components/home/Services.svelte';
  import CallToAction from '$lib/components/home/CallToAction.svelte';
  import Team from '$lib/components/home/Team.svelte';
  import LatestNews from '$lib/components/home/LatestNews.svelte';
  import Map from '$lib/components/home/Map.svelte';
</script>

<svelte:head>
  <title>SOS Recruitment - Your Gateway to Global Career Opportunities</title>
  <meta
    name="description"
    content="SOS Recruitment connects talented professionals with leading employers across Kenya and the Middle East. Find your dream job today!"
  />
</svelte:head>

<div class="flex flex-col min-h-screen">
  <main class="flex-grow">
    <Hero />
    <LatestNews />
    <Services />
    <Team />
    <Map />
    <CallToAction />
  </main>
</div>
