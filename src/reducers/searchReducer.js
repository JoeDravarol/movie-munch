import tmdbApi from '../services/tmdb'

const initialState = {
  searchQuery: '',
  movies: [],
  currentPage: 0,
  totalPage: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIE':
      return {
        ...action.payload
      }
    case 'LOAD_MORE_SEARCH_RESULTS':
      return {
        ...state,
        movies: [...state.movies, ...action.payload.movies],
        currentPage: action.payload.currentPage
      }
    default:
      return state
  }
}

export const searchMovie = (query, pageToGet = 1) => {
  return async dispatch => {

    try {
      const { page, results, total_pages } = await tmdbApi.searchMovie(query, pageToGet)

      dispatch({
        type: 'SEARCH_MOVIE',
        payload: {
          searchQuery: query,
          movies: results,
          currentPage: page,
          totalPage: total_pages
        }
      })

    } catch (e) {
      console.log(e)
    }
  }
}

export const loadMoreSearchResults = async () => {
  return async (dispatch, getState) => {

    try {
      const { searchQuery, currentPage } = getState()
      const { page, results } = await tmdbApi.searchMovie(searchQuery, currentPage + 1)

      dispatch({
        type: 'LOAD_MORE_SEARCH_RESULTS',
        payload: {
          movies: results,
          currentPage: page,
        }
      })

    } catch (e) {
      console.log(e)
    }
  }
}

export default reducer