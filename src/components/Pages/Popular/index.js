import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovies } from '../../../reducers/movieReducer'
import MovieList from '../../MovieList'
import LoadMore from '../../shared/LoadMore'

const Popular = (props) => {
  const popular = useSelector(state => state.popular)
  const dispatch = useDispatch()

  const handleLoadMore = () => {
    dispatch(getMovies('popular', popular.currentPage + 1))
  }

  return (
    <>
      <MovieList
        movies={popular.movies}
        categoryTitle="Popular"
      />
      <LoadMore
        handleLoadMore={handleLoadMore}
      />
    </>
  )
}

export default Popular