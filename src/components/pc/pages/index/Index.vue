<template>
  <div class="index_index">
    <headers :logo="pageData.header.logo" :tip1="pageData.header.tip1" :tip2="pageData.header.tip2"></headers>
    <banner v-if="pageData.banner && pageData.banner.length > 0" :data="pageData.banner" style="margin-bottom: 40px;"></banner>
    <live v-if="pageData.live" :data="pageData.live"></live>
  </div>
</template>
<style scoped>
  .index_index {
    background-color: #FFFFFF;
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
        return this.$store.state.allPageRoute[this.$route.params.pageName]
      }
    },
    created () {
      document.title = this.pageData.pageTitle
      console.log('>>>>>>>', this.pageData.banner)
    },
    components: {
      Headers: () => import('./modules/Headers.vue'),
      Banner: () => import('./modules/Banner.vue'),
      Live: () => import('./modules/Live.vue')
    }
  }
</script>
