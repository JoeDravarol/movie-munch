import React from 'react'
import { withRouter } from 'react-router-dom'
import useSearchMovies from '../../../hooks/useSearchMovies'

import MovieList from '../../MovieList'
import LoadMore from '../../shared/LoadMore'

const SearchMovie = ({ location }) => {
  const query = getMovieQuery(location.pathname)
  const {
    result,
    isLoading,
    fetchMoreMovies
  } = useSearchMovies(query)

  if (isLoading && !result.movies.length) {
    return <p>Loading...</p>
  } else if (!result.movies.length) {
    return <p>No Movies found...</p>
  }

  return (
    <>
      <MovieList
        movies={result.movies}
        categoryTitle={query}
      />
      {result.currentPage < result.totalPages && (
        <LoadMore
          handleLoadMore={fetchMoreMovies}
        />
      )}
    </>
  )
}

function getMovieQuery(pathname) {
  // Remove '/seach/' to get movie to query
  const query = pathname.substring(8)
  // Change plus back to space
  return query.split("+").join(" ")
}

export default withRouter(SearchMovie)