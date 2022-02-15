/* eslint-disable */
import React from "react";
import "./Modal.css";

import { Close } from "@material-ui/icons";
import { Box, Button } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { dispatchCheck_Id_Delete, dispatchCheck_Id_Desactive } from "../../../../redux/actions/ActionCheck_id";
import { useDispatch } from "react-redux";
// import img from "../../assets/DeleteUser.png";
const CheckIdModel = (props) => {
  const classes = useStyles();
  const { ModalClose } = props;
  const state = useSelector((state) => state.handleCart);
  let sum = 0;
  state.map((i) => {
    sum += i.quantity * i.price;
  });
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch({ type: "DELETE_ALL_ITEMS" });
    dispatch(dispatchCheck_Id_Delete());

  };
  return (
    <Box
      className="avsolyte"
      onClick={() => {
        // ModalClose()
      }}
    >
      <Box className="model-box">
        <Box className="right">
          <Box className="box-btn">
            <Box className={classes.Header}>
              <Box className={classes.Title}>Alert !</Box>

              <Button>
                <Close />
              </Button>
            </Box>
            <Box className={classes.bodyText}>
              Vous ne pouvez pas ajouter des produits de restaurants différents
              au sein d'un même panier.<br/> Videz le contenu de votre panier si vous
              souhaitez ajouter ce produit
            </Box>

            <Box className={classes.Body}></Box>
          </Box>

          <Box className="footer-G">
            <Button
              className="back-delete"
              onClick={() => {
                deleteAll();
                dispatch(dispatchCheck_Id_Desactive());

              }}
            >
              Vider le panier
            </Button>
            <Button
              className="back"
              onClick={() => {
                dispatch(dispatchCheck_Id_Desactive());
              }}
            >
              Annuler
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckIdModel;