<script lang="ts">
  import Button from '$lib/components/shared/Button.svelte';
  import { fade } from 'svelte/transition';

  const features = [
    {
      title: 'Professional CV Writing & Editing',
      description: 'Get a customized, well-structured resume that stands out.'
    },
    {
      title: 'Mock Interviews & Coaching',
      description: 'Practice with real-world interview scenarios and expert feedback.'
    },
    {
      title: 'LinkedIn Profile Optimization',
      description: 'Build a strong online presence to attract recruiters.'
    },
    {
      title: 'Industry-Specific Formatting',
      description: 'Tailored CV styles for different job sectors and roles.'
    }
  ];

  const services = [
    {
      title: 'CV Writing & Review',
      items: [
        'Professional CV writing from scratch',
        'CV review and optimization',
        'Cover letter writing',
        'LinkedIn profile creation'
      ]
    },
    {
      title: 'Interview Preparation',
      items: [
        'One-on-one mock interviews',
        'Industry-specific interview tips',
        'Behavioral interview training',
        'Salary negotiation strategies'
      ]
    }
  ];
</script>

<div in:fade>
  <!-- Hero Section -->
  <div class="relative bg-[#174e4f] text-white">
    <div class="absolute inset-0 z-0">
      <img
        src="/images/services/cv-hero.webp"
        alt="CV & Interview Preparation"
        class="w-full h-full object-cover opacity-20"
      />
    </div>
    <div class="relative z-10 container mx-auto px-4 py-20 md:py-32">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          CV & Interview Preparation – Your Gateway to Success
        </h1>
        <p class="text-xl md:text-2xl text-gray-100 mb-8">
          Want to increase your chances of getting hired? A strong CV and interview skills can make
          all the difference! Let our experts prepare you for success.
        </p>
        <Button
          href="https://wa.me/254736887668?text=Hi%20SOS%20Recruitment%2C%20I'm%20interested%20in%20CV%20writing%20and%20interview%20preparation%20services"
          variant="secondary"
        >
          Get Started
        </Button>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container mx-auto px-4 py-16">
    <!-- Service Description -->
    <div class="max-w-3xl mx-auto mb-16">
      <h2 class="text-3xl font-bold mb-6">Stand Out from the Competition</h2>
      <p class="text-lg text-gray-600 mb-6">
        Your CV is your first impression! Our team of professional career advisors helps you craft a
        winning resume and train for interviews, ensuring you stand out in a competitive job market.
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

    <!-- Services Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {#each services as service}
        <div class="bg-gray-50 rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-6">{service.title}</h3>
          <ul class="space-y-4">
            {#each service.items as item}
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
                <span class="text-lg">{item}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <!-- Why Choose Us -->
    <div class="bg-[#174e4f] text-white rounded-2xl p-8 md:p-12 mb-16">
      <h2 class="text-3xl font-bold mb-8">Why Choose Our CV Services?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Expert Writers</h3>
          <p class="text-gray-100">
            Our professional CV writers understand what employers are looking for and how to present
            your skills effectively.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Proven Results</h3>
          <p class="text-gray-100">
            Our clients consistently report higher interview invitation rates after using our
            services.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Personalized Approach</h3>
          <p class="text-gray-100">
            Each CV is tailored to your specific industry, experience level, and career goals.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Ongoing Support</h3>
          <p class="text-gray-100">
            Get continuous guidance and revisions until you're completely satisfied with your CV.
          </p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
      <p class="text-lg text-gray-600 mb-8">
        Get your professional CV and interview coaching today!
      </p>
      <Button
        href="https://wa.me/254736887668?text=Hi%20SOS%20Recruitment%2C%20I'm%20interested%20in%20CV%20writing%20and%20interview%20preparation%20services"
        variant="primary"
      >
        Get Started Now
      </Button>
    </div>
  </div>
</div>
