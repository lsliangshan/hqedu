<template>
  <div class="web_site_container">
    <iframe :src="src" frameborder="0"></iframe>
  </div>
</template>
<style scoped>
  .web_site_container {
    width: 100%;
    height: 100%;
  }
  .web_site_container iframe {
    width: 100%;
    height: 100%;
  }
</style>
<script>
  export default {
    name: 'WebSite',
    props: {
      src: {
        type: String
      }
    },
    data () {
      return {
      }
    },
    components: {}
  }
</script>
