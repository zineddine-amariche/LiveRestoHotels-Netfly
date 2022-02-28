import { Box, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useValidation } from "../Components/cardFormValidation/Hooks/useValidation";
const CARSP = (props) => {
  const classes = useStyles();
  const { handelShowPanier } = props;

  const { all } = useValidation();
  return (
    <Box className={classes.CARDBUTTON}>
      <Button
        startIcon={<AddShoppingCartIcon className={classes.Icon} />}
        fullWidth
        variant="contained"
        className={classes.BtnContainer}
        onClick={handelShowPanier}
      >
        Panier 
        <Box sx={{marginLeft:5}}> ({all?.toFixed(2)} €)</Box>
      </Button>
    </Box>
  );
};

export default CARSP;
