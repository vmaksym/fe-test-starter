import * as cropsActions from "../actions/crops";
import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const getCrops = action$ => action$.pipe(
    ofType(cropsActions.GET_CROPS),
    mergeMap(() =>
        ajax.getJSON('http://www.mocky.io/v2/5cc8098e300000a300055eab').pipe(
            map(cropsActions.fetchCropsSuccess)
        )
    )
);


export const cropsEpics = combineEpics(
    getCrops
);