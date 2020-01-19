import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../../MovieList'
import LoadMore from '../../shared/LoadMore'

const Upcoming = (props) => {
  const upcoming = useSelector(state => state.upcoming)

  return (
    <>
      <MovieList
        movies={upcoming.movies}
        categoryTitle="Upcoming"
      />
      <LoadMore 
        movieType="upcoming"
        initialPage={upcoming.currentPage}
      />
    </>
  )
}

export default Upcoming