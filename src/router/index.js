import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main.vue";
import RegisterForm from "@/pages/RegisterForm.vue";
import LoginForm from "@/pages/LoginForm.vue";
import Profile from "@/pages/Profile.vue";
import Workers from "@/pages/Workers.vue";
import profile from "@/pages/Profile.vue";
import OrderPage from "@/pages/OrderPage.vue";
import SettingsPage from "@/pages/SettingsPage.vue";
import ForgotPage from "@/pages/ForgotPage.vue";
import AdminPage from "@/pages/adminPage/AdminPage.vue";


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
      path: '/profile',
      component: Profile
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
      path: '/admin',
      component: AdminPage
    }

  ]
})

export default router
