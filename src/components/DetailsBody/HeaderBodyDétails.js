import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./stylesDetails";
import imageHeader from "../../assets/unsplash_Qa29U4Crvn4.svg";
import logoRestaurent from "../../assets/logo_liveresto.png";
import Rating from "@mui/material/Rating/Rating";

import Start from "@material-ui/icons/Star"
import StartOut from "@material-ui/icons/StarOutline"
import Info from "@material-ui/icons/Info";
import Favorite from "@material-ui/icons/Favorite";

import {useTranslation} from'react-i18next'


function HeaderBodyDétails() {
  const {t}= useTranslation(['details']) ; 
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  return (
    <Paper className={classes.HeaderDetailsContainer}>
      <Box className={classes.BoxHeaderImage}>
        <img
          src={imageHeader}
          alt="image restaurant"
          className={classes.Image}
        />
        <Box className={classes.BottomHeaderDeatils}>
          <Box className={classes.CircleImageContainer}>
            <img src={logoRestaurent} className={classes.ImageX} />
          </Box>
          <Box className={classes.Title}>
            <Box className={classes.LeftTitleBody}>
              <Typography className={classes.TitleText}>
                Nom du restaurant
              </Typography>
              <span className={classes.BacYellow}></span>

              {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
              <Typography variant="body2" className={classes.body2}>
                Vous pouvez épargner des timbres auprès de ce restaurant.
                Inscrivez-vous à notre Newsletter pour les recevoir. Vous pouvez
                vous inscrire au moment de finaliser votre commande en cliquant
                sur "Je souhaite rester informé des promotions, des nouveaux
                restaurants et des offres spéciales".
              </Typography>
              <span className={classes.VoirPlus}>{t('details_head_body_moreInfo')}</span>
            </Box>

            <Box className={classes.RightTitleBody}>
              <Typography className={classes.CommentStarts}>
                {t('details_head_body_comment',{ count:133})}
              </Typography>
              <Typography className={classes.SubTitleText}>
                <Start/>
                <Start/>
                <Start/>
                <StartOut/>
                <StartOut/>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default HeaderBodyDétails;
