import Vue from 'vue'
import Router from 'vue-router'
import { BrowserUtil } from '../utils/index'
let _isPc = BrowserUtil.isPc()
let _path = ''

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

export const routerUser = {
  path: _path + '/user',
  name: 'User',
  meta: {
    title: '我的课程主页'
  },
  components: {
    HomeRouter: () => import(`../components/${_isPc ? 'pc' : 'm'}/pages/User.vue`)
  }
}

export const routerCms = [
  {
    path: _path + '/cms',
    name: 'CmsIndex',
    meta: {
    },
    components: {
      HomeRouter: () => import(`../components/${_isPc ? 'pc' : 'm'}/pages/cms/Index.vue`)
    }
  },
  {
    path: _path + '/cms/t/:queryType',
    name: 'CmsQuery',
    meta: {},
    components: {
      HomeRouter: () => import(`../components/${_isPc ? 'pc' : 'm'}/pages/cms/Query.vue`)
    }
  }
]

export const routerPage = [
  {
    path: _path + '/:pageName',
    name: 'PageIndex',
    meta: {},
    components: {
      HomeRouter: () => import(`../components/${_isPc ? 'pc' : 'm'}/pages/index/Index.vue`)
    }
  }
]

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
    routerUser,
    ...routerCms,
    ...routerPage,
    contentRouter,
    page404
  ]
})
