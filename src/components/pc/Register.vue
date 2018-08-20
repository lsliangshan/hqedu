<template>
    <div class="container" :style="containerStyles">
        <!--<headers page="register"></headers>-->
        <!--<div class="form_container">-->
            <!--<div class="form_bg">-->
                <!--<div class="service_container">-->
                    <!--<div class="service_item" v-for="(service, index) in services" :key="index">-->
                        <!--<div class="service_img_wrapper">-->
                            <!--<div class="service_img" :style="service.styles"></div>-->
                        <!--</div>-->
                        <!--<div class="service_right">-->
                            <!--<div class="service_main_title">-->
                                <!--<span>{{service.title}}</span>-->
                            <!--</div>-->
                            <!--<div class="service_sub_title">-->
                                <!--<span>{{service.subTitle}}</span>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="form_inner">-->
                    <!--<div class="form_wrapper register_login_form">-->
                        <!--<Form :model="formData" :rules="formRules" :label-width="120" ref="formRef">-->
                            <!--<FormItem label="手机号手机号" prop="phonenum">-->
                                <!--<Input v-model="formData.phonenum" placeholder="请输入您的手机号" class="custom_input" style="height: 40px;"/>-->
                            <!--</FormItem>-->
                            <!--<FormItem label="密码" prop="password">-->
                                <!--<Input type="password" v-model="formData.password" placeholder="请输入4-8位(数字,字母,下划线)"/>-->
                            <!--</FormItem>-->
                            <!--<FormItem label="图形验证码" prop="code">-->
                                <!--<Input v-model="formData.code" placeholder="图形验证码" style="width: calc(100% - 145px);"/>-->
                                <!--<div class="code_img_wrapper" @click="getCode">-->
                                  <!--<Tooltip content="点击获取图形验证码" placement="right" class="code_tooltip">-->
                                    <!--<img class="code_img" :src="code.verifyCodeStr">-->
                                  <!--</Tooltip>-->
                                <!--</div>-->
                            <!--</FormItem>-->
                            <!--<FormItem label="短信验证码" prop="smsCode">-->
                                <!--<Input v-model="formData.smsCode" placeholder="短信验证码" style="width: calc(100% - 145px);"/>-->
                                <!--<Button class="smscode_wrapper" type="primary" :disabled="!/^1[345789]\d{9}$/.test(formData.phonenum) || !!countdown.interval" @click="getSmsCode">{{(countdown.defaultTime === countdown.time) ? countdown.defaultText : countdown.time + '秒后重新获取'}}</Button>-->
                            <!--</FormItem>-->
                            <!--<FormItem>-->
                                <!--<Checkbox v-model="formData.accept"></Checkbox><span class="accept-text">我已阅读并同意《网站注册协议》</span>-->
                            <!--</FormItem>-->
                            <!--<FormItem>-->
                                <!--<Button type="primary" class="register_btn" :loading="isSubmitting" long :disabled="!formData.accept" @click="submit">立即注册</Button>-->
                            <!--</FormItem>-->
                        <!--</Form>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <!--<footers></footers>-->

        <agreements-box :shown="agreementsModal.shown" width="90%"></agreements-box>
    </div>
