<template>
  <div id="app">
    <v-app>
    <PageHeader></PageHeader>
      <router-view />
      </v-app>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  name: 'App',
  components:{
    PageHeader
  }
}
</script>

<style>

</style>
