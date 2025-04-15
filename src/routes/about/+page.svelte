<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Button from '$lib/components/shared/Button.svelte';

  const coreValues = [
    {
      icon: '🎯',
      value: 'Passion',
      description: 'We are dedicated to delivering quality service with enthusiasm and commitment.'
    },
    {
      icon: '🌟',
      value: 'Positivity',
      description: 'We approach challenges with a "can-do" attitude and optimistic mindset.'
    },
    {
      icon: '🤝',
      value: 'Professionalism',
      description: 'We uphold the highest standards in our industry with expertise and excellence.'
    },
    {
      icon: '⚖️',
      value: 'Integrity',
      description: 'Trust and transparency are at the core of every relationship we build.'
    },
    {
      icon: '🤲',
      value: 'Collaboration',
      description: 'We believe teamwork and partnership lead to greater success for all.'
    },
    {
      icon: '💡',
      value: 'Innovation',
      description: 'We embrace creativity and technology to deliver cutting-edge solutions.'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Years of Expertise', icon: '🏆' },
    { number: '1M+', label: 'Job Seekers Placed', icon: '👥' },
    { number: '4', label: 'Global Offices', icon: '🌍' },
    { number: '100+', label: 'Corporate Partners', icon: '🤝' }
  ];

  const branches = [
    { city: 'Nairobi', country: 'Kenya', type: 'Head Office', flag: '🇰🇪' },
    { city: 'Mombasa', country: 'Kenya', type: 'Branch', flag: '🇰🇪' },
    { city: 'Doha', country: 'Qatar', type: 'Branch', flag: '🇶🇦' },
    { city: 'Dubai', country: 'UAE', type: 'Branch', flag: '🇦🇪' }
  ];
</script>

<svelte:head>
  <title>About Us | SOS Recruitment</title>
  <meta
    name="description"
    content="Founded in 2005, Selective Outsourcing Solutions Ltd. has been a trusted bridge between job seekers in Africa and employers worldwide."
  />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white" in:fade>
  <!-- Hero Section -->
  <div class="relative bg-primary py-20">
    <div class="absolute inset-0 bg-primary-dark/10"></div>
    <div class="container mx-auto px-4 relative">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
        <p class="text-xl md:text-2xl text-white font-medium mb-8">
          Connecting Talent with Opportunity Since 2005
        </p>
        <div class="prose prose-lg prose-invert mx-auto">
          <p class="text-white leading-relaxed">
            Founded in 2005, Selective Outsourcing Solutions Ltd. has been a trusted bridge between job
            seekers in Africa and employers worldwide. Our journey began when our founder identified a
            gap in global recruitment, and since then, we have helped over 1,000,000 job seekers secure
            life-changing opportunities.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 py-16 space-y-24">
    <!-- Achievements -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {#each achievements as { number, label, icon }, i}
        <div
          class="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300"
          in:fly={{ y: 20, duration: 500, delay: i * 100 }}
        >
          <div class="text-4xl mb-4">{icon}</div>
          <div class="text-3xl md:text-4xl font-bold text-primary mb-2">
            {number}
          </div>
          <div class="text-gray-600 font-medium">
            {label}
          </div>
        </div>
      {/each}
    </div>

    <!-- Core Values -->
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Our Core Values
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each coreValues as { icon, value, description }, i}
          <div
            class="bg-white rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            in:fly={{ y: 20, duration: 500, delay: i * 100 }}
          >
            <div class="text-4xl mb-4">{icon}</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{value}</h3>
            <p class="text-gray-600">{description}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Global Presence -->
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Our Global Presence
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each branches as { city, country, type, flag }, i}
          <div
            class="bg-white rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            in:fly={{ y: 20, duration: 500, delay: i * 100 }}
          >
            <div class="text-4xl mb-4">{flag}</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-1">{city}</h3>
            <p class="text-gray-600 mb-2">{country}</p>
            <span
              class="inline-block px-3 py-1 rounded-full text-sm {type === 'Head Office'
                ? 'bg-primary/10 text-primary'
                : 'bg-gray-100 text-gray-600'}"
            >
              {type}
            </span>
          </div>
        {/each}
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-primary/5 rounded-2xl p-12 text-center max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">
        Ready to Start Your Journey?
      </h2>
      <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
        Whether you're looking for your next career move or seeking talent for your organization, we're
        here to help you succeed.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <Button href="/jobs" variant="primary">Browse Jobs</Button>
        <Button href="/contact" variant="outline">Contact Us</Button>
      </div>
    </div>
  </div>
</div>
