import Vue from 'vue'
import Router from 'vue-router'
import { BrowserUtil } from '../utils/index'
let _isPc = BrowserUtil.isPc()

Vue.use(Router)

// export const routerHome = {
//   path: '/',
//   name: 'home',
//   meta: {
//     title: '后台管理'
//   },
//   components: {
//     HomeRouter: () => import('../components/Home.vue')
//   }
// }

export const routerLogin = {
  path: '/login',
  name: 'Login',
  meta: {
    title: '登录'
  },
  components: {
    HomeRouter: () => import(`../components/${_isPc ? 'pc' : 'm'}/Login.vue`)
  }
}

export const routerRegister = {
  path: '/register',
  name: 'Register',
  meta: {
    title: '注册'
  },
  components: {
    HomeRouter: () => import(`../components/${_isPc ? 'pc' : 'm'}/Register.vue`)
  }
}

export const contentRouter = {
  path: '/',
  name: 'Home',
  meta: {
    title: '后台管理系统'
  },
  components: {
    HomeRouter: () => import(`../components/${_isPc ? 'pc' : 'm'}/index.vue`)
  },
  children: [
    {
      path: '/plugin',
      redirect: '/'
    },
    {
      path: '/article',
      redirect: '/'
    }
  ]
}

export const page404 = {
  path: '/*',
  name: 'NotFound',
  meta: {
    title: '页面丢了'
  },
  components: {
    HomeRouter: () => import('../components/404.vue')
  }
}

export default new Router({
  mode: 'history',
  routes: [
    routerLogin,
    routerRegister,
    contentRouter,
    page404
  ]
})
