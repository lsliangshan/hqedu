/***
 **                                                          _ooOoo_
 **                                                         o8888888o
 **                                                         88" . "88
 **                                                         (| -_- |)
 **                                                          O\ = /O
 **                                                      ____/`---'\____
 **                                                    .   ' \\| |// `.
 **                                                     / \\||| : |||// \
 **                                                   / _||||| -:- |||||- \
 **                                                     | | \\\ - /// | |
 **                                                   | \_| ''\---/'' | |
 **                                                    \ .-\__ `-` ___/-. /
 **                                                 ___`. .' /--.--\ `. . __
 **                                              ."" '< `.___\_<|>_/___.' >'"".
 **                                             | | : `- \`.;`\ _ /`;.`/ - ` : | |
 **                                               \ \ `-. \_ __\ /__ _/ .-` / /
 **                                       ======`-.____`-.___\_____/___.-`____.-'======
 **                                                          `=---='
 **
 **                                       .............................................
 **                                              佛祖保佑             永无BUG
 **                                      佛曰:
 **                                              写字楼里写字间，写字间里程序员；
 **                                              程序人员写程序，又拿程序换酒钱。
 **                                              酒醒只在网上坐，酒醉还来网下眠；
 **                                              酒醉酒醒日复日，网上网下年复年。
 **                                              但愿老死电脑间，不愿鞠躬老板前；
 **                                              奔驰宝马贵者趣，公交自行程序员。
 **                                              别人笑我忒疯癫，我笑自己命太贱；
 **                                              不见满街漂亮妹，哪个归得程序员？
 */
/**
 * Created by liangshan on 2017/7/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

// const PROTOCOL = location.protocol
let allPath = ['/register', '/login']
const store = new Vuex.Store({
  actions: actions.actions,
  mutations: mutations.mutations,
  getters: getters.getters,
  state: {
    username: 'ls',
    author: '智愚',
    password: '123123',
    appName: 'HQEDU',
    fullAppName: 'HQEDU',
    shortAppName: 'Z',
    theme: 'dark',
    bodyStyles: {},
    localStorageKeys: {
      userInfo: 'user-info'
    },
    allCategory: [
      {
        text: 'Group 1',
        sublist: [
          {
            text: 'item 1',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 2',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 3',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 4',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 5',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 6',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 7',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 8',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 9',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 10',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 11',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 12',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 13',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 14',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 15',
            href: allPath[Math.floor(Math.random() * 2)]
          }
        ]
      },
      {
        text: 'Group 2',
        sublist: [
          {
            text: 'item 1',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 2',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 3',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 4',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 5',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 6',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 7',
            href: allPath[Math.floor(Math.random() * 2)]
          }
        ]
      },
      {
        text: 'Group 3',
        sublist: [
          {
            text: 'item 1',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 2',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 3',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 4',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 5',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 6',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 7',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 8',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 9',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 10',
            href: allPath[Math.floor(Math.random() * 2)]
          }
        ]
      },
      {
        text: 'Group 4',
        sublist: [
          {
            text: 'item 1',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 2',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 3',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 4',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 5',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 6',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 7',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 8',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 9',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 10',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 11',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 12',
            href: allPath[Math.floor(Math.random() * 2)]
          }
        ]
      },
      {
        text: 'Group 5',
        sublist: [
          {
            text: 'item 1',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 2',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 3',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 4',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 5',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 6',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 7',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 8',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 9',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 10',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 11',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 12',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 13',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 14',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 15',
            href: allPath[Math.floor(Math.random() * 2)]
          }
        ]
      },
      {
        text: 'Group 6',
        sublist: [
          {
            text: 'item 1',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 2',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 3',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 4',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 5',
            href: allPath[Math.floor(Math.random() * 2)]
          }
        ]
      },
      {
        text: 'Group 7',
        sublist: [
          {
            text: 'item 1',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 2',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 3',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 4',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 5',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 6',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 7',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 8',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 9',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 10',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 11',
            href: allPath[Math.floor(Math.random() * 2)]
          }
        ]
      },
      {
        text: 'Group 8',
        sublist: [
          {
            text: 'item 1',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 2',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 3',
            href: allPath[Math.floor(Math.random() * 2)]
          },
          {
            text: 'item 4',
            href: allPath[Math.floor(Math.random() * 2)]
          }
        ]
      }
    ],
    eventHub: new Vue(),
    events: {
      bodyClick: 'body-click',
      simulatorChanged: 'simulator-changed', // 模拟器属性变化
      activeComponentChanged: 'active-component-changed', // 激活状态的组件变化
      saveActivity: 'save-activity', // 保存活动
      saveActivityBefore: 'save-activity-before', // 开始保存活动
      saveActivityCallback: 'save-activity-callback', // 保存活动回调
      removeActivity: 'remove-activity', // 删除了一个活动
      getNewMessage: 'get-new-message', // 获取到新消息
      updatePluginFileContent: 'update-plugin-file-content', // 更新插件内容
      updatePluginList: 'update-plugin-list', // 更新我的插件列表
      updateAvatar: 'update-avatar', // 更新我的头像
      readMessage: 'read-message', // 消息置为已读
      mainContentSizeChange: 'main-content-size-change',
      frontArticleLogin: 'front-article-login',
      frontArticleRegister: 'front-article-register',
      frontArticleCloseCommentList: 'front-article-close-comment-list'
    },
    assets: {
      maleAvatar: '/static/images/avatar_male_1.jpg',
      femaleAvatar: '/static/images/avatar_female_1.jpg',
      defaultActivity127x200: '/static/images/127x200.png',
      inigLogo: '/static/images/inig.png',
      articleAlbum: 'https://static.dei2.com/live/images/article.jpeg',
      ads: {
        inig: '/static/images/ads/logo_inig_3.jpg',
        dei2: '/static/images/ads/logo_dei2_2.jpg'
      }
    },
    requestInfo: {
      // baseUrl: PROTOCOL + '//10.2.4.229:3000',
      baseUrl: 'http://192.168.0.108:8097',
      // baseUrl: 'http://10.2.4.229:8097',
      login: '/login',
      register: '/register',
      code: '/code', // 图片验证码
      smsCode: '/smscode' // 短信验证码
    },
    loginInfo: {
    },
    loaders: {}, // 页面中所有loader对象
    contentRouterViewLoader: 'content-router-view-loader',
    homeRouterViewLoader: 'home-router-view-loader',
    previewLoader: 'preview-loader',
    loadingType: 'ball-triangle-path', // loading样式
    allPlugins: [],
    allRoles: [
      {
        value: 1,
        name: '超级管理员'
      },
      {
        value: 2,
        name: '管理员'
      },
      {
        value: 3,
        name: '开发者'
      },
      {
        value: 4,
        name: '普通用户'
      }
    ],
    needlessLogin: ['Login', 'Register', 'Forget', 'ActivityPreview', 'ArticleList', 'ArticleView'] // 不需要登录的页面
  }
})

export default store

global.store = store
