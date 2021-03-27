<template>
  <v-container>
<div class="text-center">
    <h1>Je m'inscris en tant que client</h1>
    <v-form
      ref="form"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="15"
        :rules="nameRules"
        label="Nom & prénom"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Mot de passe"
              hint="Au minimum 8 charactères"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          <div v-if="error.length>0">
      <v-alert
        border="top"
        color="red lighten-2"
        dark
      >
        {{error}}
      </v-alert>
          </div>
      <v-btn
        :disabled="email === '' || name ==='' || password.length<8"
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
import AuthenticationClientService from "@/services/AuthenticationClientService";
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
    ],
      show1: false,
      password: '',
      rules: {
        required: value => !!value || 'Requis.',
        min: v => v.length >= 8 || 'Min 8 charactères'
      },
      error: ''
  }),
    methods: {
    async register () {
      try {
        this.error = ''
        const response = await AuthenticationClientService.register({
          name: this.name,
          email: this.email,
          password: this.password,
          metier: "client"
        })
        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.user)
          await this.$router.push({
          name: 'ClientLogin'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    reset () {
      this.$router.push({ name: 'HelloWorld' })
    }
  },
}
</script>

<style scoped>

</style>