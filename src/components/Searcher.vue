<template>
  <h1>Searcher</h1>
  <input id="search-bar" type="text" @keyup="setMusic()" v-model="searchBarValue">
  <select name="list-songs" id="list-songs">
    <option @click="$emit('openPage', song)" v-for="song in listSongApiHappi" :key="song">{{ song.track }} - {{ song.artist }}</option>
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
      listSongApiHappi: 1
    }
  },
  emits: ['openPage'],
  methods:{
    // Taking ten songs on the Api Happi in function of what the user types in #search-bar
    setMusic(){
      if(!(this.searchBarValue == "")){
        this.urlApiHappi = "https://api.happi.dev/v1/music?q=" + this.searchBarValue + "&limit=10&apikey=e6ef26mYlSLiqcjSVpR6nhLirotXcxP2vqVhaDoZzyMflqqpFObYpiG4&type=track&lyrics=0";
        axios
            .get(this.urlApiHappi)
            .then((response) => {this.listSongApiHappi = response.data.result;})
            .catch(error => console.log(error));
      }
    }
  },
  computed:{
  }
}
</script>

<style scoped>

</style>