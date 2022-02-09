import { useTheme } from "@material-ui/core/styles";

import { Paper, useMediaQuery } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AppBarr from "../../components/AppHeader/AppBar";
import FooterBox from "../../components/footer/Footer";
import BodyRestaurants from "./Components/Body/BodyRestaurants";
import useStyles from "./Styles";
import UseFilter from "./Hooks/UseFilter";
import Modal from "./Components/Modal/Modal";
function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const [ShowFilter, setShowFilter] = useState(true);
  const [modal, setModal] = useState(false);
  const ShowFilterHandeler = () => {
    setShowFilter(!ShowFilter);
  };
  const ShowModal = () =>{
    setModal(!modal)
  }

  const ModalClose = ()=>{
    setModal(false)
  }
  
  useEffect(() => {
    if (!matches) {
      setShowFilter(true);
    } else if (matchesLarge) {
      setShowFilter(true);
    }
  }, [matches, matchesLarge]);
  return (
    <Paper className={classes.ContainerHome}>
      <AppBarr ShowFilterHandeler={ShowFilterHandeler} ShowModal={ShowModal} />
      <BodyRestaurants ShowFilter={ShowFilter}  />
      <FooterBox />
      {modal && <Modal  ModalClose={ModalClose} />}
    </Paper>
  );
}

export default Dashboard;
