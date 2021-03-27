<template>
  <div class="container">
        <div id="header">
         <div id="logo">
            <h3><span>Brico</span> Chez Amine</h3>
         </div>
         <nav class="navbar">
               <router-link :to="{name: 'HelloWorld'}">
            <a href="#"><strong><v-icon>mdi-home</v-icon> Accueil</strong></a>
               </router-link>
           <router-link :to="{name: 'GetArtisans'}">
            <a href="#" v-if="$store.state.isUserLoggedIn && $store.state.user.metier==='client'"><strong><v-icon>mdi-wrench</v-icon> Trouver un bricoleur</strong></a>
           </router-link>
             <router-link :to="{name: 'Login'}">
            <a href="#" class="last" v-if="!$store.state.isUserLoggedIn"><strong>Connexion</strong></a>
              </router-link>
           <v-menu offset-y v-if="$store.state.isUserLoggedIn">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
               text
            v-bind="attrs"
            v-on="on"
          >
           <v-icon>mdi-account</v-icon>  <strong>{{ $store.state.user.name }}</strong>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
          >
            <router-link :to="{name: 'Profile'}" class="myBtn">
            <a href="#" v-if="$store.state.isUserLoggedIn" class="myBtn"><strong> Mon profil</strong></a>
            </router-link>
          </v-list-item>
          <v-list-item v-if="$store.state.isUserLoggedIn && $store.state.user.metier==='client'" >
                <router-link :to="{name: 'Demandes'}" class="myBtn">
            <a href="#" class="myBtn"><strong> Mes demandes</strong></a>
           </router-link>
          </v-list-item>
           <v-list-item v-if="$store.state.isUserLoggedIn && $store.state.user.metier!=='client'">
             <router-link :to="{name: 'Offres'}" class="myBtn">
            <a href="#" class="myBtn"><strong> Mes offres</strong></a>
           </router-link>
           </v-list-item>
           <v-list-item v-if="$store.state.isUserLoggedIn && $store.state.user.metier!=='client'" >
             <router-link :to="{name: 'Messages'}" class="myBtn">
            <a href="/messages" class="myBtn"><strong> Mes messages</strong></a>
           </router-link>
          </v-list-item>
          <v-list-item v-if="$store.state.user.metier==='client'" >
            <router-link :to="{name: 'Favorites'}" class="myBtn">
            <a href="#" class="myBtn">
              <strong>
                Mes favoris</strong></a>
            </router-link>
            </v-list-item>
          <v-list-item>
            <router-link :to="{name: 'HelloWorld'}" class="myBtn">
            <a href="#" v-if="$store.state.isUserLoggedIn" @click="logout" class="myBtn">
              <strong>
                Se déconnecter</strong></a>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
         </nav>
    </div>
    </div>
</template>

<script>
require('@fortawesome/free-solid-svg-icons')
require('@fortawesome/fontawesome-svg-core')
require('@fortawesome/vue-fontawesome')
export default {
methods:{
  async logout(){
      await this.$store.dispatch('setToken', null)
      await this.$store.dispatch('setUser', null)
  }
  }
}
</script>

<style scoped>
*{
padding: 0px;
margin: 0px;
font-family: poppins, sans-serif;
font-weight: 700;
box-sizing: border-box;
}

#header{
padding: 20px;
width: 100%;
background: #FFF;
text-align: center;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
}

#header #logo{
font-style: italic;
font-size: 20px;
}

#header #logo span{
color: #564FCC;
}
#header nav{
color: #000;
}

#header nav a{
font-size: 14px;
text-decoration: none;
padding: 10px;
text-align: center;
color: black;
}

#header nav a:hover{
opacity: 0.9;
}
#header .last{
color: white;
background: #6C63FF;
padding: 10px 20px;
margin-left: 30px;
border-radius: 30px;
}
.myBtn{
  text-decoration: none;
  color: black;
}
</style>