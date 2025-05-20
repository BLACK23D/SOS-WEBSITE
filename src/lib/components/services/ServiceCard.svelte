<script lang="ts">
  export let title: string;
  export let description: string;
  export let image: string;
  export let href: string;

  function handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
    }
  }
</script>

<a
  href={href}
  data-sveltekit-preload-data
  class="group block w-full h-full text-left overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
>
  <div class="relative aspect-w-16 aspect-h-9">
    <img
      src={image}
      alt={title}
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      on:error={handleImageError}
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"
    ></div>
    <div class="absolute bottom-0 left-0 right-0 p-6">
      <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
        {title}
      </h3>
    </div>
  </div>

  <div class="p-6 bg-white">
    <p class="text-gray-600 text-lg leading-relaxed mb-4 line-clamp-3">
      {description}
    </p>
    <div
      class="inline-flex items-center text-primary font-medium group-hover:text-secondary transition-colors"
    >
      Learn more
      <svg
        class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
</a>

<style>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 3;
  }
</style>
