import { Box, Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import useStyles from "./Styles";

function RestrictionsAlimentaires(props) {
  const classes = useStyles();
  const [SansGluten, setSansGluten] = useState(false);
  const [Végétarien, setVégétarienR] = useState(false);
  const [Crustacés, setCrustacés] = useState(false);
  const [Vegan, setVegan] = useState(false);
  const [Oeufs, setOeufs] = useState(false);

  const { filterRestrictions } = props;

  const HandelCHeckSansGluten = () => {
    setSansGluten(!SansGluten);
    setVégétarienR(false);
    setCrustacés(false);
    setVegan(false);
    setOeufs(false);
  };
  const HandelCHeckVégétarien = () => {
    setSansGluten(false);
    setVégétarienR(!Végétarien);
    setCrustacés(false);
    setVegan(false);
    setOeufs(false);
  };
  const HandelCHeckCrustacés = () => {
    setSansGluten(false);
    setVégétarienR(false);
    setCrustacés(!Crustacés);
    setVegan(false);
    setOeufs(false);
  };
  const HandelCHeckVegan = () => {
    setSansGluten(false);
    setVégétarienR(false);
    setCrustacés(false);
    setVegan(!Vegan);
    setOeufs(false);
  };
  const HandelCHeckOeufs = () => {
    setSansGluten(false);
    setVégétarienR(false);
    setCrustacés(false);
    setVegan(false);
    setOeufs(!Oeufs);
  };

  return (
    <Box className={classes.C1}>
      <Box className={classes.TitleC1}>Restrictions alimentaires :</Box>
      <Box className={classes.CH1C}>
        <FormGroup onChange={filterRestrictions}>
          <Box className={classes.row}>
            <FormControlLabel
              onChange={HandelCHeckSansGluten}
              control={<Checkbox checked={SansGluten} />}
              label="Sans gluten"
              value="SansGluten"
              style={{ color: "black" }}
            />
            <FormControlLabel
              onChange={HandelCHeckVégétarien}
              value="Végétarien"
              control={<Checkbox checked={Végétarien} />}
              style={{ color: "black" }}
              label="Végétarien"
            />
          </Box>
          <Box className={classes.row}>
            <FormControlLabel
              onChange={HandelCHeckCrustacés}
              value="Crustacés"
              control={<Checkbox checked={Crustacés} />}
              style={{ color: "black" }}
              label="Crustacés"
            />
          </Box>
          <Box className={classes.row}>
            <FormControlLabel
              onChange={HandelCHeckVegan}
              value="Vegan"
              control={<Checkbox checked={Vegan} />}
              style={{ color: "black" }}
              label="Vegan"
            />
            <FormControlLabel
              onChange={HandelCHeckOeufs}
              value="Oeufs"
              control={<Checkbox checked={Oeufs} />}
              style={{ color: "black" }}
              label="Oeufs"
            />
          </Box>
        </FormGroup>
      </Box>
    </Box>
  );
}

export default RestrictionsAlimentaires;
