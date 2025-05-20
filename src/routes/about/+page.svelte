<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Button from '$lib/components/shared/Button.svelte';
  import { onMount } from 'svelte';
  
  let currentTestimonialIndex = 0;
  let testimonialInterval: ReturnType<typeof setInterval>;
  
  const testimonials = [
    {
      name: 'Grace Kimani',
      position: 'Healthcare Professional',
      location: 'Nairobi, Kenya',
      image: '/images/team/waithera.webp',
      quote: 'SOS Recruitment changed my life completely. I was struggling to find work locally when they helped me secure a nursing position in Qatar. The support throughout the entire process was incredible - from application to visa assistance and even cultural preparation.'
    },
    {
      name: 'John Mwangi',
      position: 'Hotel Manager',
      location: 'Doha, Qatar',
      image: '/images/team/erick.webp',
      quote: 'As an employer, finding qualified staff has always been challenging. SOS Recruitment understands our needs perfectly and consistently provides candidates who exceed our expectations. Their thorough vetting process saves us time and resources.'
    },
    {
      name: 'Sarah Ochieng',
      position: 'Customer Service Specialist',
      location: 'Dubai, UAE',
      image: '/images/team/susan.webp',
      quote: 'I had tried multiple agencies before finding SOS. The difference was night and day - they were transparent about the process, helped prepare me for interviews, and found me a position that matched my skills perfectly. Two years later, I am still thriving in my role!'
    },
    {
      name: 'David Kamau',
      position: 'Transportation Manager',
      location: 'Kuwait City, Kuwait',
      image: '/images/team/jane.webp',
      quote: 'SOS Recruitment\'s professionalism stands out in the industry. They took the time to understand our company culture before recommending candidates. The drivers they have placed with us have been reliable, skilled, and committed to excellence.'
    }
  ];
  
  function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  }
  
  function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  }
  
  function setTestimonial(index: number) {
    currentTestimonialIndex = index;
  }
  
  onMount(() => {
    // Auto-rotate testimonials every 8 seconds
    testimonialInterval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => {
      clearInterval(testimonialInterval);
    };
  });

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
  
  // Import Team component from homepage
  import Team from '$lib/components/home/Team.svelte';
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
    
    <!-- Testimonials Section -->
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        What Our Clients Say
      </h2>
      
      <!-- Decorative Background Elements -->
      <div class="relative">
        <!-- Abstract Shapes -->
        <div class="absolute -top-16 -left-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-70 z-0"></div>
        <div class="absolute -bottom-16 -right-16 w-40 h-40 bg-primary/10 rounded-full blur-2xl opacity-70 z-0"></div>
        <div class="absolute top-1/4 right-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl opacity-70 z-0"></div>
        <div class="absolute bottom-1/4 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-xl opacity-70 z-0"></div>
        
        <!-- Simplified Background Pattern -->
        <div class="absolute inset-0 opacity-5 z-0 pointer-events-none">
          <div class="grid grid-cols-12 gap-4 h-full w-full">
            {#each Array(12) as _, i}
              <div class="flex flex-col gap-4">
                {#each Array(8) as _, j}
                  {#if Math.random() > 0.5}
                    <div class="h-4 w-4 rounded-full bg-current opacity-50"></div>
                  {/if}
                {/each}
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Testimonial Card with Enhanced Design -->
        <div class="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100 z-10">
          <!-- Testimonial Slider -->
          <div class="relative min-h-[450px] md:min-h-[400px] p-8 md:p-12">
            {#each testimonials as testimonial, i}
              {#if i === currentTestimonialIndex}
                <div 
                  class="flex flex-col md:flex-row items-center gap-8 absolute inset-0 p-8 md:p-12"
                  in:fade={{ duration: 500 }}
                  out:fade={{ duration: 300 }}
                >
                  <!-- Image with decorative elements -->
                  <div class="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
                    <!-- Decorative circles behind image -->
                    <div class="absolute -top-3 -left-3 w-full h-full rounded-full bg-primary/10 transform rotate-45"></div>
                    <div class="absolute -bottom-3 -right-3 w-full h-full rounded-full bg-primary/5 transform -rotate-45"></div>
                    
                    <!-- Profile image with enhanced styling -->
                    <div class="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        class="w-full h-full object-cover"
                      />
                    </div>
                    
                    <!-- Decorative elements -->
                    <div class="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-yellow-400 opacity-70"></div>
                    <div class="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-primary opacity-70"></div>
                  </div>
                  
                  <!-- Content with enhanced styling -->
                  <div class="flex-1 relative">
                    <!-- Large decorative quote mark -->
                    <div class="absolute -top-6 -left-2 text-primary/10 text-[120px] font-serif leading-none z-0">❝</div>
                    
                    <!-- Testimonial content -->
                    <div class="relative z-10">
                      <p class="text-gray-700 text-lg italic mb-8 relative z-10">{testimonial.quote}</p>
                      
                      <!-- Signature area with decorative line -->
                      <div class="pt-4 border-t border-gray-200">
                        <h4 class="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                        <p class="text-primary font-medium">{testimonial.position}</p>
                        <div class="flex items-center mt-1">
                          <span class="text-gray-500">{testimonial.location}</span>
                          <!-- Location pin icon -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/if}
            {/each}
          </div>
          
          <!-- Enhanced Navigation Controls -->
          <div class="absolute -bottom-3 left-0 right-0 flex justify-center">
            <div class="bg-white px-4 py-2 rounded-full shadow-md flex space-x-2">
              {#each testimonials as _, i}
                <button 
                  class="w-3 h-3 rounded-full transition-all duration-300 {i === currentTestimonialIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'}"
                  on:click={() => setTestimonial(i)}
                  aria-label="View testimonial {i + 1}"
                ></button>
              {/each}
            </div>
          </div>
          
          <!-- Enhanced Arrow Controls -->
          <button 
            class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-gray-50 shadow-lg flex items-center justify-center text-gray-700 hover:text-primary transition-all duration-300 border border-gray-100 group"
            on:click={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-gray-50 shadow-lg flex items-center justify-center text-gray-700 hover:text-primary transition-all duration-300 border border-gray-100 group"
            on:click={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <Team />

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
        <Button href="#/jobs" variant="primary">Browse Jobs</Button>
        <Button href="#/contact" variant="outline">Contact Us</Button>
      </div>
    </div>
  </div>
</div>
