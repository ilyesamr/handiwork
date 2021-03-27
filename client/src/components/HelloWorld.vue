<template>
<div class="text-center">
   <br>
      <h1 class="display-2">
        <strong>Trouver le bricoleur qu'il vous faut en un seul clic !</strong>
      </h1>
      <br>
      <h4 class="font-weight-normal">
        <strong>Il s'agit d'une application qui permet aux clients de trouver un bricoleur facilement auprès de chez eux, <br>
        mais également aux bricoleurs de trouver des clients facilement.
        </strong></h4>
      <div class="text-center"><br>
          <router-link :to="{name: 'GetArtisans'}" class="myBtn" v-if="$store.state.isUserLoggedIn && $store.state.user.metier==='client'">
          <v-btn
            text
            color="success"
            height="50px"
          >
            C'est parti !
          </v-btn>
         </router-link>
         <router-link :to="{name: 'Offres'}" class="myBtn" v-else-if="$store.state.isUserLoggedIn && $store.state.user.metier!=='client'">
          <v-btn
            text
            color="success"
            height="50px"
          >
            C'est parti !
          </v-btn>
         </router-link>
          <router-link :to="{name: 'Login'}" class="myBtn" v-else>
          <v-btn
            text
            color="success"
            height="50px"
          >
            C'est parti !
          </v-btn>
         </router-link>
      </div><br>
      <div class="text-center">
        <img src="@/assets/undraw_swipe_profiles.svg" alt="#" width="29%">
      </div>
    </div>
</template>

<script>
export default {
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.myBtn{
  text-decoration: none;
}
</style>
