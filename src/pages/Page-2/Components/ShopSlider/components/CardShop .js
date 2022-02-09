import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../../../../../redux/actions/addToCartAction";
import useStyles from "../../stylesDetails";

function CardShop(props) {
  const { state } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  return state.map((j) => {
    return (
      <Paper className={classes.BoxCardShop} key={j.id}>
        <Box className={classes.LeftCardShopItem}>
          <Box className={classes.NC}>
            <Box className={classes.RowNc}>
              <Typography className={classes.RowNcText}>{j.quantity}</Typography>
              <Box className={classes.LeftRowNc}>
                <Typography className={classes.LeftRowNcTitle}>
                  {j.title}
                </Typography>
                <Typography className={classes.LeftRowNcTxt}>
                  {j.description}
                </Typography>
              </Box>
            </Box>

            <Box className={classes.BottomNct}>
              <Typography>Ajouter une note</Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.RightCardShopItem}>
          <Typography className={classes.RSIText}>
            {" "}
            {(j.quantity * j.price).toFixed(2)} €
          </Typography>
          <Box className={classes.BTS}>
            <Box
              variant="contained"
              className={classes.BTS1}
              onClick={() => handleDel(j)}
            >
              -
            </Box>
            <Box
              variant="contained"
              className={classes.BTS1}
              onClick={() => handleAdd(j)}
            >
              +
            </Box>
          </Box>
        </Box>
      </Paper>
    );
  });
}

export default CardShop;
