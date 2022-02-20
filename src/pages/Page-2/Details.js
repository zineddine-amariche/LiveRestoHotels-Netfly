import { Divider, Paper, useMediaQuery } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesDetails";
import AppBarr from "../../components/AppHeader/AppBar";
import DetailsBody from "./Components/Détails/DetailsBody";
import { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";

function Details() {
  const classes = useStyles();
  const theme = useTheme();

  const [ShowPanier, setShowPanier] = useState(false);

  const handelShowPanier = () => {
    setShowPanier(!ShowPanier);
  };
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLarge = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    if (!matches) {
      setShowPanier(true);
    } else if (matchesLarge) {
      setShowPanier(true);
    }
  }, [matches, matchesLarge]);

  const [actAppBare, setactAppBare] = useState(true);
  const scroller = () => {
    if (window.pageYOffset > 480) {
      setactAppBare(false);
    } else {
      setactAppBare(true);
    }
  };
  window.addEventListener("scroll", scroller);
  return (
    <Paper className={classes.ContainerDetails} elevation={0}>
      <AppBarr handelShowPanier={handelShowPanier} />
      <DetailsBody ShowPanier={ShowPanier} actAppBare={actAppBare} />
    </Paper>
  );
}

export default Details;
