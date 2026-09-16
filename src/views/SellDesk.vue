<script setup>
import Navbar from '../components/selldesk/Navbar.vue'
import Footer from '../components/selldesk/Footer.vue'

import { reactive } from 'vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import invoiceImage from '../assets/img/invoice.png'
import CreateAccount from '../components/auth/CreateAccount.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({
  companyName: '',
  email: '',
  password: '',
  agreed: false
})

const emit = defineEmits(['submit'])

function handleSubmit() {
  emit('submit', { ...form })
}

const features = [
  {
    title: 'Instant Invoice',
    description: 'Create professional invoices in under 30 seconds.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z' // lightning bolt
  },
  {
    title: 'Secure & Reliable',
    description: '100% security to keep your money and data safe.',
    icon: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4zm-1.2 13.2l5-5-1.4-1.4-3.6 3.6-1.4-1.4-1.4 1.4 2.8 2.8z' // shield check
  },
  {
    title: 'Custom Templates',
    description: 'Beautiful invoice template that represents your brand.',
    icon: 'M4 4h16v4H4V4zm0 6h7v10H4V10zm9 0h7v4h-7v-4zm0 6h7v4h-7v-4z' // layout/template
  },
  {
    title: 'Real time Analytics',
    description: 'Tracks payments and revenue in real-time.',
    icon: 'M4 19h16M6 19V9m5 10V5m5 14v-7' // bar chart
  }
]

// drop your invoice template image paths in here, e.g. '../assets/img/template-1.png'
// const slides = ref([
//   { src: '../assets/img/icons/invoice.png', alt: '' },
//   { src: '../assets/img/invoice.png', alt: '' },
//   { src: '../assets/img/invoice.png', alt: '' }
// ])

const slides = ref([
  {
    src: invoiceImage,
    alt: 'Invoice icon'
  },
  {
    src: invoiceImage,
    alt: 'Invoice preview'
  },
  {
    src: invoiceImage,
    alt: 'Invoice preview'
  }
])

const active = ref(0)
let timer = null

function goTo(index) {
  active.value = index
}
function next() {
  active.value = (active.value + 1) % slides.value.length
}
function prev() {
  active.value = (active.value - 1 + slides.value.length) % slides.value.length
}

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant',
  })

  timer = setInterval(next, 4000)
})
onUnmounted(() => {
  clearInterval(timer)
})

const products = [
  {
    name: 'SellDesk',
    short: 'Create invoices. Get paid. Stay in control.',
    desc: 'Create and send professional electronic invoices, track payment status and reduce manual payment follow-ups.',
    features: ['Digital invoices', 'Payment tracking', 'Automated follow-up'],
    type: 'invoice'
  },
  {
    name: 'PayWithSplit',
    short: 'Split the payment. Not the experience.',
    desc: 'Let customers divide a bill and pay their individual share without one person having to front the entire amount.',
    features: ['Split bills', 'QR-first flow', 'Individual payments'],
    type: 'split'
  },
  {
    name: 'Pay4Me',
    short: 'Let someone else pay — without losing the sale.',
    desc: 'Customers can securely request payment from a parent, sponsor, friend or business partner through a QR code or payment request.',
    features: ['QR payment request', 'Secure delegation', 'Instant confirmation'],
    type: 'pay4me'
  }
]

// const active = ref(0)
// let timer = null

const currentProduct = computed(() => products[active.value])

function goToSignin() {
  router.push('/login')
}

function handleSignupSuccess(result) {
  console.log('Account created:', result)

  // Optional:
  // router.push('/login')
}
</script>

<template>
  <Navbar />
  <!--Hero Section-->
  <main class="pt-16 lg:pt-20">
    <section class="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- LEFT: copy + form -->
        <div>
          <span
            class="inline-block bg-sky-50 text-blue-600 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-md"
          >
            FREE INVOICING SOFTWARE
          </span>

          <h1 class="mt-5 text-5xl lg:text-[3.4rem] font-extrabold leading-[1.05] text-slate-900">
            Invoicing,<br />
            but
            <span class="relative inline-block text-teal-600">
              better
              <svg
                class="absolute left-0 -bottom-2 w-full"
                height="8"
                viewBox="0 0 160 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 6 C 40 1, 120 1, 158 6"
                  stroke="#0d9488"
                  stroke-width="3"
                  fill="none"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </h1>

          <p class="mt-5 text-slate-500 text-[15px] leading-relaxed max-w-md">
            Create professional invoices in seconds, track payments in real time and monitor your
            business growth in a single powerful dashboard.
          </p>

          <CreateAccount
  @signin="goToSignin"
  @success="handleSignupSuccess"
