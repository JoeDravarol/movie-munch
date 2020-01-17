import tmdbApi from '../services/tmdb'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_GENRES':
      return action.payload
    default:
      return state
  }
}

export const initializeMoviesGenres = () => {
  return async dispatch => {
    try {
      const genres = await tmdbApi.getAllMovieGenres()

      dispatch({
        type: `INIT_GENRES`,
        payload: genres
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export default reducer