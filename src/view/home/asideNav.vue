<template>
  <div class="nav-box">
    <div class="avatar_box">
      <img src="src/assets/avater/avater.jpg" />
    </div>
    <div class="nav-item" v-for="item in menuList" :key="item.id">
      <div
        ref="menuRef"
        :id="item.id"
        :class="
          page.getId() == item.id
            ? 'detail-box active-datail-box'
            : 'detail-box'
        "
        @click="menuHandle(item.id)"
      >
        <img :src="`${iconBaseUrl}${item.icon}`" />
        <a>{{ item.label }}</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { asideList } from '../../assets/asideList.js';
import { usePageStore } from '../../stores/index';

//data--------------------------------------------------------------------
const iconBaseUrl: string = 'src/assets/icon/';
//菜单数组
let menuList: Array<any>;

//page
const menuRef = ref();
const page = usePageStore();

//methods----------------------------------------------------------------
//初始化
function init() {
  menuList = asideList;
}
function menuHandle(id: String) {
  page.updataId(id);
  page.updataCurrentMenuItem(id);
  console.log(id, page.getCurrentMenuItem());
}

init();
//hooks------------------------------------------------------------------
onMounted(() => {});
</script>
<style scoped lang="scss">
.nav-box {
  width: 80px;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(47, 76, 124, 1) 0%,
    rgba(20, 213, 224, 1) 100%
  );
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  overflow: hidden;
  .avatar_box {
    height: 75px;
    width: 75px;
    background-color: aliceblue;
    border-radius: 50%;
    margin: 20px 0 20px 2.5px;
    transition: 0.5s;
    overflow: hidden;

    img {
      height: 75px;
      width: 75px;
    }
  }
  .nav-item {
    .detail-box {
      margin: 10px 15px;
      display: flex;
      align-items: center;
      border-radius: 6px;

      img {
        width: 50px;
        margin-right: 10px;
      }
      a {
        //文字不换行
        white-space: nowrap;
        display: none;
        font-weight: 600;
        font-size: large;
        color: rgb(170, 168, 168);
      }
    }
  }
  .detail-box:hover,
  .active-datail-box {
    transition: 1s;
    background-color: aliceblue;
    cursor: pointer;
    a {
      display: inline;
      background: linear-gradient(
        90deg,
        rgba(12, 214, 62, 0.815) 0%,
        rgb(33, 180, 7) 43%,
        rgb(0, 174, 255) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
.nav-box:hover {
  width: 200px;
}
.nav-box:hover .nav-item .detail-box a {
  display: inline;
}
.nav-box:hover .avatar_box {
  // align-self: center;
  transform: translateX(70%);
  transition: 0.3s;
}
</style>
