import * as types from "../types/authTypes";

const initialState = {
  isAuth: false,
  token: null,
  isActive: false,
  loading: false,
  error: null,
  data: [],
  snack_err: false,
  snack_succ: false,
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case types.LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: null,
        loading: false,
        error: null,
        isActive: false,
      };
    case types.LOGIN:
      // console.log("login payload",payload.customer);
      return {
        ...state,
        isAuth: true,
        token: payload.token,
        error: null,
        loading: false,
        data: payload,
        snack_succ: true,
      };
    case types.LOGIN_FAILED:
      console.log("LOGIN_FAILED", payload);
      return {
        ...state,
        error: payload,
        loading: false,
        snack_err: true,
      };
    case types.AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.AUTH_DESACTIVE_ERROR:
      return {
        ...state,
        snack_err: false,
      };
    case types.AUTH_DESACTIVE_SUCCESS:
      return {
        ...state,
        snack_succ: false,
      };
    case type.AUTH_ACTIVATE:
      return { ...state, isActive: true };

    case "REDIRECT":
      window.location.replace(action.payload);
      return state;
    default:
      return state;
  }
}
