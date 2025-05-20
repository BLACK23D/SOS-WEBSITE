<script>
  import { page } from '$app/stores';
  import { jobs } from '$lib/data/jobs';
  
  // Get the job ID from the page params
  const id = $page.params.id;
  
  // Find the job with the matching ID
  const job = jobs.find(job => job.id === id);
  
  // Get related jobs (same type or category)
  const relatedJobs = job 
    ? jobs
        .filter(j => j.id !== job.id && (j.type === job.type || j.category === job.category))
        .slice(0, 3)
    : [];
</script>

<div class="bg-gray-50 min-h-screen py-12">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      {#if job}
        <!-- Job Header -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div class="p-6 md:p-8">
            <div class="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h1 class="text-3xl font-bold text-gray-800">{job.title}</h1>
                <div class="flex flex-wrap gap-4 mt-3">
                  <span class="inline-flex items-center text-sm text-gray-600">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </span>
                  <span class="inline-flex items-center text-sm text-gray-600">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {job.department}
                  </span>
                  <span class="inline-flex items-center text-sm text-gray-600">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.type}
                  </span>
                </div>
              </div>
              <a 
                href={`/#/apply?position=${encodeURIComponent(job.title)}`}
                class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Apply Now
              </a>
            </div>
            
            <!-- Job Description -->
            <div class="prose max-w-none">
              <h2 class="text-xl font-semibold mb-3">Job Description</h2>
              <p class="mb-6">{job.description}</p>
              
              <h2 class="text-xl font-semibold mb-3">Requirements</h2>
              <ul class="list-disc pl-5 mb-6">
                {#each job.requirements as requirement}
                  <li class="mb-2">{requirement}</li>
                {/each}
              </ul>
              
              <h2 class="text-xl font-semibold mb-3">Benefits</h2>
              <ul class="list-disc pl-5">
                <li class="mb-2">Competitive salary package</li>
                <li class="mb-2">Health insurance coverage</li>
                <li class="mb-2">Professional development opportunities</li>
                <li class="mb-2">Supportive work environment</li>
                <li>Relocation assistance (for international positions)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Related Jobs -->
        {#if relatedJobs.length > 0}
          <div class="mt-12">
            <h2 class="text-2xl font-bold mb-6">Similar Positions</h2>
            <div class="grid gap-6 md:grid-cols-3">
              {#each relatedJobs as relatedJob}
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div class="p-5">
                    <h3 class="text-lg font-semibold mb-2">{relatedJob.title}</h3>
                    <div class="text-sm text-gray-600 mb-3">
                      <div class="flex items-center mb-1">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {relatedJob.location}
                      </div>
                    </div>
                    <a 
                      href={`/#/jobs/${relatedJob.id}`} 
                      class="text-primary-600 hover:text-primary-800 font-medium text-sm"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      {:else}
        <!-- Job Not Found -->
        <div class="text-center py-12 bg-white rounded-lg shadow-md">
          <h1 class="text-2xl font-semibold text-gray-800 mb-4">Job Not Found</h1>
          <p class="text-gray-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <a 
            href="/#/jobs" 
            class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Browse All Jobs
          </a>
        </div>
      {/if}
    </div>
  </div>
</div>
