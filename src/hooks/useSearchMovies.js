import { useState, useEffect } from 'react'
import tmdbApi from '../services/tmdb'

export default (movieQuery) => {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [cacheQuery, setCacheQuery] = useState(movieQuery)

  useEffect(() => {
    const initializeSearchMovie = async () => {
      const { page, results, total_pages } = await fetchMovies(movieQuery, 1)
      updateStates(results, page, total_pages)
    }

    initializeSearchMovie()
  }, [movieQuery])

  const fetchMovies = async (movieQuery, pageToGet) => {
    setIsLoading(true)
    const results = await tmdbApi.searchMovie(movieQuery, pageToGet)
    setIsLoading(false)

    return results
  }

  const updateStates = (movies, currentPage, totalPages) => {
    setMovies(movies)
    setCurrentPage(currentPage)

    if (totalPages)
      setTotalPages(totalPages)
  }

  const fetchMoreMovies = async () => {
    if (movieQuery === cacheQuery) {
      const { page, results } = await fetchMovies(movieQuery, currentPage + 1)
      const moreMovies = [...movies, ...results]
      updateStates(moreMovies, page)
    }
  }

  const result = {
    movies,
    currentPage,
    totalPages,
  }

  return {
    result,
    isLoading,
    fetchMoreMovies
  }
}