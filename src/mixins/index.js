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
        jsonp('http://www.hqwx.com/landing.asp?' + RouterUtil.formatUrlParams(args), null, (err, data) => {
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
            if (String(responseData.data.status) !== '200') {
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
              await this.$$setCookies({
                passport: responseData.data.data.passport,
                token: responseData.data.data.token
              })
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
