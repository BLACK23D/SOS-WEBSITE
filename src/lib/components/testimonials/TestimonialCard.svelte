<script lang="ts">
  import type { Testimonial } from '$lib/types/testimonial';
  import { fade, fly } from 'svelte/transition';

  export let testimonial: Testimonial;
  export let index: number;

  let imageError = false;
  // Base64 encoded placeholder image (a simple user avatar)
  const placeholderImage =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NjY2NjYyI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgM2MyLjY3IDAgNC44NCAyLjE3IDQuODQgNC44NFMxNC42NyAxNC42OCAxMiAxNC42OHMtNC44NC0yLjE3LTQuODQtNC44NFM5LjMzIDUgMTIgNXptMCAxM2MtMi42NyAwLTUuMDYtLjMzLTYuNzYtLjk5LS41NS0uMjItLjk0LS43Ni0uOTQtMS4zOCAwLTIuNjYgNC4xNS00LjgyIDcuNy00LjgyIDMuNTUgMCA3LjcgMi4xNiA3LjcgNC44MiAwIC42My0uMzkgMS4xNi0uOTQgMS4zOC0xLjcuNjYtNC4wOS45OS02Ljc2Ljk5eiIvPjwvc3ZnPg==';

  function handleImageError() {
    imageError = true;
  }
</script>

<div
  class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
  in:fly={{ y: 20, delay: index * 100 }}
>
  <div class="p-6">
    <div class="flex items-center mb-4">
      <div
        class="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0"
      >
        <img
          src={imageError ? placeholderImage : testimonial.image}
          alt={testimonial.name}
          class="w-full h-full object-cover"
          on:error={handleImageError}
        />
      </div>
      <div class="ml-4">
        <h3 class="font-semibold text-lg">{testimonial.name}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {testimonial.role} at {testimonial.company}
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-500">
          {testimonial.location}
        </p>
      </div>
    </div>
    <blockquote class="text-gray-700 dark:text-gray-300">
      "{testimonial.content}"
    </blockquote>
  </div>
</div>
