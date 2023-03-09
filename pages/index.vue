<template>
  <div>
    <Headline />
    <Search />
    <MovieList />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Headline from '~/components/Headline'
import Search from '~/components/Search'
import MovieList from '~/components/MovieList'

export default {
  components: {
    Header,
    Headline,
    Search,
    MovieList
  },
  created() {
    this.$store.commit('movie/resetMovies')
  }
}
</script>
