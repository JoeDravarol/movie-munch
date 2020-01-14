import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../../MovieList'

const NowPlaying = (props) => {
  const nowPlaying = useSelector(state => state.nowPlaying)

  return (
    <>
      <MovieList
        movies={nowPlaying.movies}
        categoryTitle="Now Playing"
      />
    </>
  )
}

export default NowPlaying