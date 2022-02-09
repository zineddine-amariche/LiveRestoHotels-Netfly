import axios from "axios";
import {
  VALIDATE,
  VALIDATE_FAILED,
  VALIDATE_LOADING,
} from "../../types/validation";

export const submitValidation = async (
  dispatch,
  orders,
  configHead,
  closeValidate,
  navigateToSuccess
) => {
  let url = "https://dev500.live-resto.fr/api/orders";
  dispatch({ type: VALIDATE_LOADING });

  try {
    const res = await axios.post(url, orders, configHead);
    console.log("res", res);
    dispatch({ type: VALIDATE, payload: res });
    dispatch({ type: "DELETE_ALL_ITEMS" });
    closeValidate();
    navigateToSuccess();
    return res;
  } catch (error) {
    console.log("error", error);
    dispatch({ type: VALIDATE_FAILED, payload: error });

    return error;
  }
};

export const dispatchValidation = (res) => {
  return {
    type: VALIDATE,
    payload: res,
  };
};
