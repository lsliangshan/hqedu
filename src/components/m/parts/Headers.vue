<template>
  <div class="headers_container">
    <a class="menu_item" v-for="(item, index) in menus.slice(0, 8)" :key="item.name" :href="item.href">
      <img :src="item.icon">
      <span>{{item.text}}</span>
    </a>
  </div>
</template>

<style scoped>
  .headers_container {
    padding: 5px 10px 20px;
    background-color: #fff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .menu_item {
    display: inline-block;
    width: 25%;
    margin-top: 15px;
    color: #444444;
  }
  .menu_item:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .menu_item img {
    display: block;
    width: 48px;
    height: 48px;
    margin: 0 auto;
    pointer-events: none;
  }
  .menu_item span {
    display: block;
    margin-top: 5px;
    color: #686868;
    font-size: 12px;
    text-align: center;
    pointer-events: none;
  }
</style>

<script>
  export default {
    name: 'MobileHeaders',
    data () {
      return {
        menus: [
          {
            text: '第一项',
            icon: 'http://edu24ol.bs2cdn.100.com/一建icon2-1529302030057.png',
            name: 'item1',
            href: 'https://m.zhaopin.com'
          },
          {
            text: '第二',
            icon: 'http://edu24ol.bs2cdn.100.com/一建icon2-1529302030057.png',
            name: 'item2',
            href: 'https://m.zhaopin.com'
          },
          {
            text: '第三项',
            icon: 'http://edu24ol.bs2cdn.100.com/一建icon2-1529302030057.png',
            name: 'item3',
            href: 'https://m.zhaopin.com'
          },
          {
            text: '第四项',
            icon: 'http://edu24ol.bs2cdn.100.com/一建icon2-1529302030057.png',
            name: 'item4',
            href: 'https://m.zhaopin.com'
          },
          {
            text: '第五项',
            icon: 'http://edu24ol.bs2cdn.100.com/一建icon2-1529302030057.png',
            name: 'item5',
            href: 'https://m.zhaopin.com'
          },
          {
            text: '第六项',
            icon: 'http://edu24ol.bs2cdn.100.com/一建icon2-1529302030057.png',
            name: 'item6',
            href: 'https://m.zhaopin.com'
          },
          {
            text: '第七项',
            icon: 'http://edu24ol.bs2cdn.100.com/一建icon2-1529302030057.png',
            name: 'item7',
            href: 'https://m.zhaopin.com'
          },
          {
            text: '第八项',
            icon: 'http://edu24ol.bs2cdn.100.com/一建icon2-1529302030057.png',
            name: 'item8',
            href: 'https://m.zhaopin.com'
          },
          {
            text: '第九项',
            icon: 'http://edu24ol.bs2cdn.100.com/一建icon2-1529302030057.png',
            name: 'item9',
            href: 'https://m.zhaopin.com'
          }
        ]
        // menus: [
        //   {
        //     text: '所有考试分类',
        //     name: 'AllCategory'
        //   },
        //   {
        //     text: '首页',
        //     name: 'Home'
        //   },
        //   {
        //     text: '中级经济师',
        //     name: 'item1'
        //   },
        //   {
        //     text: '一级建造师',
        //     name: 'item2'
        //   },
        //   {
        //     text: '二级建造师',
        //     name: 'item3'
        //   },
        //   {
        //     text: '造价工程师',
        //     name: 'item4'
        //   },
        //   {
        //     text: '执业药师',
        //     name: 'item5'
        //   },
        //   {
        //     text: '心理咨询师',
        //     name: 'item6'
        //   },
        //   {
        //     text: '人力资源',
        //     name: 'item7'
        //   }
        // ]
      }
    },
    computed: {
      theme () {
        return this.$store.state.theme
      }
    }
  }
</script>
