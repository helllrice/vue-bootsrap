import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main.vue";
import RegisterForm from "@/pages/RegisterForm.vue";
import LoginForm from "@/pages/LoginForm.vue";
import Profile from "@/pages/Profile.vue";
import Workers from "@/pages/Workers.vue";
import OrderPage from "@/pages/OrderPage.vue";
import SettingsPage from "@/pages/SettingsPage.vue";
import ForgotPage from "@/pages/ForgotPage.vue";
import AdminPage from "@/pages/adminPage/Dashboard.vue";
import AuthPage from "@/pages/AuthPage.vue";
import Dashboard from "@/pages/adminPage/Dashboard.vue";
import Home from "@/pages/adminPage/AdminWorkers.vue";
import AdminWorkers from "@/pages/adminPage/AdminWorkers.vue";
import AdminOrders from "@/pages/adminPage/AdminOrders.vue";
import AdminSettings from "@/pages/adminPage/AdminSettings.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/register',
      component: RegisterForm
    },
    {
      path: '/login',
      component: LoginForm
    },
    {
      path: '/workers',
      component: Workers
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/order',
      component: OrderPage
    },
    {
      path: '/settings',
      component: SettingsPage
    },
    {
      path: '/forgot',
      component: ForgotPage
    },
    {
      path: '/auth-main',
      component: AuthPage
    },
    {
      path: '/admin',
      component: Dashboard
    },
    {
      path: '/admin-workers',
      component: AdminWorkers
    },
    {
      path: '/admin-orders',
      component: AdminOrders
    },
    {
      path: '/admin-settings',
      component: AdminSettings
    }
  ]
})

export default router
