import * as farmsActions from "../actions/farms";

const farmsState = {
      activeFarm:{
        fields:[]
      }
    };

export const farmsReducer = (state = farmsState, action) => {
  switch (action.type) {
        case farmsActions.GET_ACTIVE_FARM_SUCCESS:
            return {
                ...state,
              activeFarm: action.activeFarm
            };
        default:
            return state;
    }
};
