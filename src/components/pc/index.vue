<template>
  <div class="main_container">
    <headers></headers>
    <top-menu></top-menu>
    <top-banner></top-banner>
    <main-content></main-content>
    <footers bg-color="#FFFFFF"></footers>
  </div>
</template>

<script>
  export default {
    name: 'PcIndex',
    components: {
      Headers: () => import('./parts/Headers.vue'),
      TopMenu: () => import('./parts/TopMenu.vue'),
      TopBanner: () => import('./parts/TopBanner.vue'),
      MainContent: () => import('./parts/MainContent.vue'),
      Footers: () => import('./parts/Footers.vue')
    }
  }
</script>

<style scoped>
  .main_container {
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }
</style>