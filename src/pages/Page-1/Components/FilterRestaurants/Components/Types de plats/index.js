import {
  Box,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./Styles";

function TypesPlats(props) {
  const classes = useStyles();

  const { filterTypePlats } = props;

  return (
    <Box className={classes.C1}>
      <FormLabel className={classes.TitleC1}>Types de plats :</FormLabel>
      <Box className={classes.CH1C}>
        <FormGroup>
          <Box className={classes.row}>
            <FormControlLabel
              control={<Radio />}
              label="Pâtes"
              value={"Pâtes"}
              style={{ color: "black" }}
              onChange={filterTypePlats}
            />
            <FormControlLabel
              value={"Pizza"}
              control={<Radio />}
              style={{ color: "black" }}
              label="Pizza"
              onChange={filterTypePlats}

            />
            <FormControlLabel
              value={"Tartares"}
              control={<Radio />}
              style={{ color: "black" }}
              label="Tartares"
              onChange={filterTypePlats}

            />
          </Box>
          <Box className={classes.row}>
            <FormControlLabel
              control={<Radio />}
              style={{ color: "black" }}
              label="Légumes"
              value={"Légumes"}
              onChange={filterTypePlats}

            />

            <FormControlLabel
              control={<Radio />}
              style={{ color: "black" }}
              label="FruitsDeMer"
              value={"FruitsDeMer"}
              onChange={filterTypePlats}

            />
          </Box>
          <Box className={classes.row}>
            <Box className={classes.row}>
              <FormControlLabel
                value={"Antipasti"}
                control={<Radio />}
                style={{ color: "black" }}
                label="Antipasti"
              onChange={filterTypePlats}

              />
              <FormControlLabel
                control={<Radio />}
                style={{ color: "black" }}
                label="Lasagnes"
                value={"Lasagnes"}
              onChange={filterTypePlats}

              />
            </Box>
          </Box>
          <Box className={classes.row}>
            <FormControlLabel
              control={<Radio />}
              style={{ color: "black" }}
              label="Moules"
              value={"Moules"}
              onChange={filterTypePlats}

            />

            <FormControlLabel
              control={<Radio />}
              style={{ color: "black" }}
              label="Chaussons"
              value={"Chaussons"}
              onChange={filterTypePlats}

            />
            <FormControlLabel
              control={<Radio />}
              style={{ color: "black" }}
              label="Grillades"
              value={"Grillades"}
              onChange={filterTypePlats}

            />
          </Box>
          <Box className={classes.row}>
            <FormControlLabel
              control={<Radio />}
              label="Viandes"
              value="Viandes"
              style={{ color: "black" }}
              onChange={filterTypePlats}

            />
            <FormControlLabel
              control={<Radio />}
              style={{ color: "black" }}
              label="Poisson"
              value={"Poisson"}
              onChange={filterTypePlats}

            />
            <FormControlLabel
              control={<Radio />}
              style={{ color: "black" }}
              label="Salades"
              value={"Salades"}
              onChange={filterTypePlats}

            />
          </Box>
        </FormGroup>
      </Box>
    </Box>
  );
}

export default TypesPlats;
