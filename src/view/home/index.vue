<template>
  <div id="main">
    <div class="main-container">
      <div class="aside">
        <AsideNav></AsideNav>
      </div>
      <div class="container">
        <div class="header">
          <headNav></headNav>
        </div>
        <div class="main">
          <div class="card"><mainCard></mainCard></div>
          <div class="main-back"><background></background></div>
        </div>
        <!-- <div class="footer"></div> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AsideNav from './asideNav.vue';
import background from './background.vue';
import mainCard from './mainCard.vue';
import headNav from './headNav.vue';
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
    align-content: space-between;
    position: relative;
    width: 100%;
    .header {
    }
    .main {
      height: 100%;
      position: relative;
      .main-back {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
      }
      .card {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
      }
    }
  }
}
</style>
