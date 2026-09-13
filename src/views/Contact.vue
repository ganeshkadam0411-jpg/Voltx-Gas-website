<script setup>
import { reactive, ref } from 'vue'
import facebookIcon from '../Media/facebook-app-symbol.svg'
import instagramIcon from '../Media/instagram.svg'
import linkedinIcon from '../Media/linkedin-logo.svg'
import twitterIcon from '../Media/twitter.svg'

const formState = reactive({
  name: '',
  email: '',
  telephone: '',
  message: '',
  energyType: 'Green Energy',
  consumptionKnown: 'Yes',
  consumption: '',
  aq: '',
  mprn: '',
  address: '',
})

const isSubmitting = ref(false)
const feedback = ref('')
const feedbackType = ref('')

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/people/Voltx-Power/pfbid02bdLPJuV9K3kBRYWQwWYtQUzZzQWkh53srM1NEARCVmCMWuPrgepqRYMw56PkaLCzl/',
    img: facebookIcon,
  },
  {
    name: 'X',
    href: 'https://x.com/voltxpowerltd',
    img: twitterIcon,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/voltxpoweruk/',
    img: instagramIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/checkpoint/challengesV2/AQG_cJJ4dAj8oQAAAaCZZaFCua72gRXpVAVSknf1dFRAj-KkJ1tMwPJTnYgxZ77kwYp9nP1KeWyWitTFEKrGJFSrRaEy67XueQ?ut=3JJ1X5Sruk2ss1',
    img: linkedinIcon,
  },
]

