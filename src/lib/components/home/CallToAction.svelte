<script lang="ts">
  import { fade } from 'svelte/transition';
  import Button from '$lib/components/shared/Button.svelte';
</script>

<section class="py-20 relative overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="bg-primary rounded-2xl p-8 md:p-12 relative overflow-hidden" in:fade>
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute -right-1/4 -top-1/4 w-96 h-96 rounded-full bg-white"></div>
        <div class="absolute -left-1/4 -bottom-1/4 w-96 h-96 rounded-full bg-white"></div>
      </div>

      <div class="relative z-10 max-w-3xl mx-auto text-center text-white">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Take the Next Step in Your Career?
        </h2>
        <p class="text-lg mb-8 opacity-90">
          Join thousands of successful professionals who have found their dream jobs through SOS
          Recruitment. Whether you're looking for local opportunities or international adventures,
          we're here to help.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <Button href="/apply" className="bg-white text-primary hover:bg-gray-100">
            Apply Now
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            className="bg-transparent border-2 border-white hover:bg-white/10"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
