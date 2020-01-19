import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../../MovieList'
import LoadMore from '../../shared/LoadMore'

const TopRated = (props) => {
  const topRated = useSelector(state => state.topRated)

  return (
    <>
      <MovieList
        movies={topRated.movies}
        categoryTitle="Top Rated"
      />
      <LoadMore 
        movieType="top_rated"
        initialPage={topRated.currentPage}
      />
    </>
  )
}

export default TopRated