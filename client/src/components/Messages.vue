<template>
<v-container>
  <div class="text-center" v-if="messages.length>0">
    <br>
    <h1 class="display-1">Mes messages</h1><br>
          <v-row id="myRow">
      <v-col
        cols="12"
        sm="6"
        offset-sm="3"
      >
        <v-card width="1000px">
          <v-list two-line>
            <template v-for="item in messages">
              <v-list-item
                :key="item['client_name']"
              >

                  {{item['createdAt'].substring(0,10)}}

                <v-list-item-content>
                  <strong><v-list-item-title v-html="item.client_name"></v-list-item-title></strong>
                  <v-list-item-subtitle v-html="item.comment"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <div class="text-center" v-else>
    <br>
    <h1 class="display-1">Vous n'avez pas de messages pour le moment</h1>
  </div>
</v-container>
</template>

<script>
import ArtisansService from "@/services/ArtisansService";
export default {
  name: "Messages",
  data: () => ({
    items: [
      { header: 'Today' },
      { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: `<span class="font-weight-bold">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?` },
      { divider: true, inset: true },
      { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.` },
      { divider: true, inset: true },
      { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', title: 'Oui oui', subtitle: '<span class="font-weight-bold">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?' },
    ],
    messages: []
  }),
  async mounted() {
    if (this.$store.state.isUserLoggedIn) {
       if (this.$store.state.user.metier !== 'client') {
    console.log(this.$store.state.user.id)
      this.messages = (await ArtisansService.get_messages(this.$store.state.user.id)).data
      console.log(this.messages)
  }}}
}
</script>

<style scoped>

</style>