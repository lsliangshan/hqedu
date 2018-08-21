<template>
  <transition name="agreements-transition"
              enter-active-class="animated faster fadeIn"
              leave-active-class="animated faster fadeOut"
  >
    <div class="agreements" :style="agreementsContainerStyles" v-if="realShown">
      <div class="agreements_mask" :style="agreementsContainerStyles" @click="closeAgreements"></div>
      <transition name="agreements-inner-transition"
                  enter-active-class="animated faster fadeInUpBig"
                  leave-active-class="animated faster fadeOutDownBig"
      >
        <div class="agreements_inner" v-if="realContentShown" :style="agreementsStyles">
          <div class="agreements_header">
            <div class="agreements_header_text">网站注册协议</div>
            <div class="agreements_close" @click="closeAgreements">
              <Icon type="ios-close-empty" size="26"/>
            </div>
          </div>
          <div class="agreements_body">
            <agreements></agreements>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<style scoped>
  .agreements {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999;
  }

  .agreements_mask {
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  .agreements_inner {
    position: absolute;
    width: 80%;
    height: 90%;
    background-color: #FFFFFF;
    border-radius: 4px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .agreements_header {
    position: relative;
    border-bottom: 1px solid #e9eaec;
    padding: 14px 16px;
    line-height: 1;
  }

  .agreements_header_text {
    display: inline-block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #1c2438;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .agreements_close {
    display: inline-block;
    position: absolute;
    right: 16px;
    top: 10px;
    overflow: hidden;
    cursor: pointer;
  }

  .agreements_close i {
    color: #999;
    transition: color .2s ease;
    position: relative;
    top: 1px;
  }

  .agreements_close i:hover {
    color: #333;
  }

  .agreements_body {
    padding: 16px;
    height: calc(100% - 51px);
    overflow: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
<script>
  export default {
    name: 'AgreementsBox',
    props: {
      shown: {
        type: Boolean,
        default: false
      },
      width: {
        type: [Number, String],
        default: 0
      },
      height: {
        type: [Number, String],
        default: 0
      },
      device: {
        type: String,
        default: 'pc'
      }
    },
    data () {
      return {
        realShown: false,
        realContentShown: false
      }
    },
    computed: {
      agreementsContainerStyles () {
        let bodyStyles = this.$store.state.bodyStyles
        return {
          width: bodyStyles.width + 'px',
          height: bodyStyles.height + 'px'
        }
      },
      agreementsStyles () {
        let bodyStyles = this.$store.state.bodyStyles
        let _width = ''
        if (this.width) {
          if (this.width.match(/%$/)) {
            _width = parseFloat(String(this.width)) / 100 * bodyStyles.width + 'px'
          } else if (this.width.match(/px$/)) {
            _width = this.width
          } else if (this.width.match(/\d/g)) {
            _width = this.width + 'px'
          } else {
            _width = bodyStyles.width + 'px'
          }
        } else {
          _width = bodyStyles.width + 'px'
        }
        let _height = ''
        if (this.height) {
          if (this.height.match(/%$/)) {
            _height = parseFloat(String(this.height)) / 100 * bodyStyles.height + 'px'
          } else if (this.height.match(/px$/)) {
            _height = this.height
          } else if (this.height.match(/\d/g)) {
            _height = this.height + 'px'
          } else {
            _height = bodyStyles.height + 'px'
          }
        } else {
          _height = bodyStyles.height + 'px'
        }
        return {
          width: _width,
          height: _height,
          borderRadius: this.device === 'mobile' ? '0' : '4px'
        }
      }
    },
    watch: {
      shown (val) {
        this.realShown = val
      },
      realShown (val) {
        if (val) {
          setTimeout(() => {
            this.realContentShown = true
          }, 300)
        } else {
          this.$emit('close')
        }
      },
      realContentShown (val) {
        if (!val) {
          setTimeout(() => {
            this.realShown = false
          }, 300)
        }
      }
    },
    methods: {
      closeAgreements () {
        this.realContentShown = false
      }
    },
    components: {
      Agreements: () => import('./Agreements.vue')
    }
  }
</script>
