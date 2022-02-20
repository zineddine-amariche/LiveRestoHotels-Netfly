/* eslint-disable */

/** @jsxImportSource theme-ui */

import React, { useState, useEffect } from "react";
import { useStyles } from "./stylesHeader";
import { AppBar, Toolbar, Box, useMediaQuery } from "@material-ui/core";
import shoppingCart from "../../assets/Group 101.svg";
import chevronRight from "../../assets/chevron-right.svg";
import logo from "../../assets/logo.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import Language from "./components/Language";

import { useTranslation } from "react-i18next";
import { useRef } from "react";
import useLangue from "./Hooks/useLangue";
const HeaderAppBare = (props) => {
  const { ShowFilterHandeler, handelShowPanier, ShowModal } = props;
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  let { id } = params;
  const state = useSelector((state) => state.handleCart);

  const { openLangue, setSelectedIndex } = useLangue();

  useEffect(() => {
    switch (i18n.language) {
      case "fr":
        setSelectedIndex(0);
        document.querySelector("body").dir = "ltr";
        break;
      case "en":
        setSelectedIndex(1);
        document.querySelector("body").dir = "ltr";
        break;
      case "de":
        setSelectedIndex(2);
        document.querySelector("body").dir = "ltr";
        break;
      default:
        setSelectedIndex(0);
        break;
    }
  }, []);

  const GoabackHome = () => {
    navigate("/");
  };
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const ExtraLarge = useMediaQuery(theme.breakpoints.up("xl"));

  const [actAppBare, setactAppBare] = useState(true);
  const scroller = () => {
    if (window.pageYOffset > 480) {
      setactAppBare(false);
    } else {
      setactAppBare(true);
    }
  };
  window.addEventListener("scroll", scroller);
  const classes = useStyles(actAppBare);

  return (
    <Box className={classes.appRoot}>
      <AppBar
        position="fixed"
        open={openLangue}
        elevation={0}
        sx={{ bg: "btnBackground" }}
      >
        <Toolbar
          className={classes.toolbare}
          sx={{ bg: "#5DBCA3", width: "100%" }}
          elevation={0}
        >
          {/* logo container */}

          <Box className={classes.containerRow}>
            {location.pathname === `/dashboard` && (
              <Box className={classes.BarreNav} onClick={ShowFilterHandeler}>
                <MenuIcon />
              </Box>
            )}

            {location.pathname === `/details/${id}` && (
              <Box className={classes.IconReturn} onClick={GoabackHome}>
                <img src={chevronRight} className={classes.imageReturn} />
              </Box>
            )}
            <Box className={classes.boxContainer}>
              <img src={logo} className={classes.image} />
            </Box>
          </Box>

          <Box className={classes.LangueBox}>
            <Box className={classes.boxIconImage}>
              <img
                src={shoppingCart}
                className={classes.CarteShopImage}
                onClick={() => {
                  if (!matchesLarge) {
                    location.pathname === `/details/${id}` &&
                      handelShowPanier();
                  }
                  if (
                    location.pathname === `/dashboard` &&
                    ExtraLarge &&
                    state.length > 0
                  ) {
                    ShowModal();
                  }
                }}
              />
              {state.length > 0 ? (
                <Box className={classes.ItemNombre}> {state.length} </Box>
              ) : null}
            </Box>

            <Language />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderAppBare;