const submitForm = async () => {
  isSubmitting.value = true
  feedback.value = ''
  feedbackType.value = ''

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    })

    const payload = await response.json()

    if (!response.ok) {
      throw new Error(payload.message || 'Unable to send your enquiry right now.')
    }

    feedback.value = payload.message
    feedbackType.value = 'success'

    Object.keys(formState).forEach((key) => {
      formState[key] = key === 'energyType' ? 'Green Energy' : key === 'consumptionKnown' ? 'Yes' : ''
    })
  } catch (error) {
    feedback.value = error.message
    feedbackType.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <main class="bg-white">
    <section class="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#FD5D0B]">
            Contact Us
          </p>

          <h1 class="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">
            Talk to our gas specialists
          </h1>

          <p class="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Tell us about your business gas requirements and our team will help you find the right supply solution, pricing, and support.
          </p>

          <div class="mt-8 space-y-5 text-sm text-slate-700">
            <div>
              <p class="font-semibold text-slate-900">Address</p>
              <p class="mt-1">Luminous House, 300 South Row, Milton Keynes MK9 2FR</p>
            </div>

            <div>
              <p class="font-semibold text-slate-900">Phone</p>
              <p class="mt-1">+44 1908 772312</p>
            </div>

            <div>
              <p class="font-semibold text-slate-900">Email</p>
              <p class="mt-1">support@voltxpower.co.uk</p>
            </div>
          </div>

          <div class="mt-8">
            <p class="font-semibold text-slate-900">Follow us</p>
            <div class="mt-4 flex flex-wrap gap-3">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Visit Voltx Power on ${link.name}`"
                class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#FD5D0B]"
              >
                <img :src="link.img" :alt="link.name" class="h-5 w-5 object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div class="rounded-3xl border border-slate-200 bg-slate-50/90 p-6 shadow-sm sm:p-8">
          <form class="space-y-5" @submit.prevent="submitForm">
            <div class="space-y-2">
              <label for="name" class="block text-sm font-medium text-slate-800">
                Name <span class="text-[#e53935]*">*</span>
              </label>
              <input
                id="name"
                v-model="formState.name"
                name="name"
                type="text"
                placeholder="Name"
                required
                class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#FD5D0B] focus:ring-2 focus:ring-[#FD5D0B]/20"
              />
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-slate-800">
                  Email Address <span class="text-[#e53935">*</span>
                </label>
                <input
                  id="email"
                  v-model="formState.email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#FD5D0B] focus:ring-2 focus:ring-[#FD5D0B]/20"
                />
              </div>

              <div class="space-y-2">
                <label for="telephone" class="block text-sm font-medium text-slate-800">
                  Telephone No. <span class="text-[#e53935">*</span>
                </label>
                <div class="relative">
                  <span class="pointer-events-none absolute left-3 top-1/2 flex -translate-y-1/2 items-center gap-2 text-sm text-slate-600">
                    <span class="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[#e5f1ff] text-[10px] font-bold text-[#0f478f]">🇬🇧</span>
                  </span>
                  <input
                    id="telephone"
                    v-model="formState.telephone"
                    name="telephone"
                    type="tel"
                    placeholder="Telephone No."
                    required
                    class="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm text-slate-800 outline-none transition focus:border-[#FD5D0B] focus:ring-2 focus:ring-[#FD5D0B]/20"
                  />
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <label for="message" class="block text-sm font-medium text-slate-800">
                Message
              </label>
              <textarea
                id="message"
                v-model="formState.message"
                name="message"
                rows="4"
                placeholder="Message"
                class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#FD5D0B] focus:ring-2 focus:ring-[#FD5D0B]/20"
              ></textarea>
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-800">
                Energy Type <span class="text-[#e53935">*</span>
              </label>
              <div class="flex items-center gap-6 pt-1 text-sm text-slate-700">
                <label class="inline-flex items-center gap-2">
                  <input v-model="formState.energyType" type="radio" value="Green Energy" name="energyType" class="h-4 w-4 accent-[#FD5D0B]" />
                  <span>Green Energy</span>
                </label>
                <label class="inline-flex items-center gap-2">
                  <input v-model="formState.energyType" type="radio" value="Brown Energy" name="energyType" class="h-4 w-4 accent-[#FD5D0B]" />
                  <span>Brown Energy</span>
                </label>
                <label class="inline-flex items-center gap-2">
                  <input v-model="formState.energyType" type="radio" value="Both" name="energyType" class="h-4 w-4 accent-[#FD5D0B]" />
                  <span>Both</span>
                </label>
              </div>
            </div>

            <div class="space-y-2">
              <label for="consumption-known" class="block text-sm font-medium text-slate-800">
                Do you know your consumption? <span class="text-[#e53935">*</span>
              </label>
              <select
                id="consumption-known"
                v-model="formState.consumptionKnown"
                name="consumption-known"
                class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#FD5D0B] focus:ring-2 focus:ring-[#FD5D0B]/20"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div class="space-y-2">
                <label for="consumption" class="block text-sm font-medium text-slate-800">
                  Consumption <span class="text-[#e53935">*</span>
                </label>
                <input
                  id="consumption"
                  v-model="formState.consumption"
                  name="consumption"
                  type="text"
                  placeholder="Consumption Figures"
                  class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#FD5D0B] focus:ring-2 focus:ring-[#FD5D0B]/20"
                />
              </div>

              <div class="space-y-2">
                <label for="aq" class="block text-sm font-medium text-slate-800">
                  AQ <span class="text-[#e53935">*</span>
                </label>
                <input
                  id="aq"
                  v-model="formState.aq"
                  name="aq"
                  type="text"
                  placeholder="AQ"
                  class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#FD5D0B] focus:ring-2 focus:ring-[#FD5D0B]/20"
                />
              </div>
            </div>

            <div class="space-y-2">
              <label for="mprn" class="block text-sm font-medium text-slate-800">
                MPRN Number <span class="text-[#e53935">*</span>
              </label>
              <input
                id="mprn"
                v-model="formState.mprn"
                name="mprn"
                type="text"
                placeholder="MPRN Number"
                class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#FD5D0B] focus:ring-2 focus:ring-[#FD5D0B]/20"
              />
            </div>

            <div class="space-y-2">
              <label for="address" class="block text-sm font-medium text-slate-800">
                Supply Site Address <span class="text-[#e53935">*</span>
              </label>
              <input
                id="address"
                v-model="formState.address"
                name="address"
                type="text"
                placeholder="Supply Site Address"
                class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#FD5D0B] focus:ring-2 focus:ring-[#FD5D0B]/20"
              />
            </div>

            <div v-if="feedback" :class="['rounded-xl border px-4 py-3 text-sm', feedbackType === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-red-200 bg-red-50 text-red-700']">
              {{ feedback }}
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="inline-flex w-full items-center justify-center rounded-full bg-[#FD5D0B] px-6 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-[0_12px_30px_rgba(253,93,11,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e95006] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {{ isSubmitting ? 'Sending...' : 'Submit Now' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
