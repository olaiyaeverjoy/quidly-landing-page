/**
 * auth.service.ts
 *
 * Handles signup (email → OTP → register) and login for the new
 * onboarding flow (AuthPage.vue).
 *
 * Reuses the shared axios instance from `@/services/api/api.service`
 * so requests get the same base URL, timeout, and interceptors as
 * the rest of the app.
 */

import { post } from '@/services/api/api.service'

// ── Types ────────────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  status: number
  message?: string
  code?: number
  data?: T
}

export interface SendOtpPayload {
  email: string
}

export interface VerifyOtpPayload {
  email: string
  otp: string
}

export interface VerifyOtpResponse extends ApiResponse {
  attempts_left?: number
}

export interface RegisterPayload {
  email: string
  firstname: string
  lastname: string
  password: string
}

export interface RegisterResponseData {
  merchantid?: string
  [key: string]: unknown
}

export interface LoginPayload {
  email: string
  password: string
  keepSignedIn?: boolean
}

export interface AuthUser {
  id: string
  email: string
  firstname?: string
  lastname?: string
  [key: string]: unknown
}

export interface LoginResponseData {
  token: string
  refreshToken?: string
  user: AuthUser
}

export interface LoginResponse
  extends ApiResponse<LoginResponseData> {}

// ── Token storage ────────────────────────────────────────────────

const ACCESS_TOKEN_KEY = 'quidly_access_token'
const REFRESH_TOKEN_KEY = 'quidly_refresh_token'

function setTokens(
  accessToken: string,
  refreshToken?: string
) {
  localStorage.setItem(
    ACCESS_TOKEN_KEY,
    accessToken
  )

  if (refreshToken) {
    localStorage.setItem(
      REFRESH_TOKEN_KEY,
      refreshToken
    )
  }
}

function clearTokens() {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
}

export function getAccessToken(): string | null {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export function getRefreshToken(): string | null {
  return localStorage.getItem(REFRESH_TOKEN_KEY)
}

export function isLoggedIn(): boolean {
  return !!getAccessToken()
}

// ── Helpers ──────────────────────────────────────────────────────

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase()
}

/**
 * Creates a safe version of a request payload for console logging.
 *
 * Sensitive fields are redacted so passwords and OTPs don't appear
 * in browser logs.
 */
function sanitizePayload(
  payload: unknown
): unknown {
  if (!payload || typeof payload !== 'object') {
    return payload
  }

  const sanitized = {
    ...(payload as Record<string, unknown>)
  }

  if ('password' in sanitized) {
    sanitized.password = '[REDACTED]'
  }

  if ('otp' in sanitized) {
    sanitized.otp = '[REDACTED]'
  }

  return sanitized
}

/**
 * Logs a request before it is sent and logs the complete response
 * or error after the request finishes.
 */
async function safeCall<T>(
  method: string,
  endpoint: string,
  payload: unknown,
  fn: () => Promise<{ data: ApiResponse<T> }>
): Promise<ApiResponse<T>> {
  const safePayload = sanitizePayload(payload)

  console.group(
    `🚀 AUTH REQUEST: ${method} ${endpoint}`
  )

  console.log('📍 Route:', endpoint)
  console.log('🔧 Method:', method)
  console.log('📦 Payload:', safePayload)

  try {
    const response = await fn()

    console.log('📥 Full Axios Response:', response)
    console.log('📊 HTTP Status:', response?.data?.status)
    console.log('📄 Response Data:', response?.data)

    console.groupEnd()

    return response.data
  } catch (error: any) {
    console.error('❌ Request Error:', error)

    console.error('📍 Route:', endpoint)
    console.error('🔧 Method:', method)
    console.error('📦 Payload:', safePayload)

    if (error?.response) {
      console.error(
        '📡 HTTP Status:',
        error.response.status
      )

      console.error(
        '📥 Error Response:',
        error.response.data
      )

      console.error(
        '📋 Error Headers:',
        error.response.headers
      )
    } else if (error?.request) {
      console.error(
        '📡 No response received from server:',
        error.request
      )
    } else {
      console.error(
        '⚠️ Error Message:',
        error?.message
      )
    }

    console.groupEnd()

    return {
      status: 0,
      message:
        error?.response?.data?.message ||
        error?.message ||
        'Service unavailable. Please try again later.'
    }
  }
}

// ── Signup flow ──────────────────────────────────────────────────

/**
 * Step 1:
 * Request an OTP to be sent to the user's email.
 */
