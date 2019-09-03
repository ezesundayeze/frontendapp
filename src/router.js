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
import Bank from "@/views/Bank/index.vue";
import EditDesignation from "@/views/Designation/Edit.vue";
import AddDesignation from "@/views/Designation/Add.vue";
import Designation from "@/views/Designation/index.vue";
import EditPromotion from "@/views/Promotion/Edit.vue";
import AddPromotion from "@/views/Promotion/Add.vue";
import Promotion from "@/views/Promotion/index.vue";
import AddResignation from "@/views/Resignation/Add.vue";
import Resignation from "@/views/Resignation/index.vue";
import EditOvertime from "@/views/Overtime/Edit.vue";
import AddOvertime from "@/views/Overtime/Add.vue";
import Overtime from "@/views/Overtime/index.vue";
import EditTermination from "@/views/Termination/Edit.vue";
import AddTermination from "@/views/Termination/Add.vue";
import Termination from "@/views/Termination/index.vue";
import EditDepartment from "@/views/Department/Edit.vue";
import AddDepartment from "@/views/Department/Add.vue";
import Department from "@/views/Department/index.vue";
import EditLeave from "@/views/Leave/Edit.vue";
import AddLeave from "@/views/Leave/Add.vue";
import Leave from "@/views/Leave/index.vue";
import Holiday from "@/views/Holiday/index.vue";


import Store from './store';


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:Dashboard
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
      path:'/banks',
      name:'banks',
      component:Bank
    },
    {
      path:'/add-designation',
      name:'add-designation',
      component:AddDesignation
    },
    {
      path:'/edit-designation',
      name:'edit-designation',
      component:EditDesignation
    },
    {
      path:'/designations',
      name:'designations',
      component:Designation
    },
    {
      path:'/add-department',
      name:'add-department',
      component:AddDepartment
    },
    {
      path:'/adit-department',
      name:'adit-department',
      component:EditDepartment
    },
    {
      path:'/departments',
      name:'departments',
      component:Department
    },
    {
      path:'/add-leave',
      name:'add-leave',
      component:AddLeave
      },
      {
        path:'/edit-leave',
        name:'edit-leave',
        component:EditLeave
      },
      {
      path:'/leaves',
      name:'leaves',
      component:Leave
      },
    {
      path:'/add-promotion',
      name:'add-promotion',
      component:AddPromotion
    },
    {
      path:'/adit-promotion',
      name:'adit-promotion',
      component:EditPromotion
    },
    {
      path:'/promotions',
      name:'promotions',
      component:Promotion
    },
    {
      path:'/add-overtime',
      name:'add-overtime',
      component:AddOvertime
    },
    {
      path:'/edit-overtime',
      name:'edit-overtime',
      component:EditOvertime
    },
    {
      path:'/overtime',
      name:'overtime',
      component:Overtime
    },
    {
      path:'/add-resignation',
      name:'add-resignation',
      component:AddResignation
    },
    {
      path:'/resignations',
      name:'resignations',
      component:Resignation
    },
    {
      path:'/add-termination',
      name:'add-termination',
      component:AddTermination
    },
    {
      path:'/edit-termination',
      name:'adit-termination',
      component:EditTermination
    },
    {
      path:'/terminations',
      name:'terminations',
      component:Termination
    },
    {
    path:'/profile',
    name:'profile',
    component:Profile
    },
    {
      path:'/holidays',
      name:'holidays',
      component:Holiday
    },
    {
      path: '/about',
      name: 'about',
      
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited

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
