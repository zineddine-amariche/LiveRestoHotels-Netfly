import { Box, Checkbox, FormControlLabel } from "@material-ui/core";
import React, { useState } from "react";
import Controls from "../../../../../components/Reusable/RuseForm/Controls/Controls";
import useStyles from "../styles";

function Remarques(props) {
  const classes = useStyles();
  const [Email, setEmail] = useState(false);
  const {
    order,
    handleInputChangeOrder,
    register,
    bill,
    handleInputChangebillEmail
  } = props;
  const handleCheckChange = (e) => {
    setEmail(!Email);
  };
  return (
    <Box className={classes.Remarques}>
      <Box className={classes.InformationTitre}>
        Une remarque pour cette commande ?
      </Box>

        
      <Box class={classes.ContainerTextArea} >
      <Controls.TextArea
        label={"Remarques ... "}
        {...register("comment")}
        required
        variant="outlined"
        class={classes.ContainerTextArea}
        value={order.comment}
        onChange={handleInputChangeOrder}
        name={"comment"}
      />
      <FormControlLabel
        control={<Checkbox checked={Email} />}
        label="j'ai besoin d'une facture"
        value={Email}
        style={{ color: "black" }}
        onChange={handleCheckChange}
      />

      {Email && (
        <>
          <Box className={classes.SelectionerText}>
            Sur quelle adresse email souhaitez-vous la recevoir ?
          </Box>
          <Controls.Input
            label={"Email"}
            value={bill}
            onChange={handleInputChangebillEmail}
            name={"bill"}
            required
          />
        </>
      )}
      </Box>
     
    </Box>
  );
}

export default Remarques;
