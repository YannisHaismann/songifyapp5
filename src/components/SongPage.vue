<template>
  <div v-if="showBool" class="song-informations">
    <h2 class="song-informations__title">
      {{ song.track }} - {{ song.artist }}
      <div class="song-informations__favorite-btn add-favorite-btn" @click="addToFavorite">
        <img v-if="favorite"  src="../assets/favorite-true.png" alt="">
        <img v-else src="../assets/favorite-false.png" alt="">
      </div>
    </h2>
    <div class="song-informations__text">
      <p class="song-informations__text__album-title">From: {{ song.album }}</p>
      <p class="song-informations__text__bpm">Bpm: {{ song.bpm }}</p>
    </div>
    <img class="song-informations__album-cover" :src="album.cover" :alt="album.album">
    <img class="song-informations__gif" :src="urlSongGif" alt="">
  </div>
  <div v-else>
    <br>
    <p class="introduction-sentence">🚀 Tap the title of a track just up there ! 🚀 </p>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "SongPage",
  mounted() {
      this.showSong();
      this.checkIfIsFavorite();
  },
  created() {
    this.$watch(
        () => this.$route.params,
        () => {
          this.showSong();
          this.checkIfIsFavorite();
        }
    )
  },
  updated() {
    if(this.$route.params.id_track == ""){
      this.showBool = false;
    }
  },
  data(){
    return{
      favorite: false,
      song: "",
      album: "",
      urlSongGif: "",
      showBool: false
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
      if(localStorage.getItem(this.$route.params.id_track) != null){
        this.favorite = true;
      }else{
        this.favorite = false;
      }
    },
    // Get song from child and transform user's song choice to a gif
    getSongAndMakeItGif(){
      axios.get("https://api.giphy.com/v1/gifs/translate?api_key=Dq9GQoW2xp0YpSYDvPsZinAO7gJFVsLO&s=" + this.song.track + "&weirdness=5")
          .then((response) => {this.urlSongGif = response.data.data.images.fixed_height_downsampled.url;})
          .catch(error => console.log(error));
    },
    // Get track & album informations with dynamic url and stock it in urlApiHappi
    showSong(){
      axios
          .get("https://api.happi.dev/v1/music/artists/" + this.$route.params.id_artist + "/albums/" + this.$route.params.id_album + "/tracks/" + this.$route.params.id_track +
              "?apikey=e6ef26mYlSLiqcjSVpR6nhLirotXcxP2vqVhaDoZzyMflqqpFObYpiG4")
          .then((response) => {this.song = response.data.result;})

      axios
          .get("https://api.happi.dev/v1/music/artists/" + this.$route.params.id_artist + "/albums/" + this.$route.params.id_album + '?apikey=e6ef26mYlSLiqcjSVpR6nhLirotXcxP2vqVhaDoZzyMflqqpFObYpiG4')
          .then((response) => {this.showBool = true; this.album = response.data.result; this.getSongAndMakeItGif();})
          .catch(error => console.log(error));
    }
  }
}
</script>

<style lang="scss" scoped>
  .introduction-sentence{
    text-align: center;
  }
  .song-informations{
    display: grid;
    grid-template-columns: repeat(20, 5%);
    grid-template-rows: repeat(20, 30px);
    padding: 15px;
    &__title{
      grid-column: 1 / 21;
      grid-row: 1 / 2;
      text-align: center;
      text-decoration: underline;
    }
    &__album-cover{
      grid-column: 3 / 11;
      grid-row: 4 / 10;
      @media (min-width: 1024px) {
        width: 400px;
      }
      @media (max-width: 1024px) {
        width: 200px;
      }
    }
    &__text{
      grid-column: 12 / 20;
      grid-row: 4 / 6;
    }
    &__gif{
      @media (min-width: 1024px) {
        width: 400px;
        max-height: 400px;
      }
      @media (max-width: 1024px) {
        width: 200px;
        max-height: 200px;
      }
      grid-column: 12 / 20;
      grid-row: 7 / 18;
    }
  }
</style>