<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pageName = computed(() => {
  const name = route.name || 'Page'
  return String(name)
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
})
</script>

<template>
  <main class="bg-slate-50">
    <section class="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:px-10">
      <div class="inline-flex items-center rounded-full border border-[#FD5D0B]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FD5D0B]">
        Under Development
      </div>

      <h1 class="mt-8 text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">
        {{ pageName }}
      </h1>

      <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        This section is currently being prepared with updated details, pricing, and business information.
        Please check back soon or contact our team for the latest information.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <router-link
          to="/"
          class="inline-flex items-center rounded-full bg-[#FD5D0B] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#e95006]"
        >
          Back to Home
        </router-link>

        <router-link
          to="/contact"
          class="inline-flex items-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-[#FD5D0B] hover:text-[#FD5D0B]"
        >
          Contact Us
        </router-link>
      </div>
    </section>
  </main>
</template>
