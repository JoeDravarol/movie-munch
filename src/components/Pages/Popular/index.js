import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../../MovieList'
import LoadMore from '../../shared/LoadMore'

const Popular = (props) => {
  const popular = useSelector(state => state.popular)

  return (
    <>
      <MovieList
        movies={popular.movies}
        categoryTitle="Popular"
      />
      <LoadMore 
        movieType="popular"
        initialPage={popular.currentPage}
      />
    </>
  )
}

export default Popular