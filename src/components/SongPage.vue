<template>
  <div v-if="song != null && album != null" class="song-informations">
    <h1>{{ song.track }} - {{ song.artist }}</h1>
    <img :src="album.cover" :alt="album.album">
    <img :src="urlSongGif" alt="">
    <div @click="addToFavorite" class="add-favorite-btn">
      <img v-if="favorite"  src="../assets/favorite-true.png" alt="">
      <img v-else src="../assets/favorite-false.png" alt="">
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "SongPage",
  mounted() {
    this.showSong();
    this.getSongAndMakeItGif(this.song);
  },
  created() {
    this.$watch(
        () => this.$route.params,
        () => {
          this.showSong();
          this.getSongAndMakeItGif(this.song);
        }
    )
  },
  updated() {
    this.checkIfIsFavorite();
  },
  data(){
    return{
      favorite: false,
      song: "",
      album: "",
      urlGiphy: "",
      urlSongGif: "",
      urlTrackApiHappi: "",
      urlAlbumApiHappi: ""
    }
  },
  methods:{
    // Add or remove from localstorage id of the track and change favorite btn in function
    addToFavorite(){
      if(this.favorite){
        localStorage.removeItem(this.song.id_track);
      }else{
        localStorage.setItem(this.song.id_track, JSON.stringify({id_track: this.song.id_track, id_album: this.album.id_album, id_artist: this.album.id_artist}));
      }
      this.checkIfIsFavorite();
    },
    // Check if the track is in localstorage and update variable favorite in function
    checkIfIsFavorite(){
      console.log(this.$route.params);
      if(localStorage.getItem(this.song.id_track)){
        this.favorite = true;
      }else{
        this.favorite = false;
      }
    },
    // Get song from child and transform user's song choice to a gif
    getSongAndMakeItGif(song){
      this.urlGiphy = "https://api.giphy.com/v1/gifs/translate?api_key=Dq9GQoW2xp0YpSYDvPsZinAO7gJFVsLO&s=" + song.track + "&weirdness=5";
      axios.get(this.urlGiphy)
          .then((response) => {this.urlSongGif = response.data.data.images.fixed_height_downsampled.url;})
          .catch(error => console.log(error));
      this.song = song;
    },
    // Get track & album informations with dynamic url and stock it in urlApiHappi
    showSong(){
      this.urlTrackApiHappi = "https://api.happi.dev/v1/music/artists/" + this.$route.params.id_artist + "/albums/" + this.$route.params.id_album + "/tracks/" + this.$route.params.id_track +
          "?apikey=e6ef26mYlSLiqcjSVpR6nhLirotXcxP2vqVhaDoZzyMflqqpFObYpiG4";
      axios
          .get(this.urlTrackApiHappi)
          .then((response) => {console.log(response); this.song = response.data.result;})

      this.urlAlbumApiHappi = "https://api.happi.dev/v1/music/artists/" + this.$route.params.id_artist + "/albums/" + this.$route.params.id_album + '?apikey=e6ef26mYlSLiqcjSVpR6nhLirotXcxP2vqVhaDoZzyMflqqpFObYpiG4';
      axios
          .get(this.urlAlbumApiHappi)
          .then((response) => {console.log(response); this.album = response.data.result;})
          .catch(error => console.log(error));
    }
  },
  computed:{

  }
}
</script>

<style scoped>

</style>