import { Paper, useMediaQuery } from "@material-ui/core";
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

  const handelShowPanier = ()=>{
    setShowPanier(!ShowPanier)
  } 
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLarge = useMediaQuery(theme.breakpoints.up("lg"));



  useEffect(() => {
   if(!matches){
    setShowPanier(true)
     
   } else if (matchesLarge){
    setShowPanier(true)

   }
  }, [matches,matchesLarge])
  return (
    <Paper className={classes.ContainerDetails} elevation={0}>
      <AppBarr handelShowPanier={handelShowPanier} />
      <DetailsBody  ShowPanier={ShowPanier}/>
    </Paper>
  );
}

export default Details;
