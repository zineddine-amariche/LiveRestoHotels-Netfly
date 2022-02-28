import { Paper, useMediaQuery, Box } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesDetails";
import AppBarr from "../../components/AppHeader/AppBar";
import DetailsBody from "./Components/Détails/DetailsBody";
import { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import CARSP from "./Button-Panier";

function Details() {
  const classes = useStyles();
  const theme = useTheme();

  const [ShowPanier, setShowPanier] = useState(false);

  const handelShowPanier = () => {
    setShowPanier(!ShowPanier);
  };
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLarge = useMediaQuery(theme.breakpoints.down("lg"));
  const ExtraLarge = useMediaQuery(theme.breakpoints.down("xl"));
  const matchesxs = useMediaQuery(theme.breakpoints.down("xs"));
  const matchessm = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (matches) {
      setShowPanier(true);
    } else if (matchesLarge) {
      setShowPanier(true);
    } else if (ExtraLarge || matchesxs || matchessm) {
      setShowPanier(true);
    }
  }, [matches, matchesLarge, ExtraLarge, matchessm, matchesxs]);

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
      <DetailsBody
        ShowPanier={ShowPanier}
        actAppBare={actAppBare}
        handelShowPanier={handelShowPanier}
      />
      {/* {matches && <Box className={classes.CARDBUTTON}>SHOW MY CARD SHOP</Box>} */}
      {matchesxs && <CARSP  handelShowPanier={handelShowPanier}/>}
      {matchessm && <CARSP handelShowPanier={handelShowPanier}/>}
    </Paper>
  );
}

export default Details;
