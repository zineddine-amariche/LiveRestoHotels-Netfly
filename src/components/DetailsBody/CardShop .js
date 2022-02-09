import { Box, Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesDetails";
import {useTranslation} from'react-i18next'

function CardShop() {
  const {t}= useTranslation(['details']) ; 
  const classes = useStyles();
  return (
    <Paper className={classes.BoxCardShop}>
      <Box className={classes.LeftCardShopItem}>
        <Box className={classes.NC}>
          <Box className={classes.RowNc}>
            <Typography className={classes.RowNcText}>1</Typography>
            <Box className={classes.LeftRowNc}>
              <Typography className={classes.LeftRowNcTitle}>Nom du plat</Typography>
              <Typography className={classes.LeftRowNcTxt}>Détails facultatife</Typography>
            </Box>
          </Box>

          <Box className={classes.BottomNct}    >
            <Typography>{t('details_cart_item_add_note')}</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.RightCardShopItem}>
        <Typography className={classes.RSIText}   >12,99 €</Typography>
        <Box className={classes.BTS}>
          <Box variant="contained" className={classes.BTS1}>-</Box>
          <Box variant="contained" className={classes.BTS1}>+</Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default CardShop;
