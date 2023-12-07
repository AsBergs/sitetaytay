<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'
import Loading from 'vue-loading-overlay'

const genres = ref([])
const isLoading = ref(false)
const movies = ref([]);

onMounted(async () => {
  const response = await api.get('genre/movie/list?language=pt-BR')
  genres.value = response.data.genres
})


const listMovies = async (genreId) => {
    isLoading.value = true;
    const response = await api.get('discover/movie', {
        params: {
            with_genres: genreId,
            language: 'en-US',
            with_people: "212208"
        }
    });
    movies.value = response.data.results
    isLoading.value = false

};
function getGenreName(id) {
    const genero = genres.value.find((genre) => genre.id === id);
    return genero.name;
  }


</script>
<template clas="babe">
    <h1 class="title-movie">Movies</h1>
    <ul class="genre-list">
      <li v-for="genre in genres" :key="genre.id" @click="listMovies(genre.id)" class="genre-item">
          {{ genre.name }}
     </li> 
    
    </ul>
    <loading v-model:active="isLoading" is-full-page />


    <div class="movie-list">
  <div v-for="movie in movies" :key="movie.id" class="movie-card">
    
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
    <div class="movie-details">
      <p class="movie-title">{{ movie.title }}</p>
      <p class="movie-release-date">{{ movie.release_date }}</p>
      <p class="movie-genres">
        <span v-for="genre_id in movie.genre_ids" :key="genre_id" @click="listMovies(genre_id)">
          {{ getGenreName(genre_id) }} 
        </span>
      </p>
    </div>
    
  </div>
</div>

   
  </template>

<style scoped>
.babe{
  background-color: #9f97db;
}

.movie-release-date{
  color: rgb(94, 1, 122);

}
.title-movie{
  color: rgb(129, 3, 3);
  font-family: fantasy;
  
}
.genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  margin-bottom: 2rem;
}

.genre-item {
  background-color: #45abd3;
  border-width: 1rem;
  border-color: #126fe9;
  padding: 0.5rem 1rem;
  color: #fff;
}

.genre-item:hover {
  cursor: pointer;
  background-color: #126fe9;
  box-shadow: 0 0 0.5rem #45abd3;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.movie-card {
  width: 16.3rem;
  height: 30rem;
  background-color: #9f97db;
  margin-left: 0,3rem;
  
}

.movie-card img {
  width: 99%;
  height: 20rem;
  box-shadow: 0 0 0.3rem purple;

}

.movie-details {
  padding: 0 0.5rem;
}

.movie-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
  color:  rgb(94, 1, 122);
}

.movie-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
}

.movie-genres span {
  background-color: #45abd3;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #0d0d0d;
  font-size: 0.8rem;
  
}

.movie-genres span:hover {
  cursor: pointer;
  background-color: #13759c;
  box-shadow: 0 0 0.5rem #024763;
}
</style>