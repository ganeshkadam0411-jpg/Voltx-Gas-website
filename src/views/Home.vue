<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const heroImages = [
  'https://images.pexels.com/photos/322777/pexels-photo-322777.jpeg?auto=compress&cs=tinysrgb&w=1800',
  'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1800',
  'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1800'
]

const activeImage = ref(0)
let imageTimer

onMounted(() => {
  imageTimer = setInterval(() => {
    activeImage.value = (activeImage.value + 1) % heroImages.length
  }, 5000)
})

onUnmounted(() => {
  clearInterval(imageTimer)
})

const benefits = [
  {
    title: 'Fast Support',
    text: 'Dedicated team for quick response and expert guidance.',
    color: 'bg-orange-100 text-[#FD5D0B]'
  },
  {
    title: 'Competitive Tariffs',
    text: 'Smart, cost-effective plans designed for business usage.',
    color: 'bg-blue-100 text-[#199DF8]'
  },
  {
    title: 'Trusted Service',
    text: 'Reliable supply and transparent support from day one.',
    color: 'bg-green-100 text-[#18D14C]'
  }
]

const quickPoints = [
  'Flexible commercial gas contracts',
  'Transparent pricing with no hidden surprises',
  'Help with switching and smooth onboarding'
]
</script>

<template>
  <main class="min-h-screen bg-white">
    <section class="hero-section relative overflow-hidden">
      <div class="hero-slides absolute inset-0">
        <div
          v-for="(image, index) in heroImages"
          :key="image"
          class="hero-background absolute inset-0"
          :class="{ 'hero-background-active': activeImage === index }"
        >
          <img :src="image" alt="Voltex gas supply" class="h-full w-full object-cover" />
        </div>
      </div>

      <div class="absolute inset-0 bg-slate-950/38"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-950/50"></div>

      <div class="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div class="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div class="max-w-3xl">
            <div class="mb-5 flex items-center gap-3">
              <span class="h-[2px] w-10 bg-[#FD5D0B]"></span>
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">Voltx Power</p>
            </div>

            <h1 class="section-title text-[42px] font-medium leading-[1.04] tracking-[-0.05em] text-white sm:text-5xl lg:text-[62px]">
              Reliable Business
              <span class="block font-semibold text-[#FD5D0B]">Gas Supply</span>
            </h1>

            <p class="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Simple, affordable gas solutions built for growing businesses.
            </p>

            <div class="mt-8 flex flex-wrap gap-4">
              <router-link
                to="/contact"
                class="inline-flex items-center rounded-full bg-[#FD5D0B] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(253,93,11,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#e95006]"
              >
                Get a Gas Quote
                <span class="ml-2 text-lg">→</span>
              </router-link>

              <router-link
                to="/services"
                class="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                Explore Services
              </router-link>
            </div>

            <div class="mt-10 flex flex-wrap gap-6 text-white/80">
              <div>
                <div class="text-2xl font-bold text-white">18–30%</div>
                <div class="text-xs uppercase tracking-[0.18em] text-white/70">Savings</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-white">24/7</div>
                <div class="text-xs uppercase tracking-[0.18em] text-white/70">Support</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-white">500+</div>
                <div class="text-xs uppercase tracking-[0.18em] text-white/70">Businesses</div>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="rounded-[30px] border border-white/10 bg-white/7 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm">
              <div class="rounded-[24px] bg-slate-950/25 p-5">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-xs uppercase tracking-[0.2em] text-white/65">Business snapshot</p>
                    <h3 class="mt-2 text-2xl font-semibold text-white">Lower energy cost</h3>
                  </div>
                  <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FD5D0B] text-lg text-white">⚡</div>
                </div>

                <div class="mt-7 space-y-4">
                  <div class="rounded-2xl bg-white/7 p-4">
                    <div class="flex items-center justify-between text-sm text-white/75">
                      <span>Current charges</span>
                      <span>£1,280</span>
                    </div>
                    <div class="mt-2 h-2.5 rounded-full bg-white/10">
                      <div class="h-full w-[72%] rounded-full bg-[#FD5D0B]"></div>
                    </div>
                  </div>

                  <div class="rounded-2xl bg-white/7 p-4">
                    <div class="flex items-center justify-between text-sm text-white/75">
                      <span>Projected savings</span>
                      <span class="font-semibold text-[#18D14C]">+24%</span>
                    </div>
                    <div class="mt-2 h-2.5 rounded-full bg-white/10">
                      <div class="h-full w-[58%] rounded-full bg-[#18D14C]"></div>
                    </div>
                  </div>
                </div>

                <div class="mt-7 rounded-2xl bg-white p-4 text-slate-800">
                  <p class="text-xs uppercase tracking-[0.18em] text-slate-500">Why choose us</p>
                  <ul class="mt-3 space-y-2 text-sm">
                    <li v-for="point in quickPoints" :key="point" class="flex items-start gap-2">
                      <span class="mt-1 text-[#18D14C]">✓</span>
                      <span>{{ point }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-7 left-5 z-20 flex gap-2 sm:left-8 lg:left-10">
        <button
          v-for="(_, index) in heroImages"
          :key="index"
          type="button"
          @click="activeImage = index"
          class="h-1.5 rounded-full transition-all duration-500"
          :class="activeImage === index ? 'w-9 bg-[#FD5D0B]' : 'w-2 bg-white/60'"
        ></button>
      </div>
    </section>

    <section class="relative bg-white">
      <div class="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div class="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#FD5D0B]">Intro Paragraph</p>
            <h2 class="section-title mt-3 max-w-xl text-3xl font-medium leading-tight tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Switch to Voltx Power – Smarter Business Gas Starts Here
            </h2>
          </div>

          <div class="soft-card hover-lift rounded-[28px] p-6 sm:p-8">
            <p class="text-sm leading-7 text-slate-600 sm:text-base">
              Cut your business gas bills with our custom gas plans, expert support, and fast switching — no hidden charges.
            </p>

            <router-link to="/contact" class="mt-6 inline-flex items-center text-sm font-semibold text-[#FD5D0B] transition hover:gap-3">
              Start Saving
              <span class="ml-2">→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f6faf8]">
      <div class="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#18D14C]">Benefits Highlights</p>
            <h2 class="section-title mt-3 text-3xl font-medium tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Fast Support • Competitive Tariffs • Trusted Business Service
            </h2>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <div class="soft-card hover-lift rounded-[26px] p-6">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-lg text-[#FD5D0B]">✓</div>
            <h3 class="mt-5 text-xl font-semibold text-slate-900">Fast Support</h3>
            <p class="mt-3 text-sm leading-6 text-slate-600">24/7 customer support</p>
          </div>

          <div class="soft-card hover-lift rounded-[26px] p-6">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-lg text-[#199DF8]">£</div>
            <h3 class="mt-5 text-xl font-semibold text-slate-900">Competitive Tariffs</h3>
            <p class="mt-3 text-sm leading-6 text-slate-600">Lower operating costs</p>
          </div>

          <div class="soft-card hover-lift rounded-[26px] p-6">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-lg text-[#18D14C]">★</div>
            <h3 class="mt-5 text-xl font-semibold text-slate-900">Trusted Business Service</h3>
            <p class="mt-3 text-sm leading-6 text-slate-600">Trusted by businesses nationwide</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#199DF8]">Gas Services Overview</p>
            <h2 class="section-title mt-3 text-3xl font-medium tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Tailored Gas Contracts • Metering Services
            </h2>
          </div>

          <router-link to="/services" class="text-sm font-semibold text-slate-700 hover:text-[#FD5D0B]">
            Learn More →
          </router-link>
        </div>

        <div class="grid gap-6 lg:grid-cols-2">
          <article class="group overflow-hidden rounded-[30px] bg-white shadow-sm hover-lift border border-slate-100">
            <div class="relative h-72 overflow-hidden">
              <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Business gas plans" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              <div class="absolute bottom-5 left-5 rounded-full bg-[#FD5D0B] px-3 py-1.5 text-xs font-semibold text-white">Gas Supply</div>
            </div>

            <div class="p-7">
              <h3 class="text-2xl font-semibold text-slate-900">Tailored Gas Contracts</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">Fixed/flex gas plans</p>
            </div>
          </article>

          <article class="group overflow-hidden rounded-[30px] bg-white shadow-sm hover-lift border border-slate-100">
            <div class="relative h-72 overflow-hidden">
              <img src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Metering services" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              <div class="absolute bottom-5 left-5 rounded-full bg-[#199DF8] px-3 py-1.5 text-xs font-semibold text-white">Metering</div>
            </div>

            <div class="p-7">
              <h3 class="text-2xl font-semibold text-slate-900">Metering Services</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">Smart metering</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#f6faf8]">
      <div class="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#18D14C]">3-Step Process</p>
            <h2 class="section-title mt-3 text-3xl font-medium leading-tight tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Get started in three simple steps
            </h2>
          </div>

          <div class="grid gap-5 md:grid-cols-3">
            <div class="soft-card rounded-[26px] p-6">
              <span class="text-sm font-bold text-[#FD5D0B]">01</span>
              <h3 class="mt-4 text-lg font-semibold text-slate-900">Request a Quote</h3>
              <p class="mt-3 text-sm leading-6 text-slate-600">You focus on business, we manage the energy.</p>
              <router-link to="/contact" class="mt-5 inline-flex text-sm font-semibold text-[#FD5D0B]">
                Get Started →
              </router-link>
            </div>

            <div class="soft-card rounded-[26px] p-6">
              <span class="text-sm font-bold text-[#199DF8]">02</span>
              <h3 class="mt-4 text-lg font-semibold text-slate-900">Choose Your Gas Plan</h3>
              <p class="mt-3 text-sm leading-6 text-slate-600">Seamless onboarding and dedicated account manager.</p>
            </div>

            <div class="soft-card rounded-[26px] p-6">
              <span class="text-sm font-bold text-[#18D14C]">03</span>
              <h3 class="mt-4 text-lg font-semibold text-slate-900">We Handle the Switch</h3>
              <p class="mt-3 text-sm leading-6 text-slate-600">Our team manages the transition so your business stays supported.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-950">
      <div class="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div class="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#18D14C]">Testimonials</p>
            <p class="mt-3 text-2xl font-medium leading-tight tracking-[-0.02em] text-white sm:text-3xl">
              “Voltx cut our gas costs by 30% — seamless service!”
            </p>
          </div>

          <div class="overflow-hidden rounded-[26px] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Business clients" class="h-64 w-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section class="px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
      <div class="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#FD5D0B] shadow-[0_18px_40px_rgba(253,93,11,0.25)]">
        <div class="grid items-center gap-8 px-7 py-10 sm:px-10 lg:grid-cols-[1fr_auto] lg:px-14 lg:py-12">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Contact Teaser</p>
            <h2 class="mt-3 text-3xl font-medium tracking-[-0.025em] text-white sm:text-4xl">
              Powering Businesses with Affordable Gas
            </h2>
            <p class="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Ready to make the switch? Talk to our gas experts today for custom plans that save more.
            </p>
          </div>

          <router-link to="/contact" class="inline-flex w-fit rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#FD5D0B] transition duration-300 hover:-translate-y-1">
            Contact Us
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>
