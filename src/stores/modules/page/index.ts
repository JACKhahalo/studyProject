import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { asideList } from '../../../assets/asideList';
type Page = {
  //活跃菜单
  activeMenuId: String;
  //活跃菜单children
  currentMenuItem: [any];
  //当前显示页面
  activePage: any;
};

export const usePageStore = defineStore('page', () => {
  //state
  const pageInfo = reactive<Page>({
    activeMenuId: asideList[0].id.toString(),
    currentMenuItem: asideList[0].children,
    activePage: asideList[0].children[0],
  });
  //活跃菜单
  const getId = () => {
    return pageInfo.activeMenuId;
  };

  const updataId = (id: any) => {
    pageInfo.activeMenuId = id;
  };
  //活跃菜单children
  const updataCurrentMenuItem = (id: any) => {
    pageInfo.currentMenuItem = asideList.filter(
      (item) => item.id == id
    )[0].children;
  };
  const getCurrentMenuItem = () => {
    return pageInfo.currentMenuItem;
  };
  //当前显示页面
  const updateActivePage = (id: any) => {
    pageInfo.activePage = pageInfo.currentMenuItem.filter((item) => {
      return item.id == id;
    })[0];
  };

  const getActivePage = () => {
    return pageInfo.activePage;
  };

  return {
    pageInfo,
    updataId,
    getId,
    updataCurrentMenuItem,
    getCurrentMenuItem,
    updateActivePage,
    getActivePage,
  };
});
