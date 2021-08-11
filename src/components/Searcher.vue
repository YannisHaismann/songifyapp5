<template>
  <h1>Searcher</h1>
  <input id="search-bar" type="text" @keyup="setMusic()" v-model="searchBarValue">
  <div name="list-songs" id="list-songs">
    <a :href="'/#/'+ song.id_track + '/' + song.id_artist + '/' + song.id_album" v-for="song in listSongApiHappi" :key="song">{{ song.track }} - {{ song.artist }}</a>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Searcher",
  data(){
    return{
      searchBarValue: "",
      urlApiHappi: "",
      listSongApiHappi: null
    }
  },
  methods:{
    // Taking ten songs on the Api Happi in function of what the user types in #search-bar
    setMusic(){
      if(!(this.searchBarValue == "")){
        this.urlApiHappi = "https://api.happi.dev/v1/music?q=" + this.searchBarValue + "&limit=5&apikey=e6ef26mYlSLiqcjSVpR6nhLirotXcxP2vqVhaDoZzyMflqqpFObYpiG4&type=track&lyrics=0";
        axios
            .get(this.urlApiHappi)
            .then((response) => {this.listSongApiHappi = response.data.result;})
            .catch(error => console.log(error));
      }
    }
  }
}
</script>

<style scoped>

</style>