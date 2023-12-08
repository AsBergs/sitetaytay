<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'

const genres = ref([])

onMounted(async () => {
  const response = await api.get('genre/tv/list?language=pt-BR')
  genres.value = response.data.genres
})

const tvshows = ref([]);

const listtvshows = async (genreId) => {
    const response = await api.get('discover/tv', {
        params: {
            with_genres: genreId,
            language: 'pt-BR',
            with_people: "212208"
        }
    });
    tvshows.value = response.data.results
};
</script>

<template>
    <h1 class="title-bitch">TV Shows</h1>
    <ul class="genre-list">
      <li v-for="genre in genres" :key="genre.id" @click="listtvshows(genre.id)" class="genre-item">
          {{ genre.name }}
     </li> 
    </ul>

    <div class="tvshow-list">
  <div v-for="tvshow in tvshows" :key="tvshow.id" class="tvshow-card">
    
    <img :src="`https://image.tmdb.org/t/p/w500${tvshows.poster_path}`" :alt="tvshows.name" />
    <div class="tvshow-details">
      <p class="tvshow-name">{{ tvshows.name }}</p>
      <p class="tvshow-first-air-date">{{ tvshows.first_air_date }}</p>
      <p class="tvshow-genres">{{ tvshows.genre_ids }}</p>
    </div>
    
  </div>
</div>

  </template>
  
  <style scoped>

.title-bitch{
  color: rgb(129, 3, 3);
}

.genre-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    padding: 0;
  }
  
  .genre-item {
    background-color: #9f97db;
    padding: 0.5rem 1rem;
    align-self: center;
    color: #fff;
    display: flex;
    justify-content: center;
  }
  
  .genre-item:hover {
    cursor: pointer;
    background-color: #9f97db;
    box-shadow: 0 0 0.5rem #716aa5;
  }

  .tvshow-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tvshow-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.tvshow-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.tvshow-details {
  padding: 0 0.5rem;
}

.tvshow-name {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}
  </style>