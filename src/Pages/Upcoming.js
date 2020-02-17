import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieList from '../components/MovieList'
import LoadMore from '../components/shared/LoadMore'
import { getMovies } from '../reducers/movieReducer'

const Upcoming = (props) => {
  const upcoming = useSelector(state => state.upcoming)
  const dispatch = useDispatch()

  const handleLoadMore = () => {
    dispatch(getMovies('upcoming', upcoming.currentPage + 1))
  }

  return (
    <>
      <MovieList
        movies={upcoming.movies}
        categoryTitle="Upcoming"
      />
      <LoadMore 
        handleLoadMore={handleLoadMore}
      />
    </>
  )
}

export default Upcoming