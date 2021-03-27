<template>
<v-container>
    <div class="text-center">
    <h2>Bienvenue dans la page d'inscription</h2>
      <br><hr><br>
      <h3>Vous êtes un : </h3>
      <br>
      <v-form>
       <router-link :to="{name: 'ClientRegister'}">
            <v-btn
              text
              color="success"
              height="50px"
              class="mr-4"
            >
              Client
            </v-btn>
       </router-link>
      <router-link :to="{name: 'ArtisanRegister'}">
          <v-btn
            text
            color="error"
            height="50px"
            class="mr-4"
          >
            Artisan
          </v-btn>
       </router-link>
      </v-form>
</div>
</v-container>
</template>

<script>
export default {
  name: "SignUp"
}
</script>

<style scoped>
.MyBtn{
  text-decoration: none;
}
</style>