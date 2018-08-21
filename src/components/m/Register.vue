<template>
    <div class="container" :style="containerStyles">
        <img src="/static/images/top_bg.png" :style="topImgStyles">
        <div class="form_container">
            <div class="form_row">
                <div class="form_item">
                    <input type="tel" placeholder="手机号" v-model="formData.phonenum">
                </div>
            </div>
            <div class="form_row">
                <div class="form_item">
                    <input type="password" placeholder="输入密码" v-model="formData.password">
                </div>
            </div>
            <div class="form_row">
                <div class="form_item with_right_btn">
                    <input type="text" placeholder="图片验证码" v-model="formData.code">
                </div>
                <div class="right_btn" @click="getCode">
                  <img class="code_img" :src="code.verifyCodeStr">
                </div>
            </div>
            <div class="form_row">
                <div class="form_item with_right_btn">
                    <input type="text" placeholder="短信验证码" v-model="formData.smsCode">
                </div>
                <!--<div class="right_btn">-->
                    <!--<span>发送验证码</span>-->
                <!--</div>-->
                <Button class="right_btn" type="primary" :disabled="!/^1[345789]\d{9}$/.test(formData.phonenum) || !!countdown.interval" @click="getSmsCode">
                  {{(countdown.defaultTime === countdown.time) ? countdown.defaultText : countdown.time + '秒'}}
                </Button>
            </div>
            <div class="form_row agreement">
                <Checkbox v-model="formData.accept"></Checkbox><span @click="toggleCheck">我已阅读并同意<</span><a href="javascript:" @click="openAgreements">用户注册协议</a><span>></span>
            </div>
            <div class="form_row">
                <Button class="btn" :disabled="!formData.accept" :loading="isSubmitting" @click="submit">
                    <span>注册</span>
                </Button>
            </div>
            <div class="form_row">
                <div class="bottom_tips" @click="goLogin">
                    <span>已有账号，去登录</span>
                </div>
            </div>
        </div>

        <agreements-box :shown="agreementsModal.shown" width="100%" height="100%" @close="agreementsClosed" device="mobile"></agreements-box>
    </div>
