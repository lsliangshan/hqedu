import * as types from '../store/mutation-types'
import { RouterUtil } from '../utils/index'
import jsonp from 'jsonp'
export default {
  methods: {
    isPc () {
      let sUserAgent = navigator.userAgent.toLowerCase()
      let bIsIpad = sUserAgent.match(/ipad/i)
      let bIsIphoneOs = sUserAgent.match(/iphone os/i)
      let bIsMidp = sUserAgent.match(/midp/i)
      let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i)
      let bIsUc = sUserAgent.match(/ucweb/i)
      let bIsAndroid = sUserAgent.match(/android/i)
      let bIsCE = sUserAgent.match(/windows ce/i)
      let bIsWM = sUserAgent.match(/windows mobile/i)
      return !(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)
    },
    $$getUserInfo () {
      /**
       * 从 hqwx.com 获取用户登录状态
       */
      return new Promise((resolve, reject) => {
        jsonp('http://www.hqwx.com/addcart_v2/jsapi/header_public?callback=ss', null, (err, data) => {
          if (err) {
            reject(new Error(err.message))
          } else {
            resolve(data)
          }
        })
      })
    },
    $$setCookies (args) {
      /**
       * 向 hqwx.com 写入登录cookie
       */
      return new Promise((resolve, reject) => {
        jsonp((args.url || 'http://www.hqwx.com/landing.asp') + '?' + RouterUtil.formatUrlParams(args), null, (err, data) => {
          if (err) {
            reject(new Error(err.message))
          } else {
            resolve(data)
          }
        })
      })
    },
    $$setCallbackCookies (args) {
      /**
       * http://www2.hqwxedu.com/callback.html?status=1&id=103078935&name=hq_103078935&passport=344ae9aaa602f4f5883d3661b9f71e3c18215f8ea1dc0bfacc37466ffd6b68673bc6fe06fd444d6d506d0a6f6fb72ba0536c66816796c2fd67b60e5a260d7d1fd95dec725a5130b96292d982cd9bb8b718&token=e385554891285ad00d83a660529582979b9091e2771150627de966f5b1b5c80db5d0efe673d91a954c2d705493558020a6588ee8635bcd57a902105ed38876d446e25b918dfc395fdf3b3202ef4f3cbc8416e95ba8b85d1a7aa9fe7a041975bf27091b9508391989f31bbab7b658f4e63a14d85c5dfd388548be2d0fb073ac2d95be7aa5d6d075&topOrg=14&orgId=2&faceUrl=%2Fimages%2Fno_face.gif&phone=183%2A%2A%2A%2A2722&isMobileVerified=1&sortId=0&bindWeChat=0&tokenETime=1535558399
       */
      return new Promise((resolve, reject) => {
        jsonp('http://www2.hqwxedu.com/callback.html?' + RouterUtil.formatUrlParams(args), null, (err, data) => {
          if (err) {
            reject(new Error(err.message))
          } else {
            resolve(data)
          }
        })
      })
    },
    $getCode () {
      /**
       * 获取图形验证码
       */
      return new Promise(async (resolve, reject) => {
        await this.$store.dispatch(types.AJAX, {
          url: this.$store.state.requestInfo.code,
          method: 'GET'
        }).then(responseData => {
          if (String(responseData.statusCode) === '200') {
            resolve({
              verifyCodeStr: responseData.data.verifyCodeStr,
              codeString: responseData.data.codeString
            })
          } else {
            reject(new Error('获取图片验证码失败，请点击重新获取'))
          }
        }).catch(err => {
          reject(new Error(err.message || '获取图片验证码失败，请点击重新获取'))
        })
      })
    },
    $getSmsCode (args) {
      /**
       * 获取 短信验证码
       * args:
       *  phone: PHONE,
       *  verifyCode: VERIFY_CODE,
       *  codeString: CODE_STRING
       */
      return new Promise(async (resolve, reject) => {
        await this.$store.dispatch(types.AJAX, {
          url: this.$store.state.requestInfo.smsCode,
          method: 'GET',
          data: args
        }).then(responseData => {
          if (String(responseData.statusCode) !== '200') {
            reject(new Error('获取短信验证码失败，请稍后重试'))
          } else {
            if (['200', '1'].indexOf(String(responseData.data.status)) < 0) {
              reject(new Error(responseData.data.message || '获取短信验证码失败，请稍后重试'))
            } else {
              /**
               * 获取短信验证码成功
               */
              resolve(responseData.data)
            }
          }
        }).catch(err => {
          reject(new Error(err.message || '获取短信验证码失败，请稍后重试'))
        })
      })
    },
    $register (args) {
      /**
       * 注册
       * args:
       *  phone: PHONE,
       *  smsCode: SMS_CODE,
       *  pwd: PWD
       */
      return new Promise(async (resolve, reject) => {
        await this.$store.dispatch(types.AJAX, {
          url: this.$store.state.requestInfo.register,
          method: 'GET',
          data: args
        }).then(responseData => {
          if (String(responseData.statusCode) !== '200') {
            reject(new Error('注册失败，请稍后重试'))
          } else {
            if (['213', '219'].indexOf(String(responseData.data.status)) > -1) {
              resolve(responseData.data)
            } else if (['200', '1'].indexOf(String(responseData.data.status)) < 0) {
              reject(new Error(responseData.data.message || '注册失败，请稍后重试'))
            } else {
              /**
               * 注册成功
               */
              resolve(true)
            }
          }
        }).catch(err => {
          reject(new Error(err.message || '注册失败，请稍后重试'))
        })
      })
    },
    $login (args) {
      /**
       * 登录
       * args:
       *  phone: PHONE,
       *  pwd: PWD,
       *  orgId: 2,
       *  platform: 'web',
       *  appId: 'wwwedu24ol'
       * 非必然条件
       *  verifyCode: '',
       *  codeString: ''
       */
      return new Promise(async (resolve, reject) => {
        await this.$store.dispatch(types.AJAX, {
          url: this.$store.state.requestInfo.login,
          method: 'GET',
          data: Object.assign({
            orgId: 2,
            platform: 'web',
            appId: 'wwwedu24ol'
          }, args)
        }).then(async (responseData) => {
          if (String(responseData.statusCode) !== '200') {
            reject(new Error('登录失败，请稍后重试'))
          } else {
            if (['200', '1'].indexOf(String(responseData.data.status)) > -1) {
              /**
               * 登录成功，向 hqwx.com 写入登录cookie
               */
              // await this.$$setCookies({
              //   passport: responseData.data.data.passport,
              //   token: responseData.data.data.token
              // })
              let baseCookieParams = {
                  passport: responseData.data.data.passport,
                  token: responseData.data.data.token,
                  tokenETime: responseData.data.data.tokenETime
                }
              let p1 = this.$$setCookies(Object.assign({}, baseCookieParams, {
                url: 'http://www.hqwx.com/landing.asp'
              }))
              let p2 = this.$$setCookies(Object.assign({}, baseCookieParams, {
                url: 'http://www.edu24ol.com/landing.asp'
              }))
              await Promise.all([p1, p2])
            }
            resolve(responseData.data)
          }
        }).catch(err => {
          reject(new Error(err.message || '登录失败，请稍后重试'))
        })
      })
    }
  }
}
