<script lang="ts">
  export let name: string;

  // Generate initials from name
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
</script>

<div
  class="w-full h-full bg-primary-light/5 dark:bg-primary-light/10 flex items-center justify-center"
>
  <span class="text-4xl font-bold text-primary-dark/70 dark:text-primary-light/70">{initials}</span>
</div>
