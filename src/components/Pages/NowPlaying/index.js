import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieList from '../../MovieList'
import LoadMore from '../../shared/LoadMore'
import { getMovies } from '../../../reducers/movieReducer'

const NowPlaying = (props) => {
  const nowPlaying = useSelector(state => state.nowPlaying)
  const dispatch = useDispatch()

  const handleLoadMore = () => {
    dispatch(getMovies('now_playing', nowPlaying.currentPage + 1))
  }

  return (
    <>
      <MovieList
        movies={nowPlaying.movies}
        categoryTitle="Now Playing"
      />
      <LoadMore
        handleLoadMore={handleLoadMore}
      />
    </>
  )
}

export default NowPlaying