<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: 'How do I request a gas quote?',
    answer: 'You can contact our team through the enquiry form or direct call. We will review your business needs and recommend the best gas supply options.'
  },
  {
    question: 'Do you support commercial clients?',
    answer: 'Yes. We work with businesses across a range of industries and help compare pricing, contract terms, and service levels.'
  },
  {
    question: 'Can I switch suppliers easily?',
    answer: 'Yes. Our team supports the switch process and handles the transition with minimal disruption to your business operations.'
  },
  {
    question: 'What kinds of gas plans are available?',
    answer: 'We offer fixed and flexible options depending on your business profile, usage patterns, and cost priorities.'
  },
  {
    question: 'How quickly can I get started?',
    answer: 'Most enquiries are reviewed quickly, and we can guide you through the next steps after discussing your requirements and usage.'
  }
]

const openFaqIndex = ref(0)

function toggleFaq(index) {
  openFaqIndex.value = openFaqIndex.value === index ? -1 : index
}
</script>

<template>
  <main class="bg-white">
    <section class="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div class="max-w-2xl">
        <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#199DF8]">
          Help & FAQ
        </p>

        <h1 class="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">
          Everything you need to know.
        </h1>
      </div>

      <div class="mt-12 space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="faq.question"
          :class="['faq-item overflow-hidden rounded-2xl border border-slate-200 bg-slate-50', { 'is-open': openFaqIndex === index }]"
        >
          <button
            type="button"
            class="faq-trigger flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            @click="toggleFaq(index)"
          >
            <span class="text-base font-semibold text-slate-900 sm:text-lg">{{ faq.question }}</span>
            <span class="faq-icon flex h-8 w-8 items-center justify-center text-xl text-[#FD5D0B]">
              {{ openFaqIndex === index ? '−' : '+' }}
            </span>
          </button>

            <div
              class="faq-answer px-6"
              :data-open="openFaqIndex === index"
            >
              <p class="max-w-3xl py-6 text-sm leading-7 text-slate-600 sm:text-base">
                {{ faq.answer }}
              </p>
            </div>
        </div>
      </div>
    </section>
  </main>
</template>
