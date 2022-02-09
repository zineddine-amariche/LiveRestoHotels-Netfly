// import ACTIONS from './index'
import axios from 'axios'
import * as type from "../types/authTypes";

export const dispatchLogin = () => {
    return {
        type: type.LOGIN
    }
}

export const dispatchLoginError = () =>{
    return{
        type : type.LOGIN_FAILED
    }
}


export const fetchMyAPI = async (dispatch) => {
    const Token = localStorage.getItem("token");
    let configHead = {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "fr",
        Authorization: `Bearer ${Token}`,
      },
    };
    const firstLogin = localStorage.getItem("Login");
    const url = `https://dev500.live-resto.fr/api/customers/${firstLogin}`;

    try {
      if (firstLogin) {
        let response = await fetch(url, configHead);
        response = await response.json();
        dispatch({ type: type.LOGIN, payload: response });
      }
    } catch (error) {
      dispatch({ type: type.LOGIN_FAILED, payload: error });
    }
  };