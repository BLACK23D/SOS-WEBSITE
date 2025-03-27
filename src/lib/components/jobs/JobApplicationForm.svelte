<script lang="ts">
  import { fade } from 'svelte/transition';
  import Button from '$lib/components/shared/Button.svelte';
  import type { Job } from '$lib/types/job';

  export let job: Job;

  let formData = {
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    cv: null as File | null,
    documents: [] as File[]
  };

  let isSubmitting = false;
  let submitStatus: 'idle' | 'success' | 'error' = 'idle';
  let errorMessage = '';

  async function handleSubmit() {
    isSubmitting = true;
    submitStatus = 'idle';
    errorMessage = '';

    try {
      const data = new FormData();
      data.append('fullName', formData.fullName);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('nationality', formData.nationality);
      data.append('position', job.title);

      if (formData.cv) {
        data.append('cv', formData.cv);
      }

      formData.documents.forEach((doc) => {
        data.append('documents', doc);
      });

      const response = await fetch('/api/apply', {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }

      submitStatus = 'success';
      formData = {
        fullName: '',
        email: '',
        phone: '',
        nationality: '',
        cv: null,
        documents: []
      };
    } catch (error) {
      console.error('Application error:', error);
      errorMessage =
        error instanceof Error ? error.message : 'Failed to submit application. Please try again.';
      submitStatus = 'error';
    } finally {
      isSubmitting = false;
    }
  }

  function handleCVChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      formData.cv = input.files[0];
    }
  }

  function handleDocumentsChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      formData.documents = Array.from(input.files);
    }
  }
</script>

<form
  class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
  on:submit|preventDefault={handleSubmit}
  in:fade
>
  <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
    Apply for {job.title}
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Full Name -->
    <div>
      <label for="fullName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Full Name *
      </label>
      <input
        type="text"
        id="fullName"
        bind:value={formData.fullName}
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
        Phone Number *
      </label>
      <input
        type="tel"
        id="phone"
        bind:value={formData.phone}
        required
        class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-0"
        placeholder="+254 700 000000"
      />
    </div>

    <!-- Nationality -->
    <div>
      <label
        for="nationality"
        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        Nationality *
      </label>
      <input
        type="text"
        id="nationality"
        bind:value={formData.nationality}
        required
        class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-0"
        placeholder="Kenyan"
      />
    </div>
  </div>

  <!-- CV Upload -->
  <div class="mt-6">
    <label for="cv" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      CV/Resume * (PDF format)
    </label>
    <input
      type="file"
      id="cv"
      accept=".pdf"
      required
      on:change={handleCVChange}
      class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-0"
    />
  </div>

  <!-- Additional Documents -->
  <div class="mt-6">
    <label for="documents" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      Additional Documents (Optional)
    </label>
    <input
      type="file"
      id="documents"
      multiple
      accept=".pdf,.doc,.docx"
      on:change={handleDocumentsChange}
      class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-0"
    />
    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Accepted formats: PDF, DOC, DOCX</p>
  </div>

  <!-- Submit Button -->
  <div class="mt-8">
    <Button type="submit" disabled={isSubmitting} loading={isSubmitting} className="w-full">
      Submit Application
    </Button>
  </div>

  <!-- Status Messages -->
  {#if submitStatus === 'success'}
    <div
      class="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg"
      in:fade
    >
      Your application has been submitted successfully! We will review your application and get back
      to you soon.
    </div>
  {:else if submitStatus === 'error'}
    <div
      class="mt-4 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg"
      in:fade
    >
      {errorMessage || 'There was an error submitting your application. Please try again later.'}
    </div>
  {/if}
</form>
