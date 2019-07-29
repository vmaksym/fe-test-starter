import { farmsEpics } from "./farms";
import { cropsEpics } from "./crops";
import { combineEpics } from 'redux-observable';

export const rootEpics = combineEpics(
    farmsEpics,
    cropsEpics
);