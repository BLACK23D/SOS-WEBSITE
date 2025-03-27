<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Apply for International Jobs - SOS Recruitment</title>
  <meta
    name="description"
    content="Apply for international job opportunities at SOS Recruitment. Submit your CV and documents for consideration."
  />
  <!-- JotForm Script for responsive iframe -->
  <script>
    var ifr = document.getElementById('JotFormIFrame-International');
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
        iframe = document.getElementById('JotFormIFrame-International');
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
    <div class="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6" in:fade>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        International Job Application
      </h1>
      <div class="w-full" in:fade={{ delay: 200 }}>
        <iframe
          id="JotFormIFrame-International"
          title="International Job Application Form"
          src="https://www.jotform.com/form/250826034464556"
          style="width: 100%; min-height: 800px; border: none;"
          scrolling="no"
        ></iframe>
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
