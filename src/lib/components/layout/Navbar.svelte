<!-- Enhanced modern header with animation and better styling -->
<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Button from '$lib/components/shared/Button.svelte';

  let isOpen = false;
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

  onMount(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        isScrolled = window.scrollY > 10;
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" class:bg-white={isScrolled}>
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
              class="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
              class:text-primary={$page.url.pathname === item.href}
            >
              {item.label}
            </a>
            {#if item.subItems}
              <div class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="py-1">
                  {#each item.subItems as subItem}
                    <a
                      href={subItem.href}
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.label}
                    </a>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        {/each}

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
        <button
          on:click={toggleMenu}
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
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
    <div class="lg:hidden absolute top-20 inset-x-0 bg-white shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1">
        {#each navItems as item}
          <div>
            <a
              href={item.href}
              class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
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
                    class="block px-3 py-2 text-sm text-gray-600 hover:text-primary"
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

