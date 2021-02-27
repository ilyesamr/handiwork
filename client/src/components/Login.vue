<template>
<div class="container">
  <h2>Login page</h2>
  <div class="text-center">
  <h3>Veuillez choisir le type du profil</h3>
         <router-link :to="{name: 'LoginClient'}">
  <button type="button" class="btn btn-primary btn-lg">Client</button>
         </router-link>
           <router-link :to="{name: 'LoginArtisan'}">
<button type="button" class="btn btn-secondary btn-lg">Artisan</button>
           </router-link>
</div>
</div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>