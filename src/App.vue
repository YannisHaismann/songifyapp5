<template>
  <div :class="theme" id="page">
    <Header @themeChange="changeTheme"></Header>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/Favorites">Favorites</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {Header},
  data(){
    return{
      theme: "light"
    }
  },
  methods:{
    changeTheme(bool){
      if(bool){
        this.theme = "light";
      }else{
        this.theme = "dark";
      }
    }
  }
}
</script>

<style lang="scss">
  // - VARIABLES
  $screen: 1024px;
  $dark-background: hsl(210, 45%, 9%);
  $dark-header-background: hsl(210, 45%, 6%);
  $dark-text: hsl(200, 15%, 8%);

  // -/- GENERAL -/-
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
  html, body{
    width: 100%;
    height: 100vh;
  }
  #page{
    width: 100%;
    height: 100vh;
  }
  *{
    font-family: 'Nunito', sans-serif;
    margin: 0px;
  }
  a{
    text-decoration: none;
  }
  .light{
    & .search-bar__list{
      background-color: white;
    }
    background-color: white;
    color: $dark-text;
    & > header{
      background-color: lightgray;
    }
    & a{
      color: $dark-text;
    }
  }
  .dark{
    & .search-bar__list{
      background-color: $dark-header-background;
    }
    background-color: $dark-background;
    color: white;
    & > header{
      background-color: $dark-header-background;
    }
    & a{
      color: white;
    }
  }

  nav{
    display: flex;
    width: 300px;
    margin: auto;
    & > a{
      margin: 20px auto;
    }
  }

  // -/- MEDIA QUERIES -/-

  @media (max-width: 1024px){
    h1{
      font-size: 32px;
    }
    h2{
      font-size: 20px;
    }
    *{
      font-size: 16px;
    }
  }

  @media (min-width: 1024px){
    h1{
      font-size: 44px;
    }
    h2{
      font-size: 28px;
    }
    *{
      font-size: 20px;
    }
  }
</style>