</template>
<style scoped>
    .container {
        background-color: #FFFFFF;
    }
    .form_container {
        padding: 20px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        min-height: 520px;
        background-color: #eff1f0;
    }
    .form_bg {
        /*background-image: url('http://www.hqwx100.cn/login/images/login-banner.jpg');*/
        /*background-repeat: no-repeat;*/
        border: 1px solid #e8e8e8;
        max-width: 1000px;
        margin: 0 auto;
        background-color: #FFFFFF;
    }
    .service_container {
        padding: 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #f0f0f0;
        background-color: #fcfcfc;
    }
    .service_item {
        display: inline-block;
        width: 25%;
        padding: 0 15px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .service_img_wrapper {
        position: relative;
        float: left;
        width: 50px;
        height: 50px;
    }
    .service_img {
        background-image: url("http://www.hqwx100.cn/register/images/sprite.png");
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }
    .service_right {
        width: calc(100% - 60px);
        height: 50px;
        float: right;
        padding-top: 2px;
        border-right: 1px solid #f0f0f0;
    }
    .service_main_title {
        width: 100%;
        font-size: 18px;
        font-weight: 400;
        height: 25px;
        line-height: 25px;
    }
    .service_sub_title {
        font-weight: 400;
        font-size: 12px;
        color: #999;
        font-family: simsun;
    }

    .form_inner {
        width: 100%;
        padding: 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        /*height: 356px;*/
        background-color: #FFFFFF;
    }
    .form_wrapper {
        width: 50%;
        min-height: 400px;
        margin: 20px auto;
    }
    .code_img_wrapper {
        width: 135px;
        height: 40px;
        float: right;
        text-align: right;
    }
    .code_img {
        max-width: 135px;
        max-height: 40px;
    }
    .smscode_wrapper {
        float: right;
        height: 40px;
        width: 133px;
        font-size: 14px;
    }
    .accept-text {
        color: #666666;
        font-size: 14px;
    }
    .register_btn {
        height: 50px;
        font-size: 16px;
    }
</style>
<script>
  // import { StorageUtil, KitUtil } from '../utils/index'
  // import * as types from '../../store/mutation-types'
  export default {
    name: 'Register',
    data () {
      const _validatePhonenum = (rule, value, callback) => {
        if (!value.match(/^1[345789]\d{9}$/)) {
          callback(new Error('手机号格式不正确'))
        }
        callback()
      }
      const _validatePassword = (rule, value, callback) => {
        /**
         * 密码只能包含 字母、数字、下划线
         * 长度为 4-8 位
         */
        if (!value.match(/^[0-9a-z_]{4,8}$/i)) {
          callback(new Error('只能包含4-8位数字，字母或者下划线！'))
        }
        callback()
      }
      return {
        requestInfo: this.$store.state.requestInfo,
        agreementsModal: {
          shown: false,
          contentShown: false
        },
        isSubmitting: false,
        errorTips: '',
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
          defaultText: '获取短信验证码',
          defaultTime: 60,
          time: 60
        },
        formRules: {
          phonenum: [
            {
              required: true,
              message: '请输入手机号',
              trigger: 'blur'
            },
            {
              validator: _validatePhonenum,
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: '密码不能为空',
              trigger: 'blur'
            },
            {
              validator: _validatePassword,
              trigger: 'blur'
            }
          ],
          code: {
            required: true,
            message: '图形验证码不能为空',
            trigger: 'blur'
          },
          smsCode: {
            required: true,
            message: '短信验证码不能为空',
            trigger: 'blur'
          }
        },
        serviceIcon: 'http://www.hqwx100.cn/register/images/sprite.png',
        services: [
          {
            title: '备考指导班',
            subTitle: '精编课件,考点轻松掌握',
            styles: {
              backgroundPosition: '0 0',
              width: '46px',
              height: '40px'
            }
          },
          {
            title: '直播讲座',
            subTitle: '名师讲学,传授通关经验',
            styles: {
              backgroundPosition: '0 -45px',
              width: '43px',
              height: '42px'
            }
          },
          {
            title: '题库练习',
            subTitle: '往年命题,高频考点',
            styles: {
              backgroundPosition: '-101px 0',
              width: '45px',
              height: '40px'
            }
          },
          {
            title: '学习顾问',
            subTitle: '考题疑问,名师解答',
            styles: {
              backgroundPosition: '-151px 0',
              width: '42px',
              height: '41px'
            }
          }
        ]
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
          // width: bodyStyles.width + 'px',
          height: bodyStyles.height + 'px'
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

        setTimeout(() => {
          this.agreementsModal.shown = true
        }, 1000)
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
        }, 100)
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
      beforeSubmit () {
        if (!this.formData.phonenum) {
          this.errorTips = '用户名不能为空'
          this.$Message.error(this.errorTips)
          return false
        } else if (!this.formData.password) {
          this.errorTips = '密码不能为空'
          this.$Message.error(this.errorTips)
          return false
        }
        this.errorTips = ''
        return true
      },
      async submit () {
        if (this.isSubmitting) return
        this.isSubmitting = true
        this.$refs.formRef.validate(async (valid) => {
          if (valid) {
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
        })
      },
      goLogin () {
        this.$router.replace({
          name: 'Login'
        })
      },
      acceptAgreements () {
        this.formData.accept = true
      },
      closeAgreements () {
        this.agreementsModal.contentShown = false
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
      Headers: () => import('./parts/Headers.vue'),
      Footers: () => import('./parts/Footers.vue'),
      AgreementsBox: () => import('../AgreementsBox.vue')
    }
  }
</script>
