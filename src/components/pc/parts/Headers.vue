<template>
  <div class="header" :style="headerStyles">
    <div class="header_inner">
      <img :src="headerImage">
      <p v-if="page === 'register'" class="more_tips">注册立享四大服务</p>
      <div v-if="page === 'register'" class="login_tips">
        <div class="login_icon"></div>
        <p>已有账号！<span @click="goLogin">马上登录</span></p>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .header {
    width: 100%;
    height: 90px;
    border-bottom: 1px solid #e8e8e8;
    padding-left: 30px;
    padding-right: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .header_inner {
    max-width: 1000px;
    margin: 0 auto;
  }
  .header_inner img {
    float: left;
    margin-top: 5px;
    max-height: 70px;
  }
  .more_tips {
    height: 90px;
    line-height: 90px;
    float: left;
    font-size: 22px;
    padding: 0;
    margin: 0 15px;
  }
  .login_tips {
    float: right;
    font-size: 16px;
    height: 90px;
    line-height: 90px;
  }
  .login_tips span {
    color: #0095db;
    cursor: pointer;
  }
  .login_tips p {
    display: inline-block;
  }
  .login_icon {
    display: inline-block;
    background-image: url(/static/images/sprite.png);
    background-position: -133px -137px;
    position: relative;
    margin-right: 5px;
    width: 17px;
    height: 20px;
    top: 4px;
  }
</style>
<script>
  export default {
    name: 'Headers',
    props: {
      page: {
        type: String,
        default: 'default'
      },
      bgColor: {
        type: String,
        default: '#FFFFFF'
      }
    },
    data () {
      return {
      }
    },
    computed: {
      headerStyles () {
        return {
          backgroundColor: this.bgColor
        }
      },
      headerImage () {
        let img = ''
        switch (this.page) {
          case 'login':
            img = '/static/images/login_logo.jpg'
            break
          case 'register':
          case 'default':
            img = '/static/images/logob1x.png'
            break
          default:
            img = '/static/images/logob1x.png'
            break
        }
        return img
      }
    },
    methods: {
      goLogin () {
        this.$router.replace({
          name: 'Login'
        })
      }
    },
    components: {}
  }
</script>
