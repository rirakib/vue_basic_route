import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import PageNotFound from './components/PageNotFound'
Vue.use(VueRouter)
const routes = [
  {
    path:'/',
    component: Home
  },
  {
    path:'/about',
    component: About
  },
  {
    path:'/contact',
    component: Contact
  },
  {
    path:'/user/:id',
    component: User
  },
  {
    path:'*',
    component: PageNotFound
  }
]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
