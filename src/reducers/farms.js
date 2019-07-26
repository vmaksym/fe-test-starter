import * as farmsActions from "../actions/farms";

let farmsState = {
    activeFarm: {}
};

export const FarmsReducer = (state = farmsState, action) => {
    switch (action.type) {
        case farmsActions.GET_ACTIVE_FARM_SUCCESS:
            return {
                ...state,
                farm: action.farm
            };
        default:
            return state;
    }
};
