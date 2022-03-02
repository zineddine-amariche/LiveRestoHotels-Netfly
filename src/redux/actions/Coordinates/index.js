import { IS_NOT_REDIRECTED, IS_REDIRECTED } from "../../types/Coordinates";

export const dispatchRedirected = () => {
  return {
    type: IS_REDIRECTED,
  };
};
export const dispatchNotRedirected = () => {
  return {
    type: IS_NOT_REDIRECTED,
  };
};

