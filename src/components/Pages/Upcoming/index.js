import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../../MovieList'

const Upcoming = (props) => {
  const upcoming = useSelector(state => state.upcoming)

  return (
    <>
      <MovieList
        movies={upcoming.movies}
        categoryTitle="Upcoming"
      />
    </>
  )
}

export default Upcoming