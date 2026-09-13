<script setup>
import { ref } from 'vue'
import logoUrl from '../Media/voltx-logo.png'

const mobileMenuOpen = ref(false)

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Gas Supply', to: '/gas-supply' },
  { label: 'Services', to: '/services' },
  { label: 'Help & FAQ', to: '/help-faq' },
]

const closeMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="site-header w-full border-b border-[#edf2ee] bg-white/85 backdrop-blur-xl">
    <nav class="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
      <router-link to="/" class="group flex items-center" @click="closeMenu" aria-label="Go to homepage">
        <img :src="logoUrl" alt="Voltex logo" class="brand-logo" />
      </router-link>

      <div class="hidden items-center gap-7 lg:flex">
        <router-link
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          custom
          v-slot="{ navigate, isExactActive }"
        >
          <a
            :href="item.to"
            @click="navigate; closeMenu()"
            class="relative py-2 text-[14px] font-semibold transition-colors duration-200"
            :class="isExactActive ? 'text-[#FD5D0B]' : 'text-slate-700 hover:text-[#FD5D0B]'"
          >
            {{ item.label }}
            <span class="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FD5D0B] transition-all duration-200" :class="isExactActive ? 'w-full' : 'group-hover:w-full'" ></span>
          </a>
        </router-link>
      </div>

      <div class="hidden lg:block">
        <router-link
          to="/contact"
          class="inline-flex items-center gap-2 rounded-full bg-[#FD5D0B] px-6 py-3 text-[14px] font-bold text-white shadow-[0_12px_30px_rgba(253,93,11,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e95006]"
        >
          Get a Quote

          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>

      <button
        type="button"
        class="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-slate-800 transition-all hover:border-[#FD5D0B] hover:text-[#FD5D0B] lg:hidden"
        aria-label="Toggle navigation menu"
        :aria-expanded="mobileMenuOpen"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <div v-if="mobileMenuOpen" class="border-t border-slate-100 bg-white px-5 py-5 shadow-lg lg:hidden">
      <div class="mx-auto max-w-7xl space-y-1">
        <router-link
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          class="block rounded-xl px-4 py-3 text-[15px] font-semibold text-slate-700 transition-colors hover:bg-orange-50 hover:text-[#FD5D0B]"
          @click="closeMenu"
        >
          {{ item.label }}
        </router-link>

        <router-link
          to="/contact"
          class="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#FD5D0B] px-5 py-3.5 text-[15px] font-bold text-white"
          @click="closeMenu"
        >
          Get a Quote

          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </div>
  </header>
</template>
