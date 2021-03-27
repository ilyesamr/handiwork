import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/Login";
import ClientLogin from "@/components/ClientLogin";
import ArtisanLogin from "@/components/ArtisanLogin";
import Register from "@/components/Register";
import ClientRegister from "@/components/ClientRegister";
import ArtisanRegister from "@/components/ArtisanRegister";
import Profile from "@/components/Profile";
import GetArtisans from "@/components/GetArtisans";
import Demandes from "@/components/Demandes";
import Offres from "@/components/Offres";
import Favorites from "@/components/Favorites";
import Comments from "@/components/Comments";
import Messages from "@/components/Messages";
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
     {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login/artisan',
      name: 'ArtisanLogin',
      component: ArtisanLogin
    },
     {
      path: '/login/client',
      name: 'ClientLogin',
      component: ClientLogin
    },
         {
      path: '/register/artisan',
      name: 'ArtisanRegister',
      component: ArtisanRegister
    },
     {
      path: '/register/client',
      name: 'ClientRegister',
      component: ClientRegister
    },
     {
      path: '/profil',
      name: 'Profile',
      component: Profile
    },
      {
      path: '/bricoleur',
      name: 'GetArtisans',
      component: GetArtisans
    },
       {
      path: '/demandes',
      name: 'Demandes',
      component: Demandes
    },
       {
      path: '/offres',
      name: 'Offres',
      component: Offres
    },
      {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    },
      {
      path: '/commentaires',
      name: 'Comments',
      component: Comments
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages
    },
  ]
})