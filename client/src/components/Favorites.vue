<template>
<v-container>
  <div class="text-center">
        <br>
    <v-card>
      <v-card-title>
        <strong>Liste des favoris</strong>
         <v-spacer></v-spacer>
             <v-btn
        text
        color="primary"
        v-if="selected1.length>0 && selected1.length<2"
         @click="reserve_favorite"
      ><i class="far fa-handshake" id="MyIcon"></i>
              Réserver pour le : {{picker1}}
      </v-btn>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search1"
          append-icon="mdi-magnify"
          label="Rechercher un bricoleur par son : Nom, Métier"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
    <v-data-table
      v-model="selected1"
      :headers="headers1"
      :items="favorites"
      item-key="id"
      show-select
      @click:row="handleClick1"
      class="elevation-1"
      :search="search1"
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
        v-model="picker1"
        year-icon="mdi-calendar-blank"
        prev-icon="mdi-skip-previous"
        next-icon="mdi-skip-next"
        @click="get_date1(item['id'])"
      ></v-date-picker>
          </v-list-item>
        </v-list>
      </v-menu>
                </template>
      <template v-slot:item.actions="{ item }">
         <v-btn color="error" class="mr-4" @click="remove_favorite(item['id'])" ><i class="fas fa-trash-alt"></i></v-btn>
                </template>
    </v-data-table>
       </v-card>
  </div>
</v-container>
</template>

<script>
import ClientsService from "@/services/ClientsService";
import ArtisansService from "@/services/ArtisansService";
export default {
   data: () => ({
      favorites: [],
       headers1: [
        {
          text: 'N°',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Name', value: 'artisan_name' , align: 'center'},
        { text: 'Metier', value: 'artisan_metier' , align: 'center'},
        { text: 'Phone number', value: 'artisan_phone', sortable: false, align: 'center'},
        { text: 'Date du rendez-vous', value: 'date', sortable: false, align: 'center'},
        { text: 'Actions', value: 'actions', sortable: false, align: 'center'},
      ],
     selected1: '',
     search1: '',
     picker1: new Date().toISOString().substr(0, 10),
     msg_success: ''
   }),
  async mounted() {
      if (this.$store.state.isUserLoggedIn) {
        if (this.$store.state.user.metier === 'client') {
          console.log(this.$store.state.user.id)
          this.favorites = (await ClientsService.index(this.$store.state.user.id)).data
          console.log(this.favorites)
        }}
  },
  methods:{
         handleClick1(value)
    {
      console.log(this.selected1)
      console.log(value)
         console.log("khra")

    },
   get_date1(id){
      console.log(id)
      console.log(this.picker1)
    },
    async reserve_favorite(){
      let id = this.selected1[0]['artisan_id']
       let metier = this.selected1[0]['artisan_metier']
       let name = this.selected1[0]['artisan_name']
       let phone = this.selected1[0]['artisan_phone']
      console.log(this.picker1)
      let reservation = {'client_name': this.$store.state.user.name, 'client_email': this.$store.state.user.email,
                         'client_id': this.$store.state.user.id, 'reservation_date': this.picker1.toString(),
                         'artisan_name': name, 'artisan_phone': phone,
                          'artisan_metier': metier,
                          'artisan_id': id}
      console.log(reservation)
      await ArtisansService.reserve(reservation).then(res=>{
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
    })},
    async remove_favorite(id) {
           this.msg_success = ''
      console.log(id)
      await ClientsService.remove_my_favorite(id).then(res=>{
        console.log(res)
        window.location.reload()
      })
    },
  }
}
</script>

<style scoped>
#MyIcon{
  padding-right: 8%;
}
#MyIcon{
  padding-right: 8%;
}
</style>