</template>
<style scoped>
    .pen {
      pointer-events: none;
    }
    .container {
        background-color: #FFFFFF;
    }
    .form_container {
        padding: 20px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        min-height: 350px;
    }
    .form_row {
        padding: 15px 20px 0 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .form_item {
        width: 100%;
        height: 40px;
        border: 1px solid #d6d6d6;
        border-radius: 5px;
        background-color: #f8f8f8;
    }
    .form_item input {
        font-size: 16px;
        width: 100%;
        height: 100%;
        padding: 0 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-color: transparent;
        border: none;
    }
    .form_item.with_right_btn {
        width: calc(100% - 114px);
        display: inline-block;
    }
    .right_btn {
        display: inline-block;
        width: 104px;
        height: 40px;
        border-radius: 5px;
        overflow: hidden;
        float: right;
      text-align: center;
    }
    .right_btn img {
      max-width: 104px;
      max-height: 40px;
    }
    .right_btn span {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background: #1577BD;
        cursor: pointer;
    }
    .right_btn span:active {
        opacity: 0.7;
    }
    .agreement {
        color: #898989;
    }
    .btn {
        background-color: #1577BD;
        color: #fff;
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 6px;
        font-size: 18px;
        margin-top: 8px;
        -webkit-transition: all .3s ease-in-out;
        -moz-transition: all .3s ease-in-out;
        -ms-transition: all .3s ease-in-out;
        -o-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
    }
    .btn:active {
        opacity: 0.7;
    }
    .btn:disabled {
        color: #c5c8ce;
        background-color: #f7f7f7;
        border-color: #dcdee2;
    }
    .bottom_tips {
        text-align: right;
        font-size: 14px;
        color: #898989;
    }
</style>
<script>
  // import { StorageUtil, KitUtil } from '../utils/index'
  // import * as types from '../../store/mutation-types'
  export default {
    name: 'Register',
    data () {
      return {
        isSubmitting: false,
        agreementsModal: {
          shown: false,
          contentShown: false
        },
        formData: {
          phonenum: '',
          password: '',
          code: '',
          smsCode: '',
          accept: true
        },
        code: {
          verifyCodeStr: '',
          codeString: ''
        },
        codeBtnTs: 0,
        countdown: {
          interval: 0,
          defaultText: '发送验证码',
          defaultTime: 60,
          time: 60
        }
      }
    },
    computed: {
      agreementsStyles () {
        let bodyStyles = this.$store.state.bodyStyles
        return {
          width: bodyStyles.width + 'px',
          height: bodyStyles.height + 'px'
        }
      },
      containerStyles () {
        let bodyStyles = this.$store.state.bodyStyles
        return {
          width: bodyStyles.width + 'px',
          minHeight: bodyStyles.height + 'px'
        }
      },
      topImgStyles () {
        let _bodyWidth = this.$store.state.bodyStyles.width
        return {
          width: _bodyWidth + 'px',
          height: (440 * _bodyWidth / 750).toFixed(1) + 'px'
        }
      }
    },
    created () {
      this.$nextTick(async () => {
        await this.getCode()
      })
    },
    methods: {
      async getCode () {
        /***
         * 5s内禁止重复请求
         * @type {number}
         */
        let nowTs = (new Date()).getTime()
        if (nowTs - this.codeBtnTs < 5 * 1000) {
          this.$Message.error('请求图形验证码太频繁，请稍后再试')
        } else {
          this.codeBtnTs = nowTs
          await this.$getCode().then(codeData => {
            this.code = codeData
          }).catch(err => {
            this.$Message.error(err.message)
            this.code = {
              verifyCodeStr: '',
              codeString: ''
            }
          })
        }
      },
      async getSmsCode () {
        if (this.countdown.interval) {
          return
        }
        this.countdown.time -= 1
        this.countdown.interval = setInterval(() => {
          if (this.countdown.time <= 1) {
            this.countdown.time = this.countdown.defaultTime
            clearInterval(this.countdown.interval)
            this.countdown.interval = 0
          } else {
            this.countdown.time -= 1
          }
        }, 1000)
        await this.$getSmsCode({
          phone: this.formData.phonenum,
          verifyCode: this.formData.code,
          codeString: this.code.codeString
        }).then(responseData => {
          this.$Message.success(responseData.message || '短信验证码已经发送')
        }).catch(err => {
          this.$Message.error(err.message)
          this.countdown.time = this.countdown.defaultTime
          clearInterval(this.countdown.interval)
          this.countdown.interval = 0
        })
      },
      verifyPicCode () {
        return (this.formData.code % 2 === 0)
      },
      beforeSubmit () {
        if (!this.formData.phonenum) {
          this.$Message.error('手机号不能为空')
          return false
        } else if (!/^1[3456789]\d{9}$/.test(this.formData.phonenum)) {
          this.$Message.error('手机号不合法')
          return false
        } else if (!this.formData.password) {
          this.$Message.error('密码不能为空')
          return false
        } else if (!this.formData.code) {
          this.$Message.error('图片验证码不能为空')
          return false
        } else if (!this.verifyPicCode()) {
          this.$Message.error('图片验证码不正确')
          return false
        } else if (!this.formData.smsCode) {
          this.$Message.error('短信验证码不能为空')
          return false
        }
        return true
      },
      async submit () {
        if (this.isSubmitting) return
        this.isSubmitting = true
        let beforeRegisterFlag = this.beforeSubmit()
        if (beforeRegisterFlag) {
          await this.$register({
            phone: this.formData.phonenum,
            smsCode: this.formData.smsCode,
            pwd: this.formData.password
          }).then(responseData => {
            this.isSubmitting = false
            this.$Message.success('注册成功')
          }).catch(err => {
            this.isSubmitting = false
            this.$Message.error(err.message)
          })
          // setTimeout(() => {
          //   this.$router.replace('/login')
          // }, 800)
        } else {
          this.isSubmitting = false
        }
      },
      toggleCheck () {
        this.formData.accept = !this.formData.accept
      },
      goLogin () {
        this.$router.replace({
          name: 'Login'
        })
      },
      closeAgreements () {
        this.agreementsModal.contentShown = false
      },
      agreementsClosed () {
        this.agreementsModal.shown = false
      },
      openAgreements () {
        this.agreementsModal.shown = true
      }
    },
    watch: {
      'agreementsModal.shown' (val) {
        if (val) {
          setTimeout(() => {
            this.agreementsModal.contentShown = true
          }, 300)
        }
      },
      'agreementsModal.contentShown' (val) {
        if (!val) {
          setTimeout(() => {
            this.agreementsModal.shown = false
          }, 300)
        }
      }
    },
    components: {
      AgreementsBox: () => import('../AgreementsBox.vue')
    }
  }
</script>
