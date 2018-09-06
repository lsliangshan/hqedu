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
							<FormItem prop="username">
					            <Input type="text" placeholder="请输入登录用户名" size="large" v-model="formData.username">
					                <Icon type="ios-person" slot="prepend" size="20"></Icon>
					            </Input>
					        </FormItem>
					        <FormItem prop="password">
					            <Input :type="showPassword ? 'text' : 'password'" placeholder="请输入登录密码" size="large" :icon="!showPassword ? 'eye-disabled' : 'eye'" @on-click="togglePassword" v-model="formData.password">
					                <Icon type="ios-locked" slot="prepend" size="20"></Icon>
					            </Input>
					        </FormItem>
					        <FormItem prop="phonenum">
					            <Input type="text" placeholder="您的手机号码" size="large" v-model="formData.phonenum">
					                <Icon type="android-phone-portrait" slot="prepend" size="20"></Icon>
					            </Input>
					        </FormItem>
					        <FormItem prop="email">
					            <Input type="text" placeholder="电子邮箱 如example@gmail.com" size="large" v-model="formData.email">
					                <Icon type="ios-email" slot="prepend" size="20"></Icon>					               
					            </Input>
					        </FormItem>
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
				showPassword: false,
				formData: {
					username: '',
					password: '',
					phonenum: '',
					email: ''
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
			        ]
				}
			}
		},
		computed: {
			p_id_obj () {
				return this.findObjectByName(this.p_id)
			}
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
			beforeSubmit () {
				return new Promise((resolve) => {
					this.$refs.courseFormRef.validate(valid => {
						resolve(!!valid)
					})
				})
			},
			async submit () {
				let _beforeSubmit = await this.beforeSubmit()
				console.log('>>>', _beforeSubmit)
			}
		}
	}
</script>
