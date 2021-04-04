<template>
<div>
  <v-footer
      dark
      padless
      absolute
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">
         <strong class="subheading">Nom : MOSTEFA Mohammed Amine</strong>
          <v-spacer></v-spacer>
               <v-spacer></v-spacer>
          <strong>Département informatique, USTHB, Alger, ALgérie</strong>
                 <v-spacer></v-spacer>
          <strong>amostefa82@gmail.com</strong>
          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>USTHB</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</div>
</template>

<script>
export default {
name: "Footer",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>

<style scoped>

</style>