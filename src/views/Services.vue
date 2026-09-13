<script setup>
const services = [
  {
    title: 'Tailored Gas Contracts',
    description: 'Custom supply arrangements designed around your business size, usage profile, and cost goals.',
    badge: 'Gas Supply',
    accent: 'bg-[#FD5D0B]',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400'
  },
  {
    title: 'Metering Services',
    description: 'Accurate monitoring and reporting to help you understand consumption, forecast demand, and reduce waste.',
    badge: 'Metering',
    accent: 'bg-[#199DF8]',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1400'
  },
  {
    title: 'Business Support',
    description: 'Dedicated guidance to manage renewals, billing questions, and ongoing service improvements.',
    badge: 'Support',
    accent: 'bg-[#18D14C]',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1400'
  },
  {
    title: 'Switching Assistance',
    description: 'A streamlined transition approach that keeps your business informed and supported from enquiry to activation.',
    badge: 'Switching',
    accent: 'bg-[#F59E0B]',
    image: 'https://images.pexels.com/photos/886465/pexels-photo-886465.jpeg?auto=compress&cs=tinysrgb&w=1400'
  }
]
</script>

<template>
  <main class="bg-white">
    <section class="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#18D14C]">
          Our Services
        </p>

        <h1 class="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">
          Smart services for your gas requirements.
        </h1>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <article v-for="service in services" :key="service.title" class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div class="relative h-56 overflow-hidden">
            <img
              :src="service.image"
              :alt="service.title"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
          </div>

          <div class="p-6">
            <span :class="service.accent" class="inline-flex rounded-full px-3 py-1.5 text-xs font-semibold text-white">
              {{ service.badge }}
            </span>

            <h3 class="mt-5 text-xl font-semibold text-slate-900">{{ service.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600">{{ service.description }}</p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
