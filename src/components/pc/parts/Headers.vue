<template>
  <div class="header" :style="headerStyles">
    <div class="header_inner">
      <img :src="headerImage">
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
    height: 89px;
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
    components: {}
  }
</script>
