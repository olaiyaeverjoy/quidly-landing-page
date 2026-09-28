<template>
  <div class="w-full bg-white overflow-x-hidden">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white shadow-md z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center gap-2">
            <img src="../assets/img/pay4me-logo.jpeg" class="w-20" alt="" />
          </div>

          <div class="hidden md:flex items-center gap-8">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="text-gray-700 hover:text-blue-600 transition"
              >{{ link.label }}</a
            >
          </div>

          <a
            href="https://merchant-app.quidly.ng/#/"
            class="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create an account
          </a>

          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-700">
            <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-2xl"></i>
          </button>
        </div>

        <div v-if="mobileMenuOpen" class="md:hidden pb-4 space-y-3">
          <a
            v-for="link in navLinks"
            :key="link.href"
            href="link.href"
            @click="mobileMenuOpen = false"
            class="block text-gray-700 hover:text-blue-600"
            >{{ link.label }}</a
          >
          <a
            href="https://merchant-app.quidly.ng/#/"
            class="block text-center w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create an account
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section id="home" class="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"
        ></div>
        <div
          class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/80 to-transparent"
        ></div>
      </div>

      <div class="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div
        class="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
      ></div>

      <div class="relative z-10 mx-auto w-full max-w-7xl px-6 pb-36 pt-28 sm:px-8 lg:px-10">
        <div class="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <!-- Left -->
          <div class="max-w-2xl" data-aos="fade-up" data-aos-duration="1000">
            <div
              class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
            >
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              Delegated payments at checkout
            </div>

            <h1
              class="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Customer chooses.
              <span
                class="block bg-gradient-to-r from-blue-300 via-cyan-200 to-white bg-clip-text text-transparent"
              >
                Someone else pays.
              </span>
            </h1>

            <p class="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              Pay4Me is Quidly's in-checkout delegated payment feature. A customer picks what they
              need, whether that is a shopping cart, hosting, a domain or a subscription, then
              securely requests payment from a parent, client, finance team or sponsor before the
              sale is lost.
            </p>

            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#how-it-works"
                class="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-slate-900 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                How It Works
                <i
                  class="fas fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1"
                ></i>
              </a>
            </div>

            <div
              class="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/15 pt-7"
            >
              <div>
                <p class="text-2xl font-bold text-white">Card</p>
                <p class="mt-1 text-sm text-slate-300">or bank transfer</p>
              </div>
              <div class="hidden h-10 w-px bg-white/20 sm:block"></div>
              <div>
                <p class="text-2xl font-bold text-white">OTP</p>
                <p class="mt-1 text-sm text-slate-300">secured requests</p>
              </div>
              <div class="hidden h-10 w-px bg-white/20 sm:block"></div>
              <div>
                <p class="text-2xl font-bold text-white">Instant</p>
                <p class="mt-1 text-sm text-slate-300">merchant confirmation</p>
              </div>
            </div>
          </div>

          <!-- Right: checkout mock -->
          <div
            class="relative mx-auto w-full max-w-md lg:max-w-none"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div
              class="absolute -right-8 -top-8 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
            ></div>

            <div
              class="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl shadow-black/40 backdrop-blur-sm"
            >
              <div class="rounded-[1.5rem] bg-blue-100 p-6">
                <span
                  class="inline-block rounded-full bg-blue-300 px-4 py-1 text-sm font-semibold text-white"
                  >YourStore</span
                >
                <div class="mt-4 rounded-2xl bg-white p-4 shadow">
                  <p class="text-xs font-semibold text-slate-500">TOTAL AMOUNT</p>
                  <p class="text-3xl font-bold text-slate-900">₦25,000.00</p>
                </div>

                <p class="mt-5 text-sm font-semibold text-slate-700">
                  Pay4Me <span class="text-xs font-normal text-slate-400">@quidly</span>
                </p>
                <p class="text-sm text-slate-500">Who should complete this payment for you?</p>

                <div class="mt-3 space-y-2">
                  <div
                    class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-400"
                  >
                    payer@email.com
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div
                      class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-400"
                    >
                      Mobile number
                    </div>
                    <div
                      class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-400"
                    >
                      Name (optional)
                    </div>
                  </div>
                  <div
                    class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-400"
                  >
                    Short message
                  </div>
                </div>

                <div class="mt-4 rounded-lg bg-blue-600 py-3 text-center font-semibold text-white">
                  Send Request
                </div>
                <p class="mt-4 text-center text-xs text-slate-500">
                  secured by <span class="font-bold text-green-600">quidly</span>
                </p>
              </div>
            </div>

            <!-- Floating status card -->
            <div
              class="absolute -bottom-7 -left-2 sm:-left-8 flex items-center gap-4 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur-xl animate-float"
            >
              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white"
              >
                <i class="fas fa-check"></i>
              </div>
              <div>
                <p class="font-bold text-slate-900">Payment complete</p>
                <p class="text-xs text-slate-500">Merchant notified instantly</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 lg:flex"
      >
        <span class="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <div class="flex h-8 w-5 justify-center rounded-full border border-white/30 p-1">
          <span class="h-2 w-1 rounded-full bg-white/80 animate-bounce"></span>
        </div>
      </div>
    </section>

    <!-- Trust strip (overlaps hero, like the search section) -->
    <section class="bg-gray-50 py-8 relative -mt-12 z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow-lg p-6" data-aos="zoom-in" data-aos-duration="800">
          <div class="grid md:grid-cols-4 gap-4">
            <div
              v-for="t in trust"
              :key="t.title"
              class="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 transition hover:bg-slate-100"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600"
              >
                <i :class="t.icon"></i>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-900">{{ t.title }}</p>
                <p class="text-xs text-slate-500">{{ t.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="bg-blue-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div
            v-for="(s, i) in stats"
            :key="s.label"
            class="text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            :data-aos-delay="i * 100"
          >
            <div class="text-4xl font-bold mb-2">{{ s.value }}</div>
            <p class="text-blue-100">{{ s.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem / Solution (switchable audience) -->
   <section id="about" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div
      class="text-center mb-16"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h2 class="text-4xl font-bold text-gray-800 mb-4">
        Don't lose the sale at checkout
      </h2>

      <v-fade-transition mode="out-in">
        <p
          :key="audience"
          class="text-gray-600 text-lg"
        >
          {{ active.subtitle }}
        </p>
      </v-fade-transition>

      <!-- Tabs -->
      <v-tabs
        v-model="audience"
        class="mt-8"
        color="primary"
        align-tabs="center"
      >
        <v-tab
          v-for="(a, key) in audiences"
          :key="key"
          :value="key"
          class="text-lowercase"
        >
          <i :class="a.icon" class="mr-2"></i>
          {{ a.label.toLowerCase() }}
        </v-tab>
      </v-tabs>
    </div>

    <!-- Animated content -->
    <v-fade-transition mode="out-in">
      <div
        :key="audience"
        class="grid md:grid-cols-2 gap-8"
      >

        <!-- Problem -->
        <div
          class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <div class="text-4xl text-blue-600 mb-4">
            <i class="fas fa-circle-exclamation"></i>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">
            The problem
          </h3>

          <p class="text-gray-600">
            {{ active.problem }}
          </p>
        </div>

        <!-- Solution -->
        <div
          class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <div class="text-4xl text-green-600 mb-4">
            <i class="fas fa-circle-check"></i>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">
            The solution
          </h3>

          <p class="text-gray-600">
            {{ active.solution }}
          </p>
        </div>

      </div>
    </v-fade-transition>

  </div>
</section>

    <!-- How it works -->
    <section id="how-it-works" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p class="text-gray-600 text-lg">Four steps from "I want it" to "It's paid for"</p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in active.steps"
            :key="step.title"
            class="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-duration="800"
            :data-aos-delay="index * 100"
          >
            <span
              class="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white"
              >{{ index + 1 }}</span
            >
            <div class="text-4xl text-blue-600 mb-4"><i :class="step.icon"></i></div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- See it in action -->
    <section id="demo" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">See It in Action</h2>
          <p class="text-gray-600 text-lg">The real flow, from checkout to confirmation</p>
        </div>

        <div class="grid md:grid-cols-2 gap-10">
          <div
            v-for="(shot, index) in screenshots"
            :key="shot.title"
            class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-duration="800"
            :data-aos-delay="index * 100"
          >
            <div class="relative flex items-center justify-center bg-gray-100 p-6">
              <img
                :src="shot.image"
                :alt="shot.title"
                class="w-full max-h-[600px] object-contain rounded-lg"
              />
              <div
                class="absolute top-4 left-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
              >
                {{ shot.tag }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-800 mb-2">{{ shot.title }}</h3>
              <p class="text-gray-600 text-sm">{{ shot.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Best-fit merchants -->
    <section id="use-cases" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Best-Fit Merchants</h2>
          <p class="text-gray-600 text-lg">{{ active.categoriesSubtitle }}</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div
            v-for="(c, index) in active.categories"
            :key="c.title"
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
            :data-aos-delay="index * 100"
          >
            <div class="text-4xl text-blue-600 mb-4"><i :class="c.icon"></i></div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">{{ c.title }}</h3>
            <p class="text-gray-600 text-sm">{{ c.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section id="features" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Why Pay4Me?</h2>
          <p class="text-gray-600 text-lg">Built for merchants and easy for shoppers</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <div
            v-for="(group, gi) in active.benefits"
            :key="group.title"
            :data-aos="gi === 0 ? 'fade-right' : 'fade-left'"
            data-aos-duration="1000"
          >
            <h3 class="text-2xl font-bold text-gray-800 mb-6">{{ group.title }}</h3>
            <div class="space-y-4">
              <div v-for="item in group.items" :key="item.title" class="flex gap-4">
                <div class="text-blue-600 text-2xl flex-shrink-0">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 mb-1">{{ item.title }}</h4>
                  <p class="text-gray-600">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-16 flex flex-wrap items-center justify-center gap-3"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span
            class="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700"
          >
            <i class="fas fa-landmark"></i> CBN Licensed Payment Service Provider
          </span>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-blue-600 text-white">
      <div
        class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <h2 class="text-3xl font-bold mb-4">Turn 'I want it' into 'It's paid for.'</h2>
        <p class="text-blue-100 mb-8 text-lg">
          Add Pay4Me to your existing checkout. No gateway switch needed.
        </p>
      </div>
    </section>

    <!-- Contact -->
    <!-- <section id="contact" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p class="text-gray-600 text-lg">Tell us about your store and we'll set up a demo</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right" data-aos-duration="1000">
            <form class="space-y-4" @submit.prevent="sendDemoRequest">
              <input v-model="form.name" type="text" required placeholder="Your Name" class="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
              <input v-model="form.email" type="email" required placeholder="Your Email" class="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
              <input v-model="form.business" type="text" placeholder="Business / Store Name" class="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
              <textarea v-model="form.message" rows="5" placeholder="Your Message" class="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"></textarea>
              <button type="submit" class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">
                Request Demo
              </button>
            </form>
          </div>

          <div class="space-y-8" data-aos="fade-left" data-aos-duration="1000">
            <div class="flex gap-4">
              <div class="text-blue-600 text-2xl flex-shrink-0"><i class="fas fa-envelope"></i></div>
              <div>
                <h4 class="font-bold text-gray-800 mb-2">Email</h4>
                <p class="text-gray-600">hello@quidly.ng</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="text-blue-600 text-2xl flex-shrink-0"><i class="fas fa-globe"></i></div>
              <div>
                <h4 class="font-bold text-gray-800 mb-2">Website</h4>
                <p class="text-gray-600">quidly.ng/pay4me</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="text-blue-600 text-2xl flex-shrink-0"><i class="fas fa-shield-halved"></i></div>
              <div>
                <h4 class="font-bold text-gray-800 mb-2">Licensed</h4>
                <p class="text-gray-600">CBN Licensed Payment Service Provider</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Footer -->
    <footer class="bg-white text-gray-300 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="../assets/img/pay4me-logo.jpeg" class="w-20" alt="" />
          </div>
          <div>
            <h4 class="font-bold text-white mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li v-for="link in navLinks" :key="link.href">
                <a :href="link.href" class="hover:text-blue-400 transition">{{ link.label }}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-white mb-4">Contact</h4>
            <ul class="space-y-2">
              <li>
                <a href="mailto:hello@quidly.ng" class="hover:text-blue-400 transition"
                  >hello@quidly.ng</a
                >
              </li>
              <li>
                <a href="https://quidly.ng/pay4me" class="hover:text-blue-400 transition"
                  >quidly.ng/pay4me</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} Quidly. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <!-- WhatsApp Support Button -->
    <a
      :href="`https://wa.me/${whatsappNumber}?text=Hello%20Quidly%2C%20I%20want%20to%20know%20more%20about%20Pay4Me.`"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      class="fixed bottom-6 right-6 z-[9999] group"
    >
      <div
        class="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_35px_rgba(37,211,102,0.45)]"
      >
        <i class="fab fa-whatsapp text-4xl"></i>
        <span
          class="absolute right-0 top-0 h-4 w-4 rounded-full border-2 border-white bg-green-500"
        ></span>
      </div>
      <div
        class="pointer-events-none absolute right-20 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:block group-hover:opacity-100"
      >
        Chat with us on WhatsApp
      </div>
    </a>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Save your screenshots in src/assets with these names
import shot4 from '@/assets/img/pay4me-checkout.png'
import shot2 from '@/assets/img/pay4me-waiting.png'
import shot3 from '@/assets/img/pay4me-email.png'
import shot1 from '@/assets/img/pay4me-payer.png'

const mobileMenuOpen = ref(false)
const whatsappNumber = '2348132822731' 

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom'
  })
})

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' }
]

const trust = [
  { icon: 'fas fa-cart-shopping', title: 'In checkout', text: 'Shoppers never leave' },
  { icon: 'fas fa-lock', title: 'OTP-secured', text: 'Time-limited request links' },
  { icon: 'fas fa-link', title: 'No gateway switch', text: 'Works with your gateway' },
  { icon: 'fas fa-bell', title: 'Real-time notification', text: 'Know when it is paid' }
]

const stats = [
  { value: '4', label: 'Simple Steps' },
  { value: '30 min', label: 'Request Window' },
  { value: '2', label: 'Ways to Pay: Card & Transfer' },
  { value: '0', label: 'Payer Sign-ups Needed' }
]

const audience = ref('Shopping')

const audiences = {
  Shopping: {
    label: 'Shopping',
    icon: 'fas fa-bag-shopping',
    subtitle: 'The person shopping is not always the person paying',
    problem:
      "Many shoppers want to buy, but the person checking out isn't always the one paying. Parents, spouses, sponsors, friends or employers may need to complete the payment, and the sale is often lost while the shopper leaves to ask them.",
    solution:
      'Pay4Me lets the shopper request payment help inside checkout. A secure link goes to the payer, who completes payment by card or bank transfer, and the merchant receives instant confirmation.',
    categoriesSubtitle: 'Where someone else often pays',
    steps: [
      {
        icon: 'fas fa-cart-shopping',
        title: 'Shopper selects items',
        text: 'The shopper fills their cart and heads to checkout as usual.'
      },
      {
        icon: 'fas fa-mobile-screen-button',
        title: 'Taps Pay4Me',
        text: "At checkout, they enter the payer's email and an optional short message."
      },
      {
        icon: 'fas fa-paper-plane',
        title: 'Secure request sent',
        text: 'The payer receives an email with a secure, time-limited link.'
      },
      {
        icon: 'fas fa-shield-halved',
        title: 'Payer pays',
        text: 'They pay by card or bank transfer and the merchant is notified instantly.'
      }
    ],
    categories: [
      {
        icon: 'fas fa-spa',
        title: 'Beauty & Cosmetics',
        text: 'Self-care purchases and sponsored checkouts.'
      },
      {
        icon: 'fas fa-shirt',
        title: 'Fashion & Accessories',
        text: 'Outfits, shoes and shopping hauls.'
      },
      { icon: 'fas fa-gem', title: 'Jewellery & Gifts', text: 'High-value or gift-led purchases.' },
      {
        icon: 'fas fa-basket-shopping',
        title: 'Groceries & Household',
        text: 'Useful when family members or sponsors pay.'
      },
      {
        icon: 'fas fa-comments',
        title: 'Social Commerce',
        text: 'WhatsApp shops, online stores and gifting.'
      }
    ],
    benefits: [
      {
        title: 'For merchants',
        items: [
          { title: 'Works with your existing gateway', text: 'No gateway switch and no rebuild.' },
          {
            title: 'Reduces lost sales',
            text: 'Shoppers get help paying without abandoning checkout.'
          },
          {
            title: 'Instant payment confirmation',
            text: 'Real-time notification the moment the payer pays.'
          },
          { title: 'Secure by design', text: 'OTP-secured, time-limited request links.' }
        ]
      },
      {
        title: 'For shoppers',
        items: [
          { title: 'Ask someone else to pay', text: 'Without leaving checkout.' },
          { title: 'Secure and private request', text: 'Only the chosen payer gets the link.' },
          { title: 'No payer registration', text: 'Payers just open the link and pay.' },
          {
            title: 'Great for gifting and family support',
            text: 'Card or bank transfer, fast and simple.'
          }
        ]
      }
    ]
  },
  Hosting: {
    label: 'Hosting & Domains',
    icon: 'fas fa-server',
    subtitle: 'The person choosing the service is not always the one paying',
    problem:
      'Developers, agencies and IT teams often select domains or hosting for clients, but the person choosing the service is not always the one paying. This creates delays, abandoned carts and manual follow-up.',
    solution:
      'Pay4Me lets the customer trigger a secure payment request inside checkout so the actual payer, such as a client, parent company, finance team or sponsor, completes payment directly and the merchant gets instant confirmation.',
    categoriesSubtitle: 'Where the buyer and the payer are different people',
    steps: [
      {
        icon: 'fas fa-server',
        title: 'Customer selects hosting or domain',
        text: 'They pick a plan, a domain or a service and go to checkout.'
      },
      {
        icon: 'fas fa-mobile-screen-button',
        title: 'Taps Pay4Me',
        text: "At checkout, they enter the payer's details and a short note."
      },
      {
        icon: 'fas fa-paper-plane',
        title: 'Secure request sent',
        text: 'The client or finance team gets a secure link by email.'
      },
      {
        icon: 'fas fa-shield-halved',
        title: 'Payer completes payment',
        text: 'The merchant is notified instantly and the order moves forward.'
      }
    ],
    categories: [
      {
        icon: 'fas fa-globe',
        title: 'Hosting & Domains',
        text: 'A developer or staff member chooses hosting, but a client or manager pays.'
      },
      {
        icon: 'fas fa-code',
        title: 'Developers & Agencies',
        text: 'Ideal for buying domains, SSL or hosting on behalf of clients.'
      },
      {
        icon: 'fas fa-cloud',
        title: 'SaaS & Subscriptions',
        text: 'Useful when a staff member chooses a subscription but finance pays.'
      },
      {
        icon: 'fas fa-briefcase',
        title: 'Business Services',
        text: 'Digital tools, website support, renewals and managed services.'
      },
      {
        icon: 'fas fa-cart-shopping',
        title: 'E-Commerce & Digital Products',
        text: 'Useful when another party sponsors or completes the purchase.'
      }
    ],
    benefits: [
      {
        title: 'For merchants',
        items: [
          {
            title: 'Reduces abandoned carts',
            text: 'Clients pay directly instead of the order stalling.'
          },
          { title: 'Works with your existing gateway', text: 'No gateway switch needed.' },
          {
            title: 'Instant payment confirmation',
            text: 'Know the moment the payer completes payment.'
          },
          {
            title: 'OTP-secured request links',
            text: 'Card or bank transfer, with time-limited links.'
          }
        ]
      },
      {
        title: 'For customers',
        items: [
          {
            title: 'Request payment without leaving checkout',
            text: 'No back-and-forth with the client.'
          },
          { title: 'Secure and private request', text: 'Only the chosen payer gets the link.' },
          { title: 'No payer registration required', text: 'Payers open the link and pay.' },
          {
            title: 'Great for client purchases',
            text: 'A fast, simple flow for delegated payment.'
          }
        ]
      }
    ]
  }
}

const active = computed(() => audiences[audience.value])

const screenshots = [
  {
    image: shot1,
    tag: 'Shopper',
    title: 'Ask at checkout',
    text: 'Shopper enters who should pay and sends the request.'
  },
  {
    image: shot2,
    tag: 'Shopper',
    title: 'Track the request',
    text: 'A live status shows request sent, payer, and payment progress.'
  },
  {
    image: shot3,
    tag: 'Payer',
    title: 'Clear payment email',
    text: 'The payer sees the merchant, amount, note and expiry.'
  },
  {
    image: shot4,
    tag: 'Payer',
    title: 'Pay in one tap',
    text: 'No account needed. Review the request and make payment.'
  }
]

const form = reactive({ name: '', email: '', business: '', message: '' })

function sendDemoRequest() {
  const body = `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\n\n${form.message}`
  window.location.href = `mailto:hello@quidly.ng?subject=${encodeURIComponent('Pay4Me demo request')}&body=${encodeURIComponent(body)}`
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

html {
  scroll-behavior: smooth;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

* {
  transition: all 0.3s ease;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #2563eb;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1d4ed8;
}
</style>
