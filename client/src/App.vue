<template>
  <div id="app">
    <PageHeader></PageHeader>
      <router-view />
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
