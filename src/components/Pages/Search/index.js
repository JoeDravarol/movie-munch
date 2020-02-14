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
    setCurrentPage
  } = useSearchMovies(query)

  console.log(result, query)
  return (
    <>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : !result.movies.length ? (
          <p>No movies found</p>
        ) : (<>
          <MovieList
            movies={result.movies}
            categoryTitle={query}
          />
          {
            result.currentPage !== result.totalPages && (
              <LoadMore
                movieType={query}
                initialPage={result.currentPage}
                onClick={() => setCurrentPage(prevPage => prevPage++)}
              />
            )
          }
        </>)
      }
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