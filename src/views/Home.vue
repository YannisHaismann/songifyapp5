<template>
  <div class="home">
    <Searcher></Searcher>
    <SongPage></SongPage>
  </div>
</template>

<script>
// @ is an alias to /src
import Searcher from '@/components/Searcher.vue'
import SongPage from '@/components/SongPage.vue'

export default {
  name: 'Home',
  components: { Searcher, SongPage
  }
}
</script>