export async function sendSignupOTP(
  email: string
): Promise<ApiResponse> {
  const payload: SendOtpPayload = {
    email: normalizeEmail(email)
  }

  return safeCall(
    'POST',
    '/auth/sendSignupOTP',
    payload,
    () =>
      post<ApiResponse>(
        '/auth/sendSignupOTP',
        payload
      )
  )
}

/**
 * Resend signup OTP.
 *
 * Uses the same endpoint as sendSignupOTP.
 */
export async function resendSignupOTP(
  email: string
): Promise<ApiResponse> {
  return sendSignupOTP(email)
}

/**
 * Step 2:
 * Verify the OTP the user received.
 */
export async function verifySignupOTP(
  email: string,
  otp: string
): Promise<VerifyOtpResponse> {
  const payload: VerifyOtpPayload = {
    email: normalizeEmail(email),
    otp: otp.trim().toUpperCase()
  }

  return safeCall(
    'POST',
    '/auth/verifySignupOTP',
    payload,
    () =>
      post<VerifyOtpResponse>(
        '/auth/verifySignupOTP',
        payload
      )
  ) as Promise<VerifyOtpResponse>
}

/**
 * Step 3:
 * Complete merchant registration after OTP verification.
 */
export async function registerMerchant(
  payload: RegisterPayload
): Promise<ApiResponse<RegisterResponseData>> {
  const requestPayload: RegisterPayload = {
    email: normalizeEmail(payload.email),
    firstname: payload.firstname.trim(),
    lastname: payload.lastname.trim(),
    password: payload.password
  }

  return safeCall(
    'POST',
    '/auth/registerMerchant',
    requestPayload,
    () =>
      post<ApiResponse<RegisterResponseData>>(
        '/auth/registerMerchant',
        requestPayload
      )
  )
}

// ── Login flow ───────────────────────────────────────────────────

/**
 * Login with email and password.
 *
 * On successful login, the returned access/refresh tokens
 * are stored locally.
 */
export async function login(
  payload: LoginPayload
): Promise<LoginResponse> {
  const requestPayload = {
    email: normalizeEmail(payload.email),
    password: payload.password
  }

  const result =
    await safeCall<LoginResponseData>(
      'POST',
      '/mdb/procedure/spEmailLogin',
      requestPayload,
      () =>
        post<LoginResponse>(
          '/mdb/procedure/spEmailLogin',
          requestPayload
        )
    )

  if (
    result.status === 1 &&
    result.data?.token
  ) {
    setTokens(
      result.data.token,
      result.data.refreshToken
    )
  }

  return result as LoginResponse
}

// ── Logout ───────────────────────────────────────────────────────

/**
 * Logs out the current user.
 *
 * `notifyServer = false` can be used when the session has already
 * expired and you only want to clear local authentication state.
 */
export async function logout(
  notifyServer = true
): Promise<void> {
  const endpoint = '/auth/logout'
  const payload = {}

  if (
    notifyServer &&
    isLoggedIn()
  ) {
    console.group(
      `🚀 AUTH REQUEST: POST ${endpoint}`
    )

    console.log('📍 Route:', endpoint)
    console.log('🔧 Method:', 'POST')
    console.log('📦 Payload:', payload)

    try {
      const response = await post(
        endpoint,
        payload
      )

      console.log(
        '📥 Full Axios Response:',
        response
      )

      console.log(
        '📊 HTTP Status:',
        response?.status
      )

      console.log(
        '📄 Response Data:',
        response?.data
      )

      console.groupEnd()
    } catch (error: any) {
      console.error(
        '❌ Logout Error:',
        error
      )

      if (error?.response) {
        console.error(
          '📡 HTTP Status:',
          error.response.status
        )

        console.error(
          '📥 Error Response:',
          error.response.data
        )

        console.error(
          '📋 Error Headers:',
          error.response.headers
        )
      } else if (error?.request) {
        console.error(
          '📡 No response received:',
          error.request
        )
      } else {
        console.error(
          '⚠️ Error Message:',
          error?.message
        )
      }

      console.groupEnd()
    }
  }

  // Always clear local tokens
  clearTokens()
}

// ── Default export ───────────────────────────────────────────────

export default {
  sendSignupOTP,
  resendSignupOTP,
  verifySignupOTP,
  registerMerchant,
  login,
  logout,
  isLoggedIn,
  getAccessToken,
  getRefreshToken
}