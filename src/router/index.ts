import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LayoutPage from '../views/LayoutPage.vue';
import TransferPage from '../views/TransferPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: LayoutPage,
    children: [
      {
        path: '',
        component: TransferPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
