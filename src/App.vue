<script setup>
</script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Movies</router-link>
      <router-link to="/tv">TV Shows</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  height: 5rem;
  display: flex;
  background-color: #292069;
  color: #4C467C;
  font-size: 1.2rem;
  padding-left: 2rem;
}

nav {
  column-gap: 1rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #ffffff;
  font-family: fantasy;
}
</style>
