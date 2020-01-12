import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createMovieWithNamedType from './reducers/createMovieWithNamedType'

const reducer = combineReducers({
  nowPlaying: createMovieWithNamedType('now_playing'),
  popular: createMovieWithNamedType('popular'),
  upcoming: createMovieWithNamedType('upcoming'),
  topRated: createMovieWithNamedType('top_rated'),
})

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
))

export default store