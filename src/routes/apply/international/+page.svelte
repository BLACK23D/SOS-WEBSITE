<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Button from '$lib/components/shared/Button.svelte';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';

  // Get position from URL query params
  let position = '';
  let employer = '';

  if (browser) {
    const url = new URL(window.location.href);
    position = url.searchParams.get('position') || '';
    employer = url.searchParams.get('employer') || '';
  }

  const paymentDetails = {
    bank: 'NCBA BANK',
    accountNumber: '1004836169',
    amount: '5,000 KSH',
    businessNumber: '880100'
  };

  let formData = {
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    position: position,
    employer: employer,
    cv: null as File | null,
    mpesaScreenshot: null as File | null,
    documents: [] as File[]
  };

  let isSubmitting = false;
  let submitStatus: 'idle' | 'success' | 'error' = 'idle';
  let errorMessage = '';
  let copiedText = '';

  function copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text);
    copiedText = label;
    setTimeout(() => {
      copiedText = '';
    }, 2000);
  }

  async function handleSubmit() {
    isSubmitting = true;
    submitStatus = 'idle';
    errorMessage = '';

    try {
      // Validate required fields
      if (
        !formData.fullName ||
        !formData.email ||
        !formData.phone ||
        !formData.nationality ||
        !formData.position
      ) {
        throw new Error('Please fill in all required fields');
      }

      if (!formData.cv) {
        throw new Error('Please upload your CV');
      }

      if (!formData.mpesaScreenshot) {
        throw new Error('Please provide payment verification screenshot');
      }

      // Validate file size
      if (formData.cv.size > 10 * 1024 * 1024) {
        throw new Error('CV file size must be less than 10MB');
      }

      if (formData.mpesaScreenshot.size > 5 * 1024 * 1024) {
        throw new Error('Payment verification screenshot must be less than 5MB');
      }

      for (const doc of formData.documents) {
        if (doc.size > 10 * 1024 * 1024) {
          throw new Error('Each additional document must be less than 10MB');
        }
      }

      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          data.append(key, value);
        } else if (Array.isArray(value) && value.length > 0) {
          value.forEach((file) => {
            if (file instanceof File) {
              data.append('documents', file);
            }
          });
        } else if (value !== null) {
          data.append(key, value.toString());
        }
      });

      data.append('type', 'international');

      const response = await fetch('/api/apply', {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (response.ok) {
        submitStatus = 'success';
        formData = {
          fullName: '',
          email: '',
          phone: '',
          nationality: '',
          position: position,
          employer: employer,
          cv: null,
          mpesaScreenshot: null,
          documents: []
        };
      } else {
        throw new Error(result.error || 'Application submission failed');
      }
    } catch (error) {
      submitStatus = 'error';
      errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      console.error('Application error:', error);
    } finally {
      isSubmitting = false;
    }
  }

  function handleFileChange(event: Event, type: 'cv' | 'mpesaScreenshot' | 'documents') {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    if (type === 'cv') {
      formData.cv = input.files[0];
    } else if (type === 'mpesaScreenshot') {
      formData.mpesaScreenshot = input.files[0];
    } else {
      formData.documents = Array.from(input.files);
    }
  }
</script>

<svelte:head>
  <title>Apply Now - International Jobs - SOS Recruitment</title>
  <meta
    name="description"
    content="Apply for international job opportunities at SOS Recruitment. Submit your CV and documents for consideration."
  />
</svelte:head>

