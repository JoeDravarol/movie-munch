import tmdbApi from '../../services/tmdb'

const initialState = {
  movies: [],
  currentPage: 0,
}

const createMovieReducerWithNamedType = (name = '') => {
  return (state = initialState, action) => {
    switch (action.type) {
      case `GET_MOVIES_${name}`:
        return {
          ...action.payload,
          movies: [...state.movies, ...action.payload.movies]
        }
      default:
        return state
    }
  }
}

export const getMovies = (movieType, pageToGet = 1) => {
  return async dispatch => {
    try {
      const result = await tmdbApi.getMovies(movieType, pageToGet)

      dispatch({
        type: `GET_MOVIES_${movieType}`,
        payload: {
          movies: result.results,
          currentPage: result.page
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export default createMovieReducerWithNamedType