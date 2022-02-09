/*Eslint-disable*/

import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";
import UseFilter from "../../../../Hooks/UseFilter";
import useStyles from "./Styles";

function EtatRes(props) {
  const classes = useStyles();
  const { filterData } = props;


  const { category,handelCategory} = UseFilter()
  return (
    <Box className={classes.C1}>
      <FormLabel className={classes.TitleC1}>Etat :</FormLabel>
      <Box className={classes.CH1C}>
          <Box className={classes.row}>
            <FormControlLabel
              control={<Radio />}
              label="fermé"
              value="fermé"
              style={{ color: "black" }}
              onChange={filterData}
            />
            <FormControlLabel
              value="ouvert"
              control={<Radio />}
              style={{ color: "black" }}
              label="ouvert"
              onChange={filterData}
            />
            <FormControlLabel
              value="all"
              control={<Radio />}
              style={{ color: "black" }}
              label="tout"
              onChange={filterData}
            />
          </Box>
      </Box>
    </Box>
  );
}

export default EtatRes;
