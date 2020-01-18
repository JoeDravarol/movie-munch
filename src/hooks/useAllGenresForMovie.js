import { useState, useEffect } from 'react'
import tmdbApi from '../services/tmdb'

// Custom hook for fetching all movies genres which enable other
// components to map movie's genre ids to genre name
export default () => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const _genres = await tmdbApi.getAllMovieGenres()

        setGenres(_genres)
      } catch (e) {
        console.log(e)
      }
    }

    fetchGenres()
  }, [])

  return genres
}