import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  }
})

const getMovies = async (moviesType, pageToGet) => {
  const response = await instance.get(`/movie/${moviesType}`, {
    params: {
      page: pageToGet
    }
  })
  return response.data
}

// Use to match genres id, so genre name can be display with movie list
const getAllMovieGenres = async () => {
  const response = await instance.get('genre/movie/list')
  return response.data.genres
}

export default {
  getMovies,
  getAllMovieGenres,
}