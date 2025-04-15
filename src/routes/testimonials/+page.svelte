<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  const testimonials = [
    {
      name: 'Mohammed Al-Rashid',
      role: 'Software Engineer',
      company: 'Tech Solutions UAE',
      content:
        "SOS Recruitment made my transition to Dubai seamless. Their team handled everything from job matching to visa processing. I'm now working at my dream job thanks to their support.",
      image: '/images/testimonials/mohammed.webp',
      rating: 5
    },
    {
      name: 'Sarah Kamau',
      role: 'HR Manager',
      company: 'Equity Bank',
      content:
        'As an employer, working with SOS has been fantastic. They consistently provide high-quality candidates who match our requirements perfectly. Their screening process is thorough and professional.',
      image: '/images/testimonials/sarah.webp',
      rating: 5
    },
    {
      name: 'Abdullah Hassan',
      role: 'Operations Manager',
      company: 'Qatar Airways',
      content:
        'The level of professionalism at SOS is outstanding. They helped me secure a position in Qatar that perfectly matches my skills and career goals. Highly recommended!',
      image: '/images/testimonials/abdullah.webp',
      rating: 5
    },
    {
      name: 'Grace Muthoni',
      role: 'Finance Analyst',
      company: 'KCB Bank',
      content:
        'I appreciate how SOS Recruitment maintains regular communication throughout the job search process. They found me an excellent position that aligns with my career aspirations.',
      image: '/images/testimonials/grace.webp',
      rating: 5
    }
  ];

  function getInitials(name: string) {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  }

  function handleImageError(event: Event) {
    const img = event.currentTarget as HTMLImageElement;
    img.style.display = 'none';
  }
</script>

<svelte:head>
  <title>Success Stories - SOS Recruitment</title>
  <meta
    name="description"
    content="Read success stories from job seekers and corporate partners who have worked with Selective Outsourcing Solutions (SOS)."
  />
</svelte:head>

<div class="min-h-screen bg-gray-50 py-24">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">
        Client Success Stories
      </h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Hear from professionals and employers who have experienced success through our recruitment
        services. These testimonials reflect our commitment to excellence in career placement.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each testimonials as testimonial, i}
        <div
          class="bg-white rounded-xl shadow-lg overflow-hidden"
          in:fly={{ y: 20, delay: 200 + i * 100 }}
        >
          <div class="p-6">
            <!-- Rating -->
            <div class="flex mb-4">
              {#each Array(testimonial.rating) as _, i}
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              {/each}
            </div>

            <!-- Content -->
            <blockquote class="text-gray-600 mb-6 italic">
              "{testimonial.content}"
            </blockquote>

            <!-- Author -->
            <div class="flex items-center">
              <div class="flex-shrink-0 mr-4">
                {#if testimonial.image}
                  <img
                    class="w-12 h-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    on:error={handleImageError}
                  />
                {:else}
                  <div
                    class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary"
                  >
                    {getInitials(testimonial.name)}
                  </div>
                {/if}
              </div>
              <div>
                <div class="font-medium text-gray-900">
                  {testimonial.name}
                </div>
                <div class="text-sm text-gray-500">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  /* Add any component-specific styles here */
  blockquote {
    text-indent: 1.5rem;
  }
</style>
