import { Box, Button, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "../stylesDetails";
import RemoveShoppingCart from "@material-ui/icons/RemoveShoppingCart";
import logoShop from "../../../../assets/shopping-cart (1).svg";
import CardShop from "./components/CardShop ";
import { useDispatch, useSelector } from "react-redux";
import ValidationForm from "../cardFormValidation/index";
import logo from "../../../../assets/chevron-right.svg";
import Total from "./components/Totale";
import Frais from "./components/Frais";
import Calcule from "./components/Calcule";
import Delete from "@material-ui/icons/Delete";
import { dispatchCheck_Id_Delete } from "../../../../redux/actions/ActionCheck_id";
function HeaderShop() {
  const classes = useStyles();
  const state = useSelector((state) => state.handleCart);
  const [Valide, setValide] = useState(false);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(state));
  }, [state]);

  const Resto = useSelector((state) => state.Restaurants);
  const { Restaurants, establishments } = Resto;
  const { data } = Restaurants;
  const dispatch = useDispatch();

  const deleteAll = () => {
    dispatch({ type: "DELETE_ALL_ITEMS" });
    dispatch(dispatchCheck_Id_Delete());
    localStorage.setItem("Cart", null);

  };
  const closeValidate = () => {
    setValide(false);
  };

  return (
    <Paper className={classes.containerHeaderShop} elevation={0}>
      <Box className={classes.BoxHeaderShop}>
        {Valide ? (
          <Box className={classes.BoxHeader}>
            <Box
              className={classes.logoReturn}
              onClick={() => {
                closeValidate();
              }}
            >
              <img src={logo} className={classes.imgReturn} />
            </Box>

            <Box className={classes.Firstrow}>
              <img src={logoShop} alt="logo shop" />
              <Typography className={classes.TitleHeaderShop}>
                Panier
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box className={classes.row}>
            <img src={logoShop} alt="logo shop" />
            <Typography className={classes.TitleHeaderShop}>Panier</Typography>
          </Box>
        )}
      </Box>
      {!Valide ? (
        <Box className={classes.BoxHeaderShopBody}>
          {state.length > 0 && (
            <Box className={classes.rowDelete} onClick={deleteAll}>
              <Delete />
              <Box className={classes.TitleDelete}>Vider le panier </Box>
            </Box>
          )}
          {state >= 0 ? (
            <>
              <RemoveShoppingCart className={classes.IconR} />
              <Typography className={classes.TitllePanier}>
                Remplissez votre panier
              </Typography>
              <Typography className={classes.PanierText}>
                Ajoutez de la nourriture savoureuse au menu et commandez votre
                nourriture.
              </Typography>
            </>
          ) : (
            <>
            <Box className={classes.BoxHeaderShopBodyItems}>
              <CardShop state={state} />
              </Box>

              <Box className={classes.BoxMony}>
                {data && <Calcule />}
                {data && <Frais />}
                {data && <Total />}
                <Button
                  variant="contained"
                  className={classes.BTNM}
                  onClick={() => {
                    setValide(true);
                  }}
                >
                  Valider
                </Button>
            </Box>
            </>

          )}
        </Box>
      ) : (
        state.length > 0 && <ValidationForm closeValidate={closeValidate} />
      )}
    </Paper>
  );
}

export default HeaderShop;
