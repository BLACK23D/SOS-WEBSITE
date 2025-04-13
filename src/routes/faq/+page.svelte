<script>
  let openQuestionId = '';

  const faqSections = [
    {
      title: 'General Information',
      icon: '🏢',
      questions: [
        {
          id: 'q1',
          question: 'What is Selective Outsourcing Solutions (SOS)?',
          answer: 'We are a licensed recruitment agency that connects qualified job seekers with reputable employers in Qatar and other locations.'
        },
        {
          id: 'q2',
          question: 'What types of jobs do you offer?',
          answer: [
            'We specialize in recruiting for the following positions:',
            '• Drivers',
            '• Security Guards',
            '• Riders',
            '• Cleaners',
            '• Waiters & Waitresses',
            '• Car Washers',
            '• Bouncers'
          ]
        }
      ]
    },
    {
      title: 'Job Application & Registration',
      icon: '📝',
      questions: [
        {
          id: 'q3',
          question: 'How do I apply for a job in Qatar?',
          answer: [
            'You can apply through the following methods:',
            '1. Online Application – Fill out our registration form on our Apply page',
            '2. Physical Application – Visit our office and submit your documents in person'
          ]
        },
        {
          id: 'q4',
          question: 'What are the requirements to apply?',
          answer: [
            '• Be between 18-47 years old',
            '• Have a valid driver\'s license (for driver positions)',
            '• Have at least 1–2 years of experience in your field',
            '• Possess a valid passport (or proof of passport application)'
          ]
        },
        {
          id: 'q5',
          question: 'Is there a registration fee?',
          answer: 'No, we do not charge any registration fees. Be cautious of anyone asking for payment to process your application.'
        }
      ]
    },
    {
      title: 'Visa & Travel',
      icon: '✈️',
      questions: [
        {
          id: 'q6',
          question: 'Do you handle visa processing?',
          answer: 'Yes, we handle all visa processing for successful candidates. This includes work permits and necessary documentation.'
        },
        {
          id: 'q7',
          question: 'Who pays for the flight tickets?',
          answer: 'Flight tickets are typically covered by the employer once your application is successful and visa is approved.'
        }
      ]
    },
    {
      title: 'Trust & Legitimacy',
      icon: '🛡️',
      questions: [
        {
          id: 'q8',
          question: 'Is SOS a legitimate recruitment agency?',
          answer: 'Yes, we are a fully licensed and registered recruitment agency with over 15 years of experience.'
        },
        {
          id: 'q9',
          question: 'Do you have physical offices?',
          answer: 'Yes, our head office is in Nairobi, Kenya, with branches in Mombasa, Doha, and Dubai.'
        }
      ]
    }
  ];

  function toggleQuestion(id) {
    openQuestionId = openQuestionId === id ? '' : id;
  }
</script>

<svelte:head>
  <title>FAQ | SOS Recruitment</title>
  <meta
    name="description"
    content="Find answers to frequently asked questions about our recruitment process, job opportunities, and services."
  />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
  <!-- Hero Section -->
  <div class="relative bg-primary py-16 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
        </pattern>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>
    <div class="absolute inset-0 bg-primary-dark/10"></div>
    <!-- Content -->
    <div class="container mx-auto px-4 relative">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Frequently Asked Questions
          <div class="absolute left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 mt-4"></div>
        </h1>
        <p class="text-xl text-white/90 max-w-3xl mx-auto mt-8">
          Find answers to common questions about our recruitment process, job opportunities, and more.
          We're here to help you succeed in your career journey.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
        {#each faqSections as section}
          <button 
            class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors duration-300 group"
            on:click={() => document.getElementById(section.title.toLowerCase().replace(/\s+/g, '-')).scrollIntoView({ behavior: 'smooth' })}
          >
            <div class="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{section.icon}</div>
            <div class="text-white font-medium">{section.title}</div>
          </button>
        {/each}
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto space-y-8">
      {#each faqSections as section}
        <div id={section.title.toLowerCase().replace(/\s+/g, '-')} class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-primary/20 transition-colors duration-300 relative">
          <!-- Background decoration -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
          <!-- Section Header -->
          <div class="p-6 bg-gradient-to-r from-primary/5 to-transparent border-b border-gray-100 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="p-2 bg-primary/10 rounded-xl">
                <span class="text-3xl">{section.icon}</span>
              </div>
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
                {section.title}
              </h2>
            </div>
          </div>

          <!-- Questions -->
          <div class="divide-y divide-gray-100 dark:divide-gray-700">
            {#each section.questions as { id, question, answer }}
              <div class="p-6">
                <!-- Question Header -->
                <button
                  class="w-full flex justify-between items-start text-left group relative"
                  on:click={() => toggleQuestion(id)}
                >
                  <div class="flex-1">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white pr-8 group-hover:text-primary transition-colors">
                      {question}
                    </h3>
                  </div>
                  <span
                    class="flex-shrink-0 ml-1.5 p-1.5 text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors"
                  >
                    <div class="relative">
                      <div class="absolute inset-0 bg-primary/10 rounded-full transition-opacity duration-200 opacity-0 group-hover:opacity-100"></div>
                      <svg
                        class="w-5 h-5 transform transition-transform duration-200 relative"
                        class:rotate-180={openQuestionId === id}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </span>
                </button>

                <!-- Answer -->
                {#if openQuestionId === id}
                  <div class="mt-4 text-gray-700 dark:text-gray-200 space-y-2">
                    {#if Array.isArray(answer)}
                      {#each answer as line}
                        <p>{line}</p>
                      {/each}
                    {:else}
                      <p>{answer}</p>
                    {/if}
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- Contact CTA -->
    <div class="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 text-center relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Still have questions?</h3>
      <p class="text-gray-700 dark:text-gray-200 mb-8 max-w-xl mx-auto">
        Our team is here to help you with any questions you might have about our recruitment process.
        Feel free to reach out!
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="/contact"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          Contact Support
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>
        <a
          href="tel:+254712345678"
          class="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-xl text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          Call Us
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
