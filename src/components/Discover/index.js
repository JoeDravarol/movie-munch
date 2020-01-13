import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../MovieList'

const Discover = (props) => {
  const {
    nowPlaying,
    popular,
    upcoming,
    topRated
  } = useSelector(state => ({ ...state }))

  return (
    <>
      <MovieList
        movies={nowPlaying.movies}
        categoryTitle="Now Playing"
        categoryLink="/now_playing"
      />
      <MovieList
        movies={popular.movies}
        categoryTitle="Popular"
        categoryLink="/popular"
      />
      <MovieList
        movies={upcoming.movies}
        categoryTitle="Upcoming"
        categoryLink="/upcoming"
      />
      <MovieList
        movies={topRated.movies}
        categoryTitle="Top Rated"
        categoryLink="/top_rated"
      />
    </>
  )
}

export default Discover