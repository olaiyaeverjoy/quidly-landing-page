```vue
<script setup>
import { RouterView } from 'vue-router';

const whatsappNumber = '+2348132822731';
</script>

<template>
  <RouterView />

  <!-- WhatsApp Support Button -->
  <a
    :href="`https://wa.me/${whatsappNumber}?text=Hello%20Quidly%2C%20I%20want%20to%20know%20more%20about%20your%20services.`"
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
</template>
```
