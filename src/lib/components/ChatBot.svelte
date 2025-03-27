<script lang="ts">
  import { onMount } from 'svelte';

  let isOpen = false;
  let messages: Array<{
    type: 'user' | 'bot';
    text: string;
    timestamp: Date;
  }> = [];
  let userInput = '';
  let chatContainer: HTMLElement;

  // Initial bot messages
  const initialMessages = [
    {
      type: 'bot' as const,
      text: 'Hello! Welcome to SOS Recruitment. How can I help you today?',
      timestamp: new Date()
    }
  ];

  // Common responses for the chatbot
  const botResponses = {
    application: {
      text: 'To apply for a job, please visit our Apply Now page where you can submit your CV and documents. Would you like me to direct you there?',
      followUp: '/apply'
    },
    documents: {
      text: 'Required documents typically include:\n- Updated CV\n- Passport copy\n- Educational certificates\n- Professional certifications\n- Work experience letters',
      followUp: null
    },
    process: {
      text: 'Our recruitment process includes:\n1. Application submission\n2. Initial screening\n3. Interview process\n4. Document verification\n5. Job offer\n6. Visa processing (for international positions)',
      followUp: null
    },
    contact: {
      text: 'You can reach us through:\nKenya: +254 717 932 818\nQatar: +974 3152 5104\nEmail: hrsosrecruits@gmail.com',
      followUp: '/contact'
    },
    default: {
      text: "I'm not sure I understand. Would you like to:\n1. Apply for a job\n2. Learn about required documents\n3. Understand our recruitment process\n4. Contact our team",
      followUp: null
    }
  };

  onMount(() => {
    messages = [...initialMessages];
  });

  function toggleChat() {
    isOpen = !isOpen;
    if (isOpen) {
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }

  function scrollToBottom() {
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  async function handleUserInput() {
    if (!userInput.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user' as const,
      text: userInput,
      timestamp: new Date()
    };
    messages = [...messages, userMessage];

    // Clear input
    userInput = '';

    // Simulate bot thinking
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Determine bot response based on user input
    const input = userMessage.text.toLowerCase();
    let response;

    if (input.includes('apply') || input.includes('job') || input.includes('position')) {
      response = botResponses.application;
    } else if (input.includes('document') || input.includes('require')) {
      response = botResponses.documents;
    } else if (input.includes('process') || input.includes('how') || input.includes('work')) {
      response = botResponses.process;
    } else if (input.includes('contact') || input.includes('reach') || input.includes('call')) {
      response = botResponses.contact;
    } else {
      response = botResponses.default;
    }

    // Add bot response
    messages = [
      ...messages,
      {
        type: 'bot',
        text: response.text,
        timestamp: new Date()
      }
    ];

    // If there's a follow-up action, add it as a separate message
    if (response.followUp) {
      messages = [
        ...messages,
        {
          type: 'bot',
          text: `Click here to proceed: <a href="${response.followUp}" class="text-blue-500 hover:underline">Go to page</a>`,
          timestamp: new Date()
        }
      ];
    }

    // Scroll to bottom
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  }
</script>

<div class="fixed bottom-4 right-4 z-50">
  <!-- Chat Toggle Button -->
  <button
    on:click={toggleChat}
    class="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
    aria-label="Toggle chat"
  >
    {#if isOpen}
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    {:else}
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    {/if}
  </button>

  <!-- Chat Window -->
  {#if isOpen}
    <div
      class="absolute bottom-16 right-0 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
    >
      <!-- Chat Header -->
      <div class="bg-primary p-4 text-white">
        <h3 class="text-lg font-semibold">SOS Support</h3>
        <p class="text-sm opacity-90">We typically reply in a few minutes</p>
      </div>

      <!-- Chat Messages -->
      <div bind:this={chatContainer} class="h-96 overflow-y-auto p-4 space-y-4">
        {#each messages as message}
          <div class="flex flex-col {message.type === 'user' ? 'items-end' : 'items-start'}">
            <div
              class="max-w-[80%] rounded-lg p-3 {message.type === 'user'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-700'}"
            >
              {#if message.type === 'bot' && message.text.includes('<a')}
                {@html message.text}
              {:else}
                <p class="whitespace-pre-line">{message.text}</p>
              {/if}
            </div>
            <span class="text-xs text-gray-500 mt-1">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        {/each}
      </div>

      <!-- Chat Input -->
      <div class="p-4 border-t dark:border-gray-700">
        <form on:submit|preventDefault={handleUserInput} class="flex gap-2">
          <input
            type="text"
            bind:value={userInput}
            placeholder="Type your message..."
            class="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
          />
          <button
            type="submit"
            class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  {/if}
</div>
