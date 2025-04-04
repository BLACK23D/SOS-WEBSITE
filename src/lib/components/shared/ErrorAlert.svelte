<script lang="ts">
  export let message: string;
</script>

<div
  class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg"
  role="alert"
  aria-live="polite"
>
  <div class="flex items-start">
    <div class="flex-shrink-0">
      <svg
        class="h-5 w-5 text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-red-700 dark:text-red-200">{message}</p>
    </div>
  </div>
</div>
