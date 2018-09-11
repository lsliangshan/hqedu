<template>
  <div class="top_banner_container">
    <div class="top_banner_inner" :style="topBannerStyles">
      <swiper class="swiper_container" :options="swiperOptions" @init="initSwiper">
        <div class="swiper-slide swiper_item" v-for="(item, index) in data" :key="index" :style="{backgroundImage: 'url(' + item.img + ')'}" :data-path="item.href" @click="bannerHandler">
        </div>
        <div slot="pagination" class="swiper_pagination_container">
          <div class="swiper_pagination_item" v-for="(itm, idx) in data" :key="idx" :class="{'active': swiper && (swiper.activeIndex % data.length === idx)}" @click="slideTo(idx)"></div>
        </div>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
  .pen {
    pointer-events: none;
  }
  .top_banner_container {
    width: 100%;
    height: 100%;
    padding-bottom: 40px;
    background-color: #FFFFFF;
  }

  .swiper_container {
    min-width: 100%;
    min-height: 360px;
  }
  .swiper_item {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .swiper_pagination_container {
    position: absolute;
    right: 16px;
    bottom: 16px;
    display: block;
    z-index: 2;
    border-radius: 30px;
    padding: 8px 12px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .swiper_pagination_item {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    display: inline-block;
    float: left;
    margin: 0 3px;
    background-color: rgba(0, 0, 0, 0.1);
    border: 2px solid rgba(255, 255, 255, .6);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -ms-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }
  .swiper_pagination_item.active {
    background-color: rgba(255, 255, 255, .8);
  }
</style>

<script>
  export default {
    name: 'PageBanner',
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        activeMenuIndex: 0,
        swiperOptions: {
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          effect: 'fade'
        },
        swiper: null
      }
    },
    computed: {
      theme () {
        return this.$store.state.theme
      },
      topBannerStyles () {
        return {
          // maxWidth: '1000px',
          margin: '0 auto',
          height: '100%'
        }
      }
    },
    methods: {
      initSwiper (data) {
        this.swiper = data.swiper
      },
      slideTo (index) {
        this.swiper.slideTo(index, 1000, false)
      },
      bannerHandler (data) {
        this.$router.push({
          name: data.target.dataset.path
        })
      },
      mouseEnterHandler (evt) {
        this.activeMenuIndex = Number(evt.target.dataset.index)
      },
      mouseLeaveHandler (evt) {
        this.activeMenuIndex = -1
      },
      subItemClickHandler (evt) {
        this.$router.push({
          name: evt.target.dataset.path
        })
      },
      onSelect (name) {
        if (name.slice(-1) % 2 === 0) {
          this.$router.push({
            name: 'Register'
          })
        } else {
          this.$router.push({
            name: 'Login'
          })
        }
      }
    },
    components: {
      Swiper: () => import('../../../../common/Swiper/Index.vue')
    }
  }
</script>