/>
        </div>

        <!-- RIGHT: phone mockup -->
        <div class="relative flex justify-center lg:justify-end">
          <div
            class="absolute -inset-10 bg-gradient-to-br from-teal-50 via-slate-50 to-transparent rounded-[3rem] -z-10"
          ></div>

          <!-- image wrapper controls the sizing everything else is pinned to -->
          <div class="relative w-[280px] sm:w-[340px] lg:w-[400px]">
            <img
              src="../assets/img/hero.png"
              alt="SellDesk invoicing app on a phone"
              class="w-full h-[60vh] object-contain drop-shadow-xl transition-opacity duration-700"
            />

            <!-- floating card: paid -->
            <div
              class="absolute top-[-2%] sm:top-[5%] -left-18 sm:-left-20 lg:-left-28 bg-white rounded-xl shadow-[0_12px_35px_rgba(0,0,0,0.12)] px-3.5 py-2.5 w-36 sm:w-40 animate-float border border-slate-100 z-20"
            >
              <div class="flex items-center gap-1.5">
                <span
                  class="w-4 h-4 rounded-full bg-emerald-500 text-white text-[9px] flex items-center justify-center shadow-sm"
                >
                  ✓
                </span>

                <span class="text-[10px] font-semibold text-slate-700"> Invoice Paid </span>
              </div>

              <p class="text-sm font-extrabold text-slate-900 mt-0.5">₦125,000</p>

              <p class="text-[9px] text-slate-400">2 mins ago</p>
            </div>

            <!-- floating card: sent -->
            <div
              class="absolute top-[12%] -right-14 sm:-right-14 lg:-right-18 bg-white rounded-xl shadow-[0_12px_35px_rgba(0,0,0,0.12)] px-3.5 py-2.5 w-28 sm:w-32 animate-float-delayed border border-slate-100 z-20"
            >
              <div class="flex items-center gap-1.5">
                <span class="text-[11px]">📤</span>

                <span class="text-[10px] font-semibold text-slate-700"> Invoice Sent </span>
              </div>

              <p class="text-[10px] font-semibold text-slate-800 mt-0.5">John Ltd.</p>

              <p class="text-[9px] text-amber-500">Pending</p>
            </div>

            <!-- floating card: whatsapp -->
            <div
              class="absolute bottom-[8%] sm:bottom-[14%] -left-18 sm:-left-20 lg:-left-28 bg-white rounded-xl shadow-[0_12px_35px_rgba(0,0,0,0.12)] px-3.5 py-2.5 w-36 sm:w-40 animate-float-slow border border-slate-100 z-20"
            >
              <div class="flex items-center gap-1.5">
                <span class="text-[11px]">💬</span>

                <span class="text-[10px] font-semibold text-slate-700"> Whatsapp shared </span>
              </div>

              <p class="text-[9px] text-slate-400 mt-0.5">Delivered</p>

              <p class="text-[9px] text-slate-300">Just now</p>
            </div>
          </div>
        </div>
      </div>

      <!-- feature strip -->
      <div class="mt-16 pt-6 border-t border-slate-100">
        <div
          class="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 text-sm font-medium text-slate-700"
        >
          <span class="flex items-center gap-2"
            ><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Instant Invoice</span
          >
          <span class="flex items-center gap-2"
            ><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Payment Tracking</span
          >
          <span class="flex items-center gap-2"
            ><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Secure &amp;
            Reliable</span
          >
          <span class="flex items-center gap-2"
            ><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Live Analytics</span
          >
        </div>
      </div>

      <p class="text-center font-bold text-slate-900 mt-8">Trusted by business across Nigeria</p>
    </section>

    <!--Invoice Template Section-->

    <section class="bg-gradient-to-br from-emerald-50 via-slate-50 to-white py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- LEFT: copy (leaving space for your content) -->
          <div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0b2540] leading-snug">
              Invoice Templates That Make You Look Professional
            </h2>

            <div class="flex items-center gap-4 mt-8">
              <span
                class="w-12 h-12 shrink-0 rounded-full bg-orange-50 flex items-center justify-center"
              >
                <svg class="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <ellipse cx="12" cy="5" rx="8" ry="3" />
                  <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" opacity=".6" />
                  <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" opacity=".3" />
                </svg>
              </span>
              <h3 class="text-xl font-extrabold text-[#0b2540]">Multiple Templates</h3>
            </div>

            <div class="flex items-center gap-4 mt-6">
              <span
                class="w-12 h-12 shrink-0 rounded-full bg-sky-50 flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-sky-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" d="M4 7h9M4 17h7" />
                  <circle cx="16" cy="7" r="2" fill="currentColor" stroke="none" />
                  <circle cx="14" cy="17" r="2" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <h3 class="text-xl font-extrabold text-[#0b2540]">Flexible Customization</h3>
            </div>

            <button
              class="mt-8 bg-[#0b2540] hover:bg-[#0a1f36] transition-colors text-white text-sm font-semibold px-8 py-4 rounded-xl"
            >
              Create Invoice
            </button>
          </div>

          <!-- RIGHT: slideshow -->
          <div class="relative">
            <div
              class="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden bg-white py-4 shadow-lg"
            >
              <!-- Sliding track -->
              <div
                class="flex h-full transition-transform duration-700 ease-in-out"
                :style="{
                  transform: `translateX(-${active * 100}%)`
                }"
              >
                <div v-for="(slide, i) in slides" :key="i" class="w-full h-full flex-shrink-0">
                  <img :src="slide.src" :alt="slide.alt" class="w-full h-full object-contain" />
                </div>
              </div>

              <!-- Previous arrow -->
              <button
                @click="prev"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center text-slate-600 hover:bg-white z-10"
              >
                ‹
              </button>

              <!-- Next arrow -->
              <button
                @click="next"
                class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center text-slate-600 hover:bg-white z-10"
              >
                ›
              </button>
            </div>

            <!-- Dots -->
            <div class="flex justify-center gap-2 mt-4">
              <button
                v-for="(slide, i) in slides"
                :key="i"
                @click="goTo(i)"
                class="w-2 h-2 rounded-full transition-colors"
                :class="i === active ? 'bg-[#0b2540]' : 'bg-slate-300'"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Card Section-->

    <section class="bg-[#f4f7fb] py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <!-- LEFT: product image (drop your image here) -->
          <div class="flex justify-center lg:justify-start">
            <img
              src="../assets/img/laptop-phone.png"
              alt="SellDesk dashboard and mobile app"
              class="w-full max-w-xl h-auto object-contain"
            />
          </div>

          <!-- RIGHT: 2x2 feature cards -->
          <div class="grid grid-cols-2 gap-4 sm:gap-5">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="bg-[#0b2540] rounded-2xl p-5 sm:p-6 flex flex-col gap-3"
            >
              <span class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  class="w-4 h-4 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" :d="feature.icon" />
                </svg>
              </span>

              <h3 class="text-white font-semibold text-sm sm:text-base">
                {{ feature.title }}
              </h3>
              <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Invoice step section-->
    <section class="bg-[#0b2540] py-16 lg:py-20 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <!-- LEFT: heading + steps -->
          <div>
            <h2 class="text-2xl sm:text-3xl font-extrabold mb-8 sm:mb-10">
              <span class="text-emerald-400">Invoice</span>
              <span class="text-white"> and get </span>
              <span class="text-emerald-400">paid</span>
            </h2>

            <div class="divide-y divide-white/10">
              <!-- Step 1 -->
              <div class="flex items-start gap-4 py-4">
                <span
                  class="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9h1v1H9z" />
                  </svg>
                </span>
                <div>
                  <h3 class="text-white font-semibold text-sm sm:text-base">Create Invoice</h3>
                  <p class="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Add your customers details, items and amount in seconds.
                  </p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex items-start gap-4 py-4">
                <span
                  class="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </span>
                <div>
                  <h3 class="text-white font-semibold text-sm sm:text-base">Send to Customer</h3>
                  <p class="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Share the invoice or payment link with your customers.
                  </p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex items-start gap-4 py-4">
                <span
                  class="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>
                <div>
                  <h3 class="text-white font-semibold text-sm sm:text-base">Get Paid Securely</h3>
                  <p class="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Customers pay online securely via multiple payment methods.
                  </p>
                </div>
              </div>

              <!-- Step 4 -->
              <div class="flex items-start gap-4 pt-4">
                <span
                  class="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3v18h18M7 15l4-4 3 3 5-6"
                    />
                  </svg>
                </span>
                <div>
                  <h3 class="text-white font-semibold text-sm sm:text-base">Track & Grow</h3>
                  <p class="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Monitor payments and analyze your business performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT: product image (drop your image here) -->
          <div class="relative flex justify-center lg:justify-end">
            <div class="absolute -inset-16 bg-emerald-400/10 blur-3xl rounded-full -z-10"></div>

            <img
              src="../assets/img/hero.png"
              alt="SellDesk payment screen on a phone"
              class="w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!--Add features section here-->
    <section class="relative overflow-hidden py-20 md:py-28 px-6 bg-white">
      <!-- Background decorations -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- <div
        class="absolute w-[620px] h-[620px] border border-[#0b2540]/10 rounded-full -right-64 -top-64"
      ></div> -->
        <div
          class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_8%_20%,rgba(11,37,64,0.08),transparent_28%),radial-gradient(circle_at_92%_80%,rgba(104,173,18,0.10),transparent_30%)]"
        ></div>
      </div>

      <div class="max-w-[1180px] mx-auto relative z-10">
        <!-- Eyebrow -->
        <span
          class="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0b2540]/5 text-[#0b2540] font-bold text-[13px]"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          SellDesk ecosystem
        </span>

        <h1
          class="text-[clamp(38px,5vw,64px)] leading-[1.02] tracking-[-2.8px] max-w-[760px] mt-5 mb-4 font-bold text-slate-900"
        >
          One platform. Every payment workflow.
        </h1>

        <p class="max-w-[700px] text-slate-500 text-lg leading-relaxed mb-12">
          From checkout and invoicing to split payments, delegated payments and installment
          management — bring the payment tools your customers and business need into one connected
          experience.
        </p>

        <!-- Showcase -->
        <div class="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-7 items-stretch">
          <!-- Tabs -->
          <div
            class="flex flex-col gap-2.5 p-3.5 border border-slate-200 rounded-[26px] bg-white/90 shadow-[0_18px_55px_rgba(16,24,40,0.07)]"
          >
            <button
              v-for="(product, index) in products"
              :key="product.name"
              @click="setActive(index)"
              class="relative text-left px-4 py-4 rounded-[18px] transition-all duration-250 cursor-pointer"
              :class="
                active === index
                  ? 'bg-gradient-to-br from-[#0b2540] to-[#123a63] text-white shadow-[0_12px_30px_rgba(11,37,64,0.22)]'
                  : 'text-slate-500 hover:bg-slate-50 hover:translate-x-1'
              "
            >
              <div class="flex items-start gap-2.5">
                <span
                  class="inline-flex w-7 h-7 rounded-full items-center justify-center text-xs font-extrabold shrink-0"
                  :class="
                    active === index ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  "
                >
                  0{{ index + 1 }}
                </span>
                <div>
                  <strong class="text-[16px] block">{{ product.name }}</strong>
                  <p class="mt-1.5 text-xs leading-snug opacity-80">{{ product.short }}</p>
                </div>
              </div>
            </button>

            <!-- <div class="mt-auto pt-3 px-3.5 text-[11px] text-slate-400 border-t border-slate-200">
            Auto-playing • Click any tab to pause & jump
          </div> -->
          </div>

          <!-- Product Card -->
          <div
            class="relative min-h-[560px] overflow-hidden rounded-[30px] p-8 md:p-10 text-white bg-gradient-to-br from-[#061527] via-[#0b2540] to-[#123a63] shadow-[0_25px_70px_rgba(11,37,64,0.22)]"
          >
            <!-- Decorative circles -->
            <div
              class="absolute w-[520px] h-[520px] rounded-full border border-white/10 -right-52 -top-52"
            ></div>
            <div
              class="absolute w-[330px] h-[330px] rounded-full bg-green-500/20 blur-xl -left-36 -bottom-44"
            ></div>

            <div class="relative z-10">
              <div class="flex justify-between items-start gap-5">
                <span
                  class="inline-flex px-3 py-1.5 rounded-full bg-white/10 text-[11px] font-extrabold tracking-wider uppercase"
                >
                  {{ currentProduct.name }}
                </span>
                <span class="text-xs opacity-60">0{{ active + 1 }} / 03</span>
              </div>

              <h2 class="text-[32px] md:text-[40px] tracking-[-1.6px] mt-5 mb-2.5 font-bold">
                {{ currentProduct.name }}
              </h2>
              <p class="max-w-[470px] text-white/75 leading-relaxed">
                {{ currentProduct.desc }}
              </p>

              <!-- Visual Stage -->
              <div class="min-h-[300px] flex items-center justify-center mt-5 relative">
                <!-- Payment Widget -->
                <!-- <div v-if="currentProduct.type === 'widget'" class="w-full max-w-[610px]">
                <div
                  class="bg-neutral-900 rounded-t-[15px] rounded-b-[7px] p-2 pb-4 shadow-2xl transform perspective-900 rotate-x-1"
                >
                  <div class="bg-white rounded-lg overflow-hidden h-[245px] text-slate-800 p-4">
                    <div class="flex justify-between text-[11px] font-extrabold">
                      <span>Checkout</span>
                      <span class="text-[#0b2540]">Payment Widget</span>
                    </div>
                    <div class="grid grid-cols-3 gap-2 mt-4">
                      <div class="p-3.5 rounded-lg bg-[#0b2540]/5">
                        <small class="text-[8px] text-slate-500">ORDER TOTAL</small>
                        <b class="block text-xs mt-1.5">₦250,000</b>
                      </div>
                      <div class="p-3.5 rounded-lg bg-emerald-50">
                        <small class="text-[8px] text-slate-500">STATUS</small>
                        <b class="block text-xs mt-1.5 text-emerald-600">Ready</b>
                      </div>
                      <div class="p-3.5 rounded-lg bg-orange-50">
                        <small class="text-[8px] text-slate-500">REFERENCE</small>
                        <b class="block text-xs mt-1.5">#QDL2045</b>
                      </div>
                    </div>
                    <div class="mt-3 border border-slate-100 rounded-lg p-2.5">
                      <div
                        class="h-6 border-b border-slate-100 flex items-center justify-between text-[8px]"
                      >
                        <span>MacBook Air M3</span><b>₦250,000</b>
                      </div>
                      <div
                        class="h-6 border-b border-slate-100 flex items-center justify-between text-[8px]"
                      >
                        <span>Payment method</span><b>Secure checkout</b>
                      </div>
                      <div class="h-6 flex items-center justify-between text-[8px]">
                        <span>Notification</span><b class="text-emerald-600">Instant</b>
                      </div>
                    </div>
                  </div>
                  <div
                    class="h-2 w-[108%] -ml-[4%] bg-gradient-to-b from-neutral-400 to-neutral-600 rounded-b-full"
                  ></div>
                </div>
              </div> -->

                <!-- Invoice -->
                <div
                  v-if="currentProduct.type === 'invoice'"
                  class="w-[230px] overflow-hidden rounded-xl bg-white shadow-2xl"
                >
                  <img
                    src="../assets/img/invoice.png"
                    alt="Quidly Invoice"
                    class="block w-full h-auto"
                  />
                </div>

                <!-- Split -->
                <div
                  v-else-if="currentProduct.type === 'split'"
                  class="w-[230px] overflow-hidden rounded-xl bg-white shadow-2xl"
                >
                  <img
                    src="../assets/img/paywithsplit.png"
                    alt="Quidly Invoice"
                    class="block w-full h-auto"
                  />
                </div>

                <!-- Pay4Me -->
                <div v-else class="flex gap-6 items-center">
                  <div class="w-[145px] bg-neutral-900 rounded-[25px] p-1.5 shadow-2xl rotate-5">
                    <div class="h-[290px] bg-white rounded-[20px] overflow-hidden text-slate-900">
                      <div
                        class="h-[65px] bg-gradient-to-br from-[#0b2540] to-[#123a63] text-white p-3.5 text-[10px] font-extrabold"
                      >
                        Pay4Me<br /><span class="opacity-70">Payment request</span>
                      </div>
                      <div class="p-3">
                        <div class="p-2.5 rounded-xl bg-slate-50 mb-2 text-[8px]">
                          <b>Amount</b><br /><span class="text-base">₦250,000</span>
                        </div>
                        <div
                          class="w-[82px] h-[82px] mx-auto my-3.5 bg-[repeating-conic-gradient(#111_0_25%,#fff_0_50%)] bg-[length:10px_10px] border-[7px] border-white shadow-[0_0_0_1px_#ddd]"
                        ></div>
                        <div class="text-center text-[8px] text-slate-500">
                          Scan to complete payment
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="w-[145px] bg-neutral-900 rounded-[25px] p-1.5 shadow-2xl -rotate-4 scale-90"
                  >
                    <div class="h-[290px] bg-white rounded-[20px] overflow-hidden text-slate-900">
                      <div
                        class="h-[65px] bg-gradient-to-br from-[#0b2540] to-[#123a63] text-white p-3.5 text-[10px] font-extrabold"
                      >
                        Payment
                      </div>
                      <div class="p-3 text-center">
                        <div class="text-2xl text-emerald-500 my-7">✓</div>
                        <div class="font-black text-[15px]">Paid securely</div>
                        <div class="text-[8px] text-slate-500 mt-1">₦250,000 payment completed</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- CreditList -->
                <!-- <div v-else class="w-[340px] bg-white text-slate-900 rounded-[20px] p-5 shadow-2xl">
                <div class="flex justify-between items-center">
                  <h3 class="text-xl font-bold m-0">CreditList</h3>
                  <span class="text-[#0b2540] text-[10px]">Dashboard</span>
                </div>
                <div class="grid grid-cols-2 gap-2 mt-4">
                  <div class="p-3 bg-slate-50 rounded-lg">
                    <small class="text-[8px] text-slate-500">TOTAL CREDIT REQUESTS</small>
                    <b class="block text-base mt-1">₦3.56m</b>
                  </div>
                  <div class="p-3 bg-slate-50 rounded-lg">
                    <small class="text-[8px] text-slate-500">IN-FLOW</small>
                    <b class="block text-base mt-1">₦20.00m</b>
                  </div>
                  <div class="p-3 bg-slate-50 rounded-lg">
                    <small class="text-[8px] text-slate-500">PAST DUE</small>
                    <b class="block text-base mt-1">₦0</b>
                  </div>
                  <div class="p-3 bg-slate-50 rounded-lg">
                    <small class="text-[8px] text-slate-500">DEFAULTS</small>
                    <b class="block text-base mt-1">4</b>
                  </div>
                </div>
                <div class="mt-3 p-3 border border-slate-200 rounded-xl text-[9px]">
                  <b>Payment schedule</b>
                  <div class="flex justify-between py-1.5">
                    <span>Installment 01</span><span class="text-emerald-600">Paid ✓</span>
                  </div>
                  <div class="flex justify-between py-1.5">
                    <span>Installment 02</span><span class="text-emerald-600">Paid ✓</span>
                  </div>
                  <div class="flex justify-between py-1.5">
                    <span>Installment 03</span><span class="text-amber-600">Pending</span>
                  </div>
                </div>
              </div> -->
              </div>

              <!-- Features -->
              <div class="flex gap-2 flex-wrap mt-6">
                <span
                  v-for="feature in currentProduct.features"
                  :key="feature"
                  class="px-3 py-2 rounded-full bg-white/10 border border-white/10 text-[11px]"
                >
                  ✓ {{ feature }}
                </span>
              </div>

              <!-- Progress -->
              <div class="h-[3px] bg-white/15 mt-7 rounded-full overflow-hidden">
                <div
                  class="h-full bg-lime-400 transition-all duration-300"
                  :style="{ width: `${((active + 1) / products.length) * 100}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Free invoiving everywhere-->

    <!-- <section class="bg-white py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        LEFT: copy + store badges
        <div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
            Take your free invoicing software
            <span class="text-sky-500">everywhere</span>
          </h2>
          <p class="text-slate-500 text-sm sm:text-[15px] mt-4 max-w-sm leading-relaxed">
            Selldesk Invoice is supported by all your daily devices. Your data is up to date at all
            times.
          </p>

          <div class="flex gap-3 mt-6 w-fit">
            <a
              href="#"
              class="flex items-center gap-2 bg-slate-900 text-white rounded-lg px-4 py-2"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M3 3l10.5 9L3 21V3zM14 12l3-3 4 2.3c1 .6 1 2 0 2.6L17 16l-3-4zM4.4 2.3L15 8.5l-2.6 2.5-8-8.7z"
                />
              </svg>
              <span class="leading-tight text-left">
                <span class="block text-[9px] text-slate-300">GET IT ON</span>
                <span class="block text-xs font-semibold -mt-0.5">Google Play</span>
              </span>
            </a>
            <a
              href="#"
              class="flex items-center gap-2 bg-slate-900 text-white rounded-lg px-4 py-2"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M16.365 1.43c0 1.14-.42 2.19-1.14 2.98-.83.9-2.14 1.6-3.24 1.51-.14-1.1.44-2.28 1.14-3.03.83-.9 2.26-1.56 3.24-1.46zM20.5 17.24c-.5 1.15-.74 1.66-1.38 2.67-.9 1.4-2.16 3.15-3.73 3.16-1.4.02-1.76-.9-3.65-.89-1.9.01-2.3.9-3.7.88-1.57-.02-2.76-1.6-3.66-3-2.5-3.85-2.77-8.36-1.22-10.77 1.1-1.73 2.85-2.74 4.5-2.74 1.68 0 2.73 1 4.12 1 1.34 0 2.16-1 4.11-1 1.47 0 3.02.8 4.13 2.19-3.63 1.99-3.05 7.16.48 8.5z"
                />
              </svg>
              <span class="leading-tight text-left">
                <span class="block text-[9px] text-slate-300">Download on the</span>
                <span class="block text-xs font-semibold -mt-0.5">App Store</span>
              </span>
            </a>
            <a
              href="#"
              class="flex items-center gap-2 bg-slate-900 text-white rounded-lg px-4 py-2"
            >
              <span class="grid grid-cols-2 gap-0.5 w-4 h-4">
                <span class="bg-red-500"></span><span class="bg-emerald-500"></span>
                <span class="bg-sky-500"></span><span class="bg-amber-400"></span>
              </span>
              <span class="leading-tight text-left">
                <span class="block text-[9px] text-slate-300">Get from</span>
                <span class="block text-xs font-semibold -mt-0.5">Microsoft</span>
              </span>
            </a>
          </div>
        </div>

        RIGHT: image collage (drop your images in)
        <div class="grid grid-cols-2 gap-5">
          <div
            class="rounded-tl-[6rem] rounded-br-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 bg-slate-100"
          >
            <img
              src="../assets/img/free-1.png"
              alt=""
              class="rounded-tl-[6rem] rounded-br-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 object-cover"
            />
          </div>

          <div
            class="rounded-tr-[6rem] rounded-bl-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 bg-slate-100"
          >
            <img
              src="../assets/img/free-2.png"
              alt=""
              class="rounded-tr-[6rem] rounded-bl-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 object-cover"
            />
          </div>

          <div
            class="rounded-bl-[6rem] rounded-tr-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 bg-slate-100"
          >
            <img
              src="../assets/img/free-3.png"
              alt=""
              class="rounded-bl-[6rem] rounded-tr-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 object-cover"
            />
          </div>

          
          <img src="../assets/img/collage-4.jpg" alt="" class="rounded-br-[6rem] rounded-tl-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 object-cover" />
         
          <div
            class="rounded-br-[6rem] rounded-tl-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 bg-slate-100"
          ></div>
        </div>
      </div>
    </div>
  </section> -->
  </main>
  <Footer />
</template>

<style scoped>
.qr-fake {
  background-image: repeating-linear-gradient(0deg, #111 0 3px, transparent 3px 6px),
    repeating-linear-gradient(90deg, #111 0 3px, transparent 3px 6px);
  background-size: 6px 6px;
  background-blend-mode: multiply;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

@keyframes floatDelayed {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes floatSlow {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delayed {
  animation: floatDelayed 4.5s ease-in-out infinite;
  animation-delay: 0.8s;
}

.animate-float-slow {
  animation: floatSlow 5s ease-in-out infinite;
  animation-delay: 0.4s;
}
</style>
