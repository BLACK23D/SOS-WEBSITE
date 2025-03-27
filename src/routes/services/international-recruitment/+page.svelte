<script lang="ts">
  import Button from '$lib/components/shared/Button.svelte';
  import { fade } from 'svelte/transition';

  const features = [
    {
      title: 'Verified Employers',
      description: 'We partner with trusted companies offering legitimate job opportunities.'
    },
    {
      title: 'Visa & Work Permit Assistance',
      description: 'Get full support in securing work visas and travel documentation.'
    },
    {
      title: 'Pre-Departure Training',
      description: 'Learn about workplace culture, expectations, and safety regulations.'
    },
    {
      title: 'Guaranteed Placement Support',
      description: 'Our team ensures you are settled and ready for work upon arrival.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Submit Your Application',
      description: 'Apply online or visit our office with your documents.'
    },
    {
      number: '02',
      title: 'Screening & Interview',
      description: 'Attend an interview to match your skills with suitable employers.'
    },
    {
      number: '03',
      title: 'Job Offer & Visa Processing',
      description: 'Receive a job offer and start your visa application.'
    },
    {
      number: '04',
      title: 'Travel & Job Placement',
      description: 'Upon visa approval, travel to your new job abroad!'
    }
  ];
</script>

<div in:fade>
  <!-- Hero Section -->
  <div class="relative bg-[#174e4f] text-white">
    <div class="absolute inset-0 z-0">
      <img
        src="/images/services/international-hero.webp"
        alt="International Recruitment"
        class="w-full h-full object-cover opacity-20"
      />
    </div>
    <div class="relative z-10 container mx-auto px-4 py-20 md:py-32">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          International Recruitment – Expanding Opportunities Globally
        </h1>
        <p class="text-xl md:text-2xl text-gray-100 mb-8">
          Unlock job opportunities beyond borders with Selective Outsourcing Solutions (SOS)! We
          specialize in connecting skilled and unskilled workers with reputable international
          employers.
        </p>
        <Button
          href="https://wa.me/254736887668?text=Hi%20SOS%20Recruitment%2C%20I'm%20interested%20in%20international%20job%20opportunities"
          variant="secondary"
        >
          Apply Now
        </Button>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container mx-auto px-4 py-16">
    <!-- Service Description -->
    <div class="max-w-3xl mx-auto mb-16">
      <h2 class="text-3xl font-bold mb-6">Looking for a job outside Kenya?</h2>
      <p class="text-lg text-gray-600 mb-6">
        SOS provides professional recruitment services to help job seekers secure employment in
        Qatar and other international locations. Whether you are an experienced professional or an
        entry-level worker, we match your skills with high-demand industries.
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

    <!-- Why Choose Us -->
    <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
      <h2 class="text-3xl font-bold mb-8">Why Choose SOS?</h2>
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
          <span class="text-lg">Over 15 years of experience in international recruitment</span>
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
          <span class="text-lg"
            >Strong partnerships with leading employers in Qatar and the Gulf region</span
          >
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
          <span class="text-lg">Comprehensive support from application to job placement</span>
        </li>
      </ul>
    </div>

    <!-- CTA Section -->
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-6">Ready to Work Abroad?</h2>
      <p class="text-lg text-gray-600 mb-8">
        Take the first step towards your international career today!
      </p>
      <Button
        href="https://wa.me/254736887668?text=Hi%20SOS%20Recruitment%2C%20I'm%20interested%20in%20international%20job%20opportunities"
        variant="primary"
      >
        Apply Now
      </Button>
    </div>
  </div>
</div>
