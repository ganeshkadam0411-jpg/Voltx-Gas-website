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

const isModernSlaveryPage = computed(() => route.name === 'modern-slavery')

const contents = [
  { title: 'Modern day slavery statement about organisation', href: '#statement' },
  { title: 'Our policies on slavery and human trafficking', href: '#policies' },
  { title: 'Recruitment', href: '#recruitment' },
  { title: 'Equal Opportunities', href: '#equal-opportunities' }
]
</script>

<template>
  <main class="bg-slate-50">
    <section
      v-if="isModernSlaveryPage"
      class="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10"
    >
      <div class="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div class="border-b border-slate-200 bg-gradient-to-r from-[#FFF6F0] via-white to-white px-6 py-8 sm:px-10 lg:px-12">
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#FD5D0B]">
            Policy
          </p>
          <h1 class="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">
            Modern Slavery Policy
          </h1>
        </div>

        <div class="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-12">
          <aside class="lg:pt-4">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Contents
              </p>

              <nav class="mt-5 space-y-3">
                <a
                  v-for="item in contents"
                  :key="item.href"
                  :href="item.href"
                  class="block rounded-xl border border-transparent px-3 py-2 text-sm text-slate-700 transition hover:border-[#FD5D0B]/30 hover:bg-white hover:text-[#FD5D0B]"
                >
                  {{ item.title }}
                </a>
              </nav>
            </div>
          </aside>

          <div class="space-y-8">
            <section id="statement" class="scroll-mt-24 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 class="text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                Modern day slavery statement about organisation
              </h2>

              <div class="mt-5 space-y-4 text-base leading-8 text-slate-700">
                <p>
                  We are committed to conducting business with integrity and to taking a zero-tolerance approach to slavery and human trafficking in all its forms.
                </p>
                <p>
                  This policy outlines our commitment to protecting people across our supply chains, recruitment processes, and workplace practices, and to ensuring that modern slavery has no place in our operations or partnerships.
                </p>
              </div>
            </section>

            <section id="policies" class="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 class="text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                Our policies on slavery and human trafficking
              </h2>

              <div class="mt-5 space-y-4 text-base leading-8 text-slate-700">
                <p>
                  We operate a robust recruitment policy, including conducting eligibility to work in the United Kingdom checks for all directly employed staff.
                </p>
                <p>
                  Agencies are required to provide assurance that pre-employment clearance has been obtained for agency staff, to safeguard against human trafficking or individuals being forced to work against their will.
                </p>
              </div>
            </section>

            <section id="recruitment" class="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 class="text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                Recruitment
              </h2>

              <div class="mt-5 space-y-4 text-base leading-8 text-slate-700">
                <p>
                  Our recruitment process is designed to prevent exploitation and promote fairness. We verify identity and work eligibility, use reputable agencies, and maintain clear standards for every employment relationship.
                </p>
                <p>
                  We expect all third-party recruitment providers to follow the same high ethical standards and to comply with all relevant employment and anti-slavery laws.
                </p>
              </div>
            </section>

            <section id="equal-opportunities" class="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 class="text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                Equal Opportunities
              </h2>

              <div class="mt-5 space-y-4 text-base leading-8 text-slate-700">
                <p>
                  We are committed to equal opportunities and to creating a workplace that is fair, respectful, and free from coercion. Every employee is expected to uphold our values and report any concern regarding unethical treatment or exploitation.
                </p>
                <p>
                  We encourage openness and transparency, and we will take appropriate action when concerns are raised or when compliance obligations are not met.
                </p>
              </div>
            </section>

            <div class="flex flex-wrap gap-4 pt-2">
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
          </div>
        </div>
      </div>
    </section>

    <section v-else class="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:px-10">
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
