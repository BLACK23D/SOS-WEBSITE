<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
  export let type: 'button' | 'submit' = 'button';
  export let href: string | undefined = undefined;
  export let disabled: boolean = false;
  export let loading: boolean = false;
  export let className: string = '';

  const baseStyles = 'px-6 py-2 rounded-full transition-all duration-300 font-medium';
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-light',
    secondary: 'bg-secondary text-white hover:bg-secondary-light',
    outline: 'border-2 border-current'
  };

  $: buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;
</script>

{#if href}
  <a {href} class={buttonClasses} class:opacity-50={disabled} on:click>
    <slot />
  </a>
{:else}
  <button {type} class={buttonClasses} {disabled} on:click>
    {#if loading}
      <span class="inline-block animate-spin mr-2">⌛</span>
    {/if}
    <slot />
  </button>
{/if}
