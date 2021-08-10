<template>
  <h1>Searcher</h1>
  <input id="search-bar" type="text" @keyup="setMusic()" v-model="searchBarValue">
  <select name="list-songs" id="list-songs">
    <option v-for="music in listMusicApiHappi" :key="music">{{ music.track }} - {{ music.artist }}</option>
  </select>
</template>
<script>
import axios from "axios";

export default {
  name: "Searcher",
  data(){
    return{
      searchBarValue: "",
      urlApiHappi: "",
      listMusicApiHappi: 1
    }
  },
  methods:{
    // Taking ten songs on the Api Happi in function of what the user types in #search-bar
    setMusic(){
      if(!(this.searchBarValue == "")){
        this.urlApiHappi = "https://api.happi.dev/v1/music?q=" + this.searchBarValue + "&limit=10&apikey=e6ef26mYlSLiqcjSVpR6nhLirotXcxP2vqVhaDoZzyMflqqpFObYpiG4&type=track&lyrics=0";
        axios
            .get(this.urlApiHappi)
            .then((response) => {console.log(response.data.result); this.listMusicApiHappi = response.data.result;})
            .catch(error => console.log(error));
      }
    },

  },
  computed:{
  }
}
</script>

<style scoped>

</style>