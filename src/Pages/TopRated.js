import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieList from '../components/MovieList'
import LoadMore from '../components/shared/LoadMore'
import { getMovies } from '../reducers/movieReducer'

const TopRated = (props) => {
  const topRated = useSelector(state => state.topRated)
  const dispatch = useDispatch()

  const handleLoadMore = () => {
    dispatch(getMovies('top_rated', topRated.currentPage + 1))
  }

  return (
    <>
      <MovieList
        movies={topRated.movies}
        categoryTitle="Top Rated"
      />
      <LoadMore 
        handleLoadMore={handleLoadMore}
      />
    </>
  )
}

export default TopRated