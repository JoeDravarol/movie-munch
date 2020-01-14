import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../../MovieList'

const TopRated = (props) => {
  const topRated = useSelector(state => state.topRated)

  return (
    <>
      <MovieList
        movies={topRated.movies}
        categoryTitle="Top Rated"
      />
    </>
  )
}

export default TopRated