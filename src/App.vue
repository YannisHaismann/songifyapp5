<template>
  <Header></Header>
  <Home></Home>
</template>
<style lang="scss">

</style>
<script>
import Header from "@/views/Header";
import Home from "@/views/Home";

export default {
  components: {Header, Home},
  data(){
    return{
      ddt: "cc",
      objectArray: ["oui", "non"]
    }
  }
}
</script>