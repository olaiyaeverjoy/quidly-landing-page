<script setup>
import logo from "../assets/logo/quidly-logo.png";

import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const sections = ["home", "services", "pricing", "about", "contact"];

const scrollToSection = (sectionId) => {
  if (sectionId === "home") {
    window.location.reload();
    return;
  }
  if (sections.includes(sectionId)) {
    activeSection.value = sectionId;
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const activeSection = ref("home");

const handleScroll = () => {
  if (isClickScrolling.value) return;

  const scrollY = window.scrollY;
  const scrollPosition = scrollY + 150;

  // Explicitly force 'home' when at/near the top — avoids overlap bugs entirely
  if (scrollY < 100) {
    activeSection.value = "home";
    return;
  }

  // Find the last section whose top we've scrolled past
  let current = activeSection.value;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element && element.offsetTop <= scrollPosition) {
      current = section;
    }
  }

  activeSection.value = current;
};

onMounted(() => {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  activeSection.value = "home";

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="bg-white">
    <nav class="w-full mx-4 sm:px-6 lg:px-8 px-4 py-6 border-t">
      <div class="flex justify-between items-center" data-aos="fade-down">
        <img class="w-[99px] h-[35px] object-contain" :src="logo" alt="" />

        <ul class="hidden sm:flex gap-7 items-center">
          <li>
            <a
              @click="scrollToSection('home')"
              :class="[
                'font-semibold cursor-pointer transition-colors',
                activeSection === 'home'
                  ? 'text-lime-600  border-lime-600'
                  : 'text-gray-700 hover:text-lime-600',
              ]"
            >
              Home
            </a>
          </li>

          <li>
            <a
              @click="scrollToSection('about')"
              :class="[
                'font-semibold cursor-pointer transition-colors',
                activeSection === 'about'
                  ? 'text-lime-600  border-lime-600'
                  : 'text-gray-700 hover:text-lime-600',
              ]"
            >
              About
            </a>
          </li>

          <li>
            <a
              @click="scrollToSection('services')"
              :class="[
                'font-semibold cursor-pointer transition-colors',
                activeSection === 'services'
                  ? 'text-lime-600  border-lime-600'
                  : 'text-gray-700 hover:text-lime-600',
              ]"
            >
              Services
            </a>
          </li>

          <li>
            <a
              @click="scrollToSection('pricing')"
              :class="[
                'font-semibold cursor-pointer transition-colors',
                activeSection === 'pricing'
                  ? 'text-lime-600  border-lime-600'
                  : 'text-gray-700 hover:text-lime-600',
              ]"
            >
              Prices
            </a>
          </li>
        </ul>

        <!--Desktop button -->
        <div class="flex gap-3">
          <a
            href="https://merchant-app.quidly.ng/#/signup"
            class="hidden sm:block px-6 py-2.5 rounded-full font-medium text-sm text-gray-800 bg-gradient-to-r from-[#dff7b8] via-[#b8f06d] to-[#6fd625] shadow-[0_8px_20px_rgba(151,237,82,0.25)] hover:shadow-[0_12px_28px_rgba(151,237,82,0.35)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Get started here ➜
          </a>

          <a
            href="https://merchant-app.quidly.ng/"
            class="hidden sm:inline-block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200"
          >
            Login
          </a>
        </div>

        <!--Hamburger -->

        <!-- <button @click="toggleMenu" class="sm:hidden px-6 focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> -->
        <button
          @click="toggleMenu"
          class="sm:hidden relative w-6 h-6 flex flex-col justify-center items-center mr-4"
        >
          <span
            class="block absolute h-0.5 w-6 bg-gray-800 transition-all duration-300"
            :class="isOpen ? 'rotate-45' : '-translate-y-2'"
          ></span>
          <span
            class="block absolute h-0.5 w-6 bg-gray-800 transition-all duration-300"
            :class="isOpen ? 'opacity-0' : 'opacity-100'"
          ></span>
          <span
            class="block absolute h-0.5 w-6 bg-gray-800 transition-all duration-300"
            :class="isOpen ? '-rotate-45' : 'translate-y-2'"
          ></span>
        </button>
      </div>

      <!--Mobile view-->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isOpen"
          class="fixed inset-0 top-[72px] z-50 sm:hidden"
        >
          <!-- Backdrop -->
          <!-- <div
            class="absolute inset-0 bg-black/40 backdrop-blur-sm"
            @click="isOpen = false"
          ></div> -->

          <!-- Dropdown panel -->
          <div
            class="relative w-full h-full bg-white shadow-xl p-6 flex flex-col overflow-y-auto"
          >

            <!-- Menu -->
            <ul class="flex flex-col gap-6 text-left">
              <li>
                <a
                  @click="
                    scrollToSection('home');
                    isOpen = false;
                  "
                  :class="[
                    'font-semibold text-lg cursor-pointer transition-colors',
                    activeSection === 'home'
                      ? 'text-lime-600'
                      : 'text-gray-700 hover:text-lime-600',
                  ]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  @click="
                    scrollToSection('about');
                    isOpen = false;
                  "
                  :class="[
                    'font-semibold text-lg cursor-pointer transition-colors',
                    activeSection === 'about'
                      ? 'text-lime-600'
                      : 'text-gray-700 hover:text-lime-600',
                  ]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  @click="
                    scrollToSection('services');
                    isOpen = false;
                  "
                  :class="[
                    'font-semibold text-lg cursor-pointer transition-colors',
                    activeSection === 'services'
                      ? 'text-lime-600'
                      : 'text-gray-700 hover:text-lime-600',
                  ]"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  @click="
                    scrollToSection('pricing');
                    isOpen = false;
                  "
                  :class="[
                    'font-semibold text-lg cursor-pointer transition-colors',
                    activeSection === 'pricing'
                      ? 'text-lime-600'
                      : 'text-gray-700 hover:text-lime-600',
                  ]"
                >
                  Prices
                </a>
              </li>

              <hr class="faded" />

              <li class="flex flex-col gap-3 w-full">
                <a
                  href="https://merchant-app.quidly.ng/#/signup"
                  class="block w-full text-center px-6 py-3 rounded-full font-medium text-sm text-gray-800 bg-gradient-to-r from-[#dff7b8] via-[#b8f06d] to-[#6fd625] shadow-[0_8px_20px_rgba(151,237,82,0.25)] hover:shadow-[0_12px_28px_rgba(151,237,82,0.35)] active:scale-95 transition-all duration-300"
                >
                  Get started here ➜
                </a>
                <a
                  href="https://merchant-app.quidly.ng/"
                  class="block w-full text-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>
