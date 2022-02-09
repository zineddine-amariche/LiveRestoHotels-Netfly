import * as types from "../types/DataRestoTypes";

const initialState = {
  OneResto: [],
  loading: false,
  error: null,

};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case types.GET_ONE_RESTO:
      // console.log("GET_ONE_RESTO");
      return {
        ...state,
        OneResto: payload,
        error: null,
        loading: false,
      };
    case types.GET_ONE_RESTO_FAILED:
      console.log("GET_ONE_RESTO_FAILED");
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case types.GET_ONE_RESTO_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}















































