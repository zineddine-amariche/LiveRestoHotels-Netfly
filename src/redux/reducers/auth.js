import * as types from "../types/authTypes";

const initialState = {
  isAuth: false,
  token: null,
  isActive: false,
  loading: false,
  error: null,
  data:[],
};

export default function auth(state = initialState, action) {
  const { type, payload }=action;
  
  switch (action.type) {
    case types.LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: null,
        loading: false,
        error: null,
        isActive:false,

      };
    case types.LOGIN:
      // console.log("login payload",payload.customer);
      return {
        ...state,
        isAuth: true,
        token: payload.token,
        error: null,
        loading: false,
        data:payload
      };
    case types.LOGIN_FAILED:
      console.log("LOGIN_FAILED", payload);
      return {
        ...state,
        error:payload,
        loading: false,
      };
    case types.AUTH_LOADING:
      return {
        ...state,
        loading: true,
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
