import { useState, useEffect } from 'react'
import tmdbApi from '../services/tmdb'

export default (movieQuery) => {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      const { page, results, total_pages } = await tmdbApi.searchMovie(movieQuery, 1)
      setMovies(results)
      setCurrentPage(page)
      setTotalPages(total_pages)
      setIsLoading(false)
    }
    fetchMovies()
  }, [movieQuery])

  const result = {
    movies,
    currentPage,
    totalPages,
  }

  return {
    result,
    isLoading,
    setCurrentPage
  }
}