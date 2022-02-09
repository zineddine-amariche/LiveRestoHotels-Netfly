import * as types from "../types/dateTypes";

const initialState = {
  loading: false,
  errorMessage: null,
  data:[]
};

export default function auth(state = initialState, action) {
  const { type, payload }=action;
  
  switch (action.type) {
  
      case types.GET_HEURE:
        // console.log("HEURE payload",payload.data);
        return {
          ...state,
          error: null,
          loading: false,
          data:payload.data,
          errorMessage:null
        };
      case types.GET_HEURE_FAILED:
        // console.log("HEURE Failed", action);
        return {
          ...state,
          errorMessage:payload,
          loading: false,
        };
      case types.GET_HEURE_LOADING:
        return {
          ...state,
          loading: true,
        };

    default:
      return state;
  }
}


