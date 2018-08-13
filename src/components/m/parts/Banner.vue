<template>
  <div class="banner_container">
    <swiper :style="bannerStyles" :options="swiperOptions">
      <a class="swiper-slide" v-for="(item, index) in banners" :key="index" :href="item.href">
        <img :src="item.img">
      </a>
    </swiper>
  </div>
</template>

<style scoped>
  .banner_container {
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }
</style>

<script>
  export default {
    name: 'MobileBanner',
    data () {
      return {
        banners: [
          {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534148401753&di=1d9cafd74481e0d608f5960c4b0a70c7&imgtype=0&src=http%3A%2F%2Fimage16-c.poco.cn%2Fmypoco%2Fmyphoto%2F20141126%2F11%2F5668172320141126111052031.jpg%3F750x422_120',
            href: 'https://m.zhaopin.com'
          },
          {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534148401753&di=7a572c3cc28fc6ad12c123c130acf86d&imgtype=0&src=http%3A%2F%2Fimage16-c.poco.cn%2Fmypoco%2Fmyphoto%2F20140920%2F07%2F64477255201409200728541266090066356_002_640.jpg%3F1024x576_120',
            href: 'https://m.zhaopin.com'
          },
          {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534148401752&di=332f67d9cf0ecdddde7f15751caad1f1&imgtype=0&src=http%3A%2F%2Fimage17-c.poco.cn%2Fmypoco%2Fmyphoto%2F20150806%2F21%2F57638211201508062100353222170564137_008_640.jpg%3F2448x1376_120',
            href: 'https://m.zhaopin.com'
          },
          {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534148401752&di=062f64daaf31c2ce1d5cbeb6cb46211b&imgtype=0&src=http%3A%2F%2Fimage227-c.poco.cn%2Fmypoco%2Fmyphoto%2F20140715%2F22%2F3363668320140715222613091_640.jpg%3F1024x576_120',
            href: 'https://m.zhaopin.com'
          }
        ],
        swiperOptions: {
          autoplay: {
            delay: 3000
          }
        }
      }
    },
    computed: {
      bodyStyles () {
        return this.$store.state.bodyStyles
      },
      bannerStyles () {
        let _bodyWidth = this.$store.state.bodyStyles.width
        return {
          width: _bodyWidth + 'px',
          height: (422 * _bodyWidth / 750).toFixed(1) + 'px'
        }
      }
    },
    components: {
      Swiper: () => import('../../common/Swiper/Index.vue')
    }
  }
</script>
