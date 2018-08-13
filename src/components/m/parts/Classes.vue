<template>
  <div class="classes_container">
    <div class="classes_title">精品课程</div>
    <a class="class_item" v-for="(item, index) in classes" :key="index" :href="item.href">
      <div class="class_item_title">
        <span>{{item.title}}</span>
      </div>
      <div class="class_item_subinfo">
        <div class="dib class_item_category">
          <span>{{item.category}}</span>
        </div>
        <div class="dib class_item_period class_item_sub">
          <span>{{item.period}}</span>
        </div>
        <div class="dib class_item_time class_item_sub">
          <span>{{item.time}}</span>
        </div>
      </div>
      <div class="class_item_teacher_info">
        <div class="class_item_teacher dib w50p">
          <div class="class_item_teacher_item" v-for="(t, idx) in item.teachers" :key="t.name">
            <img :src="t.icon">
            <span>{{t.name}}</span>
          </div>
        </div>
        <div class="class_item_price_wrapper dib w50p">
          <div class="class_item_price">
            <span class="fs12">¥</span>
            <span>{{item.price}}</span>
          </div>
          <div class="class_item_buys">
            <span>{{item.buys}}</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
  .dib {
    display: inline-block;
  }
  .w60p {
    width: 60%;
  }
  .w50p {
    width: 50%;
  }
  .w40p {
    width: 40%;
  }
  .fs12 {
    font-size: 12px;
  }
  .classes_container {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 15px;
    padding: 0 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .classes_title {
    margin-bottom: 15px;
    color: #333333;
    font-weight: bold;
    font-size: 16px;
    height: 24px;
    line-height: 24px;
  }
  .class_item {
    width: 100%;
    margin-bottom: 10px;
    background-color: #FFFFFF;
    color: #444444;
    border-radius: 4px;
    padding: 15px 10px;
    display: block;
  }
  .class_item_title {
    font-size: 14px;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    line-height: 1.5;
    font-weight: 500;
  }
  .class_item_subinfo {
    margin-top: 5px;
    margin-bottom: 16px;
  }
  .class_item_category {
    font-size: 12px;
    color: #325a87;
    border-radius: 3px;
    border: 1px solid #325a87;
    padding: 2.5px 7px;
    display: inline-block;
    line-height: 1;
  }
  .class_item_sub {
    font-size: 12px;
    color: #999999;
    margin-left: 10px;
  }
  .class_item_teacher_item {
    color: #999999;
    font-size: 11px;
    float: left;
    text-align: center;
    margin-right: 10px;
    line-height: 1;
    border: none;
    padding: 0;
  }
  .class_item_teacher_item img {
    width: 34px;
    height: 34px;
    display: block;
    margin: 0 auto;
    margin-bottom: 5px;
    border-radius: 100%;
  }
  .class_item_price_wrapper {
    float: right;
    text-align: right;
  }
  .class_item_price {
    color: #f16262;
    font-size: 20px;
    text-decoration: none;
    white-space: nowrap;
  }
  .class_item_buys {
    color: #999999;
    font-size: 12px;
    text-align: right;
    height: 15px;
    line-height: 15px;
  }
</style>

<script>
  export default {
    name: 'Classes',
    data () {
      return {
        classes: [
          {
            title: '2018年一级消防-72分签约保障套餐',
            category: '一级消防工程师',
            period: '370课时',
            time: '共185小时',
            price: '6800-9800',
            buys: '294人已购买',
            href: 'https://m.zhaopin.com',
            teachers: [
              {
                name: '张三',
                icon: 'http://edu24ol.bs2cdn.100.com/lishilei-1513758855898.jpg'
              },
              {
                name: '李四',
                icon: 'http://edu24ol.bs2cdn.100.com/lishilei-1513758855898.jpg'
              },
              {
                name: '王五',
                icon: 'http://edu24ol.bs2cdn.100.com/lishilei-1513758855898.jpg'
              }
            ]
          }
        ]
      }
    },
    created () {
      let tempArr = []
      for (let i = 0; i <= 10; i++) {
        tempArr = tempArr.concat(this.classes)
      }
      this.classes = tempArr
    }
  }
</script>
