import * as farmsActions from "../actions/farms";
import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const getActiveFarm = action$ => action$.pipe(
    ofType(farmsActions.GET_ACTIVE_FARM),
    mergeMap(() =>
        ajax.getJSON('http://www.mocky.io/v2/5cc809b5300000a300055eac').pipe(
            map(farmsActions.fetchFarmSuccess)
        )
    )
);


export const farmsEpics = combineEpics(
    getActiveFarm
);