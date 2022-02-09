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
import {useNavigate} from "react-router-dom"
const Login = () => {
  const { t } = useTranslation(["login"]);
  const { classes, matches, Faketoken } = useLogin();
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth);
  const { isAuth,isActive } = auth;
  const dispatch = useDispatch();

  const [openSuuces, setOpen] = React.useState(true);
  const [state, setState] = React.useState({
    open: true,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleClick = () => {
    setOpen(true);
  };

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
         
              <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                  <Form></Form>
                </div>
              </Container>
          </Drawer>
        </Paper>
      )}
    </>
  );
};

export default Login;

{
  /*  */
}

{
  /* <Alert severity="error">{auth.error}</Alert> */
}
{
  /* {auth.error &&   */
}
{
  /* // <Alert */
}
{
  /* //   anchorOrigin={{ vertical, horizontal }} */
}
{
  /* //   open={openn}
        //   severity="error"
        //   // onClose={handleClose}
        //   message="I love snacks"
        //   key={vertical + horizontal}
        // >{auth.error} </Alert> */
}
