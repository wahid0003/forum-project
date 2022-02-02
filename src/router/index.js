import PageHome from '@/components/PageHome.vue'
import PageThreadShow from '@/components/PageThreadShow'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true
  }
]

// eslint-disable-next-line new-cap
export default createRouter({
  history: createWebHistory(),
  routes
})
