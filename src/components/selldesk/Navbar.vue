<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { login as keycloakLogin } from '@/services/keycloak/keycloak.service'
const isOpen = ref(false);
const openDropdown = ref(null);
async function handleSignIn() {
  try {
    console.log('🔐 Starting Keycloak login...')

    await keycloakLogin()

    console.log('✅ Keycloak login initiated')
  } catch (error) {
    console.log('❌ Keycloak login failed:', error)
  }
}
const navItems = [
  {
    label: "Company",
    children: [
      {
        label: "About Teinnovate",
        to: "/aboutteinnovate",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Help & Resources",
        to: "/help&resorces",
      },
    ],
  },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;

  if (!isOpen.value) {
    openDropdown.value = null;
  }
};

const toggleDropdown = (label) => {
  openDropdown.value =
    openDropdown.value === label ? null : label;
};

const closeMenu = () => {
  isOpen.value = false;
  openDropdown.value = null;
};

const handleEscape = (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
};

// Prevent the page underneath from scrolling
// when the mobile menu is open
watch(isOpen, (value) => {
  document.body.style.overflow = value ? "hidden" : "";
});

onMounted(() => {
  window.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleEscape);

  // Make sure scrolling is restored
  document.body.style.overflow = "";
});
</script>



<template>
  <header  class="fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 z-50">
    <nav
      class="max-w-screen-2xl mx-auto h-16 lg:h-20 px-4 sm:px-6 lg:px-10 flex items-center justify-between"
    >
      <!-- ==================== -->
      <!-- SELLDESK LOGO -->
      <!-- ==================== -->
      <router-link
        to="/"
        class="flex items-center shrink-0"
        @click="closeMenu"
      >
        <img
          src="@/assets/img/logo.png"
          alt="Selldesk Logo"
          class="h-8 sm:h-10 md:h-11 lg:h-12 xl:h-14 w-auto object-contain"
        />
      </router-link>

      <!-- ==================== -->
      <!-- DESKTOP NAVIGATION -->
      <!-- ==================== -->
      <div class="hidden md:flex items-center gap-8 text-gray-700">
        <!-- Download -->
        <!-- <router-link
          to="/download"
          class="text-sm font-medium hover:text-[#053758] transition-colors duration-200"
        >
          Download
        </router-link> -->

        <!-- Company / Resources -->
        <!-- <div
          v-for="item in navItems"
          :key="item.label"
          class="relative"
        >
          <button
            type="button"
            @click="toggleDropdown(item.label)"
            class="flex items-center gap-1.5 text-sm font-medium hover:text-[#053758] transition-colors duration-200"
          >
            {{ item.label }}

            <svg
              class="w-4 h-4 transition-transform duration-300"
              :class="{
                'rotate-180': openDropdown === item.label,
              }"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          
          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div
              v-if="openDropdown === item.label"
              class="absolute left-0 top-full mt-3 w-56 rounded-xl border border-gray-100 bg-white shadow-xl overflow-hidden z-50"
            >
              <router-link
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                @click="closeMenu"
                class="block px-4 py-3 text-sm text-gray-700 hover:bg-slate-50 hover:text-[#053758] transition-colors"
              >
                {{ child.label }}
              </router-link>
            </div>
          </Transition>
        </div> -->
      </div>

      <!-- ==================== -->
      <!-- DESKTOP RIGHT SIDE -->
      <!-- ==================== -->
      <div class="hidden lg:flex items-center gap-6">
        <!-- Search -->
        <!-- <button
          type="button"
          aria-label="Search"
          class="text-slate-500 hover:text-[#053758] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="w-5 h-5"
          >
            <circle cx="11" cy="11" r="7" />
            <line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
            />
          </svg>
        </button> -->

        <!-- Language -->
        <!-- <span class="text-sm text-slate-700">
          English   
        </span> -->

        <!-- Sign In -->
       <button
  type="button"
  @click="handleSignIn"
  class="bg-[#053758] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#042a44] transition-all duration-200 hover:-translate-y-0.5"
