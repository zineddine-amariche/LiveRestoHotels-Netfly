/* eslint-disable */

/** @jsxImportSource theme-ui */

import React, { useState, useEffect } from "react";
import { useStyles } from "./stylesHeader";
import {
  AppBar,
  Toolbar,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Box,
  ButtonGroup,
  useMediaQuery,
} from "@material-ui/core";
import shoppingCart from "../../assets/Group 101.svg";
const langues = ["fr", "en", "de"];

import chevronRight from "../../assets/chevron-right.svg";
import { ArrowDropDownCircleOutlined } from "@material-ui/icons";
import logo from "../../assets/logo.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";

import Flag from "../../assets/fr.png";
import Flag2 from "../../assets/en.png";
import Flag3 from "../../assets/alm.png";

const options = ["Fr", "En", "De"];

const HeaderAppBare = (props) => {
  const { navigation, ShowFilterHandeler, handelShowPanier, ShowModal } = props;
  const theme = useTheme();

  const location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  let { id } = params;
  const state = useSelector((state) => state.handleCart);
  const classes = useStyles();
  const [open, setOpen] = useState(false); // false=>visible
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const anchorRef = React.useRef(null);
  const { t, i18n } = useTranslation();
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

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    i18n.changeLanguage(langues[index]);
    setOpen(false);
    navigate("/login");
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const GoabackHome = () => {
    navigate("/");
  };
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const ExtraLarge = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box className={classes.appRoot}>
      <AppBar
        position="fixed"
        open={open}
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

            <React.Fragment>
              <buttonGroupClasses
                variant="contained"
                ref={anchorRef}
                aria-label="split button"
                className={classes.GroupBtn}
              >
                {selectedIndex == "0" && (
                  <img src={Flag} className={classes.ImageInd} />
                )}
                {selectedIndex == "1" && (
                  <img src={Flag2} className={classes.ImageInd} />
                )}
                {selectedIndex == "2" && (
                  <img src={Flag3} className={classes.ImageInd} />
                )}

                <Button
                  aria-controls={open ? "split-button-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                  sx={{
                    color: "white",
                    fontWeight: "500",
                    backgroundColor: "inherit",
                    height: "70px",
                    width: "70px",
                    fontSize: "1.2rem",
                  }}
                >
                  {langues[selectedIndex].toUpperCase()}
                </Button>
              </buttonGroupClasses>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                className={classes.bg}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "center top"
                          ? "center top"
                          : "center bottom",
                    }}
                  >
                    <Paper sx={{ color: "#fff" }}>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          id="split-button-menu"
                          sx={{ color: "#000", fontWeight: "600" }}
                        >
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              disabled={index === selectedIndex}
                              selected={index === selectedIndex}
                              onClick={(event) =>
                                handleMenuItemClick(event, index)
                              }
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </React.Fragment>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderAppBare;
