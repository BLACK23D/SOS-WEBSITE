<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Button from '$lib/components/shared/Button.svelte';

  const contactInfo = {
    phone: '+254 722 457 654',
    email: 'cvsosrecruits@gmail.com',
    address: 'Nairobi, Kenya'
  };

  let formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  let isSubmitting = false;
  let submitStatus: 'idle' | 'success' | 'error' = 'idle';
  let errorMessage = '';

  async function handleSubmit() {
    isSubmitting = true;
    submitStatus = 'idle';
    errorMessage = '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      submitStatus = 'success';
      formData = { name: '', email: '', phone: '', subject: '', message: '' };
    } catch (error) {
      console.error('Contact form error:', error);
      submitStatus = 'error';
      errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please try again or contact us directly.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<div class="max-w-4xl mx-auto">
  <!-- Contact Information -->
  <div class="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8" in:fade>
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Phone -->
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <svg
            class="w-6 h-6 text-primary-600 dark:text-primary-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</p>
          <a
            href="tel:{contactInfo.phone}"
            class="text-base text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {contactInfo.phone}
          </a>
        </div>
      </div>

      <!-- Email -->
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <svg
            class="w-6 h-6 text-primary-600 dark:text-primary-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
          <a
            href="mailto:{contactInfo.email}"
            class="text-base text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {contactInfo.email}
          </a>
        </div>
      </div>

      <!-- Address -->
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <svg
            class="w-6 h-6 text-primary-600 dark:text-primary-400"
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
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Address</p>
          <p class="text-base text-gray-900 dark:text-white">
            {contactInfo.address}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Form -->
  <form
    class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
    on:submit|preventDefault={handleSubmit}
    in:fade
  >
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>

    <!-- Status Messages -->
    {#if submitStatus === 'success'}
      <div
        class="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg"
        in:fly={{ y: 20, duration: 300 }}
      >
        Your message has been sent successfully! We'll get back to you soon.
      </div>
    {:else if submitStatus === 'error'}
      <div
        class="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg"
        in:fly={{ y: 20, duration: 300 }}
      >
        {errorMessage}
      </div>
    {/if}

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          bind:value={formData.name}
          required
          class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-0"
          placeholder="John Doe"
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          bind:value={formData.email}
          required
          class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-0"
          placeholder="john@example.com"
        />
      </div>

      <!-- Phone -->
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          bind:value={formData.phone}
          class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-0"
          placeholder="+254 700 000000"
        />
      </div>

      <!-- Subject -->
      <div>
        <label
          for="subject"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          bind:value={formData.subject}
          required
          class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-0"
          placeholder="Job Application Inquiry"
        />
      </div>
    </div>

    <!-- Message -->
    <div class="mt-6">
      <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Message *
      </label>
      <textarea
        id="message"
        bind:value={formData.message}
        required
        rows="5"
        class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-0 resize-none"
        placeholder="Your message here..."
      ></textarea>
    </div>

    <!-- Submit Button -->
    <div class="mt-6">
      <Button type="submit" disabled={isSubmitting} loading={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </div>
  </form>
</div>
