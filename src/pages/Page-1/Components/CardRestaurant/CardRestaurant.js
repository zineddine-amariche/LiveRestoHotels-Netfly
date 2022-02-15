import { Box, Paper, Typography, Tooltip } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesSearchBare";
import Star from "@material-ui/icons/Star";
import { Link } from "react-router-dom";

import imageRestaurant from "../../../../assets/imageR1.jpeg";
import imageVector from "../../../../assets/Vector (2).svg";
import { useDispatch } from "react-redux";
import {
  dispatchCheck_Id,
  dispatchCheck_Id_Active,
} from "../../../../redux/actions/ActionCheck_id";
import { useSelector } from "react-redux";

function CardRestaurant(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { RestoDta } = props;
  const Check_Id = useSelector((state) => state.Check_Id);
  const handleCart = useSelector((state) => state.handleCart);

  console.log("Check_Id", Check_Id?.id);
  const Press_Id = (id) => {
    console.log("CId", id);

    Check_Id?.id === id || (!Check_Id?.id && dispatch(dispatchCheck_Id(id)));
    Check_Id?.id !== id &&
      Check_Id?.id &&
      dispatch(dispatchCheck_Id_Active(id));
  };

  const dispatchActiveModel = (id) => {
    dispatch(dispatchCheck_Id_Active(id));
  };
  const dispatchIdToStore = (id) => {
    !Check_Id?.id && dispatch(dispatchCheck_Id(id));
  };
  return RestoDta.length > 0 ? (
    RestoDta.map((i) => {
      return (
        <Paper
          className={classes.BigContainer}
          elevation={0}
          key={i.id}
          id={i.id}
        >
          <Box className={classes.TopBox}>
            <img
              src={i.img || imageRestaurant}
              alt="restaurant"
              className={classes.ImageStyles}
            ></img>
          </Box>
          <Box className={classes.BottomInFo}>
            <Box className={classes.F1C}>
              <Box className={classes.Titre}>
                <Typography className={classes.Titre}>{i.title}</Typography>
                <span className={classes.SpanBacg}></span>
              </Box>
              <Box className={classes.RateBox}>
                <Star className={classes.IconRate}></Star>
                <Typography className={classes.TextRate}>
                  {i.ratings.rate}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.F2C}>
              {i.subtitle}
              <Box className={classes.RowLiv}>
                <img
                  src={imageVector}
                  alt="restaurant"
                  className={classes.ImageStylesVector}
                ></img>
                <Typography className={classes.textStart}>
                  Prochaine livraison : {i.availability.next_delivery}
                </Typography>
              </Box>
            </Box>

            <Box className={classes.F3C}>
              {handleCart.length !== 0 ? (
                <>
                  {Check_Id?.id == i.id && (
                    <Tooltip title="Commander">
                      <Link
                        variant="contained"
                        className={classes.ButtonContent}
                        // to={Check_Id?.id == i.id || Check_Id?.id == null && `/details/${i.id}`}
                        to={`/details/${i.id}`}
                        onClick={() => {
                          // Press_Id(i.id);
                        }}
                      >
                        Commander
                      </Link>
                    </Tooltip>
                  )}
                  {Check_Id?.id !== i.id && (
                    <Tooltip title="Commander">
                      <Link
                        variant="contained"
                        className={classes.ButtonContent}
                        // to={Check_Id?.id == i.id || Check_Id?.id == null && `/details/${i.id}`}
                        to={``}
                        onClick={() => {
                          dispatchActiveModel(i.id);
                        }}
                      >
                        Commander
                      </Link>
                    </Tooltip>
                  )}
                </>
              ) : (
                <Tooltip title="Commander">
                  <Link
                    variant="contained"
                    className={classes.ButtonContent}
                    // to={Check_Id?.id == i.id || Check_Id?.id == null && `/details/${i.id}`}
                    to={`/details/${i.id}`}
                    onClick={() => {
                      dispatchIdToStore(i.id);
                    }}
                  >
                    Commander
                  </Link>
                </Tooltip>
              )}
            </Box>
          </Box>
        </Paper>
      );
    })
  ) : (
    <Paper className={classes.Vide}>Restaurants non disponible</Paper>
  );
}

export default CardRestaurant;
