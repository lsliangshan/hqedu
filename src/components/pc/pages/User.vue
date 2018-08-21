<template>
  <div class="user_page_container" :style="userPageContainerStyles">
    <web-site src="http://user.hqwx.com"></web-site>
  </div>
</template>
<style scoped>
  .user_page_container {
    width: 100%;
    height: 100%;
  }
</style>
<script>
  export default {
    name: 'UserPage',
    components: {
      WebSite: () => import('../../common/WebSite/Index.vue')
    },
    data () {
      return {
      }
    },
    computed: {
      userPageContainerStyles () {
        let bodyStyles = this.$store.state.bodyStyles
        return {
          width: bodyStyles.width + 'px',
          height: bodyStyles.height + 'px'
        }
      }
    }
  }
</script>
