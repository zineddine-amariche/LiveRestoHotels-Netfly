import { Box, Button, Paper } from "@material-ui/core";
import React from "react";
import AppBarr from "../../components/AppHeader/AppBar";
import FooterBox from "../../components/footer/Footer";
import useStyles from "./styles";
import SuccessImg from "../../assets/happy.gif";
import { useNavigate } from "react-router-dom";

function Success() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Paper className={classes.ContainerError}>
      <AppBarr />
      <Box className={classes.BoxContainer}>
        <Box className={classes.LeftCol}>
          <Box className={classes.num}>Félicitation !</Box>
          <Box className={classes.Text}>
            Votre commande est en cours de préparation.
          </Box>
          <Box className={classes.TextA}>
            Merci d’avoir commandé chez Live Resto Room service. Une fois votre
            commande préparée par le restaurant, un de nos livreurs la prendra
            en charge jusqu’à votre hôtel.
          </Box>
          <Box className={classes.TextA}>
            Merci de{" "}
            <span className={classes.Span}>
              rester disponible par téléphone
            </span>{" "}
            si nous avons besoin de vous joindre
          </Box>
          <Button
            className={classes.BtnHome}
            onClick={() => {
              navigate("/");
            }}
          >
            Accueil
          </Button>
        </Box>
        <Box className={classes.RightCol}>
          <img src={SuccessImg} className={classes.Image} />
        </Box>
      </Box>
      <FooterBox />
    </Paper>
  );
}

export default Success;