<div class="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-8" in:fade>
        <h1 class="text-4xl font-bold mb-4">Apply for International Jobs</h1>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Take the first step towards your international career. Fill out the form below and we'll
          get back to you soon.
        </p>
      </div>

      <!-- Payment Information -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8" in:fade={{ delay: 100 }}>
        <h2 class="text-2xl font-semibold mb-4">Registration Payment</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Please make a payment of {paymentDetails.amount} via bank transfer to complete your registration:
        </p>

        <!-- Bank Transfer -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Bank Transfer Details</h3>
          <div class="space-y-4">
            <div
              class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Bank Name</p>
                <p class="font-medium">{paymentDetails.bank}</p>
              </div>
              <Button
                on:click={() => copyToClipboard(paymentDetails.bank, 'bank')}
                className="text-sm"
              >
                {copiedText === 'bank' ? '✓ Copied' : 'Copy'}
              </Button>
            </div>

            <div
              class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Account Number</p>
                <p class="font-medium">{paymentDetails.accountNumber}</p>
              </div>
              <Button
                on:click={() => copyToClipboard(paymentDetails.accountNumber, 'account')}
                className="text-sm"
              >
                {copiedText === 'account' ? '✓ Copied' : 'Copy'}
              </Button>
            </div>

            <div
              class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Business Number</p>
                <p class="font-medium">{paymentDetails.businessNumber}</p>
              </div>
              <Button
                on:click={() => copyToClipboard(paymentDetails.businessNumber, 'businessNumber')}
                className="text-sm"
              >
                {copiedText === 'businessNumber' ? '✓ Copied' : 'Copy'}
              </Button>
            </div>

            <div
              class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Amount</p>
                <p class="font-medium">{paymentDetails.amount}</p>
              </div>
              <Button
                on:click={() =>
                  copyToClipboard(paymentDetails.amount.replace(' KSH', ''), 'amount')}
                className="text-sm"
              >
                {copiedText === 'amount' ? '✓ Copied' : 'Copy'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <!-- Application Form -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8" in:fade={{ delay: 200 }}>
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <!-- Personal Information -->
          <div class="space-y-6">
            <h3 class="text-xl font-semibold">Personal Information</h3>

            <!-- Full Name -->
            <div>
              <label
                for="fullName"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                bind:value={formData.fullName}
                required
                minlength="3"
                class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-primary"
                placeholder="Enter your full name"
              />
            </div>

            <!-- Email -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-primary"
                placeholder="your.email@example.com"
              />
            </div>

            <!-- Phone -->
            <div>
              <label
                for="phone"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                bind:value={formData.phone}
                required
                pattern="[0-9+\s\-()]+"
                class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-primary"
                placeholder="+254 XXX XXX XXX"
              />
            </div>

            <!-- Nationality -->
            <div>
              <label
                for="nationality"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Nationality *
              </label>
              <input
                type="text"
                id="nationality"
                bind:value={formData.nationality}
                required
                class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-primary"
                placeholder="Enter your nationality"
              />
            </div>

            <!-- Position -->
            <div>
              <label
                for="position"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Position Applied For *
              </label>
              <input
                type="text"
                id="position"
                bind:value={formData.position}
                required
                class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-primary"
                placeholder="Enter the position you're applying for"
              />
            </div>
          </div>

          <!-- Documents -->
          <div class="space-y-6">
            <h3 class="text-xl font-semibold">Documents</h3>

            <!-- CV Upload -->
            <div>
              <label
                for="cv"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Upload CV *
              </label>
              <input
                type="file"
                id="cv"
                accept=".pdf,.doc,.docx"
                on:change={(e) => handleFileChange(e, 'cv')}
                class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-primary"
              />
              <p class="mt-1 text-sm text-gray-500">
                Max file size: 10MB. Accepted formats: PDF, DOC, DOCX
              </p>
            </div>

            <!-- Payment Verification -->
            <div class="space-y-4">
              <h4 class="font-medium">Payment Verification *</h4>
              <div>
                <label
                  for="mpesaScreenshot"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Upload Payment Screenshot
                </label>
                <input
                  type="file"
                  id="mpesaScreenshot"
                  accept="image/*"
                  on:change={(e) => handleFileChange(e, 'mpesaScreenshot')}
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-primary"
                />
                <p class="mt-1 text-sm text-gray-500">
                  Max file size: 5MB. Accepted formats: PNG, JPG, JPEG
                </p>
              </div>
            </div>

            <!-- Additional Documents -->
            <div>
              <label
                for="documents"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Additional Documents (Optional)
              </label>
              <input
                type="file"
                id="documents"
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                on:change={(e) => handleFileChange(e, 'documents')}
                class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-primary"
              />
              <p class="mt-1 text-sm text-gray-500">Max file size per document: 10MB</p>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end">
            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
              {#if isSubmitting}
                Submitting...
              {:else}
                Submit Application
              {/if}
            </Button>
          </div>

          <!-- Success Message -->
          {#if submitStatus === 'success'}
            <div
              class="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg"
              in:fly={{ y: 20, duration: 300 }}
            >
              <p class="font-medium">Application submitted successfully!</p>
              <p class="mt-1">
                Thank you for your application. We will review your details and get back to you
                soon.
              </p>
            </div>
          {/if}

          <!-- Error Message -->
          {#if submitStatus === 'error'}
            <div
              class="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg"
              in:fly={{ y: 20, duration: 300 }}
            >
              <p class="font-medium">Error submitting application</p>
              <p class="mt-1">{errorMessage}</p>
            </div>
          {/if}
        </form>
      </div>
    </div>
  </div>
</div>
