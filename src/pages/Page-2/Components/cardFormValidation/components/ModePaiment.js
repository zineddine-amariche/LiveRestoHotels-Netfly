import { Box, Select } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../styles";
import Controls from "../../../../../components/Reusable/RuseForm/Controls/Controls";
import { useSelector } from "react-redux";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

function ModePaiment(props) {
  const classes = useStyles();

  const {value,handleInputChangeOrderPayements,handelChange}= props


  return (
    <Box className={classes.ModePaiement}>
      <Box className={classes.InformationTitre}>Mode de Paiement</Box>
      <Box className={classes.SelectionerText}>
        Séléctionnez le ou les modes de paiement que vous souhaitez utiliser
        pour cette commande. Vous pouvez en utilisez plusieurs, cependant la
        somme doit correspondre au total de la commande.
      </Box>
      {/* <Controls.Select options={dataParams.payments} label={"Mode Paiement"} onChange={handleInputChangeOrderPayements} /> */}

      <FormControl variant="outlined" className={classes.Select}>
        <InputLabel>Mode Paiement : </InputLabel>
        <Select
          value={value}
          onChange={handelChange}
        >
          <MenuItem value={1}>CB en ligne</MenuItem>
          <MenuItem value={2}>Chèques</MenuItem>
          <MenuItem value={3}>Espèces</MenuItem>
          <MenuItem value={4}>Ticket restaurant</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default ModePaiment;

//  {/* <FormControl variant="outlined"  className={classes.Container} >
//   <InputLabel>Mode Paiement</InputLabel>

//   <MuiSelect label="Mode Paiement" name={payments} value={payments} onChange={handleInputChangeOrderPayements}   >
//     <MenuItem value="">None</MenuItem>
//     {dataParams.payments.map((item) => (
//       <MenuItem value={item.id}>{item.title}</MenuItem>
//     ))}
//   </MuiSelect>
//   {/* {error && <FormHelperText>{error}</FormHelperText>} */}
// </FormControl> */}
