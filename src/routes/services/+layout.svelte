<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
</script>

<div class="min-h-screen bg-white" in:fade>
  <slot />
</div>
