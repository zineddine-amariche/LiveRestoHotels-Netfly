
import axios from "axios";
import * as types from "../types/ParamsTypes"

export const dispatchGetParams = () => {
  return {
    type: types.GET_PARAMS
  };
};




export const fetchParams = async (dispatch) => {
  const Token = localStorage.getItem("token");
  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      Authorization: `Bearer ${Token}`,
    },
  };

  const url = `https://dev500.live-resto.fr/api/params`;
  try {
    let response = await fetch(url, configHead);
    response = await response.json();
    dispatch({ type: types.GET_PARAMS, payload: response });
  } catch (error) {
    console.log(`error`, error);
  }
};