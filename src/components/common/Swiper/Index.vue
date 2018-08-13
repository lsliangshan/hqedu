<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" style="width: 100%; height: 100%;">
      <slot></slot>
    </div>

    <slot name="pagination">
      <div class="swiper-pagination">
      </div>
    </slot>

    <slot name="nav-prev">
      <div class="swiper-button-prev" v-if="options.navigation && options.navigation.prevEl">
      </div>
    </slot>

    <slot name="nav-next">
      <div class="swiper-button-next" v-if="options.navigation && options.navigation.nextEl">
      </div>
    </slot>
  </div>
</template>

<style>
  @import "../../../../node_modules/swiper/dist/css/swiper.min.css";
  .swiper-container {
    width: 320px;
    height: 200px;
  }
  .my-bullet {
    background-color: #FFFFFF;
    opacity: .4;
    width: 8px;
    height: 8px;
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
  }
  .my-bullet-active {
    background-color: #FFFFFF;
    opacity: 1;
  }
</style>

<script>
  import Swiper from 'swiper'
  export default {
    name: 'Swiper',
    props: {
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        swiper: null
      }
    },
    created () {
      this.$nextTick(() => {
        this.init()
      })
    },
    methods: {
      init () {
        let options = Object.assign({}, {
          direction: 'horizontal',
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            bulletClass: 'my-bullet',
            bulletActiveClass: 'my-bullet-active'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }, this.options)
        this.swiper = new Swiper('.swiper-container', options)
      }
    }
  }
</script>
