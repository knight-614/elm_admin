import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    children: [
        {
            path: 'homeContent',
            component: () => import('../views/HomeContent.vue'),
            meta: []
        },
        {
            path: 'userList',
            component: () => import('../views/UserList.vue'),
            meta: ['数据管理','用户列表']
        },
        {
            path: 'shopList',
            component: () => import('../views/ShopList.vue'),
            meta: ['数据管理','商家列表']
        },
        {
            path: 'foodList',
            component: () => import('../views/FoodList.vue'),
            meta: ['数据管理','食品列表']
        },
        {
            path: 'orderList',
            component: () => import('../views/OrderList.vue'),
            meta: ['数据管理','订单列表']
        },
        {
            path: 'managerList',
            component: () => import('../views/ManagerList.vue'),
            meta: ['数据管理','管理员列表']
        },
        {
            path: 'addStore',
            component: () => import('../views/AddStore.vue'),
            meta: ['添加数据','添加商铺']
        },
        {
            path: 'addCommodity',
            component: () => import('../views/AddCommodity.vue'),
            meta: ['添加数据','添加商品']
        },
        {
            path: 'userDistribution',
            component: () => import('../views/UserDistribution.vue'),
            meta: ['图表','用户分布']
        },
        {
            path: 'textEdit',
            component: () => import('../views/TextEdit.vue'),
            meta: ['编辑','文本编辑']
        },
        {
            path: 'managerSetting',
            component: () => import('../views/ManagerSetting.vue'),
            meta: ['设置','管理员设置']
        },
        {
            path: 'about',
            component: () => import('../views/AboutView.vue'),
            meta: ['说明','说明']
        },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
