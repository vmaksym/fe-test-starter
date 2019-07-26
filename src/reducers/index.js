import { combineReducers } from 'redux'
import { FarmsReducer } from './farms'

const makeRootReducer = () => combineReducers({
    FarmsReducer
});

export default makeRootReducer