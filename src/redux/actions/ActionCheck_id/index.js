import { CHECK_ID, CHECK_ID_ACTIVATE } from "../../types/typeCheck_id";

export const dispatchCheck_Id = (data) => {
  return {
    type: CHECK_ID,
    payload: data,
  };
};

export const dispatchCheck_Id_Active = (data) => {
    return {
      type: CHECK_ID_ACTIVATE,
      payload: data,
    };
  };