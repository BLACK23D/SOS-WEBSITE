<script lang="ts">
  const currentYear = new Date().getFullYear();

  const contacts = {
    phone: '+254 736 887 668',
    email: 'info@sosrecruit.co.ke',
    address: 'Nairobi, Kenya'
  };

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' }
  ];

  const services = [
    { label: 'International Recruitment', href: '/services/international-recruitment' },
    { label: 'Local Recruitment', href: '/services/local-recruitment' },
    { label: 'CV & Interview Preparation', href: '/services/cv-preparation' },
    { label: 'Career Counseling', href: '/services/career-counseling' }
  ];

  const jobs = [
    { label: 'International Jobs', href: '/international-jobs' },
    { label: 'Local Jobs', href: '/internal-jobs' },
    { label: 'Submit CV', href: '/apply' },
    { label: 'Browse All Jobs', href: '/jobs' }
  ];
</script>

<footer class="bg-white dark:bg-gray-800 py-12">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <!-- Company Info -->
      <div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">SOS Recruitment</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Your Gateway to Global Career Opportunities
        </p>
        <div class="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-primary"
            aria-label="Visit our Facebook page"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-primary"
            aria-label="Visit our Twitter page"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-primary"
            aria-label="Visit our LinkedIn page"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Quick Links</h3>
        <ul class="space-y-2">
          {#each quickLinks as link}
            <li>
              <a href={link.href} class="text-gray-600 dark:text-gray-400 hover:text-primary"
                >{link.label}</a
              >
            </li>
          {/each}
        </ul>
      </div>

      <!-- Services -->
      <div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Services</h3>
        <ul class="space-y-2">
          {#each services as service}
            <li>
              <a href={service.href} class="text-gray-600 dark:text-gray-400 hover:text-primary"
                >{service.label}</a
              >
            </li>
          {/each}
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Contact Us</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="tel:{contacts.phone.replace(/\s+/g, '')}"
              class="text-gray-600 dark:text-gray-400 hover:text-primary flex items-center gap-2"
              aria-label="Call us"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {contacts.phone}
            </a>
          </li>
          <li>
            <a
              href="mailto:{contacts.email}"
              class="text-gray-600 dark:text-gray-400 hover:text-primary flex items-center gap-2"
              aria-label="Email us"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {contacts.email}
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/254736887668"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-primary flex items-center gap-2"
              aria-label="Contact us on WhatsApp"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              WhatsApp
            </a>
          </li>
          <li class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            {contacts.address}
          </li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-gray-200 dark:border-gray-700 pt-8">
      <p class="text-center text-gray-500 dark:text-gray-400">
        &copy; {currentYear} SOS Recruitment. All rights reserved.
      </p>
    </div>
  </div>
</footer>
