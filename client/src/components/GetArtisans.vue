<template>
<v-container>
  <div class="text-center">
    <br>
    <v-card>
      <v-card-title>
        <strong>Liste des bricoleurs</strong>
         <v-spacer></v-spacer>
             <v-btn
        text
        color="primary"
        v-if="selected.length>0 && selected.length<2"
        @click="reserve"
      ><i class="far fa-handshake" id="MyIcon"></i>
              Réserver pour le : {{picker}}
      </v-btn>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Rechercher un bricoleur par son : Nom, Métier, Région"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
           <div class="alert alert-danger" v-show="error">
            <v-alert
        border="top"
        color="red lighten-2"
        dark
      >
        {{error}}
      </v-alert>
        </div>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="bricoleurs"
      item-key="id"
      show-select
      @click:row="handleClick"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:item.date="{ item }">
        <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            <i class="fas fa-calendar-alt" id="Icon"></i>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
          >
            <v-date-picker
        v-model="picker"
        year-icon="mdi-calendar-blank"
        prev-icon="mdi-skip-previous"
        next-icon="mdi-skip-next"
        @click="get_date(item['id'])"
      ></v-date-picker>
          </v-list-item>
        </v-list>
      </v-menu>
                </template>
      <template v-slot:item.actions="{ item }">
                    <v-btn color="warning" class="mr-4" @click="add_to_favorite(item['id'])" ><i class="far fa-star"></i></v-btn>
         <v-btn color="success" class="mr-4" @click="consult_profile(item)" ><i class="fas fa-user"></i></v-btn>
                </template>
    </v-data-table>
       </v-card>
  </div>
</v-container>
</template>
<script>
import ArtisansService from "@/services/ArtisansService";
import ClientsService from "@/services/ClientsService";
export default {
  name: "GetArtisans",
  data: () => ({
    space: ' ',
    singleSelect: false,
    selected: [],
    search: '',
    error: '',
    headers: [
      {
        text: 'N°',
        align: 'start',
        sortable: false,
        value: 'id',
      },
      {text: 'Name', value: 'name', align: 'center'},
      {text: 'Metier', value: 'metier', align: 'center'},
      {text: 'Region', value: 'region', align: 'center'},
      {text: 'Date du rendez-vous', value: 'date', sortable: false, align: 'center'},
      {text: 'Actions', value: 'actions', sortable: false, align: 'center'},
    ],
    bricoleurs: [],
    picker: new Date().toISOString().substr(0, 10),
  }),
  methods: {
    handleClick(value) {
      console.log(this.selected)
      console.log(value)
      console.log("khra")
    },
    reserve() {
      console.log(this.selected)
      console.log(this.picker)
      let reservation = {
        'client_name': this.$store.state.user.name, 'client_email': this.$store.state.user.email,
        'client_id': this.$store.state.user.id, 'reservation_date': this.picker.toString(),
        'artisan_name': this.selected[0]['name'], 'artisan_phone': this.selected[0]['phone'],
        'artisan_metier': this.selected[0]['metier'],
        'artisan_id': this.selected[0]['id']
      }
      console.log(reservation)
      ArtisansService.reserve(reservation).then(res=>{
        console.log(res)
        this.$swal({
              icon: "success",
              title: 'Success ! ',
              text: "Votre demande a été prise en compte, vous serez contacté par l'artisan prochainement",
              confirmButtonColor: '#3085d6',
              confirmButtonText: "Ok",
              onClose: () => {
                 this.$router.push({ name: 'Demandes' })
                }
            })
      })

    },
    get_date(id) {
      console.log(id)
      console.log(this.picker)
    },
    async add_to_favorite(value) {
      try {
        this.error = ''
        console.log(value)
        await ClientsService.add_favorite(value, this.$store.state.user.id).then(res=>{
          console.log(res)
          this.$swal({
              icon: "success",
              title: 'Success ! ',
              text: "L'artisan est ajouté dans vos favoris",
              confirmButtonColor: '#3085d6',
              confirmButtonText: "Ok",
              onClose: () => {
                this.$router.push({ name: 'Favorites' })
                }
            })
        })
        console.log("yeaaah")
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async consult_profile(item) {
      console.log(item)
      this.$swal({
        title: 'Voici le profil de cet artisan',
        html: "Nom : " + item['name'] + "<br>"
        + "Métier : " + item['metier'] +"<br>"
        + "Numéro de téléphone : " + item['phone'] +"<br>"
        + "Membre depuis : " + item['membre_depuis'].substring(0, 10),
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Consulter les commentaires',
        cancelButtonText: 'Annuler',
        buttonsStyling: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.navigateTo({
            name:'Comments',
            params: {
              artisanId: item['id'],
              artisanName: item['name']
            }
            })
        }
      })
    },
      navigateTo (route) {
      this.$router.push(route)
    }
  },
    async mounted() {
      if (this.$store.state.isUserLoggedIn) {
        if (this.$store.state.user.metier === 'client') {
          this.bricoleurs = (await ArtisansService.index()).data
          console.log(this.bricoleurs)
        }
      }
    }
}
</script>

<style scoped>
#MyIcon{
  padding-right: 8%;
}
#Icon{
  padding-right: 8%;
}
</style>