import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createMovieReducerWithNamedType from './reducers/movieReducer'

const reducer = combineReducers({
  nowPlaying: createMovieReducerWithNamedType('now_playing'),
  popular: createMovieReducerWithNamedType('popular'),
  upcoming: createMovieReducerWithNamedType('upcoming'),
  topRated: createMovieReducerWithNamedType('top_rated'),
})

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
))

export default store