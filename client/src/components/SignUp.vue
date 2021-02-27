<template>
<div>
  <div class="container">
    <h2>Signup page</h2>
  <div class="text-center">
  <h3>Veuillez choisir le type du profil</h3>
         <router-link :to="{name: 'SignUpClient'}">
  <button type="button" class="btn btn-primary btn-lg">Client</button>
         </router-link>
           <router-link :to="{name: 'SignUpArtisan'}">
<button type="button" class="btn btn-secondary btn-lg">Artisan</button>
           </router-link>
</div>
</div>
</div>
</template>

<script>
export default {
  name: "SignUp"
}
</script>

<style scoped>

</style>