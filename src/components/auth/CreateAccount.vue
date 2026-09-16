
<script setup>
import { ref, onBeforeUnmount } from 'vue'

import {
  sendSignupOTP,
  resendSignupOTP,
  verifySignupOTP,
  registerMerchant
} from '@/services/auth/auth.services'

import { login as keycloakLogin } from '@/services/keycloak/keycloak.service'

const emit = defineEmits(['success', 'signin'])

// --------------------------------------------------
// Debug logger
// --------------------------------------------------

function logRequest(name, payload) {
  console.group(`🔵 ${name} - REQUEST`)
  console.log('Payload:', payload)
  console.groupEnd()
}

function logResponse(name, response) {
  console.group(`🟢 ${name} - RESPONSE`)
  console.log('Response:', response)
  console.groupEnd()
}

function logError(name, error) {
  console.group(`🔴 ${name} - ERROR`)
  console.error('Error:', error)
  console.groupEnd()
}

// --------------------------------------------------
// Signup state
// --------------------------------------------------

const signupStep = ref('email')
const signupEmail = ref('')
const emailLoading = ref(false)
const emailError = ref('')

const otp = ref('')
const otpLoading = ref(false)
const otpError = ref('')

const resendCountdown = ref(0)
let resendTimer = null

const firstname = ref('')
const lastname = ref('')
const password = ref('')
const confirmPassword = ref('')

const detailsLoading = ref(false)
const detailsError = ref('')
const detailsErrors = ref({})

// --------------------------------------------------
// OTP timer
// --------------------------------------------------

function startResendCountdown() {
  clearResendTimer()

  resendCountdown.value = 60

  resendTimer = setInterval(() => {
    resendCountdown.value--

    if (resendCountdown.value <= 0) {
      clearResendTimer()
    }
  }, 1000)
}

function clearResendTimer() {
  if (resendTimer) {
    clearInterval(resendTimer)
    resendTimer = null
  }
}

// --------------------------------------------------
// Step 1: Send OTP
// --------------------------------------------------

async function handleSendCode() {
  emailError.value = ''

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(signupEmail.value.trim())) {
    emailError.value = 'Please enter a valid email address.'
    return
  }

  emailLoading.value = true

  const payload = {
    email: signupEmail.value
  }

  logRequest('sendSignupOTP', payload)

  try {
    const result = await sendSignupOTP(signupEmail.value)

    logResponse('sendSignupOTP', result)

    if (result.status === 1) {
      otp.value = ''
      otpError.value = ''
      signupStep.value = 'otp'
      startResendCountdown()
    } else {
      emailError.value =
        result.message || 'Could not send verification code. Please try again.'
    }
  } catch (error) {
    logError('sendSignupOTP', error)

    emailError.value =
      error?.response?.data?.message ||
      error?.message ||
      'Could not send verification code. Please try again.'
  } finally {
    emailLoading.value = false
  }
}

// --------------------------------------------------
// Step 2: Resend OTP
// --------------------------------------------------

async function handleResendCode() {
  if (resendCountdown.value > 0) return

  otp.value = ''
  otpError.value = ''
  emailLoading.value = true

  const payload = {
    email: signupEmail.value
  }

  logRequest('resendSignupOTP', payload)

  try {
    const result = await resendSignupOTP(signupEmail.value)

    logResponse('resendSignupOTP', result)

    if (result.status === 1) {
      startResendCountdown()
    } else {
      otpError.value =
        result.message || 'Could not resend code. Please try again.'
    }
  } catch (error) {
    logError('resendSignupOTP', error)

    otpError.value =
      error?.response?.data?.message ||
      error?.message ||
      'Could not resend code. Please try again.'
  } finally {
    emailLoading.value = false
  }
}

// --------------------------------------------------
// Change email
// --------------------------------------------------

function changeEmail() {
  clearResendTimer()
  resendCountdown.value = 0
  otp.value = ''
  otpError.value = ''
  signupStep.value = 'email'
}

// --------------------------------------------------
// Step 2: Verify OTP
// --------------------------------------------------

