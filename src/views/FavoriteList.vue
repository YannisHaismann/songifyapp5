<template>
  <div class="favorite-component">
    <h2 class="favorite-component__title">Mes musiques favorites</h2>
    <div v-if="songs.length >= 1" class="favorite-component__list list-favorites-songs">
      <div v-for="song in songs" id="song" :key="song">
        <a :href="'/#/'+ song.id_track + '/' + song.id_artist + '/' + song.id_album"> {{ song.track }} - {{ song.artist }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FavoriteList",
  data(){
    return{
      songs: [],
      songsIds: null,
    }
  },
  mounted() {
    this.getFavoritesSongs();
  },
  methods:{
    // Get data(songs) in localstorage and stock them into songsIds
    getFavoritesSongs() {
      var keys = Object.keys(localStorage),
          i = keys.length;
      while ( i-- ) {
        if(keys[i] > 10){
          var item = JSON.parse(localStorage.getItem(keys[i]));
          this.axiosRequest(item);
        }
      }
    },
    axiosRequest(item){
      var song = null;
      axios.get("https://api.happi.dev/v1/music/artists/" + item.id_artist + "/albums/" + item.id_album + "/tracks/" +
          item.id_track + '?apikey=e6ef26mYlSLiqcjSVpR6nhLirotXcxP2vqVhaDoZzyMflqqpFObYpiG4')
          .then((response) => {song = response.data.result; song.id_album = item.id_album;
            song.id_artist = item.id_artist; song.id_track = item.id_track; console.log(song); this.songs.push(song); })
          .catch((error) => { console.log(error) });
    }
  }
}
</script>

<style lang="scss" scoped>
  .favorite-component{
    &__title{
      text-align: center;
      text-decoration: underline;
    }
    &__list{
      padding: 30px;
      & > div{
        margin: 10px;
      }
    }
  }
</style>