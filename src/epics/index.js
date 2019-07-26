import {farmsEpics} from "./farms";
import { combineEpics } from 'redux-observable';

export const rootEpics = combineEpics(
    farmsEpics
);