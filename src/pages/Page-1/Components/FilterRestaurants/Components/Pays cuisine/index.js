import { Box, FormControlLabel, FormLabel, Radio } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./Styles";

function PaysCuisine(props) {
  const classes = useStyles();



  const { filterPays } = props;

  return (
    <Box className={classes.C1}>
      <FormLabel className={classes.TitleC1}>Pays Cuisine :</FormLabel>
      <Box className={classes.CH1C}>
          <Box className={classes.row}>
            <FormControlLabel
              onChange={filterPays}
              control={<Radio  />}
              label="France"
              value="France"
              style={{ color: "black" }}
            />
            <FormControlLabel
              onChange={filterPays}
              value="Italie"
              control={<Radio  />}
              style={{ color: "black" }}
              label="Italie"
            />
          </Box>
      </Box>
    </Box>
  );
}

export default PaysCuisine;
