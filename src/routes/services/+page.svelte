<script lang="ts">
  import ServiceCard from '$lib/components/services/ServiceCard.svelte';

  const services = [
    {
      title: 'International Recruitment',
      description:
        'Unlock job opportunities beyond borders with Selective Outsourcing Solutions (SOS)! We specialize in connecting talented professionals with international employers, particularly in the Middle East, Europe, and North America.',
      image: '/images/services/international.webp',
      href: '/services/international-recruitment'
    },
    {
      title: 'Local Recruitment',
      description: 'Connecting qualified job seekers with top local employers in Kenya. Our extensive network and deep understanding of the local job market ensures the perfect match for both employers and candidates.',
      image: '/images/services/local.webp',
      href: '/services/local-recruitment'
    },
    {
      title: 'CV & Interview Preparation',
      description:
        'Increase your chances of getting hired with expert CV writing and interview coaching. Our professional team will help you create a compelling CV and prepare you for successful interviews.',
      image: '/images/services/cv.webp',
      href: '/services/cv-preparation'
    },
    {
      title: 'Career Counseling',
      description: 'Get professional guidance to make the right career decisions. Our experienced counselors will help you explore career paths, set goals, and develop strategies for professional growth.',
      image: '/images/services/counseling.webp',
      href: '/services/career-counseling'
    }
  ];
</script>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Comprehensive recruitment solutions tailored to meet your career and staffing needs. We pride ourselves in connecting talent with opportunity across local and international markets.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {#each services as service}
        <ServiceCard {...service} />
      {/each}
    </div>
  </div>
</div>
