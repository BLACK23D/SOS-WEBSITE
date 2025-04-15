<script lang="ts">
  interface Job {
    id: string;
    title: string;
    description: string;
    requirements: string[];
    location: string;
    type: string;
    department: string;
  }

  // Sample internal job listings (In production, this would come from an API)
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Senior Recruitment Consultant',
      description:
        'Join our dynamic team as a Senior Recruitment Consultant responsible for managing end-to-end recruitment processes for our international clients.',
      requirements: [
        '5+ years of recruitment experience',
        'Strong network in the GCC region',
        'Excellent communication and negotiation skills',
        "Bachelor's degree in HR or related field"
      ],
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      department: 'Recruitment'
    },
    {
      id: '2',
      title: 'HR Operations Manager',
      description:
        'Lead our HR operations team in managing candidate documentation, visa processing, and compliance requirements.',
      requirements: [
        '7+ years of HR operations experience',
        'Knowledge of international labor laws',
        'Experience with visa processing',
        'Strong organizational skills'
      ],
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      department: 'HR Operations'
    },
    {
      id: '3',
      title: 'Business Development Executive',
      description:
        'Drive business growth by identifying and securing new client partnerships in the GCC region.',
      requirements: [
        '3+ years of sales experience',
        'Experience in recruitment or HR services',
        'Strong presentation skills',
        'Willingness to travel'
      ],
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      department: 'Business Development'
    }
  ];
</script>

<div class="min-h-screen py-12 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-8">Local Job Opportunities</h1>

      <div class="grid gap-8">
        {#each jobs as job}
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <div class="flex justify-between items-start">
                <div>
                  <h2 class="text-2xl font-semibold mb-2">{job.title}</h2>
                  <div class="flex gap-4 mb-4">
                    <span class="inline-flex items-center text-sm text-gray-600">
                      <svg
                        class="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {job.location}
                    </span>
                    <span class="inline-flex items-center text-sm text-gray-600">
                      <svg
                        class="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {job.department}
                    </span>
                    <span class="inline-flex items-center text-sm text-gray-600">
                      <svg
                        class="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {job.type}
                    </span>
                  </div>
                </div>
                <a href={`/apply?position=${encodeURIComponent(job.title)}`} class="btn-primary">
                  Apply Now
                </a>
              </div>

              <p class="text-gray-600 mb-4">
                {job.description}
              </p>

              <div>
                <h3 class="font-semibold mb-2">Requirements:</h3>
                <ul class="list-disc list-inside space-y-1 text-gray-600">
                  {#each job.requirements as requirement}
                    <li>{requirement}</li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <!-- No Jobs Message -->
      {#if jobs.length === 0}
        <div class="text-center py-12">
          <h2 class="text-2xl font-semibold text-gray-600">
            No internal positions available at the moment.
          </h2>
          <p class="mt-2 text-gray-500">
            Please check back later for new opportunities.
          </p>
        </div>
      {/if}
    </div>
  </div>
</div>
