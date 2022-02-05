import PageHome from '@/pages/Home.vue'
import PageThreadShow from '@/pages/ThreadShow'
import PageNotFound from '@/pages/NotFound'
import Forum from '@/pages/Forum'
import Category from '@/pages/Category'
import Profile from '@/pages/Profile'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/me',
    name: 'Profile',
    component: Profile,
    meta: {
      toTop: true,
      smoothScroll: true
    }
  },
  {
    path: '/me/edit',
    name: 'ProfileEdit',
    component: Profile,
    props: { edit: true }
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound,
    props: true
  }
]

// eslint-disable-next-line new-cap
export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    const scroll = {}
    if (to.meta.toTop) {
      scroll.top = 0
    }
    if (to.meta.smoothScroll) {
      scroll.behavior = 'smooth'
    }
    return scroll
  }
})
