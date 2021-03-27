<template>
<v-container>
<div class="text-center">
    <h1>Je m'inscris en tant qu'artisan</h1>
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
         <v-select
            :items="items"
            label="Métier"
            :rules="metierRules"
            v-model="metier"
          ></v-select>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
       <v-text-field
        v-model="phone"
        :rules="phoneRules"
        label="Numéro de téléphone"
        required
        counter="10"
      >
       </v-text-field>
         <v-select
            :items="regions"
            label="Region"
            v-model="region"
          ></v-select>
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
        :disabled="email === '' || name ==='' || password.length<8 || metier === '' || phone === ''"
        color="success"
        class="mr-4"
        @click="register_artisan"
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
import AuthenticationArtisanService from "@/services/AuthenticationArtisanService";
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
      error: '',
      phone: '',
      phoneRules: [
        v => !!v || "Le numéro de téléphone est requis",
        v => /^\d+$/.test(v) || "Le numéro de téléphone doit contenir que des chiffres",
        v => (v && v.length <= 10) || 'Le numéro de téléphone ne doit pas dépasser 10 chiffres',
    ],
     items: ['Maçon', 'Menuisier', 'Peintre', 'Plombier'],
     metier: '',
     metierRules: [
      v => !!v || "Le métier est requis",
    ],
     region: '',
     regions: ['Alger', 'Oran', 'Bejaia', 'Constantine', 'Tlemcen', 'Relizane', 'Tizi Ouzou']
  }),
  methods:{
      async register_artisan(){
        try {
        this.error = ''
        const response = await AuthenticationArtisanService.register({
          name: this.name,
          metier: this.metier,
          email: this.email,
          phone: this.phone,
          region: this.region,
          password: this.password
        })
        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.client)
        await this.$router.push({
          name: 'ArtisanLogin'
        })
      } catch (error) {
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