<template>
  <div class="card-box">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { usePageStore } from '../../stores/index';

const router = useRouter();
const page = usePageStore();
watch(page.pageInfo, () => {
  if (page.pageInfo.currentMenuItem.length > 0) {
    router.push({
      path: page.pageInfo.currentMenuItem[0].path,
    });
    console.log('richText', page.pageInfo.currentMenuItem[0].path, router);
  }
});
</script>
<style scoped lang="scss">
@keyframes showBox {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.card-box {
  height: 90%;
  width: 90%;

  margin: auto;
  box-sizing: border-box;
  background-color: white;

  border-radius: 10px;
  border: 3px rgb(23, 185, 230) solid;

  opacity: 0;
  transform: scale(0.5);
  animation: showBox 1s ease-out forwards;
}
</style>
