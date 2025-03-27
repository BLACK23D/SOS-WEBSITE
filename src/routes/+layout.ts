// Enable prerendering for static pages
export const prerender = true;

// Enable streaming for better performance
export const ssr = true;
export const csr = true;

// Enable trailingSlash handling
export const trailingSlash = 'never';

// Load configuration
export const config = {
  isr: {
    expiration: 60 * 60 // Cache for 1 hour
  }
};

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
  return {};
};

// Preload critical components
export const _preloadComponents = [
  // Layout components
  () => import('$lib/components/layout/Navbar.svelte'),
  () => import('$lib/components/layout/Footer.svelte'),
  () => import('$lib/components/layout/ThemeToggle.svelte'),

  // Home page components
  () => import('$lib/components/home/Team.svelte'),
  () => import('$lib/components/team/TeamMember.svelte'),
  () => import('$lib/components/team/TeamPlaceholder.svelte')
];

// Load non-critical components after initial render
export const _lazyComponents = [
  '$lib/components/jobs/JobList.svelte',
  '$lib/components/jobs/JobCard.svelte',
  '$lib/components/jobs/JobFilter.svelte'
];
