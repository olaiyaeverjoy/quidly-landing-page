<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import bgImage from "../assets/img/Our Services/new-hero-pic.png";
</script>

<template>
  <div class="relative bg-gray-100 px-4 sm:px-6 overflow-hidden">
    <Navbar />

    <!--hero section-->
    <div
      class="w-full min-h-[70vh] md:min-h-[80vh] flex items-center px-6 md:px-12 relative"
    >
      <div
        class="flex flex-col md:flex-row items-center justify-between w-full gap-10"
      >
        <!-- Left Content -->
        <div class="md:w-1/2">
          <h1
            class="text-3xl text-left md:text-left text-[#1f7de7] sm:text-6xl font-semibold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            A Simpler Way To <br />
            Collect Payments
          </h1>

          <p
            class="text-xs md:text-xs lg:text-lg text-gray-400 mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Quidly has made payment seamless for merchants <br />
            across Nigeria
          </p>

          <a
            href="#"
            class="inline-block bg-lime-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-lime-700 transition"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            Create Free Account
          </a>
        </div>

        <!-- Right Image -->
        <div
          class="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <img
            src="../assets/img/Our Services/new-hero-pic.png"
            alt="Hero Image"
            class="w-full max-w-300 object-contain"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </div>

    <!--Container section-->

    <div class="max-w-7xl mx-auto px-4 sm:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Card 1 -->
        <div
          class="bg-white rounded-xl shadow-sm hover:shadow-lg transition text-center flex flex-col justify-center p-6 h-72"
          data-aos="fade-up"
        >
          <div
            class="mx-auto mb-6 w-14 h-14 flex bg-green-100 rounded-xl items-center justify-center text-3xl"
          >
            <i class="fa-solid fa-briefcase text-green-600"></i>
          </div>
          <div class="flex-1 flex flex-col justify-center">
            <h3 class="text-xl font-semibold mb-3">Professional Services</h3>
            <p class="text-gray-500 text-sm mb-4">
              Explore Quidly's seamless payment solutions under our dedicated
              Professional Services.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-white rounded-xl shadow-sm hover:shadow-lg transition text-center flex flex-col items-center p-6 h-72"
          data-aos="fade up"
        >
          <div
            class="mx-auto mb-6 w-14 h-14 flex bg-green-100 rounded-xl items-center justify-center text-3xl"
          >
            <i class="fa-solid fa-wallet text-green-600"></i>
          </div>
          <div class="flex-1 flex flex-col justify-center">
            <h3 class="text-xl font-semibold mb-3">Low Costing</h3>
            <p class="text-gray-500 text-sm mb-4">
              Our unique implementation of innovative solutions is
              cost-effective compared to other operational approaches.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-white rounded-xl shadow-sm hover:shadow-lg transition text-center flex flex-col items-center p-6 h-72"
          data-aos="fade-up"
        >
          <div
            class="mx-auto mb-6 w-14 h-14 flex bg-green-100 rounded-xl items-center justify-center text-3xl"
          >
            <i class="fa-solid fa-headphones text-green-600"></i>
          </div>
          <div class="flex-1 flex flex-col justify-center">
            <h3 class="text-xl font-semibold mb-3">Live Support</h3>
            <p class="text-gray-500 text-sm mb-4">
              Instant help whenever you need: Connect with experts through
              Quidly's Live Support for immediate assistance.
            </p>
          </div>
        </div>

        <!-- Card 4 -->
        <div
          class="bg-white rounded-xl shadow-sm hover:shadow-lg transition text-center flex flex-col items-center p-6 h-72"
          data-aos="fade-up"
        >
          <div
            class="mx-auto mb-6 w-14 h-14 flex bg-green-100 rounded-xl items-center justify-center text-3xl"
          >
            <i class="fa-solid fa-shield text-green-600"></i>
          </div>
          <div class="flex-1 flex flex-col justify-center">
            <h3 class="text-xl font-semibold mb-3">Safe and Secure</h3>
            <p class="text-gray-500 text-sm mb-4">
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
              data-aos="flip-left"
              data-aos-duration="1000"
            />
          </div>

          <!-- Content Column -->
          <div>
            <!-- Section Title -->
            <div class="text-center mb-12">
              <h2 class="text-4xl text-black/90 font-bold mb-4">About Us</h2>

              <!-- Title Border -->
              <div class="flex items-center justify-center gap-2 mb-4">
                <div class="w-12 h-1 bg-gray-800"></div>
                <div class="w-12 h-1 bg-gray-800"></div>
              </div>
            </div>

            <!-- Description -->
            <p
              class="text-base font-semibold text-gray-600 tracking-wide leading-relaxed text-center lg:text-left mb-8"
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
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Services & Why choose us-->
    <div
      class="bottom-0 left-0 w-full bg-gradient-to-r from-slate-100 to-green-100"
    >

      <div class="max-w-7xl mx-auto px-4 py-20">
        <div class="mb-24">
          <h2 class="font-bold text-4xl text-slate-800 mb-4">
            Simple, Easy Payments
          </h2>
          <p class="font-semibold text-gray-600 text-base">
            Building a business is hard. Getting paid shouldn't be.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div class="flex justify-center lg:justify-center">
            <img
              src="..//assets/img/Our Services/Services-img.png"
              alt=""
              class="object-cover"
            />
          </div>

          <div class="">
            <h2 class="font-bold text-3xl text-slate-800 mb-4">
              Delight customers with a seamless payments experience
            </h2>
            <p class="font-semibold text-gray-600 text-base mb-4">
              Make payments effortless for your customers with a smooth and
              reliable checkout powered by Paystack.
            </p>

            <ul
              class="grid grid-cols-2 gap-4 text-lg mb-10 font-medium text-gray-700"
            >
              <li class="flex items-center gap-2 px-4 py-2">
                <span class="text-green-600 font-bold"
                  ><i class="fa-solid fa-check"></i
                ></span>
                Card
              </li>

              <li class="flex items-center gap-2 px-4 py-2">
                <span class="text-green-600 font-bold"
                  ><i class="fa-solid fa-check"></i
                ></span>
                Apple Pay
              </li>

              <li class="flex items-center gap-2 px-4 py-2">
                <span class="text-green-600 font-bold"
                  ><i class="fa-solid fa-check"></i
                ></span>
                Bank Account
              </li>

              <li class="flex items-center gap px-4 py-2">
                <span class="text-green-600 font-bold"
                  ><i class="fa-solid fa-check"></i
                ></span>
                Visa QR
              </li>

              <li class="flex items-center gap-2 px-4 py-2">
                <span class="text-green-600 font-bold"
                  ><i class="fa-solid fa-check"></i
                ></span>
                Bank Transfer
              </li>

              <li class="flex items-center gap-2 px-4 py-2">
                <span class="text-green-600 font-bold"
                  ><i class="fa-solid fa-check"></i
                ></span>
                Mobile Money
              </li>

              <li class="flex items-center gap-2 px-4 py-2">
                <span class="text-green-600 font-bold"
                  ><i class="fa-solid fa-check"></i
                ></span>
                USSD
              </li>

              <li class="flex items-center gap-2 px-4 py-2">
                <span class="text-green-600 font-bold"
                  ><i class="fa-solid fa-check"></i
                ></span>
                POS
              </li>
            </ul>

            <div>
              <h2 class="font-bold text-3xl text-slate-800 mb-4">
                Experience exceptional transaction success rates.
              </h2>
              <p class="font-semibold text-base">
                Here’s a polished alternative with the same meaning: We
                intelligently direct payments through the best channels to
                guarantee industry-leading transaction success rates.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--Code from claude-->

      <section class="flex items-center py-20 px-6 md:px-16">
        <div
          class="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12"
        >
          <!-- Left: Heading -->
          <div class="md:w-1/3 flex-shrink-0">
            <span class="block w-8 h-0.5 bg-slate-400 mb-4"></span>
            <h2 class="text-3xl font-bold text-slate-800 leading-snug">
              How can your <br />
              customer pay?
            </h2>
          </div>

          <!-- Right: Cards -->
          <div class="w-full md:w-2/3 flex flex-nowrap overflow-x-auto md:grid md:grid-cols-2 sm:grid-cols-2 gap-6 scrollbar-hide">
            <!-- Card 1 - USSD / Mobile -->
            <div
              class=" min-w-[250px] bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-4"
              style="animation-delay: 0.1s"
            >
              <div
                class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center"
              >
                <i
                  class="fa-solid fa-mobile-screen-button text-2xl text-green-600"
                ></i>
              </div>
              <div>
                <h3 class="text-base font-bold text-slate-800 mb-2">
                  USSD, Mobile and Internet Transfers
                </h3>
                <p class="text-sm text-slate-500 leading-relaxed">
                  Using Monnify, your customers can make payment to you on your
                  website or app by initiating a simple interbank transfer using
                  USSD, internet banking or their mobile banking app.
                </p>
              </div>
            </div>

            <!-- Card 2 - Cards -->
            <div class="min-w-[250px] bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-4">
              <div
                class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center"
              >
                <i class="fa-solid fa-credit-card text-2xl text-green-600"></i>
              </div>
              <div>
                <h3 class="text-base font-bold text-slate-800 mb-2">Cards</h3>
                <p class="text-sm text-slate-500 leading-relaxed">
                  Monnify allows you receive payments via debit cards online,
                  while offering the most competitive transaction fees
                  obtainable. Cards can also be tokenized for convenient
                  recurring billing on cards.
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
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Image/Text Column -->
            <div class="justify-center lg:justify-start">
              <h2 class="text-5xl md:text-7xl text-bold text-slate-800 mb-4">
                Faster Growth
              </h2>
              <p class="text-gray-600 text-4xl">
                Trusted Partners <br />
                Reliable
              </p>
            </div>

            <!-- Content Column -->
            <div class="">
              <!--Container block-->
              <div class="bg-slate-200 flex rounded-md px-6 py-6 mb-2 gap-4">
                <div class="text-3xl my-auto">
                  <i class="fa-solid fa-money-bill-wave text-green-600"></i>
                </div>
                <div>
                  <h2 class="mb-2">Effortless Collections</h2>
                  <p class="text-sm text-gray-600">
                    You can now take advantage of our new payment methods to
                    grow your collections and scale your business more
                    efficiently. With interbank transfer options, you can reach
                    a wider audience and re-engage customers who were previously
                    inactive.
                  </p>
                </div>
              </div>
              <div class="bg-slate-200 flex rounded-md px-6 py-6 mb-2 gap-4">
                <div class="text-3xl my-auto">
                  <i class="fa-solid fa-circle-check text-green-600"></i>
                </div>
                <div>
                  <h2 class="mb-2">Improved Transaction Success</h2>
                  <p class="text-sm text-gray-600">
                    Quidly offers multiple payment channels and intelligent
                    routing that help maximize transaction success. Its
                    interbank transfer system is optimized to deliver reliable
                    processing and consistently high completion rates.
                  </p>
                </div>
              </div>
              <div class="bg-slate-200 flex rounded-md px-6 py-6 mb-2 gap-4">
                <div class="text-3xl my-auto">
                  <i class="fa-solid fa-gears text-green-600"></i>
                </div>
                <div>
                  <h2 class="mb-2">Seamless Operations</h2>
                  <p class="text-sm text-gray-600">
                    Run your business more efficiently with Quidly, which helps
                    eliminate operational challenges like transaction delays,
                    slow settlements, complex reconciliation, high processing
                    fees, and the risks associated with handling cash.
                  </p>
                </div>
              </div>
              <div class="bg-slate-200 flex rounded-md px-6 py-6 gap-4">
                <div class="text-3xl my-auto">
                  <i class="fa-solid fa-credit-card text-green-600"></i>
                </div>
                <div>
                  <h2 class="mb-2">Credit List</h2>
                  <p class="text-sm text-gray-600">
                    Integrated credit management system designed to assist
                    merchants in managing credit offers to their customers.
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
      <div class="max-w-4xl mx-auto py-20 px-4">
        <div class="flex items-center justify-center my-12">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black/90 text-center"
          >
            Competitive Price. Best Value.
          </h2>
        </div>

        <div class="w-full flex flex-nowrap overflow-x-auto md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          <div
            class="min-w-65 bg-white rounded-2xl max-w-md mx-auto px-8 py-8 text-gray-500 shadow-xl"
          >
            <div class="flex items-center gap-3 mb-5">
              <i class="fa-solid fa-money-bills text-2xl text-green-600"></i>
              <p class="font-semibold text-slate-800 text-lg">
                For Account Transfers
              </p>
            </div>

            <p class="text-4xl text-slate-800 font-bold mb-2">1.5%</p>
            <p class="text-base mb-6 text-slate-800">
              Fee is capped at N2000 per transaction
            </p>
  
            <!-- OR Divider -->
            <div class="flex items-center my-6">
              <div class="flex-grow border-t border-gray-800"></div>
              <span class="mx-4 text-sm font-medium">OR</span>
              <div class="flex-grow border-t border-gray-800"></div>
            </div>

            <p class="text-base text-slate-800">
              Local transaction fees are capped at N1500
            </p>
          </div>

          <div
            class="min-w-65 bg-white rounded-2xl max-w-md mx-auto px-8 py-8 text-gray-500 shadow-xl"
          >
            <div class="flex items-center gap-3 mb-5">
              <i class="fa-regular fa-credit-card text-2xl text-green-600"></i>
              <p class="font-semibold text-slate-800 text-lg">For Cards</p>
            </div>

            <p class="text-4xl text-slate-800 font-bold mb-2">1.5%</p>
            <p class="text-base text-slate-800 mb-6">
              Fee is capped at N2000 per transaction
            </p>

            <!-- OR Divider -->
            <div class="flex items-center my-6">
              <div class="flex-grow border-t border-gray-800"></div>
              <span class="mx-4 text-sm font-medium">OR</span>
              <div class="flex-grow border-t border-gray-800"></div>
            </div>

            <p class="text-base text-slate-800">
              International cards are charged and settled in naira
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--Get started section-->

    <section class="flex items-center px-16 py-20">
      <div
        class="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-16"
      >
        <!-- Left: Heading -->
        <div class="md:w-1/3 flex-shrink-0">
          <span class="block w-8 h-0.5 bg-slate-400 mb-4"></span>
          <h2 class="text-5xl font-bold text-slate-800 leading-tight mb-4">
            Get <br />
            Started
          </h2>
          <p class="text-slate-500 text-sm leading-relaxed">
            Enjoy Easier, Faster, Cheaper <br />
            Payments Today
          </p>
        </div>

        <!-- Right: Form Card -->
        <div
          class="md:w-2/3 relative w-full rounded-2xl overflow-hidden"
          style="background-color: #dcfce7"
        >
          <!-- Orange blob top-right -->
          <div
            class="absolute -top-6 -right-6 w-40 h-40 rounded-full"
            style="
              background-color: #38bdf8;
              border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
            "
          ></div>

          <!-- Dot pattern bottom-left -->
          <div
            class="absolute bottom-0 left-0 w-48 h-48 opacity-20"
            style="
              background-image: radial-gradient(
                circle,
                #ffffff 1px,
                transparent 1px
              );
              background-size: 12px 12px;
            "
          ></div>

          <!-- Form Content -->
          <div class="relative z-10 p-12">
            <h3 class="text-slate-800 text-xl font-light mb-8">Get in touch</h3>

            <div class="flex flex-col gap-4">
              <!-- Business Name -->
              <input
                type="string"
                placeholder="Phone no"
                class="w-full px-5 py-4 rounded-xl text-slate-800 placeholder-slate-600 outline-none border-none"
                style="background-color: #86efac"
              />

              <div class="relative w-full">
                <label
                  for="reason"
                  class="block mb-1 text-sm font-semibold text-green-500"
                >
                </label>
                <select
                  id="reason"
                  name="reason"
                  class="w-full px-5 py-4 rounded-xl text-slate-800 placeholder-slate-600 outline-none border-none appearance-none bg-[#86efac] pr-8"
                >
                  <option value="" disabled selected>Select a reason</option>
                  <option value="support">Account Opening</option>
                  <option value="sales">Payment Issues</option>
                  <option value="feedback">General Enquiry</option>
                  <option value="other">Make an Enquiry</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-300"
                >
                  <svg class="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M5.516 7.548a.625.625 0 0 1 .882-.02L10 10.936l3.602-3.408a.625.625 0 1 1 .862.902l-4.053 3.837a.625.625 0 0 1-.866 0L5.516 8.43a.625.625 0 0 1 0-.882z"
                    />
                  </svg>
                </div>
              </div>

              <!-- Sign Up Button -->
              <button
                class="w-40 mx-auto py-4 rounded-full font-semibold bg-lime-600 text-white hover:bg-lime-700 shadow-lg shadow-lime-500/50 transition duration-300"
                @click="handleSignup"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
