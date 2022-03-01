import { combineReducers } from "redux";
import auth from "./auth";
import params from "./ReducerParams";
import Restaurants from "./RestoData";
import Restaurant from "./getOneRestoReducer";
import handleCart from "./handelAddToCartReducer";
import Dates from "./Dates"
import Hours from "./hoursReducers"
import Activation from "./activeMessages"
import Validate from "./validation/validation"
import Check_Id from "./Check_Id_Restaurants/Check_Id";
const rootReducer = combineReducers({
  auth,
  params,
  Restaurants,
  Restaurant,
  handleCart,
  Dates,
  Hours,
  Activation,
  Validate,
  Check_Id,

  
});

export default rootReducer;
