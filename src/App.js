/* eslint-disable */

import Dashboard from "./pages/Page-1";
import Details from "./pages/Page-2/Details";

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/auth/Login";
import theme from "./theme/theme";
import Errorpage from "./pages/ErrorPage/errorpage";
import { LOGIN, LOGIN_FAILED } from "./redux/types/authTypes";
import { GET_PARAMS } from "./redux/types/ParamsTypes";
import axios from "axios";
import { GET_RESTO, GET_RESTO_FAILED, GET_RESTO_LOADING } from "./redux/types/DataRestoTypes";
import Success from "./pages/SuccessPage/Success";
import LoginToHome from "./pages/auth/LoginToHome";
import { fetchMyAPI } from "./redux/actions/authAction";
import { fetchParams } from "./redux/actions/ParamsActions";
import { fetchRestaurants } from "./redux/actions/restoDataActions";

const initialState = {
  city_id: 1,
};

const App = () => {
  const auth = useSelector((state) => state.auth);
  const Validate = useSelector((state) => state.Validate); 
  const { isAuth} = auth;
  const dispatch = useDispatch();
 
  useEffect(() => {
    fetchMyAPI(dispatch);
    fetchRestaurants(dispatch,initialState);
    fetchParams(dispatch);
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/error" element={<Errorpage />} />
          <Route exact path="*" element={<Errorpage />} />
          <Route exact path="dashboard" element={isAuth ? <Dashboard /> :<Navigate to  ='/login' /> } />
          <Route exact path="/succes" element={Validate.Validate ? <Success /> :<Errorpage /> } />
          <Route exact path="/login" element={isAuth ?<LoginToHome/> :<Login /> } />
          <Route exact path="/" element={isAuth ? <Navigate to  ='/dashboard' /> : <Navigate to  ='/login' /> } />
          <Route
            exact
            path="/details/:id"
            element={!isAuth ? <Errorpage /> : <Details />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
