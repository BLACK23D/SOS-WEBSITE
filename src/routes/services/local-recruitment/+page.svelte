<script lang="ts">
  import ServicePageLayout from '$lib/components/services/ServicePageLayout.svelte';
  import ServiceFeature from '$lib/components/services/ServiceFeature.svelte';
  import Button from '$lib/components/shared/Button.svelte';

  const positions = [
    'Drivers',
    'Security Guards',
    'Riders',
    'Cleaners',
    'Waiters & Waitresses',
    'Car Washers',
    'Bouncers'
  ];

  const features = [
    {
      title: 'Quick Hiring Process',
      description: 'We match qualified candidates with immediate job openings.',
      icon: 'briefcase'
    },
    {
      title: 'Diverse Job Opportunities',
      description: 'We recruit across various industries.',
      icon: 'star'
    },
    {
      title: 'Verified Employers',
      description: 'Work with trusted companies that follow legal employment standards.'
    },
    {
      title: 'Career Growth Support',
      description: 'Get long-term career guidance to advance in your field.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Submit Your Resume',
      description: 'Apply online or drop off your documents at our office.'
    },
    {
      number: '02',
      title: 'Screening & Interview',
      description: 'Attend an interview and meet potential employers.'
    },
    {
      number: '03',
      title: 'Get Matched',
      description: 'We connect you with verified job opportunities.'
    },
    {
      number: '04',
      title: 'Start Your New Job',
      description: 'Begin your employment with a trusted company.'
    }
  ];
</script>

<ServicePageLayout
  title="Local Recruitment – Finding the Right Talent"
  description="Connect with top local talent. We help businesses find and hire the best candidates for their teams across Kenya."
  heroImage="/images/services/local.webp"
  heroAlt="Local Recruitment Services"
  ctaText="Get Started"
  ctaLink="https://wa.me/254736887668?text=Hi%20SOS%20Recruitment%2C%20I'm%20interested%20in%20local%20recruitment%20services"
  ctaVariant="secondary"
>


  <!-- Main Content -->
  <div class="container mx-auto px-4 py-16">
    <!-- Available Positions -->
    <div class="max-w-3xl mx-auto mb-16">
      <h2 class="text-3xl font-bold mb-8">Available Positions</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        {#each positions as position}
          <div class="p-4 bg-gray-50 rounded-lg text-center">
            <span class="text-lg font-medium text-gray-900">{position}</span>
          </div>
        {/each}
      </div>
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

    <!-- Process Section -->
    <div class="mb-16">
      <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each steps as step}
          <div class="text-center">
            <div
              class="w-12 h-12 rounded-full bg-[#174e4f] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold"
            >
              {step.number}
            </div>
            <h3 class="text-xl font-bold mb-2">{step.title}</h3>
            <p class="text-gray-600">{step.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Requirements Section -->
    <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
      <h2 class="text-3xl font-bold mb-8">Basic Requirements</h2>
      <ul class="space-y-4">
        <li class="flex items-start">
          <svg
            class="w-6 h-6 text-[#174e4f] mt-1 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span class="text-lg">Valid National ID</span>
        </li>
        <li class="flex items-start">
          <svg
            class="w-6 h-6 text-[#174e4f] mt-1 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span class="text-lg">Updated CV/Resume</span>
        </li>
        <li class="flex items-start">
          <svg
            class="w-6 h-6 text-[#174e4f] mt-1 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span class="text-lg">Relevant certifications (if applicable)</span>
        </li>
      </ul>
    </div>

    <!-- CTA Section -->
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-6">Looking for a Job in Kenya?</h2>
      <p class="text-lg text-gray-600 mb-8">Start your journey to a better career today!</p>
      <Button
        href="https://wa.me/254736887668?text=Hi%20SOS%20Recruitment%2C%20I'm%20interested%20in%20local%20job%20opportunities"
        variant="primary"
      >
        Apply Today
      </Button>
    </div>
</ServicePageLayout>
