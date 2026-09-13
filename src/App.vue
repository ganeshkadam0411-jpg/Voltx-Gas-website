<script setup>
import { nextTick, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

const updateRevealSections = () => {
  const revealThreshold = window.innerHeight * 0.82

  document.querySelectorAll('.reveal-section').forEach((section) => {
    const rect = section.getBoundingClientRect()

    if (rect.top < revealThreshold) {
      section.classList.add('reveal-visible')
    }
  })
}

const applyRevealAnimations = () => {
  const sections = [...document.querySelectorAll('section')]

  sections.forEach((section) => {
    if (section.dataset.revealApplied === 'true') return

    section.classList.add('reveal-section', 'reveal-up')
    section.dataset.revealApplied = 'true'
  })

  updateRevealSections()
}

onMounted(() => {
  nextTick(() => {
    applyRevealAnimations()
    window.addEventListener('scroll', updateRevealSections, { passive: true })
    window.addEventListener('resize', updateRevealSections)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateRevealSections)
  window.removeEventListener('resize', updateRevealSections)
})

watch(
  () => route.path,
  async () => {
    await nextTick()
    applyRevealAnimations()
  }
)
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-white">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
