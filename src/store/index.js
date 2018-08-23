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
// let allPath = ['/register', '/login']
let allPath = ['Register', 'Login']
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
    allCmsRoute: {
      yijixiaofanggongchengshibaokaotiaojian: {
        sortId: '5785',
        title: '2018年全国消防工程师报名条件审核系统',
        enTitle: 'CHARTERED PUBLIC ACCOUNTANT NATIONAL UNIFIED EXAMINATION NETWORK CONDITION AUDITING SYSTEM',
        queryTitle: '一级消防工程师报考条件自助查询',
        formItems: [
          {
            label: '学历',
            placeholder: '请选择您的学历',
            name: 'txtxueli',
            type: 'select',
            defaultValue: '',
            data: [
              {
                text: '大专',
                value: '大专'
              },
              {
                text: '本科',
                value: '本科'
              },
              {
                text: '研究生',
                value: '研究生'
              },
              {
                text: '博士',
                value: '博士'
              },
              {
                text: '其他',
                value: '其他'
              }
            ]
          },
          {
            label: '专业',
            placeholder: '请选择您的专业',
            type: 'select',
            name: 'txtzhuanye',
            defaultValue: '',
            data: [
              {
                text: '消防相关专业',
                value: '消防相关专业'
              },
              {
                text: '非消防相关专业',
                value: '非消防相关专业'
              }
            ]
          },
          {
            label: '姓名',
            placeholder: '请输入您的姓名',
            type: 'input',
            name: 'txtusername',
            defaultValue: '',
            data: []
          }
        ],
        btnText: '立即获取查询结果',
        tips: {
          title: '友情提示',
          content: [
            {
              text: '注册时请务必输入正确的姓名和手机号码，以免影响考后成绩查询'
            },
            {
              text: '2018年一级消防工程师考试安排：报名时间：8月11日-9月11日,考试时间：11月10日-11月11日'
            },
            {
              text: '预约或者咨询请致电 : 4006783456'
            }
          ]
        },
        redirectUrl: 'http://www.hqwx.com/web_news/html/2018-8/15337113781417.html' // 表单提交后 重定向的地址
      },
      yijixiaofanghuoqubaokaoshijian: {
        sortId: '5785',
        title: '消防工程师全国统一考试报名时间查询系统',
        enTitle: 'FIRE ENGINEER NATIONAL UNIFIED EXAMINATION REGISTRATION TIME INQUIRY SYSTEM',
        queryTitle: '一级消防工程师报名时间自助查询',
        formItems: [
          {
            label: '省份',
            placeholder: '请选择您所在的省份',
            name: 'txtsheng',
            type: 'select',
            defaultValue: '',
            data: [
              {
                text: '安徽',
                value: '安徽'
              },
              {
                text: '北京',
                value: '北京'
              },
              {
                text: '重庆',
                value: '重庆'
              },
              {
                text: '福建',
                value: '福建'
              },
              {
                text: '甘肃',
                value: '甘肃'
              },
              {
                text: '广东',
                value: '广东'
              },
              {
                text: '广西',
                value: '广西'
              },
              {
                text: '贵州',
                value: '贵州'
              },
              {
                text: '海南',
                value: '海南'
              },
              {
                text: '河北',
                value: '河北'
              },
              {
                text: '黑龙江',
                value: '黑龙江'
              },
              {
                text: '河南',
                value: '河南'
              },
              {
                text: '湖北',
                value: '湖北'
              },
              {
                text: '湖南',
                value: '湖南'
              },
              {
                text: '江苏',
                value: '江苏'
              },
              {
                text: '江西',
                value: '江西'
              },
              {
                text: '吉林',
                value: '吉林'
              },
              {
                text: '辽宁',
                value: '辽宁'
              },
              {
                text: '内蒙古',
                value: '内蒙古'
              },
              {
                text: '宁夏',
                value: '宁夏'
              },
              {
                text: '青海',
                value: '青海'
              },
              {
                text: '山东',
                value: '山东'
              },
              {
                text: '上海',
                value: '上海'
              },
              {
                text: '山西',
                value: '山西'
              },
              {
                text: '陕西',
                value: '陕西'
              },
              {
                text: '四川',
                value: '四川'
              },
              {
                text: '天津',
                value: '天津'
              },
              {
                text: '新疆',
                value: '新疆'
              },
              {
                text: '西藏',
                value: '西藏'
              },
              {
                text: '云南',
                value: '云南'
              },
              {
                text: '浙江',
                value: '浙江'
              }
            ]
          },
          {
            label: '姓名',
            placeholder: '请输入您的姓名',
            type: 'input',
            name: 'txtusername',
            defaultValue: '',
            data: []
          }
        ],
        btnText: '获取报考时间',
        tips: {
          title: '友情提示',
          content: [
            {
              text: '注册时请务必输入正确的姓名和手机号码，以免影响考后成绩查询'
            },
            {
              text: '一级消防工程师考试安排：报名时间8-9月份，考试时间11月10日-11日'
            },
            {
              text: '报考时间及报名须知通过短信发送或电话审核形式，请注意查看手机'
            }
          ]
        },
        redirectUrl: 'http://www.hqwx.com/web_news/html/2018-1/15160687163579.html' // 表单提交后 重定向的地址
      }
    },
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
      // baseUrl: 'http://192.168.0.108:8097',
      baseUrl: 'http://api.hqwxedu.cn/spreead',
      // baseUrl: 'http://39.104.115.219',
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
