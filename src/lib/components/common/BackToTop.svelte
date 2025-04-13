<!-- Back to Top Button -->
<script lang="ts">
  import { onMount } from 'svelte';
  let visible = false;

  onMount(() => {
    const handleScroll = () => {
      visible = window.scrollY > 400;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
</script>

<button
  class="fixed bottom-24 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
  class:opacity-0={!visible}
  class:pointer-events-none={!visible}
  on:click={scrollToTop}
  aria-label="Back to top"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
</button>

<style>
  button {
    z-index: 40;
  }
</style>
