<!-- Optimized Image Component with lazy loading and blur placeholder -->
<script lang="ts">
  export let src: string;
  export let alt: string;
  export let className = '';
  
  let loaded = false;
  let imageElement: HTMLImageElement;

  function onLoad() {
    loaded = true;
  }
</script>

<div class="relative {className}">
  <img
    {src}
    {alt}
    loading="lazy"
    bind:this={imageElement}
    on:load={onLoad}
    class="transition-opacity duration-300 w-full h-full object-cover {loaded ? 'opacity-100' : 'opacity-0'}"
  />
  
  {#if !loaded}
    <div class="absolute inset-0 bg-gray-200 animate-pulse" />
  {/if}
</div>
