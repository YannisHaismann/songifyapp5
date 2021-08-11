<template>
  <div v-if="song != null" class="song-informations">
    <h1>{{ song.track }} - {{ song.artist }} - {{ song.id_track }}</h1>
    <img :src="urlSongGif" alt="">
    <div @click="addToFavorite" class="add-favorite-btn">
      <img v-if="favorite"  src="../assets/favorite-true.png" alt="">
      <img v-else src="../assets/favorite-false.png" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: "SongPage",
  beforeUpdate() {
    this.checkIfIsFavorite();
  },
  data(){
    return{
      favorite: false,
    }
  },
  props: ['song', 'urlSongGif'],
  methods:{
    // Add or remove from localstorage id of the track and change favorite btn in function
    addToFavorite(){
      if(this.favorite){
        localStorage.removeItem(this.song.id_track);
      }else{
        localStorage.setItem(this.song.id_track, this.song.api_track);
      }
      this.checkIfIsFavorite();
    },
    // Check if the track is in localstorage and update variable favorite in function
    checkIfIsFavorite(){
      if(localStorage.getItem(this.song.id_track)){
        this.favorite = true;
      }else{
        this.favorite = false;
      }
    }
  },
  computed:{

  }
}
</script>

<style scoped>

</style>