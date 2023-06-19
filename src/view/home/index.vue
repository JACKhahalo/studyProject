<template>
  <div id="main">
    <div class="main-container">
      <div class="aside">
        <AsideNav></AsideNav>
      </div>
      <div class="container">
        <div class="header"></div>
        <div class="main"></div>
        <div class="footer"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AsideNav from './asideNav.vue';
</script>
<style scoped lang="scss">
#main {
  margin: 0;
  padding: 0;
  height: 100%;
}
.main-container {
  display: flex;
  justify-content: space-between;

  height: 100%;
  width: 100%;
  .aside {
  }
  .container {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    background-color: #ebe6e6;
    .header {
      position: sticky;
      top: 0;
      height: 10%;
      min-height: 80px;
      width: 100%;
      background-color: #f0e0e0;
    }
    .main {
      height: 100%;
    }
  }
}
</style>
