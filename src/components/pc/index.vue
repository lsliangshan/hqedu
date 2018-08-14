<template>
  <div class="main_container">
    <headers></headers>
    <top-menu></top-menu>
    <footers></footers>
  </div>
</template>

<script>
  export default {
    name: 'PcIndex',
    components: {
      Headers: () => import('./parts/Headers.vue'),
      TopMenu: () => import('./parts/TopMenu.vue'),
      Footers: () => import('./parts/Footers.vue')
    }
  }
</script>

<style scoped>
  .main_container {
    width: 100%;
    height: 100%;
  }
</style>