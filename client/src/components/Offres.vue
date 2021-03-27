<template>
<v-container>
  <div class="text-center">
          <br>
    <v-card>
      <v-card-title>
        <strong>Mes demandes</strong>
         <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Rechercher une offre..."
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
           <div class="alert alert-danger" v-show="error">
            {{error}}
        </div>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="offres"
      item-key="id"
      class="elevation-1"
      :search="search"
    >
    </v-data-table>
       </v-card>
  </div>
</v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
  offres:[],
    error: '',
    search:'',
    selected:'',
       headers: [
        {
          text: 'N°',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: "Nom", value: 'client_name' , align: 'center'},
        { text: "Email", value: 'client_email' , align: 'center'},
        { text: 'Date de réservation', value: 'reservation', sortable: false, align: 'center'},
        { text: 'Date du rendez-vous', value: 'reservation_date', sortable: false, align: 'center'},
      ],
}),
  async mounted(){
    if (this.$store.state.isUserLoggedIn){
      if(this.$store.state.user.metier!=='client'){
        let artisan_id = this.$store.state.user.id
        this.offres = (await axios.get('http://localhost:8081/get-offers-artisans', {params: {artisan_id}})).data
        this.offres.forEach(element=>{
          element['reservation'] = element['createdAt'].substring(0, 10)
        })
        }
    }
    console.log(this.offres)
  }
}
</script>

<style scoped>

</style>