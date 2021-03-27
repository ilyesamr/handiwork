<template>
  <v-container>
<div class="text-center">
    <h1>Page d'inscription</h1>
    <v-form
      ref="form"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="15"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-btn
        :disabled="email === '' || name ===''"
        color="success"
        class="mr-4"
        @click="register"
      >
        Register
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Cancel
      </v-btn>
    </v-form>
</div>
    </v-container>
</template>

<script>
export default {
    data: () => ({
    name: '',
    nameRules: [
      v => !!v || 'Le nom est requis',
      v => (v && v.length <= 15) || 'Le nom ne doit pas dépasser 15 charactères',
    ],
    email: '',
    emailRules: [
      v => !!v || "L'e-mail est requis",
      v => /.+@.+\..+/.test(v) || "L'e-mail doit être valide",
    ]
  }),
    methods: {
    register () {
      console.log(this.email)
      console.log(this.name)
    },
    reset () {
      this.$router.push({ name: 'HelloWorld' })
    }
  },
}
</script>

<style scoped>

</style>