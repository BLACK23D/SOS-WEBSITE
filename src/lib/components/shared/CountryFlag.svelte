<script lang="ts">
  export let country: string;
  export let size: 'sm' | 'md' | 'lg' = 'md';

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  $: flagUrl = `https://flagcdn.com/w40/${country.toLowerCase()}.png`;
  $: flagClass = sizeClasses[size];
</script>

<img
  src={flagUrl}
  alt="Flag of {country}"
  class="rounded {flagClass}"
  loading="lazy"
  width="40"
  height="40"
/>
