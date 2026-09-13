<script setup>
import { onMounted, ref } from 'vue'
import chatIcon from '../Media/about-icons/chat.svg'
import supplyChainIcon from '../Media/about-icons/supply-chain.svg'
import workforceIcon from '../Media/about-icons/workforce.svg'
import longTermContractIcon from '../Media/about-icons/longterm-contract.svg'

const whyChooseUs = [
  {
    title: 'Clear communication',
    description:
      'We explain pricing, contract terms, and next steps in plain language so business owners can make confident decisions.',
    icon: chatIcon,
  },
  {
    title: 'Flexible supply plans',
    description:
      'From fixed contracts to adaptable arrangements, our solutions are tailored around how your business actually operates.',
    icon: supplyChainIcon,
  },
  {
    title: 'Expert onboarding',
    description:
      'Our team manages the switch process efficiently to help minimise service disruption and reduce admin overhead.',
    icon: workforceIcon,
  },
  {
    title: 'Long-term partnership',
    description:
      'We aim to be a dependable energy partner for your business, helping you stay efficient and informed as your needs grow.',
    icon: longTermContractIcon,
  },
]

const stats = [
  { value: 20, suffix: '+', label: 'Years of sector experience', color: 'text-[#FD5D0B]' },
  { value: 24, suffix: '/7', label: 'Dedicated business support', color: 'text-[#199DF8]' },
  { value: 100, suffix: '%', label: 'Customer-first approach', color: 'text-[#18D14C]' }
]

const animatedValues = ref(stats.map(() => 0))

const animateCounter = (index, target, duration = 1200) => {
  const start = performance.now()

  const update = (time) => {
    const progress = Math.min((time - start) / duration, 1)
    const eased = 1 - (1 - progress) ** 3
    animatedValues.value[index] = Math.round(target * eased)

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  stats.forEach((stat, index) => animateCounter(index, stat.value))
})
</script>

<template>
  <main class="bg-gradient-to-b from-white via-[#f9fffb] to-[#DBF3E1]">
    <section class="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#FD5D0B]">
            About Us
          </p>

          <h1 class="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">
            Built for businesses that want smarter gas solutions.
          </h1>

          <p class="mt-6 text-base leading-8 text-slate-600">
            Voltx GAS helps businesses simplify energy management with transparent pricing, expert support, and tailored contracts designed around operational needs.
            We work with commercial clients to reduce cost pressure, improve supply reliability, and make the transition to a better plan easy.
          </p>
        </div>

        <div class="relative">
          <div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Business gas team discussion"
              class="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div class="absolute -bottom-5 left-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
            <p class="text-xs font-semibold uppercase tracking-[0.16em] text-[#18D14C]">Trusted Team</p>
            <p class="mt-2 text-xl font-semibold text-slate-900">Business-first support</p>
          </div>
        </div>
      </div>

      <div class="mt-16 grid gap-6 md:grid-cols-3">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm"
        >
          <p :class="stat.color" class="text-4xl font-semibold tracking-[-0.05em]">
            {{ animatedValues[index] }}{{ stat.suffix }}
          </p>
          <p class="mt-3 text-sm font-medium text-slate-800">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <section class="bg-[#edf9f0]">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#18D14C]">
            Why Choose Us
          </p>

          <h2 class="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Straightforward, honest, and business-focused.
          </h2>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <div
            v-for="item in whyChooseUs"
            :key="item.title"
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div class="mb-4 flex h-10 w-10 items-center justify-center">
              <img :src="item.icon" :alt="item.title" class="h-7 w-7 object-contain" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
