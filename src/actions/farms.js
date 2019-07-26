// action creators

export const GET_ACTIVE_FARM = 'GET_ACTIVE_FARM';
export const GET_ACTIVE_FARM_SUCCESS = 'GET_ACTIVE_FARM_SUCCESS';

export const fetchFarm = () => ({ type: GET_ACTIVE_FARM});
export const fetchFarmSuccess = activeFarm => ({ type: GET_ACTIVE_FARM_SUCCESS, activeFarm });
