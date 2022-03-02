import { IS_NOT_REDIRECTED, IS_REDIRECTED } from "../../types/Coordinates";

const initialState = {
    IsRedirected:false
};

const coordinates = (state = initialState, action) => {
  const { type, payload } = action;

  switch (action.type) {
    case IS_REDIRECTED:
      return {
        ...state,
        IsRedirected: true,
      };
      case IS_NOT_REDIRECTED:
        return {
          ...state,
          IsRedirected: false,
        };
    default:
      return state;
  }
};

export default coordinates;
