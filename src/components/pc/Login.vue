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
                        <input type="text" placeholder="用户名" v-model="formData.phonenum">
                    </div>
                    <div class="form_row">
                        <Icon type="android-lock" size="20"></Icon>
                        <input type="password" placeholder="请输入您的密码" v-model="formData.password">
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
        background-image: url('http://www.hqwx100.cn/login/images/login-banner.jpg');
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
  // import { StorageUtil, KitUtil } from '../utils/index'
  import * as types from '../../store/mutation-types'
  export default {
    name: 'Login',
    data () {
      return {
        isSubmitting: false,
        errorTips: '',
        formData: {
          phonenum: '',
          password: ''
        }
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
        let beforeRegisterFlag = this.beforeSubmit()
        if (beforeRegisterFlag) {
          let responseData = await this.$store.dispatch(types.LOGIN, this.formData).catch(err => {
            this.isSubmitting = false
            this.$Message.error('登录失败：' + err.message)
            return false
          })
          this.isSubmitting = false
          this.$Message.success('登录成功')
          // setTimeout(() => {
          //   this.$router.replace('/login')
          // }, 800)
          alert(JSON.stringify(responseData, null, 2))
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
    components: {
      Headers: () => import('./parts/Headers.vue'),
      Footers: () => import('./parts/Footers.vue')
    }
  }
</script>
