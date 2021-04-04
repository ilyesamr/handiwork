<template>
  <div id="app">
    <v-app>
    <PageHeader></PageHeader>
      <router-view />
      <Footer></Footer>
      </v-app>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components:{
    PageHeader,
    Footer
  }
}
</script>

<style>

</style>
