import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import tmdbApi from '../services/tmdb'
import MovieInfo from '../components/MovieInfo'

const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const result = await tmdbApi.getMovieById(id)
      const reviewsData = await tmdbApi.getMovieReviews(id)
      setMovie(result)
      setReviews(reviewsData.results)
      setIsLoading(false)
    }
    fetchData()
  }, [id])

  if (isLoading) return <p>Loading...</p>

  return (
    <MovieInfo movie={movie} reviews={reviews} />
  )
}

export default Movie