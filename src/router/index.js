import Vue from 'vue'
import Router from 'vue-router'
import { BrowserUtil } from '../utils/index'
let _isPc = BrowserUtil.isPc()
let _path = '/hqwx'

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
  path: _path + '/login',
  name: 'Login',
  meta: {
    title: '登录'
  },
  components: {
    HomeRouter: () => import(`../components/${_isPc ? 'pc' : 'm'}/Login.vue`)
  }
}

export const routerRegister = {
  path: _path + '/register',
  name: 'Register',
  meta: {
    title: '注册'
  },
  components: {
    HomeRouter: () => import(`../components/${_isPc ? 'pc' : 'm'}/Register.vue`)
  }
}

export const routerAgreements = {
  path: _path + '/agreements',
  name: 'Agreements',
  meta: {
    title: '注册协议'
  },
  components: {
    HomeRouter: () => import(`../components/Agreements.vue`)
  }
}

export const contentRouter = {
  path: '/',
  redirect: _path + '/register',
  components: {
    HomeRouter: () => import(`../components/${_isPc ? 'pc' : 'm'}/index.vue`)
  },
  children: [
    {
      path: _path,
      redirect: _path + '/register',
      meta: {
        title: 'HQEDU'
      }
    }
  ]
}

export const page404 = {
  path: '/*',
  redirect: _path + '/register',
  // name: 'NotFound',
  // meta: {
  //   title: '页面丢了'
  // },
  components: {
    HomeRouter: () => import('../components/404.vue')
  }
}

export default new Router({
  mode: 'history',
  routes: [
    routerLogin,
    routerRegister,
    routerAgreements,
    contentRouter,
    page404
  ]
})
