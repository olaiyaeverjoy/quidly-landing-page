<script setup></script>

<template>
  <footer class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Middle Section -->
      <div class="mt-12 pt-16 pb-12">
        <div
          class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-18"
        >
          <!-- Quidly as a product -->
          <div class="flex flex-col gap-4 lg:max-w-xs">
            <h3 class="text-xl font-semibold">Quidly</h3>
            <p class="text-gray-600 leading-relaxed">
              A product of
              <span class="font-semibold text-gray-700">Teinnovate Capital</span
              >, licensed by the Central Bank of Nigeria.
            </p>
            <img
              src="../assets/logo/teinnovate-logo.png"
              alt="Teinnovate Capital logo"
              class="h-8 w-auto max-w-[120px] shrink-0 opacity-80"
            />
          </div>

          <!-- Remaining three columns -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16">
            <!-- Products -->
            <div>
              <h3 class="text-xl font-semibold mb-4">Product</h3>
              <ul class="space-y-4 text-gray-600">
                <li>
                  <a
                    href="https://selldesk.quidly.ng/"
                    class="hover:text-blue-600"
                    >SellDesk</a
                  >
                </li>
                <li>
                  <a class="hover:text-blue-600">Quidly payment-widget</a>
                </li>
                <li><a class="hover:text-blue-600">PaySplit</a></li>
                <li><a class="hover:text-blue-600">Pay4me</a></li>
                <li><a class="hover:text-blue-600">CreditList</a></li>
                <li><a class="hover:text-blue-600">Collect@Quidly</a></li>
              </ul>
            </div>

            <!-- Contact -->
            <div>
              <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
              <p class="text-gray-600 pb-3">
                47 Progress College Road, Agege, Lagos
              </p>
              <p class="text-gray-600 leading-relaxed">
                <a href="contact.html" class="text-blue-600 hover:underline"
                  >Contact Us</a
                >: 0808-922-4449, 0813-282-2731. <br />
                Our email: admin@teinnovatecapital.ng
              </p>
            </div>

            <!-- Community -->
            <div>
              <h3 class="text-xl font-semibold mb-4">Community</h3>
              <div class="flex gap-7 mb-6">
                <a
                  href="https://www.facebook.com/share/17frZWQk1j/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-facebook text-green-600 text-3xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/90868086/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative z-50"
                >
                  <i class="fa-brands fa-linkedin text-green-600 text-3xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/teinnovatecapital_?igsh=NTMxZmY0bjJ2YTQ3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-instagram text-green-600 text-3xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-300 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 text-sm">
            © Copyrights 2026
            <a  class="text-blue-600 hover:underline">
              Quidly </a
            >. All rights reserved.
          </p>
          
          <ul class="flex space-x-6 mt-4 md:mt-0 text-gray-600 text-sm">
            <li><a  class="hover:text-blue-600">Privacy</a></li>
            <li><a  class="hover:text-blue-600">Terms</a></li>
            <li><a  class="hover:text-blue-600">Sitemap</a></li>
            <li><a  class="hover:text-blue-600">Help</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
