<template>
    <div class="container" :style="containerStyles">
        <img src="http://app.hqwx100.cn/register/images/top_bg.png" :style="topImgStyles">
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
                <div class="right_btn">
                    <img src="data:image/png;base64,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" alt="点击刷新">
                </div>
            </div>
            <div class="form_row">
                <div class="form_item with_right_btn">
                    <input type="text" placeholder="短信验证码" v-model="formData.smsCode">
                </div>
                <!--<div class="right_btn">-->
                    <!--<span>发送验证码</span>-->
                <!--</div>-->
                <Button class="right_btn" type="primary" :disabled="!/^1[345789]\d{9}$/.test(formData.phonenum)">
                    发送验证码
                </Button>
            </div>
            <div class="form_row agreement">
                <Checkbox v-model="formData.accept"></Checkbox><span @click="toggleCheck">我已阅读并同意<</span><a href="javascript:">用户注册协议</a><span>></span>
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
  // import { StorageUtil, KitUtil } from '../utils/index'
  import * as types from '../../store/mutation-types'
  export default {
    name: 'Register',
    data () {
      return {
        isSubmitting: false,
        formData: {
          phonenum: '',
          password: '',
          code: '',
          smsCode: '',
          accept: false
        }
      }
    },
    computed: {
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
    methods: {
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
      },
      toggleCheck () {
        this.formData.accept = !this.formData.accept
      },
      goLogin () {
        this.$router.replace('/login')
      }
    },
    components: {}
  }
</script>
