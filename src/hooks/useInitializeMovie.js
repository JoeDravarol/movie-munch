import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMovies } from '../reducers/movieReducer'

const areMoviesInSessionStorage = (movieType) => {
  // Get all redux state from session storage
  const rootReducer = JSON.parse(sessionStorage.getItem('persist:root'))

  // When key has not been set
  if (rootReducer === null) return false

  const movieTypeToCamelCase = movieType.split('_')
    .map((str, idx) => {
      if (idx === 0) return str

      return str[0].toUpperCase() + str.slice(1)
    }).join("")

  // empty array is returned if there are no movies
  const movieTypeInSessionStorage = JSON.parse(rootReducer[movieTypeToCamelCase])

  return movieTypeInSessionStorage.movies.length !== 0
}

export default (movieType) => {
  const dispatch = useDispatch()

  useEffect(() => {
    // Initialize Movies only if its not in session storage
    if ( !areMoviesInSessionStorage(movieType) ) {
      dispatch(getMovies(movieType))
    }
  }, [dispatch, movieType])
}