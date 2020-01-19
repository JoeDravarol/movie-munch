import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../../MovieList'
import LoadMore from '../../shared/LoadMore'

const NowPlaying = (props) => {
  const nowPlaying = useSelector(state => state.nowPlaying)

  return (
    <>
      <MovieList
        movies={nowPlaying.movies}
        categoryTitle="Now Playing"
      />
      <LoadMore 
        movieType="now_playing"
        initialPage={nowPlaying.currentPage}
      />
    </>
  )
}

export default NowPlaying