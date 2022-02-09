import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./Styles";

function TypeCuisine(props) {
  const classes = useStyles();

  const { filterTypePays } = props;

  return (
    <Box className={classes.C1}>
      <FormLabel className={classes.TitleC1}>Type de Cuisine :</FormLabel>
      <Box className={classes.CH1C}>
        <Box className={classes.row}>
          <FormControlLabel
            onChange={filterTypePays}
            control={<Radio />}
            label="Cuisine Traditionnelle Française"
            value="Cuisine Traditionnelle Française"
            style={{ color: "black" }}
          />
          <FormControlLabel
            onChange={filterTypePays}
            value="Cuisine Italienne"
            control={<Radio />}
            style={{ color: "black" }}
            label="Cuisine Italienne"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default TypeCuisine;
