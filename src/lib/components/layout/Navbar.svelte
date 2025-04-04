<!-- Enhanced modern header with animation and better styling -->
<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Button from '$lib/components/shared/Button.svelte';

  let isOpen = false;
  let isDark = false;
  let isScrolled = false;

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services',
      subItems: [
        { label: 'International Recruitment', href: '/services/international-recruitment' },
        { label: 'Local Recruitment', href: '/services/local-recruitment' },
        { label: 'CV & Interview Preparation', href: '/services/cv-preparation' },
        { label: 'Career Counseling', href: '/services/career-counseling' }
      ]
    },
    {
      label: 'Jobs',
      href: '/jobs',
      subItems: [
        { label: 'International Jobs', href: '/international-jobs' },
        { label: 'Local Jobs', href: '/internal-jobs' },
        { label: 'Browse All Jobs', href: '/jobs' },
        { label: 'Apply Now', href: '/apply' }
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' }
  ];

  function toggleMenu() {
    isOpen = !isOpen;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
  }

  function toggleDarkMode() {
    if (typeof document !== 'undefined') {
      isDark = !isDark;
      document.documentElement.classList.toggle('dark');
      localStorage?.setItem('darkMode', isDark.toString());
    }
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      isDark = localStorage?.getItem('darkMode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        document.documentElement.classList.add('dark');
      }

      const handleScroll = () => {
        isScrolled = window.scrollY > 10;
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" class:shadow-lg={isScrolled} class:bg-white={isScrolled} class:dark:bg-gray-900={isScrolled}>
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <img src="/images/logo.jpeg" alt="SOS Recruitment" class="h-12 w-auto object-contain" />
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex lg:items-center lg:space-x-8">
        {#each navItems as item}
          <div class="relative group">
            <a
              href={item.href}
              class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              class:text-primary={$page.url.pathname === item.href}
            >
              {item.label}
            </a>
            {#if item.subItems}
              <div class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="py-1">
                  {#each item.subItems as subItem}
                    <a
                      href={subItem.href}
                      class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {subItem.label}
                    </a>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        {/each}

        <!-- Dark Mode Toggle -->
        <button
          on:click={toggleDarkMode}
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Toggle dark mode"
        >
          {#if isDark}
            <!-- Sun icon for light mode -->
            <svg
              class="w-6 h-6 text-accent fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          {:else}
            <!-- Moon icon for dark mode -->
            <svg
              class="w-6 h-6 text-primary fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          {/if}
        </button>

        <div class="flex items-center space-x-4">
          <a
            href="/drop-cv"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Drop CV
          </a>
        </div>
      </div>

      <!-- Mobile menu button -->
      <div class="flex items-center lg:hidden space-x-4">
        <!-- Dark Mode Toggle for Mobile -->
        <button
          on:click={toggleDarkMode}
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Toggle dark mode"
        >
          {#if isDark}
            <svg
              class="w-6 h-6 text-accent fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          {:else}
            <svg
              class="w-6 h-6 text-primary fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          {/if}
        </button>

        <button
          on:click={toggleMenu}
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span class="sr-only">Open main menu</span>
          {#if isOpen}
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if isOpen}
    <div class="lg:hidden absolute top-20 inset-x-0 bg-white dark:bg-gray-900 shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1">
        {#each navItems as item}
          <div>
            <a
              href={item.href}
              class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white"
              class:text-primary={$page.url.pathname === item.href}
              on:click={toggleMenu}
            >
              {item.label}
            </a>
            {#if item.subItems}
              <div class="pl-4">
                {#each item.subItems as subItem}
                  <a
                    href={subItem.href}
                    class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white"
                    on:click={toggleMenu}
                  >
                    {subItem.label}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {/each}
        <div class="px-3 py-2">
          <a
            href="/drop-cv"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Drop CV
          </a>
        </div>
      </div>
    </div>
  {/if}
</nav>

<!-- Spacer -->
<div class="h-20"></div>

<style>
  /* Add any additional styles here */
  :global(.dark) nav:not(.bg-white) {
    background-color: transparent;
  }
</style>