async function handleVerifyOtp() {
  otpError.value = ''

  const code = otp.value.trim()

  if (!code || code.length < 6) {
    otpError.value = 'Enter the 6-character code sent to your email.'
    return
  }

  otpLoading.value = true

  const payload = {
    email: signupEmail.value,
    code
  }

  logRequest('verifySignupOTP', payload)

  try {
    const result = await verifySignupOTP(
      signupEmail.value,
      code
    )

    logResponse('verifySignupOTP', result)

    if (result.status === 1) {
      clearResendTimer()
      signupStep.value = 'details'
    } else if (result.code === 9) {
      otpError.value =
        result.message || 'Code expired. Please request a new one.'

      otp.value = ''
      resendCountdown.value = 0
    } else {
      const attemptsMsg =
        result.attempts_left != null
          ? ` ${result.attempts_left} attempt(s) remaining.`
          : ''

      otpError.value =
        (result.message || 'Invalid code.') + attemptsMsg
    }
  } catch (error) {
    logError('verifySignupOTP', error)

    otpError.value =
      error?.response?.data?.message ||
      error?.message ||
      'Unable to verify code. Please try again.'
  } finally {
    otpLoading.value = false
  }
}

// --------------------------------------------------
// Step 3: Validate account details
// --------------------------------------------------

function validateDetails() {
  detailsErrors.value = {}

  let valid = true

  if (!firstname.value.trim()) {
    detailsErrors.value.firstname = 'First name is required'
    valid = false
  }

  if (!lastname.value.trim()) {
    detailsErrors.value.lastname = 'Last name is required'
    valid = false
  }

  if (!password.value) {
    detailsErrors.value.password = 'Password is required'
    valid = false
  } else if (password.value.length < 8) {
    detailsErrors.value.password =
      'Password must be at least 8 characters'
    valid = false
  }

  if (!confirmPassword.value) {
    detailsErrors.value.confirmPassword =
      'Please confirm your password'
    valid = false
  } else if (password.value !== confirmPassword.value) {
    detailsErrors.value.confirmPassword =
      'Passwords do not match'
    valid = false
  }

  return valid
}

// --------------------------------------------------
// Step 3: Register
// --------------------------------------------------

async function handleRegister() {
  detailsError.value = ''

  if (!validateDetails()) return

  detailsLoading.value = true

  const payload = {
    email: signupEmail.value,
    firstname: firstname.value,
    lastname: lastname.value,

    // Don't log passwords
    password: '[REDACTED]'
  }

  logRequest('registerMerchant', payload)

  try {
    const result = await registerMerchant({
      email: signupEmail.value,
      firstname: firstname.value,
      lastname: lastname.value,
      password: password.value
    })

    logResponse('registerMerchant', result)

    if (result.status === 1) {
      signupStep.value = 'success'
      emit('success', result)
    } else {
      detailsError.value =
        result.message ||
        'Registration failed. Please try again.'
    }
  } catch (error) {
    logError('registerMerchant', error)

    detailsError.value =
      error?.response?.data?.message ||
      error?.message ||
      'Registration failed. Please try again.'
  } finally {
    detailsLoading.value = false
  }
}

// --------------------------------------------------
// Reset
// --------------------------------------------------

function resetSignup() {
  clearResendTimer()

  signupStep.value = 'email'
  signupEmail.value = ''
  emailError.value = ''

  otp.value = ''
  otpError.value = ''
  resendCountdown.value = 0

  firstname.value = ''
  lastname.value = ''
  password.value = ''
  confirmPassword.value = ''

  detailsErrors.value = {}
  detailsError.value = ''
}

// --------------------------------------------------
// Sign in
// --------------------------------------------------

async function goToSignin() {
  try {
    console.log('🔐 Starting Keycloak login...')

    await keycloakLogin()

    console.log('✅ Keycloak login initiated')
  } catch (error) {
    console.error('❌ Keycloak login failed:', error)
  }
}

onBeforeUnmount(() => {
  clearResendTimer()
})
</script>

