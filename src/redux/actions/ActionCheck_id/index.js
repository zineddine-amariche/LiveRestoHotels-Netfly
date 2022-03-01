import {
  CHECK_ID,
  CHECK_ID_ACTIVATE,
  CHECK_ID_DELETE,
  CHECK_ID_DESACTIVATE,
} from "../../types/typeCheck_id";
import { CHECK_ID_CLICKED } from "../../types/typeCheck_id";

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

export const dispatchCheck_Id_Desactive = () => {
  return {
    type: CHECK_ID_DESACTIVATE,
  };
};
export const dispatchCheck_Id_Delete = () => {
  return {
    type: CHECK_ID_DELETE,
  };
};

export const dispatchCheck_Id_Clicked = (data) => {
  return {
    type: CHECK_ID_CLICKED,
    payload: data,
  };
};
