<template>
  <Header></Header>
  <nav>
    <router-link to="/">Accueil</router-link>
    <router-link to="/Favorites">Favorites</router-link>
  </nav>
  <router-view />
</template>
<style lang="scss">

</style>
<script>
import Header from "@/components/Header";

export default {
  components: {Header},
  data(){
    return{
      ddt: "cc",
      objectArray: ["oui", "non"]
    }
  }
}
</script>