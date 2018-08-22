<template>
  <div class="agreements_container">
    <iframe src="http://www.hqwx100.cn/register/agree.htm" frameborder="0"></iframe>
  </div>
</template>
<style scoped>
  .agreements_container {
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling:touch; overflow: scroll;
  }
  .agreements_container iframe {
    width: 100%;
    min-height: 100%;
    overflow-y: auto;
  }
</style>
<script>
  export default {
    name: 'Agreements',
    data () {
      return {}
    },
    computed: {
    },
    components: {}
  }
</script>
