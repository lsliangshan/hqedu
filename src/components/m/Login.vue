<template>
    <div class="container" :style="containerStyles">
        <img src="/static/images/top_bg.png" :style="topImgStyles">
        <div class="form_container">
            <div class="form_row">
                <div class="form_item">
                    <input type="text" placeholder="手机号" v-model="formData.phonenum">
                </div>
            </div>
            <div class="form_row">
                <div class="form_item">
                    <input type="password" placeholder="输入密码" v-model="formData.password">
                </div>
            </div>
            <div class="form_row" v-if="showCode">
                <div class="form_item">
                    <input type="text" class="code_input" placeholder="请输入图形验证码" v-model="formData.code">
                    <div class="code_img_wrapper" @click="getCode">
                        <img class="code_img" :src="code.verifyCodeStr">
                    </div>
                </div>
            </div>
            <div class="form_row">
                <Button class="btn" :loading="isSubmitting" @click="submit">
                    <span>登录</span>
                </Button>
            </div>
            <div class="form_row">
                <div class="bottom_tips" @click="goRegister">
                    <span>还没账号，去注册</span>
                </div>
            </div>
        </div>
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
        height: 42px;
        border: 1px solid #d6d6d6;
        border-radius: 5px;
        background-color: #f8f8f8;
        box-sizing: border-box;
        overflow: hidden;
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
    .code_input {
        float: left!important;
        width: calc(100% - 104px)!important;
        margin-left: 0!important;
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
    .form_item.with_right_btn {
        width: calc(100% - 100px);
        display: inline-block;
    }
    .right_btn {
        display: inline-block;
        width: 90px;
        height: 40px;
        border-radius: 5px;
        overflow: hidden;
        float: right;
    }
    .right_btn img {
        width: 100%;
        height: 100%;
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
  export default {
    name: 'Login',
    data () {
      return {
        isSubmitting: false,
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
          width: bodyStyles.width + 'px',
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
          this.$Message.error('手机号不能为空')
          return false
        } else if (!/^1[3456789]\d{9}$/.test(this.formData.phonenum)) {
          this.$Message.error('手机号不合法')
          return false
        } else if (!this.formData.password) {
          this.$Message.error('密码不能为空')
          return false
        }
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
              this.$router.replace({
                name: 'User'
              })
            }
          }).catch(err => {
            this.isSubmitting = false
            this.$Message.error(err.message)
          })
        } else {
          this.isSubmitting = false
        }
      },
      toggleCheck () {
        this.agreed = !this.agreed
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
    components: {}
  }
</script>
