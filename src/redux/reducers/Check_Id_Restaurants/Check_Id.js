import * as types from "../../types/typeCheck_id";

const Check_id = JSON.parse(localStorage.getItem("Check_id"));
// const state = Check_id ? Check_id : cart;

const initialState = {
  id: Check_id ? Check_id : null,
  activeModal: false,
  Clicked:null
};

export default function Check_Id(state = initialState, action) {
  const { type, payload } = action;
console.log('payload', payload)
  switch (action.type) {
    case types.CHECK_ID:
      return {
        ...state,
        id: payload,
      };
    case types.CHECK_ID_ACTIVATE:
      return {
        ...state,
        // id: payload,
        activeModal: true,
      };
    case types.CHECK_ID_DESACTIVATE:
      return {
        ...state,
        activeModal: false,
      };
    case types.CHECK_ID_DELETE:
      return {
        ...state,
        activeModal: false,
        id: null,
      };
      case types.CHECK_ID_CLICKED:
        return {
          ...state,
          Clicked:payload
        };
    default:
      return state;
  }
}
