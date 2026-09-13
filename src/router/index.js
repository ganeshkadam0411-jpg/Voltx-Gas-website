import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import GasSupply from '../views/GasSupply.vue'
import Services from '../views/Services.vue'
import HelpFaq from '../views/HelpFaq.vue'
import Contact from '../views/Contact.vue'
import ComingSoonPage from '../views/ComingSoonPage.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/gas-supply', name: 'gas-supply', component: GasSupply },
  { path: '/services', name: 'services', component: Services },
  { path: '/help-faq', name: 'help-faq', component: HelpFaq },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/partners', name: 'partners', component: ComingSoonPage },
  { path: '/privacy', name: 'privacy', component: ComingSoonPage },
  { path: '/terms', name: 'terms', component: ComingSoonPage },
  { path: '/modern-slavery', name: 'modern-slavery', component: ComingSoonPage },
  { path: '/cookies', name: 'cookies', component: ComingSoonPage },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
