import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from '@/views/Dashboard'
import Login from "@/views/Account/Login.vue";
import Register from "@/views/Account/Register.vue";
import EmployeeList from "@/views/Employee/List.vue";
import Profile from "@/views/Employee/Profile.vue";
import ForgotPassword from "@/views/Account/ForgotPassword.vue";
import AddEmployee from "@/views/Employee/Add.vue";
import EditEmployee from "@/views/Employee/Edit.vue";
import EditBank from "@/views/Bank/Edit.vue";
import AddBank from "@/views/Bank/Add.vue";


import Store from './store';


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:Dashboard
      // beforeEnter: ifAuthenticated,
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/forgot-password',
      name:'forgot-password',
      component:ForgotPassword
    },
    {
      path:'/employee-list',
      name:'employee-list',
      component:EmployeeList
    },
    {
      path:'/add-employee',
      name:'add-employee',
      component:AddEmployee
    },
    {
      path:'/edit-employee',
      name:'edit-employee',
      component:EditEmployee
    },
    {
      path:'/edit-bank',
      name:'edit-bank',
      component:EditBank
    },
    {
      path:'/add-bank',
      name:'add-bank',
      component:AddBank
    },
    {
    path:'/profile',
    name:'profile',
    component:Profile
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

const openRoutes = ["login", "register", "forgot-password", "add-employee","edit-employee", "add-bank", "edit-bank", "profile"]

router.beforeEach((to, from, next) => {
  // Store.dispatch('fetchAccessToken');
  Store.dispatch('fetchAccessToken')
  if (openRoutes.includes(to.name)) {
    next()
  } else if (Store.state.accessToken) {
    next()
  } else {
    next("/login")
  }
});

export default router;
