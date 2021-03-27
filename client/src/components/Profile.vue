<template>
  <v-container>
    <br>
<div class="text-center">
  <v-row>
    <v-col>
   <img src="@/assets/undraw_profile.svg" alt="#" width="100%">
      </v-col>
      <v-col>
        <br> <br><br>
   <v-card
      class="mx-auto"
      max-width="500"
      tile
    >
      <v-list dense>
        <v-subheader><h1 class="text-center">Mes informations :</h1></v-subheader>
        <br>
        <v-list-item-group
          color="primary"
        >
          <v-list-item
          >
            <v-list-item-content>
              <h2>Nom : {{this.$store.state.user.name}}</h2>
            </v-list-item-content>
          </v-list-item>
           <v-list-item
          >
            <v-list-item-content>
              <h2>Email : {{this.$store.state.user.email}}</h2>
            </v-list-item-content>
          </v-list-item>
          <div v-if="this.$store.state.user.metier !== 'client'">
            <v-list-item
          >
            <v-list-item-content>
              <h2 class="text-center">Métier : {{this.$store.state.user.metier}}</h2>
            </v-list-item-content>
          </v-list-item>
            <v-list-item
          >
            <v-list-item-content>
              <h2 class="text-center">Numéro de téléphone : {{this.$store.state.user.phone}}</h2>
            </v-list-item-content>
          </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-card>
     </v-col>
    </v-row>
  <br>
  <div>
  </div>
</div>
    </v-container>
</template>

<script>
export default {
  name: "",
}
</script>

<style scoped>

</style>