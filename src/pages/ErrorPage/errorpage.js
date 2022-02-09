import { Box, Button, Paper } from "@material-ui/core";
import React from "react";
import AppBarr from "../../components/AppHeader/AppBar";
import FooterBox from "../../components/footer/Footer";
import useStyles from "./styles";
import errorImg from "../../assets/404.gif"
import { useNavigate } from "react-router-dom";

function Errorpage() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Paper className={classes.ContainerError}>
      <AppBarr />
      <Box className={classes.BoxContainer}>
        <Box className={classes.LeftCol}>
            <Box className={classes.num}>404</Box>
            <Box className={classes.Text}>Ooops</Box>
            <Box className={classes.Text}>la page n'a pas été trouvée</Box>
            <Box className={classes.TextA}>la page n'existe pas ou a été supprimé 
                nous vous suggérons de retourner sur la page d'accueil
            </Box>
            <Button variant="contained" className={classes.Btn} onClick={()=>{
              navigate("/")
            }}>
                Retour à l'accueil
            </Button>
        </Box>
        <Box className={classes.RightCol} >
            <img src={errorImg} className={classes.Image} />
        </Box>
      </Box>
      <FooterBox />
    </Paper>
  );
}

export default Errorpage;
