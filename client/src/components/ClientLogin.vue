<template>
 <v-container>
<div class="text-center">
   <h2>Je m'identifie en tant que client</h2>
    <v-form
      ref="form"
      lazy-validation
    >
      <v-text-field
        v-model="email"
        :counter="15"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Mot de passe"
        type="password"
        required
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
      <router-link :to="{name: 'ClientRegister'}" class="myBtn">
      <a href="#" class="float-left">Vous êtes nouveau ?</a><br><br>
      </router-link>
      <v-btn
        :disabled="email === '' || password ===''"
        color="success"
        class="mr-4"
        @click="login"
      >
        Login
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
    password: '',
    passwordRules: [
      v => !!v || 'Le mot de passe est requis'
    ],
    email: '',
    emailRules: [
      v => !!v || "L'e-mail est requis",
      v => /.+@.+\..+/.test(v) || "L'e-mail doit être valide",
    ],
  error: ''
  }),
    methods: {
    async login () {
      try{
        this.error = ''
        const response = await AuthenticationClientService.login({
          email: this.email,
          password: this.password
        })
        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.client)
        await this.$router.push({
          name: 'Profile'
        })
      }catch (error){
        this.error = error.response.data.error
      }
    },
    reset () {
      this.$router.push({ name: 'HelloWorld' })
    }
  }
}
</script>

<style scoped>

</style>