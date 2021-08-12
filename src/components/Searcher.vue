<template>
  <div class="searcher-component">
    <input id="search-bar" type="text" @keyup="setMusic()" v-model="searchBarValue">
    <div class="search-bar__list" name="list-songs" id="list-songs">
      <a :href="'/#/'+ song.id_track + '/' + song.id_artist + '/' + song.id_album" v-for="song in listSongApiHappi" :key="song">{{ song.track }} - {{ song.artist }}</a>
    </div>
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
        this.urlApiHappi = "https://api.happi.dev/v1/music?q=" + this.searchBarValue + "&limit=30&apikey=e6ef26mYlSLiqcjSVpR6nhLirotXcxP2vqVhaDoZzyMflqqpFObYpiG4&type=track&lyrics=0";
        axios
            .get(this.urlApiHappi)
            .then((response) => {this.listSongApiHappi = response.data.result;})
            .catch(error => console.log(error));
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .searcher-component{
    position: relative;
    & > input{
      width: 300px;
      display: block;
        margin: auto;
      }
  }

  .search-bar{
    &__list{
      margin: 10px auto;
      border-radius: 10px;
      position: absolute;
      width: 60%;
      display: block;
      left: 0;
      right: 0;
      max-height: 340px;
      overflow-y: scroll;
      & > a{
        text-align: center;
        display: block;
        margin: 10px;
        padding: 5px;
        border: 2px solid cadetblue;
        border-radius: 5px;
      }
    }
  }
</style>