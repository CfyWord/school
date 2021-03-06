import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue';
import Base from '../views/base/Base.vue';
import ProductList from '../views/list/ProductList.vue';
import Product from '../views/product/Product.vue';
import Search from "../views/product/Search";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'base',
    component: Base,
    redirect:{
      name:'home'
    },
    children:[
      {
        path: '/home',
        name:'home',
        component: Home
      },
      {
        path: '/list',
        name:'list',
        component: ProductList
      },
      {
        path: '/product',
        name:'product',
        component: Product
      },
      {
        path: '/search',
        name:'search',
        component: Search
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
