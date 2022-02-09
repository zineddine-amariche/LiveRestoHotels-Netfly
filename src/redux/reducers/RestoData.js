import * as types from "../types/DataRestoTypes";

const initialState = {
  Restaurants: [],
  loading: false,
  error: null,
  establishments:[],
  Delivery:""
};

export default function auth(state = initialState, action) {
  const { type, payload }=action;
  
  switch (action.type) {
  
    case types.GET_RESTO:
      // console.log(" GET_RESTO");
      return {
        ...state,
        Restaurants: payload,
        error: null,
        loading: false,
        establishments:payload.data.establishments,
        Delivery:payload.data.defaultDeliveryPrice

      };
    case types.GET_RESTO_FAILED:
      console.log("GET_RESTO_FAILED");
      return {
        ...state,
        error:"échec de la connexion",
        loading: false,
      };
    case types.GET_RESTO_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
