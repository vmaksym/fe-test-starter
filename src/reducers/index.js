import { combineReducers } from 'redux'
import { farmsReducer } from './farms'
import {cropsReducer} from "./crops";

const makeRootReducer = () => combineReducers({
  farmsState: farmsReducer,
  cropsState: cropsReducer,
});

export default makeRootReducer