<template>
  <div class="home">
    <Searcher @openPage="getSongFromChild"></Searcher>
    <SongPage :song="song"></SongPage>
  </div>
</template>

<script>
// @ is an alias to /src
import Searcher from '@/components/Searcher.vue'
import SongPage from '@/components/SongPage.vue'

export default {
  name: 'Home',
  data(){
    return{
      song: " "
    }
  },
  components: { Searcher, SongPage },
  methods: {
    getSongFromChild(song){
      console.log(song);
      this.song = song;
    }
  }
}
</script>
