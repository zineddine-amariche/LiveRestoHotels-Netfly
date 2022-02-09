import { Box, Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesDetails";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import RemoveShoppingCart from "@material-ui/icons/RemoveShoppingCart";
import logoShop from "../../assets/shopping-cart (1).svg";
import CardShop from "./CardShop ";
import {useTranslation} from 'react-i18next'
function HeaderShop() {
  const {t} = useTranslation(['details']) ; 
  const classes = useStyles();
  return (
    <Paper className={classes.containerHeaderShop} elevation={0}>
      <Box className={classes.BoxHeaderShop}>
        <img src={logoShop} alt="logo shop" />
        <Typography className={classes.TitleHeaderShop}>{t('details_cart_title')}</Typography>
      </Box>
      <Box className={classes.BoxHeaderShopBody}>
        {/* <RemoveShoppingCart  className={classes.IconR}/>
            <Typography className={classes.TitllePanier}>
            Remplissez votre panier
            </Typography>
            <Typography className={classes.PanierText}>
            Ajoutez de la nourriture savoureuse au menu et commandez votre nourriture.
            </Typography> */}
        <CardShop />
        <CardShop />

        <Box className={classes.BoxMony}>
          <Box className={classes.RowST}>
            <Typography>{t('details_cart_subtotal')}</Typography>
            <Typography>25 {t('details_cart_currency')}</Typography>
          </Box>
          <Box className={classes.RowST}>
            <Typography>{t('details_cart_delivery_charges')}</Typography>
            <Typography>5 {t('details_cart_currency')}</Typography>
          </Box>
          <Box className={classes.RowST}>
            <Typography style={{fontWeight:"bold"}}> {t('details_cart_delivery_charges')}</Typography>
            <Typography style={{fontWeight:"bold"}}>30 {t('details_cart_currency')}</Typography>
          </Box>
          <Button variant="contained" className={classes.BTNM}>{t('details_cart_pay')}</Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default HeaderShop;
