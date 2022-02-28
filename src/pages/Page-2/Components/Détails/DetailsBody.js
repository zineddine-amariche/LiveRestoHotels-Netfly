import { Box, Fab, Paper, useMediaQuery } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import HeaderBodyDétails from "./Components/HeaderBodyDétails";
import HeaderShop from "../ShopSlider/ShopSlide";
import useStyles from "../stylesDetails";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import { useSelector, useDispatch } from "react-redux";
import {
  GET_ONE_RESTO,
  GET_ONE_RESTO_FAILED,
  GET_ONE_RESTO_LOADING,
} from "../../../../redux/types/DataRestoTypes";
import { useParams } from "react-router-dom";
import {
  GET_DATES,
  GET_DATES_FAILED,
  GET_DATES_LOADING,
} from "../../../../redux/types/dateTypes";
import axios from "axios";
import LabTabs from "../Détails/Components/LabTabs";
import { useTheme } from "@material-ui/core/styles";

function DetailsBody(props) {
  const [loading, setloading] = useState(false);
  const { ShowPanier, actAppBare, handelShowPanier } = props;
  const classes = useStyles();
  const theme = useTheme();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const dispatch = useDispatch();
  let params = useParams();
  let { id } = params;

  const fetchOneRestaurants = async () => {
    const Token = localStorage.getItem("token");
    const url = `https://dev500.live-resto.fr/api/products/${id}`;
    let configHead = {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "fr",
        Authorization: `Bearer ${Token}`,
      },
    };
    try {
      dispatch({ type: GET_ONE_RESTO_LOADING });
      if (id) {
        let resp = await fetch(url, configHead);
        resp = await resp.json();

        dispatch({ type: GET_ONE_RESTO, payload: resp });
        const url2 = `https://dev500.live-resto.fr/api/orders/dates-availabilities`;
        let data = {
          address_id: 1,
          establishment_id: id,
        };
        try {
          dispatch({ type: GET_DATES_LOADING });
          if (id) {
            const res = await axios.post(url2, data, configHead);
            dispatch({ type: GET_DATES, payload: res });
            setloading(true);
          }
        } catch (err) {
          dispatch({ type: GET_DATES_FAILED, payload: err });
        }
      }
    } catch (err) {
      dispatch({ type: GET_ONE_RESTO_FAILED, payload: err });
    }
  };

  const restoOne = useSelector((state) => state.Restaurant);
  const { OneResto } = restoOne;
  const { establishment } = OneResto;
  useEffect(() => {
    fetchOneRestaurants();
  }, []);

  const matchesxs = useMediaQuery(theme.breakpoints.down("xs"));
  const matchessm = useMediaQuery(theme.breakpoints.down("sm"));
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLarge = useMediaQuery(theme.breakpoints.down("lg"));
  const ExtraLarge = useMediaQuery(theme.breakpoints.down("xl"));
  console.log("matchesxs", matchesxs);
  console.log("matchessm", matchessm);
  console.log("matches", matches);
  console.log("matchesLarge", matchesLarge);
  console.log("ExtraLarge", ExtraLarge);
  return (
    <Box className={classes.ContainerDetails}>
      <Box className={classes.LeftCol}>
        {matchesxs && ShowPanier && (
          <Box
            className={classes.CloseSHopCard}
            onClick={handelShowPanier}
          ></Box>
        )}
        {matchessm && ShowPanier && (
          <Box
            className={classes.CloseSHopCard}
            onClick={handelShowPanier}
          ></Box>
        )}
        {matchesLarge && ShowPanier && (
          <Box
            className={classes.CloseSHopCard}
            onClick={handelShowPanier}
          ></Box>
        )}
        {/* {ExtraLarge && ShowPanier && (
          <Box
            className={classes.CloseSHopCard}
            onClick={handelShowPanier}
          ></Box>
        )} */}
        <HeaderBodyDétails establishment={establishment} />
        <LabTabs loading={loading} actAppBare={actAppBare} />

        {/* <Fab color="primary" aria-label="add" className={classes.Fab}>
          <ArrowDropUp onClick={scrollToTop} />
        </Fab> */}
      </Box>

      {ShowPanier && (
        <Box className={classes.RightCol}>
          <HeaderShop />
        </Box>
      )}
    </Box>
  );
}

export default DetailsBody;
