<template>
	<div class="course_signup_container">
		<div class="course_signup_wrapper">
			<div class="title">{{data.title}}</div>
			<div class="course_signup_body">
				<div class="step1_container">
					<div class="step_title">{{data.step1.title}}</div>
					<div>{{p_id_obj}}</div>
					<div class="step_body">
						<Collapse accordion v-model="step1Collapse">
					        <Panel v-for="(item, index) in data.step1.list" :key="index" :name="String(index + 1)">
					            {{item.label}}
					            <span class="user_select_item" v-if="p_id_obj.main && p_id_obj.main.label === item.label">{{p_id_obj.sub.label}}</span>
					            <p slot="content">
					            	<RadioGroup v-model="p_id">
					            		<Row>
					            			<Col span="8" v-for="(itm, idx) in item.sublist" :key="idx">
					            				<Radio :label="itm.label" :value="itm.value" class="label_style"></Radio>
					            			</Col>
					            		</Row>
					            	</RadioGroup>
					            </p>
					        </Panel>
					    </Collapse>
					</div>				
				</div>
				<div class="step_separator"></div>
				<div class="step2_conntainer">
					<div class="step_title">{{data.step2.title}}</div>
					<div class="step_body">
						<Form :model="formData" :rules="formRules" ref="courseFormRef">
							<!-- <FormItem prop="username">
					            <Input type="text" placeholder="请输入登录用户名" size="large" v-model="formData.username">
					                <Icon type="ios-person" slot="prepend" size="20"></Icon>
					            </Input>
					        </FormItem> -->
					        <FormItem prop="phonenum">
					            <Input type="text" placeholder="您的手机号码" size="large" v-model="formData.phonenum">
					                <Icon type="android-phone-portrait" slot="prepend" size="20"></Icon>
					            </Input>
					        </FormItem>
					        <FormItem prop="password">
					            <Input :type="showPassword ? 'text' : 'password'" placeholder="请输入登录密码" size="large" :icon="!showPassword ? 'eye-disabled' : 'eye'" @on-click="togglePassword" v-model="formData.password">
					                <Icon type="ios-locked" slot="prepend" size="20"></Icon>
					            </Input>
					        </FormItem>					        
					        <FormItem prop="code" class="custom_prepend">
					        	<Input type="text" placeholder="请输入图形验证码" size="large" v-model="formData.code">
					        		<Icon type="code" slot="prepend" size="20"/>
					        		<div class="code_wrapper" slot="append" @click="getCode">
					        			<img :src="code.verifyCodeStr" class="code_img" />
					        		</div>
					        	</Input>
					        </FormItem>
					        <FormItem prop="smsCode" class="custom_prepend">
					        	<Input type="text" placeholder="请输入短信验证码" size="large" v-model="formData.smsCode">
					        		<Icon type="chatboxes" slot="prepend" size="20"/>
					        		<div class="smscode_wrapper" slot="append">
						        		<button class="smscode_btn" type="button"
						                        :disabled="!/^1[345789]\d{9}$/.test(formData.phonenum) || !!countdown.interval || !formData.code"
						                        @click="getSmsCode">{{(countdown.defaultTime === countdown.time) ? countdown.defaultText :
						                  countdown.time + '秒后重新获取'}}
						                </Button>
					        		</div>
					        	</Input>
					        </FormItem>
					        <!-- <FormItem prop="email" class="custom_prepend">
					            <Input type="text" placeholder="电子邮箱 如example@gmail.com" size="large" v-model="formData.email">
					                <Icon type="ios-email" slot="prepend" size="22"></Icon>					               
					            </Input>
					        </FormItem> -->
						</Form>
					</div>
				</div>
			</div>
			<div class="course_signup_tip">{{data.tips.text}}</div>
			<div class="course_signup_bottom">
				<div class="course_signup_btn" @click="submit">{{data.btn}}</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.course_signup_container {
		width: 100%;
		padding-top: 50px;
		-webkit-user-select: none;
	}
	.course_signup_wrapper {
		margin-right: auto;
	    margin-left: auto;
	    z-index: 10;
	    padding-top: 11px;
	    background-color: rgba(255,255,255,0.75);
	    border-radius: 5px;
	    width: 980px;
	    margin-bottom: 50px;
	}
	.title {
		/*height: 67px;*/
	    width: 96%;
	    font-family: "\5FAE\8F6F\96C5\9ED1";
	    font-size: 50px;
	    color: #FF3300;
	    text-align: center;
	    font-weight: bold;
	    margin-right: auto;
	    margin-left: auto;
	    border-right-width: 0px;
	    border-bottom-width: 1px;
	    border-left-width: 0px;
	    border-right-style: none;
	    border-bottom-style: solid;
	    border-left-style: none;
	    border-bottom-color: #FF3300;
	    /*padding-bottom: 10px;*/
	}
	.course_signup_body {
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		align-items: flex-start;
		justify-content: space-around;
	}
	.step1_container {
		width: 330px;
	    margin-top: 50px;
	    /*margin-left: 70px;*/
	    margin-right: 30px;
	}
	.step_separator {
	    width: 67px;
	    height: 170px;
	    margin-top: 120px;
	    background-image: url('/static/images/pages/jiantou.png');
	    background-repeat: no-repeat;
	}
	.step2_conntainer {
		width: 330px;
	    margin-top: 50px;
	    margin-right: 30px;
	    min-height: 300px;
	}
	.step_title {
		font-size: 22px;
	    color: #FF3300;
	    text-align: left;
	    margin-left: 30px;
	}
	.step_body {
		margin-left: 30px;
		margin-top: 30px;
	}
	.course_signup_tip {
		width: 740px;
	    color: #FF0000;
	    font-size: 18px;
	    margin: 0 auto;
	    padding: 30px 0;
	}
	.course_signup_bottom {
		width: 100%;
		padding: 0 0 40px 0;
	}
	.course_signup_btn {
		width: 330px;
		height: 60px;
		background-color: #FF0000;
		color: #FFFFFF;
		font-size: 30px;
		border-radius: 5px;
		margin: 0 auto;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.course_signup_btn:active {
		opacity: .7;
	}
	.label_style {
		color: crimson;
	}
	.user_select_item {
		margin-left: 4px;
		color: crimson;
	}
	.code_wrapper {
		width: 73px;
		height: 34px;
		cursor: pointer;
	}
	.code_img {
		width: 73px;
		height: 34px;
	}
	.smscode_wrapper {
		width: 120px;
		height: 34px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.smscode_btn {
		width: 100%;
		height: 100%;
		font-size: 13px;
		border: none;
		cursor: pointer;
		color: #fff;
	    background-color: #2d8cf0;
	    border-color: #2d8cf0;
	    transition: all .3s ease-in-out;
	}
	.smscode_btn[disabled] {
		color: #bbbec4;
	    background-color: #f7f7f7;
	    border-color: #dddee1;
	    cursor: not-allowed;
	}
</style>
<script>
	export default {
		name: 'CourseSignup',
		props: {
			data: {
				type: Object
			}
		},
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
		      const _validateEmail = (rule, value, callback) => {
		      	if (!value.match(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/)) {
		      		callback(new Error('邮件格式不正确，请输入如 example@gmail.com 格式邮箱地址'))
		      	}
		      	callback()
		      }
			return {
				step1Collapse: '1',
				p_id: '',
				isSubmitting: false,
				showPassword: false,
				formData: {
					username: '',
					password: '',
					phonenum: '',
					code: '',
					smsCode: '',
					email: ''
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
					username: [
						{
							required: true,
							message: '登录用户名不能为空',
							trigger: 'blur'
						}
					],
					password: [
			            {
			                required: true,
			                message: '登录密码不能为空',
			                trigger: 'blur'
			            },
			            {
			                validator: _validatePassword,
			                trigger: 'blur'
			            }
			        ],
			        phonenum: [
			            {
			              required: true,
			              message: '手机号不能为空',
			              trigger: 'blur'
			            },
			            {
			              validator: _validatePhonenum,
			              trigger: 'blur'
			            }
			        ],
			        email: [
						{
							required: true,
							message: '邮箱地址不能为空',
							trigger: 'blur'
						},
						{
							validator: _validateEmail,
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
			p_id_obj () {
				return this.findObjectByName(this.p_id)
			},
			allPageRoute () {
				return this.$store.state.allPageRoute
			}
		},
		created () {
			this.$nextTick(async () => {
		        let queryType = this.$route.params.queryType
		        if (!this.allPageRoute.hasOwnProperty(queryType)) {
		          this.$router.replace({
		            name: 'Register'
		          })
		        } else {
		          await this.getCode()
		        }
		      })
		},
		methods: {
			findObjectByName (name) {
				let outObj = {}
				let allList = JSON.parse(JSON.stringify(this.data.step1.list))
				for (let i = 0; i < allList.length; i++) {
					for (let j = 0; j < allList[i].sublist.length; j++) {
						if (allList[i].sublist[j].label === String(name)) {
							outObj.main = {
								label: allList[i].label
							}
							outObj.sub = JSON.parse(JSON.stringify(allList[i].sublist[j]))
							j = allList[i].sublist.length
							// i = allList.length
						}
					}
				}
				return outObj
			},
			togglePassword () {
				this.showPassword = !this.showPassword
			},
			// beforeSubmit () {
			// 	return new Promise((resolve) => {
			// 		this.$refs.courseFormRef.validate(valid => {
			// 			resolve(!!valid)
			// 		})
			// 	})
			// },
			// async submit () {
			// 	let _beforeSubmit = await this.beforeSubmit()
			// 	console.log('>>>', _beforeSubmit)
			// },
			async getCode () {
		        /***
		         * 5s内禁止重复请求
		         * @type {number}
		         */
		        let nowTs = (new Date()).getTime()
		        if (nowTs - this.codeBtnTs < 5 * 1000) {
		          // this.$Message.error('请求图形验证码太频繁，请稍后再试')
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
		        // await this.$getCode().then(codeData => {
		        //   this.code = codeData
		        // }).catch(err => {
		        //   this.$Message.error(err.message)
		        //   this.code = {
		        //     verifyCodeStr: '',
		        //     codeString: ''
		        //   }
		        // })
		      },
		      resetSmsCodeBtn () {
		      	  this.countdown.time = this.countdown.defaultTime
		          clearInterval(this.countdown.interval)
		          this.countdown.interval = 0
		      },
		      async getSmsCode () {
		        if (this.countdown.interval) {
		          return
		        }
		        this.countdown.time -= 1
		        this.countdown.interval = setInterval(() => {
		          if (this.countdown.time <= 1) {
		            this.resetSmsCodeBtn()
		          } else {
		            this.countdown.time -= 1
		          }
		        }, 1000)
		        await this.$getSmsCode({
		          phone: this.formData.phonenum,
		          verifyCode: this.formData.code,
		          codeString: this.code.codeString
		        }).then(responseData => {
		          if (['200', '1'].indexOf(String(responseData.status)) < 0) {
		            // 获取短信验证码失败
		            // 刷新图形验证码
		            this.getCode()
		            this.resetSmsCodeBtn()
		            this.$Message.error(responseData.message || '获取短信验证码失败，请重试')
		          } else {
		            this.$Message.success(responseData.message || '短信验证码已经发送')
		          }
		        }).catch(err => {
		          this.$Message.error(err.message)
		          // 刷新图形验证码
		          this.getCode()
		          this.resetSmsCodeBtn()
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
		      silenceLogin () {
		        return new Promise(async (resolve, reject) => {
		          await this.$login({
		            phone: this.formData.phonenum,
		            pwd: this.formData.password
		          }).then(responseData => {
		            resolve(true)
		            if (String(responseData.status) === '231') {
		              /**
		               * 登录失败 需要图形验证码
		               */
		              this.$router.replace({
		                name: 'Login',
		                query: {
		                  code: 1,
		                  redirect: this.pageData.redirectUrl
		                }
		              })
		            } else if (['200', '1'].indexOf(String(responseData.status)) < 0) {
		              /**
		               * 登录失败 其它原因
		               */
		              this.$router.replace({
		                name: 'Login',
		                query: {
		                  redirect: this.pageData.redirectUrl
		                }
		              })
		            } else {
		              /**
		               * 登录成功
		               */
		              location.replace(this.pageData.redirectUrl)
		            }
		          }).catch((err) => {
		            reject(new Error(err.message))
		            this.$router.replace({
		              name: 'Login',
		              query: {
		                redirect: this.pageData.redirectUrl
		              }
		            })
		          })
		        })
		      },
		      async submit () {
		        if (this.isSubmitting) return
		        this.isSubmitting = true
		        this.$refs.courseFormRef.validate(async (valid) => {
		          if (valid) {
		            await this.$register({
		              phone: this.formData.phonenum,
		              smsCode: this.formData.smsCode,
		              pwd: this.formData.password,
		              sortId: this.pageData.sortId
		            }).then(responseData => {
		              this.isSubmitting = false
		              // this.$Message.success('注册成功')
		              /**
		               * 注册成功后，模拟登录
		               */
		              this.silenceLogin()
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
		      }
		}
	}
</script>
