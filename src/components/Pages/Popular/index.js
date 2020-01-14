import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../../MovieList'

const Popular = (props) => {
  const popular = useSelector(state => state.popular)

  return (
    <>
      <MovieList
        movies={popular.movies}
        categoryTitle="Popular"
      />
    </>
  )
}

export default Popular