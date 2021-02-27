import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/Login";
import ClientLogin from "@/components/ClientLogin";
import ArtisanLogin from "@/components/ArtisanLogin";
import SignUp from "@/components/SignUp";
import ClientSignUp from "@/components/ClientSignUp";
import ArtisanSignUp from "@/components/ArtisanSignUp";
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
     {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login/artisan',
      name: 'LoginArtisan',
      component: ArtisanLogin
    },
     {
      path: '/login/client',
      name: 'LoginClient',
      component: ClientLogin
    },
         {
      path: '/signup/artisan',
      name: 'SignUpArtisan',
      component: ArtisanSignUp
    },
     {
      path: '/signup/client',
      name: 'SignUpClient',
      component: ClientSignUp
    },
  ]
})