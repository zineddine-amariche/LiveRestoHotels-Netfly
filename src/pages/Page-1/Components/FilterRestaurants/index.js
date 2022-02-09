import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";
import Caractérstique from "./Components/Caractérstiques";
import EtatRes from "./Components/EtatRestaurants";
import PaysCuisine from "./Components/Pays cuisine";
import TypeCuisine from "./Components/Type de Cuisine";
import TypesPlats from "./Components/Types de plats";
import useStyles from "./StylesFilter";
import UseFilter from "./../../Hooks/UseFilter";
function FilterRestaunrants(props) {
  const {
    filterData,
    filterCaractérstique,
    filterTypePlats,
    filterRestrictions,
    filterPays,
    filterTypePays,
    filterAllData,
  } = props;
  const classes = useStyles();
  const { category, handelCategory } = UseFilter();
  console.log("category data", category);
  return (
    <Paper className={classes.ConatinerFilter}>
      <Box className={classes.FixFilter}>
        <RadioGroup value={category} onChange={handelCategory} >
          <EtatRes filterData={filterData} filterAllData={filterAllData} />
          <Caractérstique filterCaractérstique={filterCaractérstique} />
          <TypesPlats filterTypePlats={filterTypePlats} />
          <PaysCuisine filterPays={filterPays} />
          <TypeCuisine filterTypePays={filterTypePays} />
        </RadioGroup>
      </Box>
    </Paper>
  );
}

export default FilterRestaunrants;
