/* eslint-disable */

/** @jsxImportSource theme-ui */

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Box,
  Drawer,
  Container,
  Fab,
  Snackbar,
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

  const [openSuuces, setOpen] = React.useState(true);
  const [state, setState] = React.useState({
    open: true,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  // console.log("open", open);

  const handleClose = (event, reason) => {
    if (auth.error) {
       setState(!state);
    }
  };

  // const handleCloseSuccess = (event, reason) => {
  //   if (openSuuces) {
  //     auth.error && setOpen(!openSuuces);
  //   }
  // };
  // useEffect(() => {
  //   setState(!open);
  // }, [open]);
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
          <Paper className={classes.Abolute}>
            {auth.error && (
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}
              >
                <Alert
                  onClose={handleClose}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  {auth.error} !
                </Alert>
              </Snackbar>
            )}
            <Paper className={classes.Abolute}>
              {isAuth && (
                <Snackbar
                  open={openSuuces}
                  autoHideDuration={6000}
                  onClose={handleCloseSuccess}
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  key={vertical + horizontal}
                >
                  <Alert
                    onClose={handleCloseSuccess}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    {t("login_succes")}
                  </Alert>
                </Snackbar>
              )}
            </Paper>
          </Paper>
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
