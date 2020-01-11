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

export default {
  getMovies
}