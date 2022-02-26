/* eslint-disable */

/** @jsxImportSource theme-ui */

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Box,
  Drawer,
  Container,
  Fab,
  Paper,
} from "@material-ui/core";
import Form from "./components/Form";
import useLogin from "./hooks/useLogin";
import Logo from "../../assets/logo.png";
import { ArrowRightAlt } from "@material-ui/icons";
import CarouselContainer from "./components/BoostCarousel";
import { useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import { useDispatch } from "react-redux";
import { AUTH_ACTIVATE } from "../../redux/types/authTypes";
import { useNavigate } from "react-router-dom";
import LoginToHome from "./LoginToHome";
const Login = () => {
  const { t } = useTranslation(["login"]);
  const { classes, matches, Faketoken } = useLogin();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const { isAuth, isActive } = auth;
  const dispatch = useDispatch();


  // console.log("open", open);





  return (
    <Paper className={classes.ContainerLogin}>
      {!matches && (
        <Box className={classes.ContainerLoginItems}>
          <Box className={classes.ImageBoxContainer}>
            <img src={Logo} alt="NBK Logo" className={classes.BoxImage} />
          </Box>
          <Form></Form>
        </Box>
      )}

      {matches && (
        <Paper className={classes.Heighter}>
     
          <Paper className={classes.ContainerPaperCarousel}>
            <CarouselContainer />
          </Paper>
          <Drawer
            variant="permanent"
            anchor="right"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Box className={classes.BoxContainerForm}>
              <Form></Form>
            </Box>
          </Drawer>
        </Paper>
      )}
    </Paper>
  );
};

export default Login;