>
  Sign In
</button>
      </div>

      <!-- ==================== -->
      <!-- MOBILE HAMBURGER -->
      <!-- ==================== -->
      <button
        @click="toggleMenu"
        class="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-50 transition-colors"
        aria-label="Toggle menu"
        :aria-expanded="isOpen"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- ==================== -->
    <!-- MOBILE MENU -->
    <!-- ==================== -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 top-16 z-50 md:hidden bg-white"
      >
        <div class="h-full overflow-y-auto px-5 py-6">

          <!-- Navigation -->
          <nav class="flex flex-col gap-2">

            <!-- Download -->
            <!-- <router-link
              to="/download"
              @click="closeMenu"
              class="px-4 py-4 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#053758] transition-colors"
            >
              Download
            </router-link> -->

            <!-- Company -->
            <!-- <div>
              <button
                @click="toggleDropdown('Company')"
                class="flex items-center justify-between w-full px-4 py-4 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#053758] transition-colors"
              >
                <span>Company</span>

                <svg
                  class="w-5 h-5 transition-transform duration-300"
                  :class="{
                    'rotate-180': openDropdown === 'Company',
                  }"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <Transition
                enter-active-class="transition-all duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <div
                  v-if="openDropdown === 'Company'"
                  class="ml-3 mt-1 rounded-xl bg-slate-50 overflow-hidden"
                >
                  <router-link
                    to="/aboutteinnovate"
                    @click="closeMenu"
                    class="block px-5 py-4 text-sm text-slate-700 hover:text-[#053758] hover:bg-slate-100 transition-colors"
                  >
                    About Teinnovate
                  </router-link>
                </div>
              </Transition>
            </div> -->

           
            <div>
              <!-- <button
                @click="toggleDropdown('Resources')"
                class="flex items-center justify-between w-full px-4 py-4 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#053758] transition-colors"
              >
                <span>Resources</span>

                <svg
                  class="w-5 h-5 transition-transform duration-300"
                  :class="{
                    'rotate-180': openDropdown === 'Resources',
                  }"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button> -->

              <Transition
                enter-active-class="transition-all duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <div
                  v-if="openDropdown === 'Resources'"
                  class="ml-3 mt-1 rounded-xl bg-slate-50 overflow-hidden"
                >
                  <router-link
                    to="/help&resorces"
                    @click="closeMenu"
                    class="block px-5 py-4 text-sm text-slate-700 hover:text-[#053758] hover:bg-slate-100 transition-colors"
                  >
                    Help & Resources
                  </router-link>
                </div>
              </Transition>
            </div>
          </nav>

          <!-- Divider -->
          <!-- <div class="border-t border-slate-100 my-6"></div> -->

          <!-- Mobile Actions -->
          <div class="flex flex-col gap-2">

            <!-- Search -->
            <!-- <button
              type="button"
              class="flex items-center gap-3 w-full px-4 py-4 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-[#053758] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-5 h-5"
              >
                <circle cx="11" cy="11" r="7" />
                <line
                  x1="21"
                  y1="21"
                  x2="16.65"
                  y2="16.65"
                />
              </svg>

              <span>Search</span>
            </button> -->

            <!-- Language -->
            <!-- <button
              type="button"
              class="flex items-center gap-3 w-full px-4 py-4 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-[#053758] transition-colors"
            >
              <span class="text-lg">🌐</span>
              <span>English</span>
            </button> -->
          </div>

          <!-- Sign In -->
          <div class="mt-8">
            <button
  type="button"
  @click="handleSignIn"
  class="block w-full text-center bg-[#053758] hover:bg-[#042a44] text-white rounded-full px-6 py-3.5 font-semibold transition-all duration-200 shadow-sm"
>
  Sign In
</button>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

