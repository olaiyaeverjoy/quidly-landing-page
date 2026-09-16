<template>
  <footer class="bg-[#053758] text-white">
    <div class="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-10 py-12 lg:py-16">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 lg:gap-12">
        <!-- Help & Resources -->
        <div class="xl:col-span-5">
          <h3 class="text-white font-semibold text-lg tracking-wide mb-2">Help & Resources</h3>
          <div class="w-full max-w-xs h-px bg-white/20 mb-6"></div>

          <div class="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
            <div class="space-y-3">
              <a
                v-for="link in helpLinksLeft"
                :key="link"
                href="#"
                class="block text-slate-300 hover:text-white transition-colors"
              >
                {{ link }}
              </a>
            </div>
            <div class="space-y-3">
              <a
                v-for="link in helpLinksRight"
                :key="link"
                href="#"
                class="block text-slate-300 hover:text-white transition-colors"
              >
                {{ link }}
              </a>
            </div>
          </div>
        </div>

        <!-- Free Tools -->
        <div class="xl:col-span-3">
          <h3 class="text-white font-semibold text-lg tracking-wide mb-2">Free Tools</h3>
          <div class="w-full max-w-[240px] h-px bg-white/20 mb-6"></div>

          <div class="space-y-3 text-sm">
            <a
              v-for="tool in freeTools"
              :key="tool"
              href="#"
              class="block text-slate-300 hover:text-white transition-colors"
            >
              {{ tool }}
            </a>
          </div>
        </div>

        <!-- Contact Us -->
        <div class="xl:col-span-4">
          <h3 class="text-lg lg:text-xl font-semibold tracking-wide mb-2">CONTACT US ON</h3>
          <div class="w-60 h-px bg-white/30 mb-6"></div>

          <div class="space-y-8">
            <!-- Phone -->
            <div class="flex items-start gap-3">
              <div
                class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                <p class="text-sm text-gray-400">Monday - Friday</p>
                <p class="font-medium">08132822731 & 08089224449</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-3">
              <div
                class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                <p class="font-medium">te@teinnovatecapital.ng</p>
                <p class="text-sm text-gray-400">Toll-free</p>
              </div>
            </div>

            <!-- Socials -->
            <div>
              <p class="text-sm font-medium mb-3">FIND US ON OUR SOCIALS</p>
              <div class="flex flex-wrap gap-5 text-2xl">
                <a
                  href="https://x.com/teinnovate27311?s=21"
                  target="_blank"
                  class="hover:text-blue-400 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/teinnovatecapital_?igsh=bDNscWo4bzh1c3po"
                  target="_blank"
                  class="hover:text-pink-400 transition-colors"
                  aria-label="Instagram"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/teinnovate-capital/"
                  target="_blank"
                  class="hover:text-blue-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
                <a href="#" class="hover:text-blue-600 transition-colors" aria-label="Facebook">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="mt-16 pt-8">
        <div class="w-full h-px bg-white/20 mb-6"></div>

        <div
          class="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-3 text-xs text-gray-400 leading-6"
        >
          <a
            v-for="link in legalLinks"
            :key="link"
            href="#"
            class="hover:text-white transition-colors"
          >
            {{ link }}
          </a>
        </div>

        <div class="mt-8 text-xs text-gray-500 text-center">
          &copy; 2026 SellDesk. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const helpLinksLeft = [
  'Resources',
  'FAQs',
  'Webinar',
  'Videos',
  'Community',
  'Marketplace',
  'Integrations'
]

const helpLinksRight = ['Quick Links', 'Support', 'Business guides', 'Blog', 'Invoices']

const freeTools = [
  'Free Invoice Templates',
  'Free Receipt Generator',
  'Free timesheet templates',
  'Free Invoice Generator',
  'Free Discount Calculator',
  'MarkUp Calculator',
  'Free Estimate Generator'
]

const legalLinks = [
  'Contacts',
  'Security',
  'Compliance',
  'IPR Complain',
  'Anti-Spam Policy',
  'Terms of Services',
  'Privacy Policy',
  'Trademark Policy',
  'Cookie Policy',
  'Abuse Policy',
  'GDPR Compliance'
]
</script>
