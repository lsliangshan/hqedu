<template>
    <div class="container" :style="containerStyles">
        <headers page="register"></headers>
        <div class="form_container">
            <div class="form_bg">
                <div class="service_container">
                    <div class="service_item" v-for="(service, index) in services" :key="index">
                        <div class="service_img_wrapper">
                            <div class="service_img" :style="service.styles"></div>
                        </div>
                        <div class="service_right">
                            <div class="service_main_title">
                                <span>{{service.title}}</span>
                            </div>
                            <div class="service_sub_title">
                                <span>{{service.subTitle}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form_inner">
                    <div class="form_wrapper register_login_form">
                        <Form :model="formData" :rules="formRules" :label-width="120" ref="formRef">
                            <FormItem label="手机号手机号" prop="phonenum">
                                <Input v-model="formData.phonenum" placeholder="请输入您的手机号" class="custom_input" style="height: 40px;"/>
                            </FormItem>
                            <FormItem label="密码" prop="password">
                                <Input type="password" v-model="formData.password" placeholder="请输入4-8位(数字,字母,下划线)"/>
                            </FormItem>
                            <FormItem label="图形验证码" prop="code">
                                <Input v-model="formData.code" placeholder="图形验证码" style="width: calc(100% - 145px);"/>
                                <div class="code_img_wrapper">
                                    <img class="code_img" src="data:image/png;base64,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">
                                </div>
                            </FormItem>
                            <FormItem label="短信验证码" prop="smsCode">
                                <Input v-model="formData.smsCode" placeholder="短信验证码" style="width: calc(100% - 145px);"/>
                                <Button class="smscode_wrapper" type="primary" :disabled="!/^1[345789]\d{9}$/.test(formData.phonenum)">获取短信验证码</Button>
                            </FormItem>
                            <FormItem>
                                <Checkbox v-model="formData.accept"></Checkbox><span class="accept-text">我已阅读并同意《网站注册协议》</span>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" class="register_btn" :loading="isSubmitting" long :disabled="!formData.accept" @click="submit">立即注册</Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        <footers></footers>
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
  import * as types from '../../store/mutation-types'
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
        isSubmitting: false,
        errorTips: '',
        formData: {
          phonenum: '',
          password: '',
          code: '',
          smsCode: '',
          accept: true
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
    methods: {
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
            let responseData = await this.$store.dispatch(types.REGISTER, this.formData).catch(err => {
              this.isSubmitting = false
              this.$Message.error('注册失败：' + err.message)
              return false
            })
            this.isSubmitting = false
            this.$Message.success('注册成功')
            // setTimeout(() => {
            //   this.$router.replace('/login')
            // }, 800)
            alert(JSON.stringify(responseData, null, 2))
          } else {
            this.isSubmitting = false
          }
        })
      },
      goLogin () {
        this.$router.replace('/login')
      }
    },
    components: {
      Headers: () => import('./parts/Headers.vue'),
      Footers: () => import('./parts/Footers.vue')
    }
  }
</script>
