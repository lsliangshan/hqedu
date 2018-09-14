<template>
  <div class="container" :style="containerStyles">
    <headers page="login"></headers>
    <div class="form_container">
      <div class="form_bg">
        <div class="form_wrapper">
          <div class="form_title">
            <span class="form_title_left">用户登录</span>
            <span class="form_title_right" @click="goRegister">立即注册</span>
          </div>
          <div class="form_error" key="noError" v-if="errorTips.trim() === ''">
            <Icon type="information-circled" size="18"></Icon>
            <span class="form_error_text">请牢记您的账号密码，以防账号丢失</span>
          </div>
          <div class="form_error" key="hasError" v-else>
            <Icon type="close-circled" class="error" size="18"></Icon>
            <span class="form_error_text">{{errorTips}}</span>
          </div>
          <div class="form_row">
            <Icon type="android-person" size="20"></Icon>
            <input type="text" placeholder="用户名" v-model="formData.phonenum" @keyup.13="submit">
          </div>
          <div class="form_row">
            <Icon type="android-lock" size="20"></Icon>
            <input type="password" placeholder="请输入您的密码" v-model="formData.password" @keyup.13="submit">
          </div>
          <div class="form_row" v-if="showCode">
            <input type="text" class="code_input" placeholder="请输入图形验证码" v-model="formData.code" @keyup.13="submit">
            <div class="code_img_wrapper" @click="getCode">
              <img class="code_img" :src="code.verifyCodeStr">
            </div>
          </div>
          <div class="form_submit">
            <Button class="btn" :loading="isSubmitting" @click="submit">
              <span>立即登录</span>
            </Button>
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
    background-image: url('/static/images/login-banner.jpg');
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    min-height: 421px;
    margin-top: 60px;
  }

  .form_wrapper {
    float: right;
    width: 350px;
    padding: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    /*height: 356px;*/
    background-color: #FFFFFF;
    border: 1px solid #e8e8e8;
  }

  .form_title {
    margin-bottom: 5px;
  }

  .form_title_left {
    font-size: 18px;
    font-weight: bold;
    color: #666666;
    line-height: 27px;
  }

  .form_title_right {
    font-size: 14px;
    color: #ff6a06;
    float: right;
    line-height: 27px;
    cursor: pointer;
  }

  .form_error {
    height: 26px;
    width: 100%;
    line-height: 26px;
    padding-left: 10px;
    margin-bottom: 20px;
    display: block;
    background: #fff2f2;
    color: #666;
    border: 1px solid #ffb7b7;
  }

  .form_error i {
    line-height: 24px;
    float: left;
    color: #888888;
  }

  .form_error i.error {
    color: #ff6a06;
  }

  .form_error_text {
    float: left;
    margin-left: 4px;
    color: #666666;
    font-weight: 500;
  }

  .form_row {
    width: 100%;
    margin-bottom: 20px;
    float: left;
    background-color: #f6f6f6;
    border: 1px solid #e8e8e8;
  }

  .form_row i {
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #c5c5c5;
  }

  .form_row input {
    float: right;
    height: 40px;
    width: calc(100% - 40px);
    font-size: 16px;
    color: #666666;
    padding-left: 8px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: none;
    display: inline-block;
  }

  .code_input {
    float: left !important;
    width: calc(100% - 104px) !important;
    margin-left: 0 !important;
  }

  .code_img_wrapper {
    float: right;
    width: 104px;
    height: 40px;
  }

  .code_img_wrapper img {
    width: 100%;
    height: 100%;
  }

  .form_submit {
    width: 100%;
    float: left;
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
</style>
<script>
  export default {
    name: 'Login',
    data () {
      return {
        isSubmitting: false,
        errorTips: '',
        formData: {
          phonenum: '',
          password: '',
          code: ''
        },
        showCode: false, // 是否需要图形验证码
        code: {
          verifyCodeStr: '',
          codeString: ''
        },
        codeBtnTs: 0
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
    created () {
      // this.$nextTick(async () => {
        // let userInfo = await this.$$getUserInfo().catch(err => {
        //   console.log('user info error: ', err.message)
        // })
        // console.log('user info: ', userInfo)
      // })
      if (String(this.$route.query.code) === '1') {
        this.showCode = true
      }
      if (String(this.$route.query.tel).trim() !== '') {
        this.formData.phonenum = this.$route.query.tel
      }
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
        let beforeRegisterFlag = this.beforeSubmit()
        if (beforeRegisterFlag) {
          let requestData = {
            phone: this.formData.phonenum,
            pwd: this.formData.password
          }
          if (this.showCode) {
            requestData = Object.assign({}, requestData, {
              verifyCode: this.formData.code,
              codeString: this.code.codeString
            })
          }
          await this.$login(requestData).then(responseData => {
            this.isSubmitting = false
            if (String(responseData.status) === '231') {
              /**
               * 登录失败 需要图形验证码
               */
              this.showCode = true
              this.$Message.info(responseData.message || '请输入图形验证码')
            } else if (['200', '1'].indexOf(String(responseData.status)) < 0) {
              /**
               * 登录失败 其它原因
               */
              this.$Message.error(responseData.message || '登录失败，请稍后再试')
            } else {
              /**
               * 登录成功
               */
              this.$Message.success('登录成功')
              let redirectUrl = this.$route.query.redirect
              if (redirectUrl && String(redirectUrl).trim() !== '') {
                location.replace(redirectUrl)
              } else {
                // this.$router.replace({
                //   name: 'User'
                // })
                location.href = 'http://www.hqwx.com/leraning/class_cjjjs/'
              }
            }
          }).catch(err => {
            this.isSubmitting = false
            this.$Message.error(err.message)
          })
        } else {
          this.isSubmitting = false
        }
      },
      goRegister () {
        this.$router.replace({
          name: 'Register'
        })
      }
    },
    watch: {
      async showCode (val) {
        if (val) {
          await this.getCode()
        }
      }
    },
    components: {
      Headers: () => import('./parts/Headers.vue'),
      Footers: () => import('./parts/Footers.vue')
    }
  }
</script>
