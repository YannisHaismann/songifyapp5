<template>
  <header class="header">
    <h1>Songify</h1>
    <div @click="() => bool_theme = !bool_theme" id="theme-mode-btn">
      <div v-if="bool_theme" id="dark-theme-btn">
        <img class="theme-img" src="../assets/moon-logo.png" alt="dark-mode-img">
        <span>Dark Mode</span>
      </div>
      <div v-else id="light-theme-btn">
        <img class="theme-img" src="../assets/sun-logo.png" alt="light-mode-img">
        <span>Light Mode</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      bool_theme: true
    }
  }
}
</script>

<style scoped>
.theme-img{
  width: 32px;
  height: 32px;
}
.header{
  display: flex;
  justify-content: space-around;
}
</style>