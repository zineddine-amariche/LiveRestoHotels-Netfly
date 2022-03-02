import { useTheme } from "@material-ui/core/styles";
import { Paper, useMediaQuery } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AppBarr from "../../components/AppHeader/AppBar";
import FooterBox from "../../components/footer/Footer";
import BodyRestaurants from "./Components/Body/BodyRestaurants";
import useStyles from "./Styles";
import Modal from "./Components/Modal/Modal";
import CheckIdModel from "./Components/Check_Model_id";
import { useSelector } from "react-redux";
import { dispatchRedirected } from "../../redux/actions/Coordinates";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const Check_Id = useSelector((state) => state.Check_Id);
  const coordinates = useSelector((state) => state.coordinates);
  const { IsRedirected } = coordinates;
  const [ShowFilter, setShowFilter] = useState(true);
  const [modal, setModal] = useState(false);
  const ShowFilterHandeler = () => {
    setShowFilter(!ShowFilter);
  };
  const ShowModal = () => {
    setModal(!modal);
  };
  const ModalClose = () => {
    setModal(false);
  };
  const navigate = useNavigate();
  var timer;
  function mouseStopped() {
    // console.log("mouse stoped");
    if (!IsRedirected) {
      dispatch(dispatchRedirected());
      navigate("/login");

    }
  }

  window.addEventListener("mousemove", function () {
    // console.log("Mouse moving");
    clearTimeout(timer);
    timer = setTimeout(mouseStopped, 200000);
  });

 

  useEffect(() => {
    if (!matches) {
      setShowFilter(true);
    } else if (matchesLarge) {
      setShowFilter(true);
    }
  }, [matches, matchesLarge]);


  return (
    <Paper className={classes.ContainerHome} id="stopped">
      <AppBarr ShowFilterHandeler={ShowFilterHandeler} ShowModal={ShowModal} />
      <BodyRestaurants ShowFilter={ShowFilter} />
      <FooterBox />
      {modal && <Modal ModalClose={ModalClose} />}
      {Check_Id?.activeModal && <CheckIdModel />}
    </Paper>
  );
}

export default Dashboard;
