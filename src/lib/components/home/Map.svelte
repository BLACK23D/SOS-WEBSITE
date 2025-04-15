<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<section class="py-16 bg-gray-50" in:fade>
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Visit Our Office
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Find us at Westlands Arcade Building, Ground Floor, Door #3 in Westlands, Nairobi
      </p>
    </div>
    
    <div class="relative">
      <!-- Map Container -->
      <div class="w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
        <iframe
          title="SOS Recruitment Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.2043912679896!2d36.81068575!3d-1.26974995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17335a3ce201%3A0x3994a4f6c4f81c9f!2sWestlands%20Arcade!5e0!3m2!1sen!2ske!4v1681244444444!5m2!1sen!2ske&z=19"
          width="100%"
          height="100%"
          style="border:0;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="rounded-lg"
        ></iframe>
      </div>
      
      <!-- Office Info Card -->
      <div class="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-sm">
        <h3 class="font-semibold text-gray-900 mb-2">
          SOS Recruitment Office
        </h3>
        <div class="space-y-1 text-gray-600">
          <p>Westlands Arcade Building</p>
          <p>Ground Floor, Door #3</p>
          <p>Westlands, Nairobi</p>
        </div>
        <a
          href="https://www.google.com/maps/dir//Westlands+Arcade,+Nairobi"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700"
        >
          Get Directions
          <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
