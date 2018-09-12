import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Vuex from './views/Vuex.vue'
import Resume from './views/Resume.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/products', name: 'products', component: Products },
    { path: '/vuex', name: 'vuex', component: Vuex },
    { path: '/resume', name: 'resume', component: Resume },
    { path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import('./views/About.vue')
    },
    { path: '/**', component: NotFound }
  ]
})
