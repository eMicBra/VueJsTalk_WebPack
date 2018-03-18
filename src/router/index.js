import Vue from 'vue'
import Router from 'vue-router'
import EssentialLinks from '@/components/EssentialLinks'
import EcoSystemLinks from '@/components/EcoSystemLinks'

export const routes = [
  {
    name: 'home',
    path: '/',
    //component: EssentialLinks,
    display: 'Home'
  },
  {
    name: 'essential_links',
    path: '/essential-links',
    component: EssentialLinks,
    display: 'Essential Links'
  },
  {
    name: 'ecosystem_links',
    path: '/ecosystem-links',
    component: EcoSystemLinks,
    display: 'Vue.js Ecosystem' 
  }
]


Vue.use(Router)

export default new Router({
  routes: routes
})
