import Keycloak from 'keycloak-js'

type KeycloakClient = InstanceType<typeof Keycloak>

let keycloakInstance: KeycloakClient | null = null
let tokenRefreshInterval: ReturnType<typeof setInterval> | null = null

// --------------------------------------------------
// Initialize Keycloak
// --------------------------------------------------

export async function initializeKeycloak(): Promise<KeycloakClient> {
  if (keycloakInstance) {
    return keycloakInstance
  }

  console.log('🔐 Initializing Keycloak...')

  keycloakInstance = new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm: import.meta.env.VITE_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID
  })

  try {
    await keycloakInstance.init({
      checkLoginIframe: false,
      enableLogging: import.meta.env.DEV,
      useNonce: false,
      responseMode: 'query',
      pkceMethod: 'S256'
    })

    console.log('✅ Keycloak initialized')

    return keycloakInstance

  } catch (error) {
    console.error('❌ Keycloak initialization failed:', error)

    keycloakInstance = null

    throw error
  }
}

// --------------------------------------------------
// Get Keycloak instance
// --------------------------------------------------

export function getKeycloakInstance(): KeycloakClient {
  if (!keycloakInstance) {
    throw new Error(
      'Keycloak not initialized. Call initializeKeycloak first.'
    )
  }

  return keycloakInstance
}

// --------------------------------------------------
// Authentication status
// --------------------------------------------------

export function isAuthenticated(): boolean {
  return keycloakInstance?.authenticated ?? false
}

// --------------------------------------------------
// Get token
// --------------------------------------------------

export function getToken(): string | undefined {
  return keycloakInstance?.token
}

// --------------------------------------------------
// Login
// --------------------------------------------------

export async function login(email?: string): Promise<void> {
  try {
    console.log('🔐 Initializing Keycloak...')

    const kc = await initializeKeycloak()

    console.log('🔐 Starting Keycloak login...')

    await kc.login({
       redirectUri: 'https://selldesk.quidly.ng/home',
      ...(email ? { loginHint: email } : {})
    })

  } catch (error) {
    console.error('❌ Keycloak login failed:', error)

    throw error
  }
}

// --------------------------------------------------
// Get token with refresh
// --------------------------------------------------

export async function getTokenWithRefresh(): Promise<string | undefined> {
  if (!keycloakInstance) {
    return undefined
  }

  try {
    await keycloakInstance.updateToken(30)

    return keycloakInstance.token

  } catch (error) {
    console.error('❌ Token refresh failed:', error)

    await logout()

    throw error
  }
}

// --------------------------------------------------
// Logout
// --------------------------------------------------

export async function logout(): Promise<void> {
  if (!keycloakInstance) {
    return
  }

  const kc = keycloakInstance

  try {
    stopTokenRefresh()

    await kc.logout({
      redirectUri: `${window.location.origin}${import.meta.env.BASE_URL}`
    })

  } catch (error) {
    console.error('❌ Logout failed:', error)

  } finally {
    keycloakInstance = null
  }
}

// --------------------------------------------------
// Token refresh
// --------------------------------------------------

function setupTokenRefresh(kc: KeycloakClient): void {
  stopTokenRefresh()

  tokenRefreshInterval = setInterval(async () => {
    try {
      const refreshed = await kc.updateToken(30)

      if (refreshed) {
        console.log('🔄 Token refreshed')
      }

    } catch (error) {
      console.error('❌ Token refresh failed:', error)

      stopTokenRefresh()

      await logout()
    }
  }, 60000)
}

// --------------------------------------------------
// Stop token refresh
// --------------------------------------------------

function stopTokenRefresh(): void {
  if (tokenRefreshInterval) {
    clearInterval(tokenRefreshInterval)
    tokenRefreshInterval = null
  }
}

// --------------------------------------------------
// Clean Keycloak callback parameters
// --------------------------------------------------

function cleanupCallbackUrl(): void {
  const params = new URLSearchParams(window.location.search)

  const hasKeycloakParams =
    params.has('code') ||
    params.has('state') ||
    params.has('error') ||
    params.has('session_state') ||
    params.has('iss')

  if (!hasKeycloakParams) {
    return
  }

  const cleanUrl =
    `${window.location.origin}` +
    `${window.location.pathname}` +
    `${window.location.hash}`

  window.history.replaceState(
    {},
    document.title,
    cleanUrl
  )
}

// --------------------------------------------------
// User information
// --------------------------------------------------

export function getUserInfo() {
  if (!keycloakInstance?.tokenParsed) {
    return null
  }

  return keycloakInstance.tokenParsed
}