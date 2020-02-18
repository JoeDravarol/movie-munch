import React from 'react'
import { withRouter, useParams } from 'react-router-dom'
import useSearchMovies from '../hooks/useSearchMovies'
import styled from 'styled-components'

import MovieList from '../components/MovieList'
import LoadMore from '../components/shared/LoadMore'

const NoMovieFound = styled.p`
  font-size: 5em;
  color: #fff;
`

const SearchMovie = () => {
  const { query } = useParams()
  const queryWithSpaces = changePlusBackToSpaces(query)

  const {
    result,
    isLoading,
    fetchMoreMovies
  } = useSearchMovies(queryWithSpaces)

  if (isLoading && !result.movies.length) {
    return <p>Loading...</p>
  } else if (!result.movies.length) {
    return <NoMovieFound>No Movies found...</NoMovieFound>
  }

  return (
    <>
      <MovieList
        movies={result.movies}
        categoryTitle={queryWithSpaces}
      />
      {result.currentPage < result.totalPages && (
        <LoadMore
          handleLoadMore={fetchMoreMovies}
        />
      )}
    </>
  )
}

function changePlusBackToSpaces(query) {
  return query.split("+").join(" ")
}

export default withRouter(SearchMovie)