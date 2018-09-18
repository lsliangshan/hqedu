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
    allCategory: [{
      text: 'Group 1',
      sublist: [{
        text: 'item 1',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 2',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 3',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 4',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 5',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 6',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 7',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 8',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 9',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 10',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 11',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 12',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 13',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 14',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 15',
        href: allPath[Math.floor(Math.random() * 2)]
      }]
    }, {
      text: 'Group 2',
      sublist: [{
        text: 'item 1',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 2',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 3',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 4',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 5',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 6',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 7',
        href: allPath[Math.floor(Math.random() * 2)]
      }]
    }, {
      text: 'Group 3',
      sublist: [{
        text: 'item 1',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 2',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 3',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 4',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 5',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 6',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 7',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 8',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 9',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 10',
        href: allPath[Math.floor(Math.random() * 2)]
      }]
    }, {
      text: 'Group 4',
      sublist: [{
        text: 'item 1',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 2',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 3',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 4',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 5',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 6',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 7',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 8',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 9',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 10',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 11',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 12',
        href: allPath[Math.floor(Math.random() * 2)]
      }]
    }, {
      text: 'Group 5',
      sublist: [{
        text: 'item 1',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 2',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 3',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 4',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 5',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 6',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 7',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 8',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 9',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 10',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 11',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 12',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 13',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 14',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 15',
        href: allPath[Math.floor(Math.random() * 2)]
      }]
    }, {
      text: 'Group 6',
      sublist: [{
        text: 'item 1',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 2',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 3',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 4',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 5',
        href: allPath[Math.floor(Math.random() * 2)]
      }]
    }, {
      text: 'Group 7',
      sublist: [{
        text: 'item 1',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 2',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 3',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 4',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 5',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 6',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 7',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 8',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 9',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 10',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 11',
        href: allPath[Math.floor(Math.random() * 2)]
      }]
    }, {
      text: 'Group 8',
      sublist: [{
        text: 'item 1',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 2',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 3',
        href: allPath[Math.floor(Math.random() * 2)]
      }, {
        text: 'item 4',
        href: allPath[Math.floor(Math.random() * 2)]
      }]
    }],
    allCmsRoute: {
      yijixiaofanggongchengshibaokaotiaojian: {
        sortId: '5785',
        title: '2018年全国消防工程师报名条件审核系统',
        enTitle: 'CHARTERED PUBLIC ACCOUNTANT NATIONAL UNIFIED EXAMINATION NETWORK CONDITION AUDITING SYSTEM',
        queryTitle: '一级消防工程师报考条件自助查询',
        formItems: [{
            label: '学历',
            placeholder: '请选择您的学历',
            name: 'txtxueli',
            type: 'select',
            defaultValue: '',
            data: [{
              text: '大专',
              value: '大专'
            }, {
              text: '本科',
              value: '本科'
            }, {
              text: '研究生',
              value: '研究生'
            }, {
              text: '博士',
              value: '博士'
            }, {
              text: '其他',
              value: '其他'
            }]
          }, {
            label: '专业',
            placeholder: '请选择您的专业',
            type: 'select',
            name: 'txtzhuanye',
            defaultValue: '',
            data: [{
              text: '消防相关专业',
              value: '消防相关专业'
            }, {
              text: '非消防相关专业',
              value: '非消防相关专业'
            }]
          }
          // ,
          // {
          //   label: '姓名',
          //   placeholder: '请输入您的姓名',
          //   type: 'input',
          //   name: 'txtusername',
          //   defaultValue: '',
          //   data: []
          // }
        ],
        btnText: '立即获取查询结果',
        tips: {
          title: '友情提示',
          content: [{
            text: '注册时请务必输入正确的姓名和手机号码，以免影响考后成绩查询'
          }, {
            text: '2018年一级消防工程师考试安排：报名时间：8月11日-9月11日,考试时间：11月10日-11月11日'
          }, {
            text: '预约或者咨询请致电 : 4006783456'
          }]
        },
        redirectUrl: 'http://www.hqwx.com/web_news/html/2018-8/15337113781417.html' // 表单提交后 重定向的地址
      },
      yijixiaofanghuoqubaokaoshijian: {
        sortId: '5785',
        title: '消防工程师全国统一考试报名时间查询系统',
        enTitle: 'FIRE ENGINEER NATIONAL UNIFIED EXAMINATION REGISTRATION TIME INQUIRY SYSTEM',
        queryTitle: '一级消防工程师报名时间自助查询',
        formItems: [{
            label: '省份',
            placeholder: '请选择您所在的省份',
            name: 'txtsheng',
            type: 'select',
            defaultValue: '',
            data: [{
              text: '安徽',
              value: '安徽'
            }, {
              text: '北京',
              value: '北京'
            }, {
              text: '重庆',
              value: '重庆'
            }, {
              text: '福建',
              value: '福建'
            }, {
              text: '甘肃',
              value: '甘肃'
            }, {
              text: '广东',
              value: '广东'
            }, {
              text: '广西',
              value: '广西'
            }, {
              text: '贵州',
              value: '贵州'
            }, {
              text: '海南',
              value: '海南'
            }, {
              text: '河北',
              value: '河北'
            }, {
              text: '黑龙江',
              value: '黑龙江'
            }, {
              text: '河南',
              value: '河南'
            }, {
              text: '湖北',
              value: '湖北'
            }, {
              text: '湖南',
              value: '湖南'
            }, {
              text: '江苏',
              value: '江苏'
            }, {
              text: '江西',
              value: '江西'
            }, {
              text: '吉林',
              value: '吉林'
            }, {
              text: '辽宁',
              value: '辽宁'
            }, {
              text: '内蒙古',
              value: '内蒙古'
            }, {
              text: '宁夏',
              value: '宁夏'
            }, {
              text: '青海',
              value: '青海'
            }, {
              text: '山东',
              value: '山东'
            }, {
              text: '上海',
              value: '上海'
            }, {
              text: '山西',
              value: '山西'
            }, {
              text: '陕西',
              value: '陕西'
            }, {
              text: '四川',
              value: '四川'
            }, {
              text: '天津',
              value: '天津'
            }, {
              text: '新疆',
              value: '新疆'
            }, {
              text: '西藏',
              value: '西藏'
            }, {
              text: '云南',
              value: '云南'
            }, {
              text: '浙江',
              value: '浙江'
            }]
          }
          // ,
          // {
          //   label: '姓名',
          //   placeholder: '请输入您的姓名',
          //   type: 'input',
          //   name: 'txtusername',
          //   defaultValue: '',
          //   data: []
          // }
        ],
        btnText: '获取报考时间',
        tips: {
          title: '友情提示',
          content: [{
            text: '注册时请务必输入正确的姓名和手机号码，以免影响考后成绩查询'
          }, {
            text: '一级消防工程师考试安排：报名时间8-9月份，考试时间11月10日-11日'
          }, {
            text: '报考时间及报名须知通过短信发送或电话审核形式，请注意查看手机'
          }]
        },
        redirectUrl: 'http://www.hqwx.com/web_news/html/2018-1/15160687163579.html' // 表单提交后 重定向的地址
      },
      zjgcs: {
        sortId: '567',
        title: '造价工程师全国统一考试报名时间查询系统',
        enTitle: 'COST ENGINEER NATIONAL UNIFIED EXAMINATION REGISTRATION TIME INQUIRY SYSTEM',
        queryTitle: '造价工程师报名时间自助查询',
        formItems: [{
            label: '省份',
            placeholder: '请选择您所在的省份',
            name: 'txtsheng',
            type: 'select',
            defaultValue: '',
            data: [{
              text: '安徽',
              value: '安徽'
            }, {
              text: '北京',
              value: '北京'
            }, {
              text: '重庆',
              value: '重庆'
            }, {
              text: '福建',
              value: '福建'
            }, {
              text: '甘肃',
              value: '甘肃'
            }, {
              text: '广东',
              value: '广东'
            }, {
              text: '广西',
              value: '广西'
            }, {
              text: '贵州',
              value: '贵州'
            }, {
              text: '海南',
              value: '海南'
            }, {
              text: '河北',
              value: '河北'
            }, {
              text: '黑龙江',
              value: '黑龙江'
            }, {
              text: '河南',
              value: '河南'
            }, {
              text: '湖北',
              value: '湖北'
            }, {
              text: '湖南',
              value: '湖南'
            }, {
              text: '江苏',
              value: '江苏'
            }, {
              text: '江西',
              value: '江西'
            }, {
              text: '吉林',
              value: '吉林'
            }, {
              text: '辽宁',
              value: '辽宁'
            }, {
              text: '内蒙古',
              value: '内蒙古'
            }, {
              text: '宁夏',
              value: '宁夏'
            }, {
              text: '青海',
              value: '青海'
            }, {
              text: '山东',
              value: '山东'
            }, {
              text: '上海',
              value: '上海'
            }, {
              text: '山西',
              value: '山西'
            }, {
              text: '陕西',
              value: '陕西'
            }, {
              text: '四川',
              value: '四川'
            }, {
              text: '天津',
              value: '天津'
            }, {
              text: '新疆',
              value: '新疆'
            }, {
              text: '西藏',
              value: '西藏'
            }, {
              text: '云南',
              value: '云南'
            }, {
              text: '浙江',
              value: '浙江'
            }]
          }
          // ,
          // {
          //   label: '姓名',
          //   placeholder: '请输入您的姓名',
          //   type: 'input',
          //   name: 'txtusername',
          //   defaultValue: '',
          //   data: []
          // }
        ],
        btnText: '获取报考时间',
        tips: {
          title: '友情提示',
          content: [{
            text: '注册时请务必输入正确的姓名和手机号码，以免影响考后成绩查询'
          }, {
            text: '报考时间及报名须知通过短信发送或电话审核形式，请注意查看手机'
          }]
        },
        redirectUrl: 'http://www.hqwx.com/leraning/class_zaojia' // 表单提交后 重定向的地址
      },
      jjs: {
        sortId: '12555',
        title: '经济师全国统一考试报名时间查询系统',
        enTitle: 'ECOMNOMIST NATIONAL UNIFIED EXAMINATION REGISTRATION TIME INQUIRY SYSTEM',
        queryTitle: '经济师报名时间自助查询',
        formItems: [{
            label: '省份',
            placeholder: '请选择您所在的省份',
            name: 'txtsheng',
            type: 'select',
            defaultValue: '',
            data: [{
              text: '安徽',
              value: '安徽'
            }, {
              text: '北京',
              value: '北京'
            }, {
              text: '重庆',
              value: '重庆'
            }, {
              text: '福建',
              value: '福建'
            }, {
              text: '甘肃',
              value: '甘肃'
            }, {
              text: '广东',
              value: '广东'
            }, {
              text: '广西',
              value: '广西'
            }, {
              text: '贵州',
              value: '贵州'
            }, {
              text: '海南',
              value: '海南'
            }, {
              text: '河北',
              value: '河北'
            }, {
              text: '黑龙江',
              value: '黑龙江'
            }, {
              text: '河南',
              value: '河南'
            }, {
              text: '湖北',
              value: '湖北'
            }, {
              text: '湖南',
              value: '湖南'
            }, {
              text: '江苏',
              value: '江苏'
            }, {
              text: '江西',
              value: '江西'
            }, {
              text: '吉林',
              value: '吉林'
            }, {
              text: '辽宁',
              value: '辽宁'
            }, {
              text: '内蒙古',
              value: '内蒙古'
            }, {
              text: '宁夏',
              value: '宁夏'
            }, {
              text: '青海',
              value: '青海'
            }, {
              text: '山东',
              value: '山东'
            }, {
              text: '上海',
              value: '上海'
            }, {
              text: '山西',
              value: '山西'
            }, {
              text: '陕西',
              value: '陕西'
            }, {
              text: '四川',
              value: '四川'
            }, {
              text: '天津',
              value: '天津'
            }, {
              text: '新疆',
              value: '新疆'
            }, {
              text: '西藏',
              value: '西藏'
            }, {
              text: '云南',
              value: '云南'
            }, {
              text: '浙江',
              value: '浙江'
            }]
          }
          // ,
          // {
          //   label: '姓名',
          //   placeholder: '请输入您的姓名',
          //   type: 'input',
          //   name: 'txtusername',
          //   defaultValue: '',
          //   data: []
          // }
        ],
        btnText: '获取报考时间',
        tips: {
          title: '友情提示',
          content: [{
            text: '注册时请务必输入正确的姓名和手机号码，以免影响考后成绩查询'
          }, {
            text: '报考时间及报名须知通过短信发送或电话审核形式，请注意查看手机'
          }]
        },
        redirectUrl: 'http://www.hqwx.com/leraning/class_cjjjs' // 表单提交后 重定向的地址
      },
      zjgcstj: {
        sortId: '567',
        title: '造价工程师报名条件审核系统',
        enTitle: 'COST ENGINEER REGISTRATION CONDITION AUDIT SYSTEM',
        queryTitle: '造价工程师报考条件自助查询',
        formItems: [{
          label: '学历',
          placeholder: '请选择您的学历',
          name: 'txtxueli',
          type: 'select',
          defaultValue: '',
          data: [{
            text: '大专',
            value: '大专'
          }, {
            text: '本科',
            value: '本科'
          }, {
            text: '研究生',
            value: '研究生'
          }, {
            text: '博士',
            value: '博士'
          }, {
            text: '其他',
            value: '其他'
          }]
        }, {
          label: '专业',
          placeholder: '请选择您的专业',
          type: 'select',
          name: 'txtzhuanye',
          defaultValue: '',
          data: [{
            text: '造价相关专业',
            value: '造价相关专业'
          }, {
            text: '非造价相关专业',
            value: '非造价相关专业'
          }]
        }],
        btnText: '立即获取查询结果',
        tips: {
          title: '友情提示',
          content: [{
            text: '注册时请务必输入正确的姓名和手机号码，以免影响考后成绩查询'
          }, {
            text: '预约或者咨询请致电 : 4006783456'
          }]
        },
        redirectUrl: 'http://www.hqwx.com/leraning/class_zaojia' // 表单提交后 重定向的地址
      },
      jjstj: {
        sortId: '12555',
        title: '经济师报名条件审核系统',
        enTitle: 'ECONOMIST REGISTRATION CONDITION REVIEW SYSTEM',
        queryTitle: '经济师报名时间自助查询',
        formItems: [{
          label: '学历',
          placeholder: '请选择您的学历',
          name: 'txtxueli',
          type: 'select',
          defaultValue: '',
          data: [{
            text: '大专',
            value: '大专'
          }, {
            text: '本科',
            value: '本科'
          }, {
            text: '研究生',
            value: '研究生'
          }, {
            text: '博士',
            value: '博士'
          }, {
            text: '其他',
            value: '其他'
          }]
        }, {
          label: '专业',
          placeholder: '请选择您的专业',
          type: 'select',
          name: 'txtzhuanye',
          defaultValue: '',
          data: [{
            text: '经济师相关专业',
            value: '经济师相关专业'
          }, {
            text: '非经济师相关专业',
            value: '非经济师相关专业'
          }]
        }],
        btnText: '立即获取查询结果',
        tips: {
          title: '友情提示',
          content: [{
            text: '注册时请务必输入正确的姓名和手机号码，以免影响考后成绩查询'
          }, {
            text: '预约或者咨询请致电 : 4006783456'
          }]
        },
        redirectUrl: 'http://www.hqwx.com/leraning/class_cjjjs' // 表单提交后 重定向的地址
      }
    },
    allPageRoute: {
      jjsreg: {
        pageTitle: '环球网校经济师考试辅导培训课程_经济师免费试听_经济师辅导班',
        header: {
          logo: '/static/images/pages/jjsreg.png',
          tip1: '住建部、财政部、卫生部、人事部合作单位',
          tip2: '全国统一客服热线（免长途费）\n 400 - 678 - 3456'
        },
        banner: [{
          img: '/static/images/pages/banner01.png',
          href: '/register'
        }, {
          img: '/static/images/pages/banner02.jpg',
          href: '/register'
        }, {
          img: '/static/images/pages/banner03.png',
          href: '/register'
        }],
        live: {
          bg: '/static/images/pages/bg3.gif',
          class: [{
            startTime: 1536114600000,
            endTime: 1536118200000,
            category: '经济基础',
            theme: '#ef5e32',
            teacher: {
              headIcon: '/static/images/pages/t1.png',
              profile: '刘艳霞老师，13年经济师考试辅导经验，经济师辅导知名讲师。',
              name: '刘艳霞'
            },
            course: {
              name: '会计报表',
              subject: '会计报表'
            },
            btn: '进入课堂',
            href: '/register',
            tag: false
          }, {
            startTime: 1536130800000,
            endTime: 1536134400000,
            category: '人力直播',
            theme: '#ef5e32',
            teacher: {
              headIcon: '/static/images/pages/t2.png',
              profile: '赵照，主讲经济师中级人力资源管理专业实务等其他人力资源管理辅导课程。长期从事人...',
              name: '赵照'
            },
            course: {
              name: '组织变革与发展',
              subject: '组织变革与发展'
            },
            btn: '立即预约',
            href: '/register',
            tag: false
          }, {
            startTime: 1536231600000,
            endTime: 1536238800000,
            category: '经济基础',
            theme: '#3ac648',
            teacher: {
              headIcon: '/static/images/pages/t1.png',
              profile: '刘艳霞老师，13年经济师考试辅导经验，经济师辅导知名讲师。',
              name: '刘艳霞'
            },
            course: {
              name: '经济基础考点强化公开课',
              subject: '2018中级经济基础-考点强化公开课'
            },
            btn: '立即预约',
            href: '/register',
            tag: {
              text: '峰会',
              bgColor: 'rgba(72, 196, 78, 1)'
              // bgColor: 'rgba(235, 96, 57, 1)'
            }
          }]
        },
        consultation: {
          img: '/static/images/pages/area.gif',
          title: '住建部、财政部、卫生部、人事部培训合作单位',
          subtitle: '您对经济师的所有疑问，网课一一为您解答！'
        },
        courseSignup: {
          title: '免费领课',
          step1: {
            title: '① 选择免费开通的课程:',
            list: [{
              label: '经济师',
              sublist: [{
                label: '初级经济师',
                value: '5609'
              }, {
                label: '中级经济师',
                value: '5607'
              }, {
                label: '高级经济师',
                value: '7349'
              }]
            }]
            // list: [{
            //   label: '初级经济师',
            //   sublist: [{
            //     label: '初级人力',
            //     value: '2962'
            //   }, {
            //     label: '初级金融',
            //     value: '2961'
            //   }, {
            //     label: '初级工商',
            //     value: '2963'
            //   }]
            // }, {
            //   label: '中级经济师',
            //   sublist: [{
            //     label: '中级工商',
            //     value: '2968'
            //   }, {
            //     label: '中级金融',
            //     value: '2967'
            //   }, {
            //     label: '中级财税',
            //     value: '2966'
            //   }, {
            //     label: '中级房地产',
            //     value: '2965'
            //   }, {
            //     label: '中级建筑',
            //     value: '2964'
            //   }, {
            //     label: '中级人力',
            //     value: '2969'
            //   }, {
            //     label: '中级商业',
            //     value: '2972'
            //   }, {
            //     label: '中级农业',
            //     value: '2971'
            //   }, {
            //     label: '中级公路',
            //     value: '2970'
            //   }]
            // }]
          },
          step2: {
            title: '② 设定您的学习账号:'
          },
          tips: {
            text: '赠送2018年经济师课程包含：经济基础知识（初、中级）、专业知识与实务（初、中级）两门课程的备考指导班及精讲班（部分）及各科目的答疑服务。课程涵盖备考攻略；教材结构、考试分值及考试特点全面剖析；学习方法及复习计划指导等几方面的内容，现实免费开放。名额有限，报完即止！'
          },
          btn: '立即领取',
          href: '/register'
        },
        redirectUrl: 'http://www.hqwx.com/leraning/class_cjjjs/'
      },
      yijixiaofangreg: {
        pageTitle: '环球网校消防工程师考试辅导培训课程_消防工程师免费试听_消防工程师辅导班',
        header: {
          logo: '/static/images/pages/yjlogo.png',
          tip1: '住建部、财政部、卫生部、人事部合作单位',
          tip2: '全国统一客服热线（免长途费）\n 400 - 678 - 3456'
        },
        banner: [{
          img: '/static/images/pages/1920-360-baoming.jpg',
          href: '/register'
        }, {
          img: '/static/images/pages/1920-360-dalibao.jpg',
          href: '/register'
        }],
        live: {
          bg: '/static/images/pages/yijixiaofangreg_bg.gif'
        },
        redirectUrl: 'http://www.hqwx.com/leraning/class_cjjjs/'
      },
      zaojiareg: {
        pageTitle: '环球网校造价工程师考试辅导培训课程_造价工程师免费试听_造价工程师辅导班',
        header: {
          logo: '/static/images/pages/zaojia_yjlogo.png',
          tip1: '住建部、财政部、卫生部、人事部合作单位',
          tip2: '全国统一客服热线（免长途费）\n 400 - 678 - 3456'
        },
        banner: [{
          img: '/static/images/pages/1920-360-60day.jpg',
          href: '/register'
        }, {
          img: '/static/images/pages/1920-360-60day2.jpg',
          href: '/register'
        }, {
          img: '/static/images/pages/1920-360-kuaitiku.jpg',
          href: '/register'
        }],
        live: {
          bg: '/static/images/pages/zaojia_bg.gif',
          class: [{
            startTime: 1536201000000,
            endTime: 1536204600000,
            category: '造价案例',
            theme: '#ef5e32',
            teacher: {
              headIcon: 'http://edu24ol.bs2cdn.100.com/王宏伟3-1530069176100.jpg',
              profile: '紧扣大纲要求，对历年真题分析透彻，考点把握准确。',
              name: '王宏伟'
            },
            course: {
              name: '案例1v1直播回放',
              subject: '专题六：运用价值工程方法进行方案的评价选优（...'
            },
            btn: '进入课堂',
            href: '/register',
            tag: false
          }, {
            startTime: 1536217200000,
            endTime: 1536220800000,
            category: '造价案例',
            theme: '#ef5e32',
            teacher: {
              headIcon: 'http://edu24ol.bs2cdn.100.com/王宏伟3-1530069176100.jpg',
              profile: '紧扣大纲要求，对历年真题分析透彻，考点把握准确。',
              name: '王宏伟'
            },
            course: {
              name: '案例1v1直播回放',
              subject: '专题六：运用价值工程方法进行方案的评价选优（...'
            },
            btn: '立即预约',
            href: '/register',
            tag: false
          }, {
            startTime: 1536231600000,
            endTime: 1536238800000,
            category: '造价案例',
            theme: '#3ac648',
            teacher: {
              headIcon: 'http://edu24ol.bs2cdn.100.com/王宏伟3-1530069176100.jpg',
              profile: '紧扣大纲要求，对历年真题分析透彻，考点把握准确。',
              name: '王宏伟'
            },
            course: {
              name: '案例1v1直播回放',
              subject: '专题七：运用施工网络计划进行方案优化'
            },
            btn: '立即预约',
            href: '/register',
            tag: false
          }],
          consultation: false,
          redirectUrl: 'http://www.hqwx.com/leraning/class_cjjjs/'
        }
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
    loginInfo: {},
    loaders: {}, // 页面中所有loader对象
    contentRouterViewLoader: 'content-router-view-loader',
    homeRouterViewLoader: 'home-router-view-loader',
    previewLoader: 'preview-loader',
    loadingType: 'ball-triangle-path', // loading样式
    allPlugins: [],
    allRoles: [{
      value: 1,
      name: '超级管理员'
    }, {
      value: 2,
      name: '管理员'
    }, {
      value: 3,
      name: '开发者'
    }, {
      value: 4,
      name: '普通用户'
    }],
    needlessLogin: ['Login', 'Register', 'Forget', 'ActivityPreview', 'ArticleList', 'ArticleView'] // 不需要登录的页面
  }
})

export default store

global.store = store