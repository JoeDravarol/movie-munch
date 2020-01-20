import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import createMovieReducerWithNamedType from './movieReducer'

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: [
    'nowPlaying',
    'popular',
    'upcoming',
    'topRated',
  ]
}

const rootReducer = combineReducers({
  nowPlaying: createMovieReducerWithNamedType('now_playing'),
  popular: createMovieReducerWithNamedType('popular'),
  upcoming: createMovieReducerWithNamedType('upcoming'),
  topRated: createMovieReducerWithNamedType('top_rated')
})

export default persistReducer(persistConfig, rootReducer)