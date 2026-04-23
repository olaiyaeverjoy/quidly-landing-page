<script setup>
import logo from "../assets/logo/quidly-logo.png";

import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="bg-white ">
    <nav class="w-full mx-4 sm:px-6 lg:px-8 px-4 py-6 border-t">
      <div class="flex justify-between items-center" data-aos="fade-down">
        <img class="w-[99px] h-[35px] object-contain"  :src="logo" alt="" />

        <ul class="hidden sm:flex gap-7 items-center">
          <li>
            <a class="font-semibold text-lime-600" href="">Home</a>
          </li>
          <li>
            <a class="font-semibold text-lime-600" href="">About</a>
          </li>
          <li>
            <a class="font-semibold text-lime-600" href="">Services</a>
          </li>
          <li>
            <a class="font-semibold text-lime-600" href="">Prices</a>
          </li>
        </ul>

        <!--Desktop button -->
        <button
          class="hidden sm:block rounded drop-shadow-lg text-white text-xs px-6 py-2 bg-lime-600 hover:bg-lime-800 transition duration-300"
        >
          Get Started
        </button>

        <!--Hamburger -->

        <button @click="toggleMenu" class="sm:hidden focus:outline-none">
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
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-400 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isOpen" class="sm:hidden mt-4">
          <ul class="flex flex-col gap-4 items-start">
            <li><a class="font-semibold text-sm" href="#">Home</a></li>
            <li><a class="font-semibold text-sm" href="#">About</a></li>
            <li><a class="font-semibold text-sm" href="#">Services</a></li>
            <li><a class="font-semibold text-sm" href="#">Prices</a></li>
            <li>
              <button
                class="rounded drop-shadow-lg text-white text-xs py-2 px-6 bg-lime-600 hover:bg-lime-800 transition duration-300"
              >
                Get started
              </button>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </div>
</template>
