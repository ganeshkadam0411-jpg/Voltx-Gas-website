<script setup>
import logoUrl from '../Media/voltx-logo.png'
import facebookIcon from '../Media/facebook-app-symbol.svg'
import instagramIcon from '../Media/instagram.svg'
import linkedinIcon from '../Media/linkedin-logo.svg'
import twitterIcon from '../Media/twitter.svg'

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
</script>

<template>
  <footer class="bg-[#eafbf0]">
    <div class="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="flex items-center">
            <router-link to="/" aria-label="Go to homepage">
              <img :src="logoUrl" alt="Voltex logo" class="brand-logo footer-brand-logo" />
            </router-link>
          </div>

          <p class="mt-2 text-sm leading-6 text-slate-500">
            Simple, Affordable Gas You Can Depend On
          </p>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-slate-900">Quick Links</h3>
          <div class="mt-4 space-y-2 text-sm text-slate-600">
            <router-link to="/about" class="block hover:text-[#FD5D0B]">About Us</router-link>
            <router-link to="/services" class="block hover:text-[#FD5D0B]">Gas Services</router-link>
            <router-link to="/help-faq" class="block hover:text-[#FD5D0B]">Help Center</router-link>
            <router-link to="/partners" class="block hover:text-[#FD5D0B]">Partners</router-link>
            <router-link to="/contact" class="block hover:text-[#FD5D0B]">Contact Us</router-link>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-slate-900">Legal</h3>
          <div class="mt-4 space-y-2 text-sm text-slate-600">
            <router-link to="/privacy" class="block hover:text-[#FD5D0B]">Privacy Policy</router-link>
            <router-link to="/terms" class="block hover:text-[#FD5D0B]">Terms</router-link>
            <router-link to="/modern-slavery" class="block hover:text-[#FD5D0B]">Modern Slavery</router-link>
            <router-link to="/cookies" class="block hover:text-[#FD5D0B]">Cookies Policy</router-link>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-slate-900">Contact Us</h3>
          <div class="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <p>Luminous House, 300 South Row, Milton Keynes MK9 2FR</p>
            <p>+44 1908 772312</p>
            <p>support@voltxpower.co.uk</p>
          </div>

          <div class="mt-5">
            <p class="text-sm font-semibold text-slate-900">Follow us</p>
            <div class="mt-3 flex flex-wrap gap-2.5">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Visit Voltx Power on ${link.name}`"
                class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-green-200 bg-white text-slate-700 transition hover:border-[#FD5D0B] hover:text-[#FD5D0B]"
              >
                <img :src="link.img" :alt="link.name" class="h-4 w-4 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 border-t border-green-200 pt-5 text-center">
        <p class="text-sm text-slate-500">© Copyright 2026 All Rights Reserved Voltx Power Ltd.</p>
      </div>
    </div>
  </footer>
</template>
