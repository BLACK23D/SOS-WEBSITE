<!-- Chatbot.svelte -->
<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let isOpen = false;
  let messages: { text: string; isUser: boolean }[] = [];
  let userInput = '';
  let chatContainer: HTMLElement;

  const initialMessage = "Hello! 👋 I'm your recruitment assistant. How can I help you today?";

  onMount(() => {
    messages = [{ text: initialMessage, isUser: false }];
  });

  function toggleChat() {
    isOpen = !isOpen;
  }

  async function handleSubmit() {
    if (!userInput.trim()) return;

    const userMessage = userInput.trim();
    messages = [...messages, { text: userMessage, isUser: true }];
    userInput = '';

    // Auto-scroll to bottom
    setTimeout(() => {
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 100);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      messages = [...messages, { text: botResponse, isUser: false }];

      // Auto-scroll after bot response
      setTimeout(() => {
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }, 100);
    }, 1000);
  }

  function getBotResponse(userMessage: string): string {
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes('job') ||
      lowerMessage.includes('position') ||
      lowerMessage.includes('work')
    ) {
      return 'You can find our current job openings in the Jobs section. We have both local and international positions available. Would you like me to help you navigate to the jobs page?';
    }

    if (lowerMessage.includes('apply') || lowerMessage.includes('application')) {
      return "To apply for a position, click on the job you're interested in and fill out the application form. Make sure to have your CV and any relevant documents ready!";
    }

    if (
      lowerMessage.includes('contact') ||
      lowerMessage.includes('email') ||
      lowerMessage.includes('reach')
    ) {
      return 'You can reach us through our contact form or email us directly at cvsosrecruits@gmail.com. We typically respond within 24-48 hours.';
    }

    if (
      lowerMessage.includes('document') ||
      lowerMessage.includes('cv') ||
      lowerMessage.includes('resume')
    ) {
      return 'Please ensure your CV is up to date and in PDF format. You can also include additional documents like certificates or recommendation letters during the application process.';
    }

    return "I'm here to help with any questions about our recruitment process, job openings, or application procedures. What would you like to know more about?";
  }
</script>

<div class="fixed bottom-4 right-4 z-50">
  <!-- Chat Toggle Button -->
  <button
    on:click={toggleChat}
    class="bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-lg transition-all duration-300"
    aria-label={isOpen ? 'Close chat' : 'Open chat'}
  >
    {#if isOpen}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    {/if}
  </button>

  <!-- Chat Window -->
  {#if isOpen}
    <div
      class="absolute bottom-20 right-0 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
      transition:fly={{ y: 20, duration: 300 }}
    >
      <!-- Chat Header -->
      <div class="bg-primary text-white p-4 rounded-t-lg">
        <h3 class="text-lg font-semibold">SOS Recruitment Assistant</h3>
      </div>

      <!-- Chat Messages -->
      <div bind:this={chatContainer} class="h-96 overflow-y-auto p-4 space-y-4">
        {#each messages as message}
          <div class="flex {message.isUser ? 'justify-end' : 'justify-start'}" transition:fade>
            <div
              class="max-w-[80%] rounded-lg p-3 {message.isUser
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}"
            >
              {message.text}
            </div>
          </div>
        {/each}
      </div>

      <!-- Chat Input -->
      <form on:submit|preventDefault={handleSubmit} class="border-t dark:border-gray-700 p-4">
        <div class="flex gap-2">
          <input
            type="text"
            bind:value={userInput}
            placeholder="Type your message..."
            class="flex-1 px-4 py-2 rounded-full border dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            class="bg-primary hover:bg-primary-dark text-white rounded-full p-2 transition-colors duration-300"
            disabled={!userInput.trim()}
            aria-label="Send message"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  {/if}
</div>

<style>
  /* Custom scrollbar for chat messages */
  div::-webkit-scrollbar {
    width: 6px;
  }

  div::-webkit-scrollbar-track {
    background: transparent;
  }

  div::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.5);
    border-radius: 3px;
  }

  div::-webkit-scrollbar-thumb:hover {
    background-color: rgba(156, 163, 175, 0.8);
  }
</style>
