import * as cropsActions from "../actions/crops";

const cropsState = {
    crops: []
};

export const cropsReducer = (state = cropsState, action) => {
  switch (action.type) {
        case cropsActions.GET_CROPS_SUCCESS:
            return {
                ...state,
                crops: action.crops
            };
        default:
            return state;
    }
};
