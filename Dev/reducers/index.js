import { routerStateReducer as router } from 'redux-router'
import { combineReducers } from 'redux'
import userReducer from './UserReducer.js'
import todoReducer from './TodoReducer.js'
import commonReducer from './CommonReducer.js'
import stationReducer from './StationReducer.js'
import listReducer from './ListReducer.js'
const rootReducer = combineReducers({
  userReducer,
  todoReducer,
  commonReducer,
  stationReducer,
  listReducer,
  router
})

export default rootReducer
