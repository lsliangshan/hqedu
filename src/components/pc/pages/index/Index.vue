<template>
  <div class="index_index">
    <headers :logo="pageData.header.logo" :tip1="pageData.header.tip1" :tip2="pageData.header.tip2"></headers>
    <banner v-if="pageData.banner && pageData.banner.length > 0" :data="pageData.banner"></banner>
    <live v-if="pageData.live && pageData.live.class && pageData.live.class.length > 0" :data="pageData.live"></live>
    <consultation v-if="pageData.consultation" :data="pageData.consultation"></consultation>
    <course-signup v-if="pageData.courseSignup" :data="pageData.courseSignup"></course-signup>
    <course-set></course-set>
    <tiku></tiku>
    <dbgm></dbgm>
    <lklc></lklc>
    <youshi></youshi>
  </div>
</template>
<style scoped>
  .index_index {
    /*background-color: #FFFFFF;*/
  }
</style>
<script>
  export default {
    name: 'IndexIndex',
    data () {
      return {}
    },
    computed: {
      pageData () {
        return this.$store.state.allPageRoute[this.$route.params.queryType]
      }
    },
    created () {
      document.title = this.pageData.pageTitle
    },
    components: {
      Headers: () => import('./modules/Headers.vue'),
      Banner: () => import('./modules/Banner.vue'),
      Live: () => import('./modules/Live.vue'),
      Consultation: () => import('./modules/Consultation.vue'),
      CourseSignup: () => import('./modules/CourseSignup.vue'),
      CourseSet: () => import('./modules/CourseSet.vue'),
      Tiku: () => import('./modules/Tiku.vue'),
      Dbgm: () => import('./modules/Dbgm.vue'),
      Lklc: () => import('./modules/Lklc.vue'),
      Youshi: () => import('./modules/Youshi.vue')
    }
  }
</script>
