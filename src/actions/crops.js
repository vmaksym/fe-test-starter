// action creators
export const GET_CROPS = 'GET_CROPS';
export const GET_CROPS_SUCCESS = 'GET_CROPS_SUCCESS';

export const fetchCrops = () => ({ type: GET_CROPS});
export const fetchCropsSuccess = crops => ({ type: GET_CROPS_SUCCESS, crops });
