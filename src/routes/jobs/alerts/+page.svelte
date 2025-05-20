<script lang="ts">
  let email = '';
  let jobTypes: string[] = [];
  let locations: string[] = [];
  let submitted = false;
  
  // Available job types and locations
  const availableJobTypes = ['International', 'Local', 'Full-time', 'Part-time', 'Contract'];
  const availableLocations = ['Nairobi, Kenya', 'Dubai, UAE', 'Doha, Qatar', 'Riyadh, Saudi Arabia', 'Abu Dhabi, UAE'];
  
  function handleSubmit() {
    // In a real application, this would send the data to a server
    submitted = true;
  }
  
  function handleJobTypeChange(type: string) {
    if (jobTypes.includes(type)) {
      jobTypes = jobTypes.filter(t => t !== type);
    } else {
      jobTypes = [...jobTypes, type];
    }
  }
  
  function handleLocationChange(location: string) {
    if (locations.includes(location)) {
      locations = locations.filter(l => l !== location);
    } else {
      locations = [...locations, location];
    }
  }
</script>

<div class="bg-gray-50 min-h-screen py-12">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-2">Job Alerts</h1>
      <p class="text-center text-gray-600 mb-8">
        Get notified when new jobs matching your criteria are posted
      </p>
      
      {#if !submitted}
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6 md:p-8">
            <form on:submit|preventDefault={handleSubmit} class="space-y-6">
              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  bind:value={email}
                  required
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              
              <!-- Job Types -->
              <div>
                <span id="job-types-label" class="block text-sm font-medium text-gray-700 mb-2">
                  Job Types (select all that apply)
                </span>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {#each availableJobTypes as type}
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        checked={jobTypes.includes(type)}
                        on:change={() => handleJobTypeChange(type)}
                      />
                      <span class="ml-2 text-sm text-gray-700">{type}</span>
                    </label>
                  {/each}
                </div>
              </div>
              
              <!-- Locations -->
              <div>
                <span id="locations-label" class="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Locations (select all that apply)
                </span>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {#each availableLocations as location}
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        checked={locations.includes(location)}
                        on:change={() => handleLocationChange(location)}
                      />
                      <span class="ml-2 text-sm text-gray-700">{location}</span>
                    </label>
                  {/each}
                </div>
              </div>
              
              <!-- Frequency -->
              <div>
                <label for="frequency" class="block text-sm font-medium text-gray-700 mb-1">
                  Alert Frequency
                </label>
                <select
                  id="frequency"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="instant">Instant (as soon as jobs are posted)</option>
                </select>
              </div>
              
              <!-- Submit Button -->
              <div>
                <button
                  type="submit"
                  class="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Create Job Alert
                </button>
              </div>
            </form>
          </div>
        </div>
      {:else}
        <!-- Success Message -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6 md:p-8 text-center">
            <svg class="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">Job Alert Created!</h2>
            <p class="text-gray-600 mb-6">
              We'll send job notifications to {email} based on your preferences.
            </p>
            <div class="mt-4">
              <a 
                href="/#/jobs" 
                class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Browse Current Jobs
              </a>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
