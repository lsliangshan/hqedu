<template>
  <div class="footer_container" :style="footerStyles">
    <div class="blank_div" style="width: calc(100% - 70px); margin-left: 35px; height: 50px; border-bottom: 1px solid #e4e4e4;"></div>
    <!--<div class="footer_item">-->
      <!--<span>出版物经营许可证  |  新出发京批字第直080136号  |  京ICP备18039765号  |  北京公安局海淀分局备案号1101081748</span>-->
    <!--</div>-->
    <!--<div class="footer_item">-->
      <!--<span>知春路校区：北京市海淀区知春路7号致真大厦D座4层北区（地铁10号线西土城出A口）  |  邮编：100191</span>-->
    <!--</div>-->
    <!--<div class="footer_item">-->
      <!--<span>版权所有 1997-2016 北京环球兴学科技发展有限公司</span>-->
    <!--</div>-->
    <div class="footer_item">
      <span>版权所有 @copyright 1997-2018 北京德育拓远教育咨询有限公司 | 京ICP备18039765号</span>
    </div>
    <div class="footer_item">
      <span>北京市海淀区马连洼北路8号C座五层506-C181</span>
    </div>
  </div>
</template>

<style scoped>
  .footer_container {
    width: 100%;
    min-height: 100px;
    color: #666;
    padding-bottom: 20px;
    padding-top: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .footer_item {
    color: #999;
    font-size: 12px;
    width: 100%;
    text-align: center;
    margin: 15px auto auto auto;
    text-shadow: 0px 0px 10px #f8f8f8;
  }
</style>

<script>
  export default {
    name: 'PcFooter',
    props: {
      bgColor: {
        type: String,
        default: '#f6f6f6'
      }
    },
    computed: {
      footerStyles () {
        return {
          backgroundColor: this.bgColor
        }
      }
    }
  }
</script>
