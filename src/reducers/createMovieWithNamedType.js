const initialState = {
  movies: [],
  currentPage: 0,
}

const createMovieWithNamedType = (name = '') => {
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

export default createMovieWithNamedType