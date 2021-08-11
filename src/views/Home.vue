<template>
  <div class="home">
    <Searcher></Searcher>
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
  mounted() {
    if(this.$route.params.id_track != ""){
      this.showSong();
      this.getSongAndMakeItGif(this.song);
    }
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
  data(){
    return{
      song: "",
      urlGiphy: "",
      urlSongGif: ""
    }
  },
  components: { Searcher, SongPage },
  methods: {
    // Get song from child and transform user's song choice to a gif
    getSongAndMakeItGif(song){
        this.urlGiphy = "https://api.giphy.com/v1/gifs/translate?api_key=Dq9GQoW2xp0YpSYDvPsZinAO7gJFVsLO&s=" + song.track + "&weirdness=5";
        axios.get(this.urlGiphy)
            .then((response) => {this.urlSongGif = response.data.data.images.fixed_height_downsampled.url;})
            .catch(error => console.log(error));
      this.song = song;
    },
    // Get track informations with dynamic url and stock it in urlApiHappi
    showSong(){
        this.urlApiHappi = "https://api.happi.dev/v1/music/artists/" + this.$route.params.id_artist + "/albums/" + this.$route.params.id_album + "/tracks/" + this.$route.params.id_track + '?apikey=e6ef26mYlSLiqcjSVpR6nhLirotXcxP2vqVhaDoZzyMflqqpFObYpiG4';
        axios
            .get(this.urlApiHappi)
            .then((response) => {this.song = response.data.result;})
            .catch(error => console.log(error));

      }
    }
}
</script>
