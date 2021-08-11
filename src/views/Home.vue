<template>
  <div class="home">
    <Searcher @openPage="getSongAndMakeItGif"></Searcher>
    <SongPage :urlSongGif="urlSongGif" :song="song"></SongPage>
  </div>
</template>

<script>
// @ is an alias to /src
import Searcher from '@/components/Searcher.vue'
import SongPage from '@/components/SongPage.vue'
import axios from "axios";

export default {
  name: 'Home',
  data(){
    return{
      song: "",
      urlGiphy: "",
      urlSongGif: ""
    }
  },
  components: { Searcher, SongPage },
  methods: {
    // Get song from child and user's song choice to a gif
    getSongAndMakeItGif(song){
        this.urlGiphy = "https://api.giphy.com/v1/gifs/translate?api_key=Dq9GQoW2xp0YpSYDvPsZinAO7gJFVsLO&s=" + song.track + "&weirdness=5";
        axios.get(this.urlGiphy)
            .then((response) => {console.log(response.data.data.images.fixed_height_downsampled.url);this.urlSongGif = response.data.data.images.fixed_height_downsampled.url;})
            .catch(error => console.log(error));
      this.song = song;
    }
  }
}
</script>
