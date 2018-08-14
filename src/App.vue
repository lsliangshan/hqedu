<template>
  <div id="app" :style="appStyles">
    <router-view name="HomeRouter"/>
  </div>
</template>

<script>
  import { StorageUtil, BrowserUtil } from './utils/index'
  import * as types from './store/mutation-types'
  export default {
    name: 'app',
    data () {
      return {
        events: this.$store.state.events,
        eventHub: this.$store.state.eventHub,
        bIsPc: BrowserUtil.isPc() // 浏览器类型  PC 或 Mobile
      }
    },
    created () {
      const that = this
      document.onclick = function () {
        that.eventHub.$emit(that.events.bodyClick)
      }
      window.onresize = this.windowResize
      this.$nextTick(() => {
        this.cacheBodyStyles()
      })
    },
    computed: {
      loginInfo () {
        return StorageUtil.getItem(this.$store.state.localStorageKeys.userInfo)
      },
      appStyles () {
        return {
          minWidth: (this.bIsPc ? '1000px' : '100%')
        }
      }
    },
    methods: {
      windowResize () {
        let _isPc = BrowserUtil.isPc()
        if (_isPc !== this.bIsPc) {
          this.$router.go(0)
          this.bIsPc = _isPc
        }
        this.cacheBodyStyles()
      },
      cacheBodyStyles () {
        this.$store.commit(types.SET_BODY_STYLES, {
          styles: {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
          }
        })
      }
    },
    // watch: {
    //   bIsPc (val) {
    //     this.$store.commit(types.SET_BODY_STYLES, {
    //       styles: {
    //         width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    //         height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    //       }
    //     })
    //   }
    // },
    components: {
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    /*-webkit-user-select: none;*/
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  html, body {
    /*position: absolute;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*overflow: auto;*/
    /*min-width: 1000px;*/
    /* min-height: 800px; */
  }

  body {
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
    /*overflow: auto;*/
    /*margin: 0 auto;*/
    /*color: #444;*/
    /*overflow-x: hidden;*/
    /*overflow-y: scroll;*/
    background: #f2f2f2;
    /*position: relative;*/
  }

  #app {
    width: 100%;
    /*height: 100%;*/
  }

  .ivu-select-multiple .ivu-select-item-selected:after {
    margin-top: -5px;
    margin-right: 5px;
  }

  .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu:hover {
    background-color: #25a5ff;
  }

  .register_login_form .ivu-form .ivu-form-item-label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 15px;
    color: #666666;
    line-height: 1;
    padding: 10px 12px 10px 0;
    box-sizing: border-box;
  }

  .register_login_form .ivu-input {
    font-size: 14px;
    padding: 0 10px;
    border: 1px solid #e8e8e8;
    width: 100%;
    height: 40px;
    float: left;
  }
</style>
