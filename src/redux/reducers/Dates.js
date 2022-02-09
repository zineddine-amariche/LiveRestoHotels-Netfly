import * as types from "../types/dateTypes";

const initialState = {
  loading: false,
  errorMessage: null,
  dates:[],
};

export default function auth(state = initialState, action) {
  const { type, payload }=action;
  
  switch (action.type) {

    case types.GET_DATES:
      // console.log("Dates payload",payload.data.availabilities);
      return {
        ...state,
        error: null,
        loading: false,
        dates:payload.data.availabilities
      };
    case types.GET_DATES_FAILED:
      // console.log("Dates Failed", action);
      return {
        ...state,
        errorMessage:payload,
        loading: false,
      };
    case types.GET_DATES_LOADING:
      return {
        ...state,
        loading: true,
      };
   
    default:
      return state;
  }
}


