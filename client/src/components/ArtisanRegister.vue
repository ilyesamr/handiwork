<template>
<div class="container">
    <h1>Artisan Signup</h1>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Phone Number</label>
    <input type="password" class="form-control" placeholder="Phone Number">
  </div>
     <div class="form-group">
  <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Plombier</option>
        <option value="1">Peintre</option>
        <option value="2">Serrurier</option>
        <option value="3">Maçon</option>
      <option value="3">Menuisier</option>
</select>
     </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>

<script>
export default {
  name: "ArtisanSignUp"
}
</script>

<style scoped>

</style>