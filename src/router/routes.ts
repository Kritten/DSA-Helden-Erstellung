import { RouteRecordRaw } from 'vue-router';
import ViewHome from '@/modules/home/home.view.vue';
import ViewCreator from '@/modules/creator/creator.view.vue';
import ViewAbout from '@/modules/about/about.view.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: ViewHome,
  },
  {
    name: 'creator',
    path: '/creator',
    component: ViewCreator,
  },
  {
    name: 'about',
    path: '/about',
    component: ViewAbout,
  },
];

export default routes;
