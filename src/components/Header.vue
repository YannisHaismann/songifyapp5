<template>
  <header class="header">
    <h1>Songify</h1>
    <div @click="() => {bool_theme = !bool_theme; $emit('themeChange', bool_theme)}" class="theme-btn" id="theme-mode-btn">
      <div class="theme-btn__btn" v-if="bool_theme" id="light-theme-btn">
        <img class="theme-btn__btn-img" src="../assets/sun-logo.png" alt="light-mode-img">
        <span>Light Mode</span>
      </div>
      <div class="theme-btn__btn" v-else id="Dark-theme-btn">
        <img class="theme-btn__btn-img" src="../assets/moon-logo.png" alt="Dark-mode-img">
        <span>Dark Mode</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  emits: ['themeChange'],
  data(){
    return{
      bool_theme: true
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  justify-content: space-around;
  padding: 20px;
  align-items: center;
}

.theme-btn{
  height: 40px;
  &:hover{
    cursor: pointer;
  }
  &__btn{
    display: inline-block;
    margin: auto;
    & > span{
      margin: 10px;
    }
    &-img{
      width: 32px;
      height: 32px;
      float: left;
    }
  }
}
</style>