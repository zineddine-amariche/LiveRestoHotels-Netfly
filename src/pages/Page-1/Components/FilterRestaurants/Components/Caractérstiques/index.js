import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { useState } from "react";
import UseFilter from "../../../../Hooks/UseFilter";
import useStyles from "./Styles";

function Caractérstique(props) {
  const classes = useStyles();
  const { filterCaractérstique, } = props;
  return (
    <Box className={classes.C1}>
      <FormLabel className={classes.TitleC1}>Caractérstiques :</FormLabel>
      <Box className={classes.CH1C}>
          <Box className={classes.row}>
            <FormControlLabel
              control={<Radio  />}
              label="Hallal"
              value="Hallal"
              style={{ color: "black" }}
              onChange={filterCaractérstique}
            />
            <FormControlLabel
              value="Casher"
              control={<Radio  />}
              style={{ color: "black" }}
              label="Casher"
              onChange={filterCaractérstique}

            />
          </Box>

          <FormControlLabel
            value="Végétarien"
            control={<Radio  />}
            style={{ color: "black" }}
            label="Végétarien"
            onChange={filterCaractérstique}

          />
      </Box>
    </Box>
  );
}

export default Caractérstique;
