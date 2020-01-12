import tmdbApi from '../../services/tmdb'

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