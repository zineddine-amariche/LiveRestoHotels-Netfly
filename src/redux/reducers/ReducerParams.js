import * as types from "../types/ParamsTypes";

const initialState = {
  params: false,
  loading: false,
  error: null,
  dataParams: [],
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case types.GET_PARAMS:
      return {
        ...state,
        params: true,
        loading: false,
        error: null,
        dataParams: payload,
      };
    case types.GET_PARAMS_FAILED:
      console.log("GET_PARAMS", action);
      return {
        ...state,
        error: "échec de la connexion",
        loading: false,
      };
    case types.GET_PARAMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
