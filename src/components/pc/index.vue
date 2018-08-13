<template>
  <div class="main_container">
    <headers></headers>
  </div>
</template>

<script>
  export default {
    name: 'PcIndex',
    components: {
      Headers: () => import('./parts/Headers.vue')
    }
  }
</script>

<style scoped>
  .main_container {
    width: 100%;
    height: 100%;
  }
</style>