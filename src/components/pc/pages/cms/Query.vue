<template>
  <div class="cms_container" :style="cmsContainerStyles">
    <div class="cms_wrapper">
      <div class="cms_header_container">
        <p class="cms_header_text">{{pageData.title}}</p>
        <p class="cms_header_en_text">{{pageData.enTitle}}</p>
      </div>
      <div class="cms_query_content">
        <div class="cms_query_header">
          <p class="cms_query_header_text">{{pageData.queryTitle}}</p>
        </div>
        <div class="form_inner">
          <div class="form_wrapper register_login_form">
            <Form :model="formData" :rules="formRules" ref="formRef">
              <FormItem v-for="(fi, index) in pageData.formItems" :key="index" :label="fi.label" :label-width="120">
                <Select v-if="fi.type.toLowerCase() === 'select'" size="large" v-model="fi.defaultValue" :placeholder="fi.placeholder">
                  <Option v-for="(o, idx) in fi.data" :key="idx" :value="o.value">{{o.text}}</Option>
                </Select>
                <Input v-if="fi.type.toLowerCase() === 'input'" v-model="fi.defaultValue" :placeholder="fi.placeholder"/>
              </FormItem>
              <FormItem label="手机号" prop="phonenum" :label-width="120">
                <Input v-model="formData.phonenum" placeholder="请输入您的手机号" class="custom_input" style="height: 40px;" @keyup.13="submit"/>
              </FormItem>
              <FormItem label="密码" prop="password" :label-width="120">
                <Input type="password" v-model="formData.password" placeholder="请输入4-8位(数字,字母,下划线)" @keyup.13="submit"/>
              </FormItem>
              <FormItem label="图形验证码" prop="code" :label-width="120">
                <Input v-model="formData.code" placeholder="图形验证码" style="width: calc(100% - 145px);" @keyup.13="submit"/>
                <div class="code_img_wrapper" @click="getCode">
                  <Tooltip content="点击获取图形验证码" placement="right" class="code_tooltip" :transfer="true">
                    <img class="code_img" :src="code.verifyCodeStr">
                  </Tooltip>
                </div>
              </FormItem>
              <FormItem label="短信验证码" prop="smsCode" :label-width="120">
                <Input v-model="formData.smsCode" placeholder="短信验证码" style="width: calc(100% - 145px);" @keyup.13="submit"/>
                <Button class="smscode_wrapper" type="primary" :disabled="!/^1[345789]\d{9}$/.test(formData.phonenum) || !!countdown.interval || !formData.code" @click="getSmsCode">{{(countdown.defaultTime === countdown.time) ? countdown.defaultText : countdown.time + '秒后重新获取'}}</Button>
              </FormItem>
              <FormItem>
                <Checkbox v-model="formData.accept" size="small"></Checkbox><span class="accept-text">我已阅读并同意《<span class="open_agreements" @click="openAgreements">网站注册协议</span>》</span>
              </FormItem>
              <FormItem>
                <Button type="primary" class="register_btn" :loading="isSubmitting" long :disabled="!formData.accept" @click="submit">{{pageData.btnText}}</Button>
              </FormItem>
              <FormItem>
                <p class="bottom_tip" v-if="pageData.tips.title">{{pageData.tips.title}}</p>
                <p class="bottom_tip" v-for="(tip, index) in pageData.tips.content" :key="index">
                  <span class="tip_number">{{index + 1 + '、'}}</span>
                  <span class="tip_content">{{tip.text}}</span>
                </p>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    </div>
    <agreements-box :shown="agreementsModal.shown" width="90%" height="90%" @close="agreementsClosed"></agreements-box>
  </div>
</template>
<style scoped>
  body {
    height: 100%;
  }
  .cms_container {
    width: 100%;
    height: 100%;
    background: linear-gradient(#0899fa, #e2f1fa);
  }
  .cms_wrapper {
    max-width: 1000px;
    min-height: 640px;
    margin: 0 auto;
  }
  .cms_header_container {
    width: 100%;
    padding-top: 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    color: #FFFFFF;
  }
  .cms_header_text {
    font-size: 28px;
    margin-bottom: 5px;
  }
  .cms_header_en_text {
    font-size: 14px;
    max-width: 600px;
    margin: 0 auto;
  }
  .cms_query_content {
    max-width: 500px;
    margin: 15px auto;
    background: linear-gradient(#8ed0fc, #dbeffc);
    border-radius: 4px;
  }
  .cms_query_header {
    width: 100%;
    padding: 30px 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
  }
  .cms_query_header_text {
    font-size: 18px;
    color: #d70c25;
  }

  .form_inner {
    width: 100%;
    padding: 0 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    /*height: 356px;*/
  }
  .form_wrapper {
    width: 100%;
    min-height: 400px;
    margin: 0 auto;
    padding-bottom: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .code_img_wrapper {
    width: 135px;
    height: 40px;
    float: right;
    text-align: right;
  }
  .code_tooltip {
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
    font-size: 10px;
  }
  .register_btn {
    height: 50px;
    font-size: 16px;
  }

  .open_agreements {
    cursor: pointer;
    color: #2d8cf0;
  }

  .bottom_tip {
    position: relative;
    font-size: 13px;
    color: #d70c25;
    line-height: 1.8;
    clear: both;
  }
  .bottom_tip:before {
    content: attr(data-before-data);
    color: #d70c25;
  }
  .tip_number {
    width: 25px;
    display: inline-block;
  }
  .tip_content {
    width: calc(100% - 25px);
    display: inline-block;
    float: right;
  }
</style>
<script>
  import { RouterUtil } from '../../../../utils/index'
  export default {
    name: 'CmsQuery',
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
        }
      }
    },
    computed: {
      queryType () {
        return this.$route.params.queryType
      },
      pageData () {
        return this.allCmsRoute[this.queryType]
      },
      allCmsRoute () {
        return this.$store.state.allCmsRoute
      },
      cmsContainerStyles () {
        let bodyStyles = this.$store.state.bodyStyles
        return {
          minHeight: bodyStyles.height + 'px'
        }
      }
    },
    created () {
      this.$nextTick(async () => {
        let queryType = this.$route.params.queryType
        if (!this.allCmsRoute.hasOwnProperty(queryType)) {
          this.$router.replace({
            name: 'Register'
          })
        } else {
          await this.getCode()
          RouterUtil.title(this.pageData.title)
        }
      })
    },
    methods: {
      agreementsClosed () {
        this.agreementsModal.shown = false
      },
      openAgreements () {
        this.agreementsModal.shown = true
      },
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
              // this.$Message.success('注册成功')
            }).catch(err => {
              this.isSubmitting = false
              this.$Message.error(err.message)
            })
            // setTimeout(() => {
            //   this.$router.replace('/login')
            // }, 800)
          } else {
            this.isSubmitting = false
            this.$Message.error('表单填写有误')
          }
        })
      },
      closeAgreements () {
        this.agreementsModal.contentShown = false
      },
      getAdditionalConditions () {
        let allItems = this.pageData.formItems
        if (Object.prototype.toString.call(allItems) !== '[object Array]' || allItems.length < 1) {
          return {}
        } else {
          let additionalConditions = {}
          allItems.forEach(item => {
            if (!additionalConditions.hasOwnProperty(item.name)) {
              additionalConditions[item.name] = item.defaultValue
            }
          })
          return additionalConditions
        }
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
      AgreementsBox: () => import('../../../AgreementsBox.vue')
    }
  }
</script>
