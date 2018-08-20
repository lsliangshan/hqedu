<template>
  <div class="top_banner_container">
    <div class="top_banner_inner" :style="topBannerStyles">
      <slot name="menu">
        <div class="top_banner_menu_container">
          <div class="top_banner_menu_item" v-for="(item, index) in menus.slice(0, 8)" :key="index" :class="[index % 2 === 0 ? 'style1' : 'style2']" :data-index="index" @mouseenter="mouseEnterHandler" @mouseleave="mouseLeaveHandler">
            <span>{{item.text}}</span>
            <transition name="sub-menu-transition"
                        enter-active-class="animated faster fadeInDown"
                        leave-active-class="animated faster fadeOutUp"
            >
              <div class="top_banner_menu_sub_container" v-if="activeMenuIndex === index">
                <div class="top_banner_menu_sub_item" v-for="(itm, idx) in item.sublist" :key="idx" :data-path="itm.href" @click="subItemClickHandler">
                  <span class="pen">{{itm.text}}</span>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </slot>
      <slot>
        <div class="top_banner_right">
          <swiper class="swiper_container" :options="swiperOptions" @init="initSwiper">
            <div class="swiper-slide swiper_item" v-for="(item, index) in banners" :key="index" :style="{backgroundImage: 'url(' + item.img + ')'}" :data-path="item.href" @click="bannerHandler">
            </div>
            <div slot="pagination" class="swiper_pagination_container">
              <div class="swiper_pagination_item" v-for="(itm, idx) in banners" :key="idx" :class="{'active': swiper && (swiper.activeIndex % banners.length === idx)}" @click="slideTo(idx)"></div>
            </div>
          </swiper>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
  .pen {
    pointer-events: none;
  }
  .top_banner_container {
    width: 100%;
    height: 300px;
  }
  .top_banner_menu_container {
    width: 150px;
    height: 100%;
    float: left;
    background-color: #FFFFFF;
    border: 1px solid #e2e2e2;
    -webkit-box-shadow: 0px 1px 5px #dddddd;
    -moz-box-shadow: 0px 1px 5px #dddddd;
    box-shadow: 0px 1px 5px #dddddd;
  }
  .top_banner_menu_item {
    position: relative;
    height: 37px;
    line-height: 37px;
    font-size: 14px;
    cursor: pointer;
    color: #555555;
    text-align: center;
  }
  .top_banner_menu_item.style1 {
    background-color: #FFFFFF;
  }
  .top_banner_menu_item.style2 {
    background-color: #f5f5f5;
  }
  .top_banner_menu_item:hover {
    background-color: #25a5ff;
    color: #FFFFFF;
  }
  .top_banner_menu_sub_container {
    position: absolute;
    left: 150px;
    top: 0;
    z-index: 999;
    width: 400px;
    text-align: left;
    border-radius: 5px;
    padding: 10px 12px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border: 1px solid #e2e2e2;
    -webkit-box-shadow: 0px 1px 5px #dddddd;
    -moz-box-shadow: 0px 1px 5px #dddddd;
    box-shadow: 0px 1px 5px #dddddd;
  }
  .top_banner_menu_sub_item {
    display: inline-block;
    font: normal 12px "Mcrosoft Yahei";
    padding: 2px 5px;
    text-align: center;
    color: #333333;
    border-radius: 2px;
  }
  .top_banner_menu_sub_item:hover {
    background-color: #25a5ff;
    color: #FFFFFF;
  }

  .top_banner_right {
    width: 836px;
    height: 268px;
    margin-top: 16px;
    background-color: lightcyan;
    float: right;
  }
  .swiper_container {
    min-width: 836px;
    min-height: 268px;
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
    name: 'PcTopBanner',
    data () {
      return {
        activeMenuIndex: 0,
        banners: [
          {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534148401753&di=1d9cafd74481e0d608f5960c4b0a70c7&imgtype=0&src=http%3A%2F%2Fimage16-c.poco.cn%2Fmypoco%2Fmyphoto%2F20141126%2F11%2F5668172320141126111052031.jpg%3F750x422_120',
            href: 'Register'
          },
          {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534148401753&di=7a572c3cc28fc6ad12c123c130acf86d&imgtype=0&src=http%3A%2F%2Fimage16-c.poco.cn%2Fmypoco%2Fmyphoto%2F20140920%2F07%2F64477255201409200728541266090066356_002_640.jpg%3F1024x576_120',
            href: 'Login'
          },
          {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534148401752&di=332f67d9cf0ecdddde7f15751caad1f1&imgtype=0&src=http%3A%2F%2Fimage17-c.poco.cn%2Fmypoco%2Fmyphoto%2F20150806%2F21%2F57638211201508062100353222170564137_008_640.jpg%3F2448x1376_120',
            href: 'Register'
          },
          {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534148401752&di=062f64daaf31c2ce1d5cbeb6cb46211b&imgtype=0&src=http%3A%2F%2Fimage227-c.poco.cn%2Fmypoco%2Fmyphoto%2F20140715%2F22%2F3363668320140715222613091_640.jpg%3F1024x576_120',
            href: 'Login'
          }
        ],
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
          maxWidth: '1000px',
          margin: '0 auto',
          height: '100%'
        }
      },
      menus () {
        return this.$store.state.allCategory
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
        console.log('....', evt.target.dataset.path)
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
      Swiper: () => import('../../common/Swiper/Index.vue')
    }
  }
</script>
