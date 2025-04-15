<script lang="ts">
  import ServicePageLayout from '$lib/components/services/ServicePageLayout.svelte';
  import ServiceFeature from '$lib/components/services/ServiceFeature.svelte';
  import Button from '$lib/components/shared/Button.svelte';

  const features = [
    {
      title: 'Verified Employers',
      description: 'We partner with trusted companies offering legitimate job opportunities.',
      icon: 'briefcase'
    },
    {
      title: 'Visa & Work Permit Assistance',
      description: 'Get full support in securing work visas and travel documentation.',
      icon: 'document'
    },
    {
      title: 'Pre-Departure Training',
      description: 'Learn about workplace culture, expectations, and safety regulations.',
      icon: 'star'
    },
    {
      title: 'Guaranteed Placement Support',
      description: 'Our team ensures you are settled and ready for work upon arrival.',
      icon: 'check'
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

<ServicePageLayout
  title="International Recruitment – Your Gateway to Global Opportunities"
  description="Connect with top employers worldwide. We specialize in placing talented professionals in rewarding international positions, with a focus on the Gulf region."
  heroImage="/images/services/international.webp"
  heroAlt="International Recruitment Services"
  ctaText="Start Your Journey"
  ctaLink="https://wa.me/254736887668?text=Hi%20SOS%20Recruitment%2C%20I'm%20interested%20in%20international%20job%20opportunities"
  ctaVariant="secondary"
>
  <!-- Overview Section -->
  <div class="mb-16">
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Looking for International Career Opportunities?</h2>
    <p class="text-gray-700 text-lg mb-8">
      SOS provides comprehensive recruitment services to help professionals secure rewarding positions
      abroad. Whether you're an experienced professional or starting your career, we connect you with
      reputable employers in Qatar and other international locations.
    </p>

    <!-- Features Grid -->
    <div class="service-grid">
      {#each features as feature}
        <ServiceFeature {...feature} />
      {/each}
    </div>
  </div>

  <!-- Process Section -->
  <div class="service-section">
    <h2 class="service-heading text-center">Our Recruitment Process</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      {#each steps as step}
        <div class="text-center service-feature-card">
          <div class="w-12 h-12 rounded-full bg-[#174e4f] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
            {step.number}
          </div>
          <h3 class="service-subheading">{step.title}</h3>
          <p class="service-text">{step.description}</p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Why Choose Us Section -->
  <div class="service-section bg-gray-50 rounded-2xl p-8 md:p-12">
    <h2 class="service-heading">Why Choose SOS for International Recruitment?</h2>
    <ul class="service-list">
      <li class="service-list-item">
        <svg class="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="service-text">Over 15 years of experience in international recruitment</span>
      </li>
      <li class="service-list-item">
        <svg class="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="service-text">Strong partnerships with leading employers in Qatar and the Gulf region</span>
      </li>
      <li class="service-list-item">
        <svg class="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="service-text">Comprehensive support throughout your international career journey</span>
      </li>
    </ul>
  </div>

  <!-- CTA Section -->
  <div class="text-center service-section">
    <h2 class="service-heading">Ready to Start Your International Career?</h2>
    <p class="service-text text-lg mb-8">
      Take the first step towards your global career journey today. Our team is ready to help you
      achieve your international career goals.
    </p>
    <Button
      href="https://wa.me/254736887668?text=Hi%20SOS%20Recruitment%2C%20I'm%20interested%20in%20international%20job%20opportunities"
      variant="primary"
    >
      Apply Now
    </Button>
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
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each steps as step}
          <div class="text-center">
            <div
              class="w-12 h-12 rounded-full bg-[#174e4f] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold"
            >
              {step.number}
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
            <p class="text-gray-700">{step.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Why Choose Us -->
    <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Why Choose SOS?</h2>
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
          <span class="text-lg text-gray-700">Over 15 years of experience in international recruitment</span>
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
          <span class="text-lg text-gray-700">Comprehensive support from application to job placement</span>
        </li>
      </ul>
    </div>

    <!-- CTA Section -->
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Ready to Work Abroad?</h2>
      <p class="text-lg text-gray-700 mb-8">
        Take the first step towards your international career today!
      </p>
      <Button
        href="https://wa.me/254736887668?text=Hi%20SOS%20Recruitment%2C%20I'm%20interested%20in%20international%20job%20opportunities"
        variant="primary"
      >
        Apply Now
      </Button>
    </div>
</ServicePageLayout>
