<template>
  <div class="main_content_container">
    <div class="main_content_inner">
      <div class="course_group" v-for="(group, index) in list" :key="index">
        <div class="course_group_title">
          <span>{{group.text}}</span>
        </div>
        <div class="course_items">
          <div class="course_item" v-for="(item, idx) in group.sublist" :key="idx">
            <div class="course_item_inner" :class="[index % 2 === 0 ? 'style1' : 'style2']" :data-path="item.href" @click="itemClickHandler">
              <span>{{item.text}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main_content_container {
    width: 100%;
    margin-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .main_content_inner {
    max-width: 1000px;
    min-height: 100px;
    margin: 0 auto;
  }
  .course_group_title {
    width: 100%;
    font-size: 24px;
    height: 40px;
    font-weight: bold;
    border-bottom: 1px solid #000000;
    color: #333333;
  }
  .course_items {
    max-width: 1000px;
    margin: 0 auto;
  }
  .course_item {
    /*float: left;*/
    display: inline-block;
    width: 20%;
    height: 70px;
    font-size: 16px;
    padding: 10px;
    line-height: 50px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .course_item_inner {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    text-align: center;
    color: #000000;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 1px #ADADAD;
    -moz-box-shadow: 0px 0px 1px #ADADAD;
    box-shadow: 0px 0px 1px #ADADAD;
  }
  .course_item_inner:hover {
    color: #ee491f;
  }
  .course_item_inner * {
    pointer-events: none;
  }
  .course_item_inner.style1 {
    background-color: #DCE8F7;
  }
  .course_item_inner.style2 {
    background-color: #EEEEEE;
  }
</style>

<script>
  export default {
    name: 'PcMainContent',
    data () {
      return {
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
      list () {
        return this.$store.state.allCategory
      }
    },
    methods: {
      itemClickHandler (evt) {
        this.$router.push({
          name: evt.target.dataset.path
        })
      }
    },
    components: {
      Swiper: () => import('../../common/Swiper/Index.vue')
    }
  }
</script>