<template>
  <div class="w-full">

    <!-- ================= EMAIL ================= -->

    <template v-if="signupStep === 'email'">
      <div>
        <span
          class="inline-block bg-sky-50 text-blue-600 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-md"
        >
          CREATE YOUR ACCOUNT
        </span>

        <h2
          class="mt-5 text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900"
        >
          Start invoicing
          <span class="text-teal-600">better.</span>
        </h2>

        <p class="mt-3 text-sm text-slate-500">
          Create your free SellDesk account and start sending professional
          invoices in seconds.
        </p>

        <form
          class="mt-7 space-y-4"
          @submit.prevent="handleSendCode"
        >
          <div>
            <label
              class="block text-sm font-semibold text-slate-800 mb-1.5"
            >
              Email address
            </label>

            <input
              v-model="signupEmail"
              type="email"
              placeholder="you@example.com"
              autocomplete="email"
              class="w-full px-4 py-3.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition"
            />

            <p
              v-if="emailError"
              class="mt-1.5 text-xs text-red-600"
            >
              {{ emailError }}
            </p>
          </div>

          <button
            type="submit"
            :disabled="emailLoading"
            class="w-full bg-[#0b2540] hover:bg-[#0a1f36] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white text-sm font-semibold py-3.5 rounded-lg"
          >
            <span v-if="emailLoading">
              Sending...
            </span>

            <span v-else>
              Continue
            </span>
          </button>
        </form>
      </div>
    </template>

    <!-- ================= OTP ================= -->

    <template v-else-if="signupStep === 'otp'">
      <div>
        

        <h2
          class="mt-5 text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900"
        >
          Check your inbox
        </h2>
