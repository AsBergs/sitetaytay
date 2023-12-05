import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTFiZjZiOGY2OGQyOGMxMWFiMzM0MDVmYzZhNTM5NiIsInN1YiI6IjY1MDlhYTJjMzczYWMyMDExYzQwMmUzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l_QSqJZK6gxDY_cEJHEKGkrcR8oMAOPkuKMr78KiiVA`
  }
})

export default api