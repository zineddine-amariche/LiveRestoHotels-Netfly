import * as types from "../../types/validation";

const initialState = {
  error: null,
  loading: false,
  Validate:[],

};

export default function validate(state = initialState, action) {
  const { type, payload }=action;
  
  switch (action.type) {
    
    case types.VALIDATE:
      // console.log("validate payload",payload);
      return {
        ...state,
        error: null,
        loading: false,
        Validate:payload.data
      };
    case types.VALIDATE_FAILED:
      console.log("VALIDATE_FAILED ", payload);
      return {
        ...state,
        error:payload,
        loading: false,
      };
    case types.VALIDATE_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
