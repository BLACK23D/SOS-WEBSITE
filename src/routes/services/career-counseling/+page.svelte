<script lang="ts">
  import Button from '$lib/components/shared/Button.svelte';
  import { fade } from 'svelte/transition';

  const features = [
    {
      title: 'Personalized Career Guidance',
      description: 'Tailored advice to help you choose the right career path.'
    },
    {
      title: 'Job Market Trends & Insights',
      description: 'Stay updated on high-demand industries and opportunities.'
    },
    {
      title: 'Skills Assessment & Planning',
      description: 'Understand where you fit best in the job market.'
    },
    {
      title: 'Training & Certification Advice',
      description: 'Get recommendations for upskilling and career growth.'
    }
  ];

  const benefits = [
    {
      title: 'Career Direction',
      description: 'Get clear guidance on which career path suits your skills and interests best.'
    },
    {
      title: 'Industry Insights',
      description:
        'Learn about different industries and their growth potential in Kenya and abroad.'
    },
    {
      title: 'Skill Development',
      description: 'Identify skills gaps and get recommendations for relevant training programs.'
    },
    {
      title: 'Job Search Strategy',
      description: 'Develop an effective strategy to find and secure your ideal job.'
    }
  ];
</script>

<div in:fade>
  <!-- Hero Section -->
  <div class="relative bg-[#174e4f] text-white">
    <div class="absolute inset-0 z-0">
      <img
        src="/images/services/career-hero.webp"
        alt="Career Counseling"
        class="w-full h-full object-cover opacity-20"
      />
    </div>
    <div class="relative z-10 container mx-auto px-4 py-20 md:py-32">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Career Counseling – Find Your True Career Path
        </h1>
        <p class="text-xl md:text-2xl text-gray-100 mb-8">
          Confused about which career path to take? Let our career experts help you make the right
          career decisions based on your skills, interests, and job market trends.
        </p>
        <Button
          href="https://wa.me/254736887668?text=Hi%20SOS%20Recruitment%2C%20I'm%20interested%20in%20career%20counseling%20services"
          variant="secondary"
        >
          Book a Session
        </Button>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container mx-auto px-4 py-16">
    <!-- Service Description -->
    <div class="max-w-3xl mx-auto mb-16">
      <h2 class="text-3xl font-bold mb-6">Professional Career Guidance</h2>
      <p class="text-lg text-gray-600 mb-6">
        Choosing the right career can be overwhelming. We provide one-on-one career counseling,
        helping job seekers identify opportunities that match their goals and strengths.
      </p>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {#each features as feature}
        <div class="p-6 rounded-lg bg-gray-50">
          <h3 class="text-xl font-bold text-[#174e4f] mb-3">{feature.title}</h3>
          <p class="text-gray-600">{feature.description}</p>
        </div>
      {/each}
    </div>

    <!-- Our Process -->
    <div class="mb-16">
      <h2 class="text-3xl font-bold text-center mb-12">Our Career Counseling Process</h2>
      <div class="relative">
        <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 hidden md:block"></div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="relative text-center">
            <div
              class="w-12 h-12 rounded-full bg-[#174e4f] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold"
            >
              1
            </div>
            <h3 class="text-xl font-bold mb-2">Assessment</h3>
            <p class="text-gray-600">Evaluate your skills, interests, and career goals</p>
          </div>
          <div class="relative text-center">
            <div
              class="w-12 h-12 rounded-full bg-[#174e4f] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold"
            >
              2
            </div>
            <h3 class="text-xl font-bold mb-2">Analysis</h3>
            <p class="text-gray-600">Review job market trends and opportunities</p>
          </div>
          <div class="relative text-center">
            <div
              class="w-12 h-12 rounded-full bg-[#174e4f] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold"
            >
              3
            </div>
            <h3 class="text-xl font-bold mb-2">Planning</h3>
            <p class="text-gray-600">Develop a personalized career action plan</p>
          </div>
          <div class="relative text-center">
            <div
              class="w-12 h-12 rounded-full bg-[#174e4f] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold"
            >
              4
            </div>
            <h3 class="text-xl font-bold mb-2">Implementation</h3>
            <p class="text-gray-600">Execute your plan with ongoing support</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Benefits -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {#each benefits as benefit}
        <div class="bg-gray-50 rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-4">{benefit.title}</h3>
          <p class="text-gray-600">{benefit.description}</p>
        </div>
      {/each}
    </div>

    <!-- CTA Section -->
    <div class="bg-[#174e4f] text-white rounded-2xl p-8 md:p-12 text-center">
      <h2 class="text-3xl font-bold mb-6">Ready to Start Your Career Journey?</h2>
      <p class="text-xl mb-8">Book a career counseling session with our experts today!</p>
      <Button
        href="https://wa.me/254736887668?text=Hi%20SOS%20Recruitment%2C%20I'm%20interested%20in%20career%20counseling%20services"
        variant="secondary"
      >
        Book Your Session
      </Button>
    </div>
  </div>
</div>
