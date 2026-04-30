<script setup>
import logo from "../assets/logo/quidly-logo.png";

import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="bg-white">
    <nav class="w-full mx-4 sm:px-6 lg:px-8 px-4 py-6 border-t">
      <div class="flex justify-between items-center" data-aos="fade-down">
        <img class="w-[99px] h-[35px] object-contain" :src="logo" alt="" />

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
              <li><a class="font-semibold text-lg" href="/">Home</a></li>
              <li><a class="font-semibold text-lg" href="#">About</a></li>
              <li><a class="font-semibold text-lg" href="#">Services</a></li>
              <li><a class="font-semibold text-lg" href="#">Prices</a></li>
              <li>
                <button
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
