import { combineReducers } from 'redux'
import { farmsReducer } from './farms'

const makeRootReducer = () => combineReducers({
  farms:farmsReducer
});

export default makeRootReducer