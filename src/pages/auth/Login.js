/* eslint-disable */

/** @jsxImportSource theme-ui */

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Box, Drawer, Paper } from "@material-ui/core";
import Form from "./components/Form";
import useLogin from "./hooks/useLogin";
import Logo from "../../assets/logo.png";
import CarouselContainer from "./components/BoostCarousel";
import { useNavigate } from "react-router-dom";
import Close from "@material-ui/icons/Close";
import Menue from "@material-ui/icons/MenuOpen";
import useStyles from "./hooks/styles/stylesLogin";
const Login = () => {
  const { t } = useTranslation(["login"]);
  const { md, xlg, lg, sm, xs, xsU, smU, lgU, xlgU, mdU } = useLogin();
  const navigate = useNavigate();
  const [FromClose, setFromClose] = useState(true);

  const classes = useStyles({ FromClose });
  const CloseForm = () => {
    setFromClose(!FromClose);
  };
console.log('xs', xs)
  return (
    <Box className={classes.ContainerLogin}>
      {xs && (
        <Box className={classes.ContainerLoginItems}>
          <Box className={classes.ImageBoxContainer}>
            <img src={Logo} alt="NBK Logo" className={classes.BoxImage} />
          </Box>
          <Form></Form>
        </Box>
      )}

      {!xs && (
        <Paper className={classes.Heighter}>
          <Paper className={classes.ContainerPaperCarousel}>
            {/* <Box className={classes.MenueBtn}>
              {!FromClose ? (
                <Menue onClick={CloseForm} />
              ) : (
                <Close onClick={CloseForm} />
              )}
            </Box> */}
            <CarouselContainer FromClose={FromClose} />
          </Paper>

          <Drawer
            variant="permanent"
            anchor="right"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Box className={classes.BoxContainerForm}>
              <Form FromClose={FromClose} CloseForm={CloseForm}></Form>
            </Box>
          </Drawer>
        </Paper>
      )}
    </Box>
  );
};

export default Login;
