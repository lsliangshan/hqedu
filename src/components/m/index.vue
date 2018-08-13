<template>
  <div class="main_container">
    <banner></banner>
    <headers></headers>
    <classes></classes>
  </div>
</template>

<script>
  export default {
    name: 'MobileIndex',
    components: {
      Banner: () => import('./parts/Banner.vue'),
      Headers: () => import('./parts/Headers.vue'),
      Classes: () => import('./parts/Classes.vue')
    }
  }
</script>

<style scoped>
  .main_container {
    width: 100%;
    height: 100%;
    background: #f2f2f2;
  }
</style>