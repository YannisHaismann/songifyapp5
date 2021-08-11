<template>
  <div v-if="song != null" class="song-informations">
    <h1>{{ song.track }} - {{ song.artist }}</h1>
    <img :src="song.cover" :alt="song.album">
    <img :src="urlSongGif" alt="">
  </div>
</template>

<script>

export default {
  name: "SongPage",
  data(){
    return{

    }
  },
  props: ['song', 'urlSongGif'],
  methods:{

  },
  computed:{
  }
}
</script>

<style scoped>

</style>