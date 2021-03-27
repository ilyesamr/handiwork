<template>
  <v-container>
<div class="text-center">
    <h2>Je suis un : </h2>
      <br>
      <br>
  <v-row>
  <v-card
      class="mx-auto"
      max-width="344"
    >
      <img
        src="@/assets/undraw_client.svg"
        width="50%"
       alt="#">
      <v-card-title>
        Client
      </v-card-title>

      <v-card-actions>
           <router-link :to="{name: 'ClientLogin'}" class="myBtn">
        <v-btn
          color="orange lighten-2"
          text
        >
          Explorer
        </v-btn>
           </router-link>
        <v-spacer></v-spacer>

        <v-btn
          icon
          @click="display = !display"
        >
          <v-icon>{{ display ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition v-if="display===true">
        <div >
          <v-divider></v-divider>

          <v-card-text>
              Trouver votre artisan rapidement !
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <img
        src="@/assets/undraw_artisan.svg"
        height="200px"
       alt="#">
      <div class="justify-content-center">
      <v-card-title class="text-center">
        Artisan
      </v-card-title>
</div>
      <v-card-actions>
           <router-link :to="{name: 'ArtisanLogin'}" class="myBtn">
        <v-btn
          color="orange lighten-2"
          text
        >
          Explorer
        </v-btn>
           </router-link>
        <v-spacer></v-spacer>

        <v-btn
          icon
          @click="display = !display"
        >
          <v-icon>{{ display ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition v-if="display===true">
        <div >
          <v-divider></v-divider>

          <v-card-text>
              Trouver vos clients rapidement !
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    </v-row>
</div>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    show1: false,
    display: false,
  }),
}
</script>

<style scoped>
.myBtn{
  text-decoration: none;
}
</style>