<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="relative bg-gray-100 overflow-hidden">
    <Navbar />

    <!--Hero Section-->

    <!-- <div class="bg-white md:min-h-[70vh] items-center flex container mx-auto px-4 ">
        <div class="container flex justify-between">
            <div>
                <h1 class="text-5xl text-[#1f7de7] sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-semibold mb-4">
                    A Better Way To <br>
                    Collect Payments
                </h1>
                <p class="text-lg md:text-xl text-gray-400 mb-6">
                    Quidly has made payment seemless for merchants <br> across Nigeria
                </p>    
                <a
                    href="#"
                    class="inline-block bg-lime-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
                >
                    Create Free Account
                </a>
            </div>
            <div class="">
                <img class="w-72 sm:w-96 md:w-[400px] lg:w-[500px] h-auto object-contain" src="../assets/img/hero-pic.png" alt="">
            </div>
        </div>
    </div> -->

    <!-- chat hero section-->
    <div
      class="bg-white md:min-h-[70vh] flex items-center container mx-auto px-4"
    >
      <div
        class="flex flex-col md:flex-row items-center justify-between w-full gap-10"
      >
        <!-- Left Content -->
        <div class="md:w-1/2">
          <h1
            class="text-5xl text-[#1f7de7] sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-semibold mb-4"
          >
            A Better Way To <br />
            Collect Payments
          </h1>

          <p class="text-lg md:text-xl text-gray-400 mb-6">
            Quidly has made payment seamless for merchants <br />
            across Nigeria
          </p>

          <a
            href="#"
            class="inline-block bg-lime-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-lime-700 transition"
          >
            Create Free Account
          </a>
        </div>

        <!-- Right Image -->
        <div class="md:w-1/2 flex justify-center md:justify-end">
          <img src="../assets/img/hero-pic.png" alt="Hero Image" class="" />
        </div>
      </div>
    </div>

    <!--Container section-->

    <div class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Card 1 -->
        <div
          class="bg-white rounded-xl shadow-sm hover:shadow-lg transition text-center flex flex-col justify-center p-6 h-72"
        >
          <div class="mb-6 text-green-600 text-3xl">
            <i class="fa-solid fa-briefcase"></i>
          </div>
          <div class="flex-1 flex flex-col justify-center">
            <h3 class="text-xl font-semibold mb-3">Professional Services</h3>
            <p class="text-gray-500 mb-4">
              Explore Quidly's seamless payment solutions under our dedicated
              Professional Services.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-white rounded-xl shadow-sm hover:shadow-lg transition text-center flex flex-col items-center p-6 h-72"
        >
          <div class="mb-6 text-green-600 text-3xl">
            <i class="fa-solid fa-wallet"></i>
          </div>
          <div class="flex-1 flex flex-col justify-center">
            <h3 class="text-xl font-semibold mb-3">Low Costing</h3>
            <p class="text-gray-500 mb-4">
              Our unique implementation of innovative solutions is
              cost-effective compared to other operational approaches.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-white rounded-xl shadow-sm hover:shadow-lg transition text-center flex flex-col items-center p-6 h-72"
        >
          <div class="mb-6 text-green-600 text-3xl">
            <i class="fa-solid fa-headphones"></i>
          </div>
          <div class="flex-1 flex flex-col justify-center">
            <h3 class="text-xl font-semibold mb-3">Live Support</h3>
            <p class="text-gray-500 mb-4">
              Instant help whenever you need: Connect with experts through
              Quidly's Live Support for immediate assistance.
            </p>
          </div>
        </div>

        <!-- Card 4 -->
        <div
          class="bg-white rounded-xl shadow-sm hover:shadow-lg transition text-center flex flex-col items-center p-6 h-72"
        >
          <div class="mb-6 text-green-600 text-3xl">
            <i class="fa-solid fa-shield"></i>
          </div>
          <div class="flex-1 flex flex-col justify-center">
            <h3 class="text-xl font-semibold mb-3">Safe and Secure</h3>
            <p class="text-gray-500 mb-4">
              Your safety assured: Quidly delivers advanced security, ensuring
              trustworthy and secure payment solutions.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--About us-->

    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <!-- Image Column -->
          <div class="flex justify-center lg:justify-center">
            <img
              src="..//assets/img/about-us.png"
              alt="About Us Image"
              class="w-[400px] max-w-full"
            />
          </div>

          <!-- Content Column -->
          <div>
            <!-- Section Title -->
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-semibold mb-4">About Us</h2>

              <!-- Title Border -->
              <div class="flex items-center justify-center gap-2 mb-4">
                <div class="w-12 h-1 bg-gray-800"></div>
                <div class="w-12 h-1 bg-gray-800"></div>
              </div>
            </div>

            <!-- Description -->
            <p
              class="text-gray-600 text-lg tracking-wide leading-relaxed text-center lg:text-left mb-8"
            >
              Quidly is aimed to provide disruptive technology solutions in the
              Nigeria payment space. With simple to integrate payment APIs, data
              insight for businesses, managed payment integration for small and
              large businesses alike we hope to transform the service delivery
              that currently exists.
            </p>

            <!-- Button -->
            <div class="text-center">
              <a
                href="/about"
                class="inline-block bg-lime-600 text-white px-6 py-3 rounded-full hover:bg-lime-700 shadow-lg shadow-lime-500/50 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Services -->
    <div class=" bottom-0 left-0 w-full  bg-gradient-to-r from-white to-green-500 rounded-t-[120px]">
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
          <!-- Section Header -->
          <div class="text-center flex justify-center">
            <div class="max-w-3xl mb-12">
              <h2 class="text-3xl md:text-4xl font-semibold mb-4">
                Our Services
              </h2>

              <!-- Title Border -->
              <div class="flex items-center justify-center gap-2 mb-6">
                <div class="w-12 h-1 bg-gray-800"></div>
                <div class="w-12 h-1 bg-gray-800"></div>
              </div>
            </div>
          </div>

          <!-- Services Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Service Item -->
            <div
              class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <a href="#">
                <img
                  src="..//assets/img/Our Services/virtual-pos.jpg   "
                  alt="Virtual POS"
                  class="w-full h-56 object-cover"
                />
              </a>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">
                  <a href="#" class="hover:text-blue-600 transition"
                    >Virtual POS</a
                  >
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Our virtual POS is a “POS-anywhere” offering that extends
                  reach to pay agents even in remote locations.
                </p>
              </div>
            </div>

            <!-- Service Item -->
            <div
              class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <a href="#">
                <img
                  src="..//assets/img/Our Services/payment-invoice.jpg"
                  alt="Payment Invoice"
                  class="w-full h-56 object-cover"
                />
              </a>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">
                  <a href="#" class="hover:text-blue-600 transition"
                    >Payment Invoice</a
                  >
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Custom electronic invoice to initiate payment via email or
                  merchant's user portal.
                </p>
              </div>
            </div>

            <!-- Service Item -->
            <div
              class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <a href="#">
                <img
                  src="..//assets/img/Our Services/payment-web-widget.png"
                  alt="Payment Web Widget"
                  class="w-full h-56 object-cover"
                />
              </a>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">
                  <a href="#" class="hover:text-blue-600 transition"
                    >Payment Web Widget</a
                  >
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Ease of integration and cost effectiveness, including card
                  payments and bank transfers.
                </p>
              </div>
            </div>

            <!-- Service Item -->
            <div
              class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <a href="#">
                <img
                  src="..//assets/img/Our Services/QR-code.jpg"
                  alt="QRCode"
                  class="w-full h-56 object-cover"
                />
              </a>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">
                  <a href="#" class="hover:text-blue-600 transition">QRCode</a>
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  With QR-codes on stalls or restaurant tables, users can
                  securely initiate payment on their own device.
                </p>
              </div>
            </div>

            <!-- Service Item -->
            <div
              class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <a href="#">
                <img
                  src="..//assets/img/Our Services/salary-payments.jpg"
                  alt="Salary Bulk Payment"
                  class="w-full h-56 object-cover"
                />
              </a>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">
                  <a href="#" class="hover:text-blue-600 transition"
                    >Salary (Bulk) Payment</a
                  >
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Allows you to make multiple debit payments to a bulk list.
                </p>
              </div>
            </div>

            <!-- Service Item -->
            <div
              class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <a href="#">
                <img
                  src="..//assets/img/Our Services/credit-list.jpg"
                  alt="Mandate Payment"
                  class="w-full h-56 object-cover"
                />
              </a>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">
                  <a href="#" class="hover:text-blue-600 transition"
                    >Credit List</a
                  >
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Your written instructions for deductions, e.g. installment
                  payments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--Why choose us -->

      <section class="pb-24">
        <!-- Section Title -->

        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center flex justify-center">
            <div class="max-w-3xl mb-12">
              <h2 class="text-3xl md:text-4xl font-semibold mb-4">
                Why Choose Us
              </h2>

              <!-- Title Border -->
              <div class="flex items-center justify-center gap-2 mb-6">
                <div class="w-12 h-1 bg-gray-800"></div>
                <div class="w-12 h-1 bg-gray-800"></div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Image/Text Column -->
            <div class="justify-center lg:justify-start">
              <h2 class="text-7xl text-bold mb-4">Faster Growth</h2>
              <p class="text-gray-600 text-4xl">
                Trusted Partners <br />
                Reliable
              </p>
            </div>

            <!-- Content Column -->
            <div class="">
              <!--Container block-->
              <div class="bg-green-200 flex rounded-md px-6 py-2 mb-2 gap-4">
                <div class="text-3xl border rounded-full my-auto">
                  <i class="fa-solid fa-shield"></i>
                </div>
                <div>
                  <h2 class="mb-2">More Collections</h2>
                  <p class="text-sm text-gray-600">
                    Now you can leverage our new methods of payments to increase
                    your collections and at scale. The interbank transfers
                    payment option opens up a new market for you and activates
                    dormant customers.
                  </p>
                </div>
              </div>
              <div class="bg-gray-500 flex rounded-md px-6 py-2 mb-2 gap-4">
                <div class="text-3xl my-auto">
                  <i class="fa-solid fa-shield"></i>
                </div>
                <div>
                  <h2 class="mb-2">More Collections</h2>
                  <p class="text-sm">
                    Now you can leverage our new methods of payments to increase
                    your collections and at scale. The interbank transfers
                    payment option opens up a new market for you and activates
                    dormant customers.
                  </p>
                </div>
              </div>
              <div class="bg-gray-500 flex rounded-md px-6 py-2 mb-2 gap-4">
                <div class="text-3xl my-auto">
                  <i class="fa-solid fa-shield"></i>
                </div>
                <div>
                  <h2 class="mb-2">More Collections</h2>
                  <p class="text-sm">
                    Now you can leverage our new methods of payments to increase
                    your collections and at scale. The interbank transfers
                    payment option opens up a new market for you and activates
                    dormant customers.
                  </p>
                </div>
              </div>
              <div class="bg-gray-500 flex rounded-md px-6 py-2 gap-4">
                <div class="text-3xl my-auto">
                  <i class="fa-solid fa-shield"></i>
                </div>
                <div>
                  <h2 class="mb-2">More Collections</h2>
                  <p class="text-sm">
                    Now you can leverage our new methods of payments to increase
                    your collections and at scale. The interbank transfers
                    payment option opens up a new market for you and activates
                    dormant customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!--Our Pricing-->

    <section>
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex items-center justify-center my-12">
          <h2 class="text-6xl text-bold font-bold text-center">
            Competitive Price. Best Value.
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16">
          <div
            class="bg-white rounded-2xl max-w-md mx-auto px-8 py-8 text-gray-500 shadow-xl/30"
          >
            <div class="flex items-center gap-3 mb-5">
              <i class="fa-solid fa-money-bills text-2xl"></i>
              <p class="font-semibold text-lg">For Account Transfers</p>
            </div>

            <p class="text-4xl font-bold mb-2">1.5%</p>
            <p class="text-base mb-6">Fee is capped at N2000 per transaction</p>

            <!-- OR Divider -->
            <div class="flex items-center my-6">
              <div class="flex-grow border-t border-white"></div>
              <span class="mx-4 text-sm font-medium">OR</span>
              <div class="flex-grow border-t border-white"></div>
            </div>

            <p class="text-base">Local transaction fees are capped at N1500</p>
          </div>

          <div
            class="bg-white rounded-2xl max-w-md mx-auto px-8 py-8 text-gray-500 shadow-xl/30"
          >
            <div class="flex items-center gap-3 mb-5">
              <i class="fa-solid fa-money-bills text-2xl"></i>
              <p class="font-semibold text-lg">For Account Transfers</p>
            </div>

            <p class="text-4xl font-bold mb-2">1.5%</p>
            <p class="text-base mb-6">Fee is capped at N2000 per transaction</p>

            <!-- OR Divider -->
            <div class="flex items-center my-6">
              <div class="flex-grow border-t border-white"></div>
              <span class="mx-4 text-sm font-medium">OR</span>
              <div class="flex-grow border-t border-white"></div>
            </div>

            <p class="text-base">Local transaction fees are capped at N1500</p>
          </div>
        </div>
      </div>
    </section>

    <!--Blog-->

    <Footer />
  </div>
</template>
