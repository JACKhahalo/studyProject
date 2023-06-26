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
    //更新菜单
    pageInfo.currentMenuItem = asideList.filter(
      (item) => item.id == id
    )[0].children;
    //更新当前页面
    pageInfo.activePage = pageInfo.currentMenuItem[0];
  };
  const getCurrentMenuItem = () => {
    return pageInfo.currentMenuItem;
  };
  //当前显示页面
  const updateActivePage = (id?: any) => {
    if (id) {
      pageInfo.activePage = pageInfo.currentMenuItem.filter((item) => {
        return item.id == id;
      })[0];
    } else {
      pageInfo.activePage = pageInfo.currentMenuItem[0];
    }
    console.log(pageInfo.activePage, 'id');
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
