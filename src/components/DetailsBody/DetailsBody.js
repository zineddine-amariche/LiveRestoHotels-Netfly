import { Box, Fab, Paper } from "@material-ui/core";
import React from "react";
import ContainerOrder from "./ContainerOrder";
import DétailsMenus from "./DétailsMenus";
import HeaderBodyDétails from "./HeaderBodyDétails";
import HeaderShop from "./HeaderShop";
import useStyles from "./stylesDetails";
import TitleBodyConatiner from "./TitleBodyConatiner";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import {useTranslation} from "react-i18next" ; 

function DetailsBody() {
  const {t} = useTranslation(['details']) ; 
  const classes = useStyles();
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

  return (
    <Paper className={classes.ContainerDetails}>
      <Box className={classes.LeftCol}>
        <HeaderBodyDétails />
        <DétailsMenus  />
        <TitleBodyConatiner title={t('details_body_best_winds')} />
        <ContainerOrder />
        <TitleBodyConatiner title={t('details_body_categories')}/>
        <ContainerOrder />

      </Box>
      <Box className={classes.RightCol}>
        <HeaderShop />
      </Box>
      <Fab color="primary" aria-label="add" className={classes.Fab}>
        <ArrowDropUp  onClick={scrollToTop}/>
      </Fab>
    </Paper>
  );
}

export default DetailsBody;
