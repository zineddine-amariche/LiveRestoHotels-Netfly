import axios from "axios";
import * as types from "../types/DataRestoTypes"

export const dispatchGetParams = () => {
  return {
    type: types.GET_RESTO
  };
};

export const fetchRestaurants = async (dispatch,initialState) => {
  const Token = localStorage.getItem("token");
  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      Authorization: `Bearer ${Token}`,
    },
  };
  const url = "https://dev500.live-resto.fr/api/establishments";
  dispatch({ type: types.GET_RESTO_LOADING });

  try {
    const res = await axios.post(url, initialState, configHead);
    dispatch({ type: types.GET_RESTO, payload: res });
  } catch (err) {
    dispatch({ type: types.GET_RESTO_FAILED, payload: err });
    console.log(`err`, err);
  }
};