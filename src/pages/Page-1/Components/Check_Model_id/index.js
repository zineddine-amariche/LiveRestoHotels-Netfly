/* eslint-disable */
import React from "react";
import "./Modal.css";

import { Close } from "@material-ui/icons";
import { Box, Button } from "@material-ui/core";
import useStyles from "./Styles";
import { useSelector } from "react-redux";
// import img from "../../assets/DeleteUser.png";
const Modal = (props) => {
  const classes = useStyles();
  const { ModalClose } = props;
  const state = useSelector((state) => state.handleCart);
  let sum = 0;
  state.map((i) => {
    sum += i.quantity * i.price;
  });
  return (
    <Box className="avsolyte" onClick={() => ModalClose()}>
      <Box className="model-box">
        <Box className="right">
          <Box className="box-btn">
            <Box className={classes.Header}>
              <Box className={classes.Title}>Panier </Box>

              <Button>
                <Close />
              </Button>
            </Box>

            <Box className={classes.Body}>
              <Box className={classes.Table}>
                <Box className={classes.item}>quantity :</Box>
                <Box className={classes.item}>name :</Box>
                <Box className={classes.item}>prix :</Box>
                <Box className={classes.item}>Sous-total :</Box>
                <Box className={classes.item}>Frais de livraison :</Box>
              </Box>
              {state.map((i) => {
                return (
                  <Box className={classes.TableBody}>
                    <Box className={classes.Table}>{i.quantity}</Box>
                    <Box className={classes.Table}>{i.title}</Box>
                    <Box className={classes.Table}>{i.price} €</Box>
                    <Box className={classes.Table}>{sum.toFixed(2)} €</Box>
                    <Box className={classes.Table}>0 €</Box>
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box className="footer-G">
            <Button
              className="back"
              onClick={() => {
                // handelCloseModal();
              }}
            >
              Ok
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Modal;
