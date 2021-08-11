<template>
  <h1>FavoriteList</h1>
  <div v-if="songsIds.length >= 1" class="list-favorites-songs">
    <div v-for="song in songsIds" id="song" :key="song">
      <p> {{ song.track }} - {{ song.artist }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FavoriteList",
  data(){
    return{
      songsIds: []
    }
  },
  mounted() {
    this.getFavoritesSongs();
  },
  methods:{
    // Get data(songs) in localstorage and stock them into songsIds
    getFavoritesSongs() {
      var values = [],
          keys = Object.keys(localStorage),
          i = keys.length;
      while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
        axios.get(localStorage.getItem(keys[i]) + "?apikey=e6ef26mYlSLiqcjSVpR6nhLirotXcxP2vqVhaDoZzyMflqqpFObYpiG4")
        .then((response) => {console.log(response.data.result); this.songsIds.push(response.data.result) })
        .catch((error) => { console.log(error) });
      }
    }
  }
}
</script>

<style scoped>

</style>