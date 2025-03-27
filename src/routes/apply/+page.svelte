<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Apply Now - SOS Recruitment</title>
  <meta
    name="description"
    content="Apply for local job opportunities at SOS Recruitment. Submit your CV and documents for consideration."
  />
  <!-- JotForm Script for responsive iframe -->
  <script>
    var ifr = document.getElementById('JotFormIFrame');
    if (ifr) {
      var src = ifr.src;
      var iframeParams = [];
      if (window.location.href && window.location.href.indexOf('?') > -1) {
        iframeParams = iframeParams.concat(
          window.location.href.substr(window.location.href.indexOf('?') + 1).split('&')
        );
      }
      if (src && src.indexOf('?') > -1) {
        iframeParams = iframeParams.concat(src.substr(src.indexOf('?') + 1).split('&'));
        src = src.substr(0, src.indexOf('?'));
      }
      iframeParams.push('isIframeEmbed=1');
      ifr.src = src + '?' + iframeParams.join('&');
    }
    window.handleIFrameMessage = function (e) {
      if (typeof e.data === 'object') {
        return;
      }
      var args = e.data.split(':');
      if (args.length > 2) {
        iframe = document.getElementById('JotFormIFrame');
      }
      if (!iframe) {
        return;
      }
      switch (args[0]) {
        case 'scrollIntoView':
          iframe.scrollIntoView();
          break;
        case 'setHeight':
          iframe.style.height = args[1] + 'px';
          break;
        case 'collapseErrorPage':
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = window.innerHeight + 'px';
          }
          break;
        case 'reloadPage':
          window.location.reload();
          break;
      }
    };
    if (window.addEventListener) {
      window.addEventListener('message', handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent('onmessage', handleIFrameMessage);
    }
  </script>
</svelte:head>

<div class="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-8" in:fade>
        <h1 class="text-4xl font-bold mb-4">Apply for Local Jobs</h1>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Take the first step towards your career. Fill out the form below and we'll get back to you
          soon.
        </p>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8" in:fade={{ delay: 200 }}>
        <iframe
          id="JotFormIFrame"
          title="Job Application Form"
          src="https://form.jotform.com/250825144033549"
          style="min-width: 100%; width: 1px; height: 800px; border: none;"
          scrolling="no"
        >
          Loading application form...
        </iframe>
      </div>
    </div>
  </div>
</div>

<style>
  /* Smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
