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
  <div class="relative bg-primary py-16">
    <div class="absolute inset-0 bg-primary-dark/10"></div>
    <div class="container mx-auto px-4 relative">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h1>
        <p class="text-xl text-white max-w-3xl mx-auto">
          Find answers to common questions about our recruitment process, job opportunities, and more.
        </p>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto space-y-8">
      {#each faqSections as section}
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <!-- Section Header -->
          <div class="p-6 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <span class="text-3xl">{section.icon}</span>
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
                  class="w-full flex justify-between items-start text-left group"
                  on:click={() => toggleQuestion(id)}
                >
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white pr-8 group-hover:text-primary transition-colors">
                    {question}
                  </h3>
                  <span
                    class="flex-shrink-0 ml-1.5 p-1.5 text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors"
                  >
                    <svg
                      class="w-5 h-5 transform transition-transform duration-200"
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
    <div class="mt-16 text-center">
      <p class="text-gray-700 dark:text-gray-200 mb-6">
        Still have questions? We're here to help!
      </p>
      <a
        href="/contact"
        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
      >
        Contact Us
      </a>
    </div>
  </div>
</div>