<span
          class="mt-4 inline-block bg-emerald-50 text-emerald-600 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-md"
        >
          VERIFY EMAIL
        </span>
        <p class="mt-3 text-sm text-slate-500">
          Enter the 6-character verification code sent to
          <span class="font-semibold text-slate-700">
            {{ signupEmail }}
          </span>
        </p>

        <form
          class="mt-7 space-y-4"
          @submit.prevent="handleVerifyOtp"
        >
          <div>
            <label
              class="block text-sm font-semibold text-slate-800 mb-1.5"
            >
              Verification code
            </label>

            <input
              v-model="otp"
              type="text"
              maxlength="6"
              inputmode="numeric"
              autocomplete="one-time-code"
              placeholder="Enter code"
              class="w-full px-4 py-3.5 rounded-lg border border-slate-300 text-center text-lg tracking-[0.45em] font-bold text-slate-900 placeholder-slate-400 placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition"
            />
          </div>

          <p
            v-if="otpError"
            class="text-sm text-red-600"
          >
            {{ otpError }}
          </p>

          <button
            type="submit"
            :disabled="otpLoading"
            class="w-full bg-[#0b2540] hover:bg-[#0a1f36] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white text-sm font-semibold py-3.5 rounded-lg"
          >
            {{ otpLoading ? 'Verifying...' : 'Verify email' }}
          </button>
        </form>

        <div class="flex items-center justify-between mt-5 text-sm">
          <button
            v-if="resendCountdown === 0"
            type="button"
            class="font-semibold text-teal-600 hover:text-teal-700"
            @click="handleResendCode"
          >
            Resend code
          </button>

          <span
            v-else
            class="text-slate-400"
          >
            Resend code in {{ resendCountdown }}s
          </span>

          <button
            type="button"
            class="font-semibold text-slate-500 hover:text-slate-700"
            @click="changeEmail"
          >
            Change email
          </button>
        </div>
      </div>
    </template>

    <!-- ================= DETAILS ================= -->

    <template v-else-if="signupStep === 'details'">
      <div>
        <span
          class="inline-block bg-sky-50 text-blue-600 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-md"
        >
          ALMOST THERE
        </span>

        <h2
          class="mt-5 text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900"
        >
          Create your account
        </h2>

        <p class="mt-3 text-sm text-slate-500">
          Add your details and create a secure password.
        </p>

        <form
          class="mt-7 space-y-4"
          @submit.prevent="handleRegister"
        >
          <!-- Names -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                class="block text-sm font-semibold text-slate-800 mb-1.5"
              >
                First name
              </label>

              <input
                v-model="firstname"
                type="text"
                placeholder="Jane"
                autocomplete="given-name"
                class="w-full px-4 py-3.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition"
              />

              <p
                v-if="detailsErrors.firstname"
                class="mt-1 text-xs text-red-600"
              >
                {{ detailsErrors.firstname }}
              </p>
            </div>

            <div>
              <label
                class="block text-sm font-semibold text-slate-800 mb-1.5"
              >
                Last name
              </label>

              <input
                v-model="lastname"
                type="text"
                placeholder="Doe"
                autocomplete="family-name"
                class="w-full px-4 py-3.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition"
              />

              <p
                v-if="detailsErrors.lastname"
                class="mt-1 text-xs text-red-600"
              >
                {{ detailsErrors.lastname }}
              </p>
            </div>
          </div>

          <!-- Email -->
          <div>
            <label
              class="block text-sm font-semibold text-slate-800 mb-1.5"
            >
              Email address
            </label>

            <div class="relative">
              <input
                :value="signupEmail"
                type="email"
                readonly
                class="w-full px-4 py-3.5 pr-24 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-500 focus:outline-none"
              />

              <span
                class="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-emerald-600"
              >
                Verified
              </span>
            </div>
          </div>

          <!-- Password -->
          <div>
            <label
              class="block text-sm font-semibold text-slate-800 mb-1.5"
            >
              Password
            </label>

            <input
              v-model="password"
              type="password"
              placeholder="At least 8 characters"
              autocomplete="new-password"
              class="w-full px-4 py-3.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition"
            />

            <p
              v-if="detailsErrors.password"
              class="mt-1 text-xs text-red-600"
            >
              {{ detailsErrors.password }}
            </p>
          </div>

          <!-- Confirm password -->
          <div>
            <label
              class="block text-sm font-semibold text-slate-800 mb-1.5"
            >
              Confirm password
            </label>

            <input
              v-model="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              autocomplete="new-password"
              class="w-full px-4 py-3.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition"
            />

            <p
              v-if="detailsErrors.confirmPassword"
              class="mt-1 text-xs text-red-600"
            >
              {{ detailsErrors.confirmPassword }}
            </p>
          </div>

          <p
            v-if="detailsError"
            class="text-sm text-red-600"
          >
            {{ detailsError }}
          </p>

          <button
            type="submit"
            :disabled="detailsLoading"
            class="w-full bg-[#0b2540] hover:bg-[#0a1f36] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white text-sm font-semibold py-3.5 rounded-lg"
          >
            {{ detailsLoading ? 'Creating account...' : 'Create Free Account' }}
          </button>
        </form>
      </div>
    </template>

    <!-- ================= SUCCESS ================= -->

    <template v-else-if="signupStep === 'success'">
      <div class="text-center py-8">
        <div
          class="mx-auto w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center"
        >
          <span class="text-2xl text-emerald-600 font-bold">
            ✓
          </span>
        </div>

        <h2
          class="mt-6 text-3xl font-extrabold text-slate-900"
        >
          Account created!
        </h2>

        <p class="mt-3 text-sm text-slate-500 leading-relaxed">
          Your SellDesk account is ready. You can now sign in and
          start creating invoices.
        </p>

        <button
          type="button"
          class="w-full mt-7 bg-[#0b2540] hover:bg-[#0a1f36] transition-colors text-white text-sm font-semibold py-3.5 rounded-lg"
          @click="goToSignin"
        >
          Sign in
        </button>
      </div>
    </template>

    <!-- Sign in -->
    <div
      v-if="signupStep !== 'success'"
      class="mt-6 text-center"
    >
      <p class="text-sm text-slate-500">
        Already have an account?

        <button
          type="button"
          class="font-semibold text-teal-600 hover:text-teal-700"
          @click="goToSignin"
        >
          Sign in
        </button>
      </p>

      <p class="mt-4 text-xs text-slate-400 leading-relaxed">
        By continuing, you agree to SellDesk's
        <a
          href="#"
          class="font-semibold text-slate-600 hover:text-slate-800"
        >
          Terms of Service
        </a>
        and
        <a
          href="#"
          class="font-semibold text-slate-600 hover:text-slate-800"
        >
          Privacy Policy
        </a>.
      </p>
    </div>

  </div>
</template>

