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
import { useNavigate } from "react-router-dom";
import { dispatchAction } from "../../redux/actions/actionActiovation";
const LoginToHome = () => {
  const { t } = useTranslation(["login"]);
  const { classes, matches } = useLogin();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const Activation = useSelector((state) => state.Activation);
  const { isActive } = Activation;
  const dispatch = useDispatch();
  console.log("isActive", isActive);
  const [openSuuces, setOpen] = React.useState(true);
  const [state, setState] = React.useState({
    open: true,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = (event, reason) => {
    if (auth.error) {
      setState(!state);
    }
  };
  const handleCloseSuccess = (event, reason) => {
    if (openSuuces) {
      setOpen(!openSuuces);
    }
  };
  const IsActive = localStorage.getItem("isActive");
  const AcctiveLess = IsActive ? IsActive : isActive;

  return (
    <>
      {!matches ? (
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Container component="main" maxWidth="xs">
            <Box marginTop="100px" display="flex" justifyContent="center">
              <img src={Logo} alt="NBK Logo" className={classes.BoxImage} />
            </Box>
            <Form></Form>
          </Container>
        </Box>
      ) : (
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
              {AcctiveLess ? (
                <Box></Box>
              ) : (
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
            <Paper className={classes.HoldBox} elevation={0}>
              {/* <Paper></Paper> */}
              <Paper className={classes.boxPaper}>
                <Paper className={classes.title} elevation={0}>
                  {t("login_welcome")}
                </Paper>
                <Paper className={classes.textBOx}>
                  {t("login_appforHotels")}
                </Paper>
                <Paper className={classes.textBOx2} elevation={0}>
                  {t("login_access_restaurant")}
                </Paper>
                <div className={classes.containerFab}>
                  <Fab
                    sx={{ bg: "white" }}
                    aria-label="go"
                    onClick={() => {
                      dispatch(dispatchAction());
                      // dispatch({ type: AUTH_ACTIVATE });
                      {
                        !AcctiveLess && localStorage.setItem("isActive", true);
                      }

                      // dispatch({type:AUTH_ACTIVATE});
                      navigate("/");
                    }}
                  >
                    <ArrowRightAlt
                      sx={{ color: "btnBackground" }}
                      fontSize="large"
                    />
                  </Fab>
                </div>
              </Paper>
            </Paper>
          </Drawer>
        </Paper>
      )}
    </>
  );
};

export default LoginToHome;
