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

      case farmsActions.SET_CROP:
        return {
            ...state,
            activeFarm: {
                ...state.activeFarm,
                fields: state.activeFarm.fields.map(field => {
                    if (field.name === action.field.name) {
                        field.crop = action.crop;
                    }
                    return field;
                })
            }
        };

    default:
        return state;
    }
};
