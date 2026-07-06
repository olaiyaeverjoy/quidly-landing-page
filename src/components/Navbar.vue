<script setup>
import logo from "../assets/logo/quidly-logo.png";

import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const sections = ["home", "services", "pricing", "about", "contact"];

const scrollToSection = (sectionId) => {
  if (sections.includes(sectionId)) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const activeSection = ref("home");

const handleScroll = () => {
  const scrollPosition = window.scrollY + 150;

  sections.forEach((section) => {
    const element = document.getElementById(section);

    if (
      element &&
      scrollPosition >= element.offsetTop &&
      scrollPosition < element.offsetTop + element.offsetHeight
    ) {
      activeSection.value = section;
    }
  });
};

onMounted(() => {
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
        <button
          href="https://merchant-app.quidly.ng/#/signup"
          class="hidden sm:block px-6 py-2.5 rounded-full font-medium text-sm text-gray-800 bg-gradient-to-r from-[#dff7b8] via-[#b8f06d] to-[#6fd625] shadow-[0_8px_20px_rgba(151,237,82,0.25)] hover:shadow-[0_12px_28px_rgba(151,237,82,0.35)] hover:-translate-y-0.5 transition-all duration-300"
        >
          Get started
        </button>

        <!--Hamburger -->

        <button @click="toggleMenu" class="sm:hidden px-6 focus:outline-none">
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
        </button>
      </div>

      <!--Mobile view-->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="translate-x-full opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="translate-x-0 opacity-100"
        leave-to-class="translate-x-full opacity-0"
      >
        <div v-if="isOpen" class="fixed inset-0 z-50 flex sm:hidden">
          <!-- Backdrop -->
          <div
            class="absolute inset-0 bg-black/40 backdrop-blur-sm"
            @click="isOpen = false"
          ></div>

          <!-- Drawer -->
          <div
            class="relative ml-auto w-3/4 max-w-sm h-full bg-white shadow-xl p-6 flex flex-col"
          >
            <!-- Cancel button -->
            <button @click="isOpen = false" class="self-end text-2xl mb-6">
              ✕
            </button>

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

              <li>
                <button
                  href="https://merchant-app.quidly.ng/#/signup"
                  class="mt-4 rounded text-white text-sm py-3 px-6 bg-lime-600 hover:bg-lime-800 transition"
                >
                  Get started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>
