<script lang="ts">
  import { fade } from 'svelte/transition';
  import TeamPlaceholder from './TeamPlaceholder.svelte';
  import type { TeamMember as TeamMemberType } from '$lib/types/team';

  export let member: TeamMemberType;

  // Default placeholder image if the team member's image is not available
  let imageError = false;

  function handleImageError() {
    imageError = true;
  }
</script>

<div
  class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-full group"
  in:fade={{ duration: 300 }}
>
  <div class="aspect-w-1 aspect-h-1 bg-gray-100 dark:bg-gray-700">
    <div class="relative w-full h-full">
      {#if imageError}
        <TeamPlaceholder name={member.name} />
      {:else}
        <img
          src={member.image}
          alt={member.name}
          class="object-cover w-full h-full"
          loading="lazy"
          on:error={handleImageError}
        />
      {/if}
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
      ></div>
    </div>
  </div>
  <div class="p-6">
    <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
      {member.name}
    </h3>
    <p
      class="text-primary-dark dark:text-primary-light font-medium mb-4 text-sm uppercase tracking-wider"
    >
      {member.role}
    </p>
    <p class="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">{member.bio}</p>

    <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
      <a
        href="mailto:{member.email}"
        class="inline-flex items-center gap-2 text-sm text-primary-dark hover:text-primary transition-colors"
        aria-label="Email {member.name}"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <span>Contact {member.name.split(' ')[0]}</span>
      </a>
    </div>
  </div>
</div>

<style>
  .aspect-w-1 {
    position: relative;
    padding-bottom: 100%;
  }

  .aspect-w-1 > * {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
