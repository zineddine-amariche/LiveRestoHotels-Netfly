import * as types from "../types/authTypes";

const initialState = {
  isActive: false,

};

export default function Activation(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case types.AUTH_ACTIVATE:
      // console.log("AUTH_ACTIVATE");
      return {
        ...state,
        isActive: true,
 
      };
   

    default:
      return state;
  }
}



