<template>
<v-container>
  <div class="text-center">
    <br>
       <v-card
      class="mx-auto"
      max-width="800"
    >
      <v-card-text>
        <div>Section des commentaires</div>
        <p class="display-1 text--primary">
          @{{ artisanName }}
        </p>
          <v-form>
      <v-container>
        <v-row>
          <v-col cols="10">
            <v-text-field
              v-model="comment"
              outlined
              clearable
              label="Message"
              type="text"
            >
            </v-text-field>
          </v-col>
             <v-col cols="2" v-if="comment.length>0">
               <v-btn
                   style="margin-top: 10px"
                  @click="add_new_comment"
                   color="primary"
               >Send <i class="fas fa-paper-plane" id="MyIcon"></i></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="teal accent-4"
          @click="reveal = true"
        >
          Voir les commentaires
        </v-btn>
      </v-card-actions>

      <v-expand-transition>

        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%;"
        >
          <div v-if="comments.length>0">
          <v-card-text class="pb-0" v-for="comment in comments" :key="comment.id">
            <p class="display-1 text--primary">
              {{comment['client_name']}}
            </p>
            <p>{{comment['comment']}} </p>
          </v-card-text>
             </div>
           <div v-else>
             <br>
          Pas de commentaires pour l'instant, Soyez le premier !
        </div>
          <v-card-actions class="pt-0">
            <v-btn
              text
              color="teal accent-4"
              @click="reveal = false"
            >
              Fermer
            </v-btn>
          </v-card-actions>
        </v-card>


      </v-expand-transition>
    </v-card>
  </div>

</v-container>
</template>

<script>
import ClientsService from "@/services/ClientsService";
export default {
  name: "Comments",
  data: () => ({
    reveal: false,
    comment: '',
    artisanId: '',
    artisanName: '',
    comments: [],
    write: false
  }),
  methods:{
    async add_new_comment(){
      try {
        await ClientsService.add_comment(this.$store.state.user.id, this.$store.state.user.name, this.artisanId,
            this.comment).then((res) => {
            console.log(res)
            this.$swal({
                  title: 'Commentaire publié',
                  text: "Votre comment a été publié, merci d'avoir donné votre avis ",
                  icon: 'success',
                  confirmButtonColor: '#3085d6',
                  confirmButtonText: 'Ok',
                  buttonsStyling: true,
                  onClose: () => {
                           this.$router.push({
                    name: 'GetArtisans'
                  })
                }
                })
                      })
      }catch (e) {
        console.log(e)
      }
    }
  },
  async mounted() {
     if (this.$store.state.isUserLoggedIn) {
       if (this.$store.state.user.metier === 'client') {
         this.artisanId = this.$store.state.route.params.artisanId
         this.artisanName = this.$store.state.route.params.artisanName
         this.comments = (await ClientsService.get_comments(this.artisanId)).data
         console.log(this.comments)
         console.log(this.artisanId)
         console.log(this.$store.state.user.id)
       }
     }}
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