<template>
  <div class="header">
    <div class="shy-back">
      <shyBack></shyBack>
    </div>
    <div
      v-for="item in cloudList"
      :class="
        page.pageInfo.activePage.id == item.id
          ? 'cloud active active-animation'
          : 'cloud'
      "
      :key="item.id"
      @click="cloudClickHandle(item.id)"
    >
      <div class="cloud-item"></div>
      <div class="cloud-item"></div>
      <div class="cloud-title">{{ item.label }}</div>
      <div class="cloud-item"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import shyBack from './shyBack.vue';
import { usePageStore } from '../../stores/index';
import { nextTick, ref, watch } from 'vue';

const page = usePageStore();
let cloudList = ref(page.getCurrentMenuItem());

watch(page.pageInfo, () => {
  // console.log(newVal, oldVal, 'watch', page.getCurrentMenuItem());
  cloudList.value = page.getCurrentMenuItem();
});

function cloudClickHandle(id: any) {
  page.updateActivePage(id);
  nextTick(() => {
    console.log(page.getActivePage());
  });
}

// watchEffect(() => {
//   console.log('watchEffect', page.getCurrentMenuItem());
//   cloudList.value = page.getCurrentMenuItem();
// });
</script>
<style lang="scss" scoped>
$cloud-color: rgb(255, 255, 255);
$cloud-active-color: rgb(198, 207, 202);

@keyframes rain {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 30px);
  }
}

@keyframes cloud-show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.header {
  position: sticky;
  top: 0;
  min-height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shy-back {
  top: 0;
  position: absolute;
  width: 100%;
  z-index: -2;
}
.cloud {
  height: 50px;
  width: 100px;
  background-color: $cloud-color;
  border-radius: 50%;
  position: relative;
  transition: 1s;

  transform: 1s;
  opacity: 0;
  animation: cloud-show 1s ease-out forwards;
  .cloud-title {
    z-index: 2;
    position: absolute;
    font-size: larger;
    color: rgb(143, 144, 145);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .cloud-item {
    transition: 0.8s;
  }
  .cloud-item:first-child {
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 80%;
    background-color: $cloud-color;
  }
  .cloud-item:last-child {
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 80%;
    background-color: $cloud-color;

    right: 0;
  }
  .cloud-item:nth-child(2) {
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 80%;
    background-color: $cloud-color;
    bottom: 30%;
    left: 25%;
  }
}

.active.cloud,
.cloud:hover {
  transition: 0.5s;
  background-color: $cloud-active-color;
  .cloud-item {
    transition: 0.5s;
    background-color: $cloud-active-color;
  }
  .cloud-title {
    transition: 0.5s;
    opacity: 1;
  }
}
.cloud:hover::after,
.active-animation::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
  height: 20px;
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.5) 100%
  );
  animation: rain 1s linear infinite;
}
</style>
