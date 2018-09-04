<template>
  <div class="index_headers_container">
    <div class="index_headers_wrapper">
      <div class="header_logo_container">
        <img :src="logo" class="header_logo_img">
      </div>
      <div class="header_tip1">
        <span>{{tip1}}</span>
      </div>
      <div class="header_tip2">
        <span v-for="(item, index) in tip2.split('\n')" :key="index">{{item}}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .index_headers_container {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #e8e8e8;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #FFFFFF;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .index_headers_wrapper {
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header_logo_container {
    width: 328px;
    height: 54px;
  }
  .header_logo_img {
    width: 328px;
    height: 54px;
  }
  .header_tip1 {
    width: 300px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header_tip2 {
    width: 372px;
    height: 54px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
</style>
<script>
  export default {
    name: 'PageHeaders',
    props: {
      logo: {
        type: String,
        default: ''
      },
      tip1: {
        type: String,
        default: '住建部、财政部、卫生部、人事部合作单位'
      },
      tip2: {
        type: String,
        default: '全国统一客服热线（免长途费）\n 400 - 678 - 3456'
      }
    },
    data () {
      return {}
    },
    components: {}
  }
</script>
