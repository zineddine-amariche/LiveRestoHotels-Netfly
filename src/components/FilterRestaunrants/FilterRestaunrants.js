import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./StylesFilter";
import {useTranslation} from "react-i18next" ; 




function FilterRestaunrants() {
  const {t} = useTranslation(['filters'])  ; 
  const classes = useStyles();
  const [checkState, setCheckState] = useState({
    Hallal: true,
    Casher: false,
    Végétarien: false,
  });
  const [checkStateRes, setCheckStateRes] = useState({
    SansGluten: true,
    VégétarienR: false,
    Végétalien: false,
    Crustacés: false,
    Vegan: false,
    Oeufs: false,
  });
  const [checkStatePay, setCheckStatePay] = useState({
    France: true,
    Indonésie: false,
    Espagne: false,
    Italie: false,
    Portugal: false,
    Vietnam: false,
  });
  const [checkStateTyp, setCheckStateTyp] = useState({
    CuisineTraditionnelleFrançaise: true,
    CuisineCorse: false,
    CuisineBretonCrêperie: false,
  });
  const [checkStateTypPl, setCheckStateTypPl] = useState({
    Burgers: true,
    Pâtes: false,
    Viandes: false,
    Poisson: false,
    Salades: false,
    Nouilles: false,
  });

  const handleInputChange = (e) => {
    console.log(e.target.value, e.target.checked);
    setCheckState(() => ({
      ...checkState,
      Hallal: false,
      Casher: false,
      Végétarien: false,
      [e.target.value]: e.target.checked,
    }));
    setCheckStateRes(() => ({
      ...checkStateRes,
      SansGluten: false,
      VégétarienR: false,
      Végétalien: false,
      Crustacés: false,
      Vegan: false,
      Oeufs: false,
      [e.target.value]: e.target.checked,
    }));
    setCheckStatePay(() => ({
      ...checkStatePay,
      France: false,
      Indonésie: false,
      Espagne: false,
      Italie: false,
      Portugal: false,
      Vietnam: false,
      [e.target.value]: e.target.checked,
    }));
    setCheckStateTyp(() => ({
      ...checkStateTyp,
      CuisineTraditionnelleFrançaise: false,
      CuisineCorse: false,
      CuisineBretonCrêperie: false,
      [e.target.value]: e.target.checked,
    }));
    setCheckStateTypPl(() => ({
      ...checkStateTypPl,
      Burgers: false,
      Pâtes: false,
      Viandes: false,
      Poisson: false,
      Salades: false,
      Nouilles: false,
      [e.target.value]: e.target.checked,
    }));
    if (e.target.checked) {
      console.log(`object`, e.target.value);
      //   dispatch({ type: types.USERS_REQUEST, payload: { userStatus: e.target.value } });
    }
  };
  return (
    <Paper className={classes.ConatinerFilter}>
      <Box className={classes.C1}>
        <Box className={classes.TitleC1}>{t("filter_characteristics")}</Box>
        <Box className={classes.CH1C}>
          <FormGroup onChange={handleInputChange}>
            <Box className={classes.row}>
              <FormControlLabel
                // onChange={handleInputChange}
                control={<Checkbox checked={checkState.Hallal} />}
                label={t('filter_halal')}
                value="Hallal"
                style={{ color: "black" }}
              />
              <FormControlLabel
                // onChange={handleInputChange}
                value="Casher"
                control={<Checkbox checked={checkState.Casher} />}
                style={{ color: "black" }}
                label={t('filter_casher')}
              />
            </Box>

            <FormControlLabel
              // onChange={handleInputChange}
              value="Végétarien"
              control={<Checkbox checked={checkState.Végétarien} />}
              style={{ color: "black" }}
              label={t('filter_vegetarian')}
            />
          </FormGroup>
        </Box>
      </Box>
      <Box className={classes.C1}>
        <Box className={classes.TitleC1}>{t("filter_restrictions")}</Box>
        <Box className={classes.CH1C}>
          <FormGroup onChange={handleInputChange}>
            <Box className={classes.row}>
              <FormControlLabel
                // onChange={handleInputChange}
                control={<Checkbox checked={checkStateRes.SansGluten} />}
                label={t("filter_restrictions_gluten")}
                value="SansGluten"
                style={{ color: "black" }}
              />
              <FormControlLabel
                // onChange={handleInputChange}
                value="VégétarienR"
                control={<Checkbox checked={checkStateRes.VégétarienR} />}
                style={{ color: "black" }}
                label={t("filter_restrictions_vegetarian")}
              />
            </Box>
            <Box className={classes.row}>
              <FormControlLabel
                // onChange={handleInputChange}
                value="Végétalien"
                control={<Checkbox checked={checkStateRes.Végétalien} />}
                style={{ color: "black" }}
                label={t("filter_restrictions_vegetalian")}
              />
              <FormControlLabel
                // onChange={handleInputChange}
                value="Crustacés"
                control={<Checkbox checked={checkStateRes.Crustacés} />}
                style={{ color: "black" }}
                label={t("filter_restrictions_crustaceans")}
              />
            </Box>
            <Box className={classes.row}>
              <FormControlLabel
                // onChange={handleInputChange}
                value="Vegan"
                control={<Checkbox checked={checkStateRes.Vegan} />}
                style={{ color: "black" }}
                label={t("filter_restrictions_vegan")}
              />
              <FormControlLabel
                // onChange={handleInputChange}
                value="Oeufs"
                control={<Checkbox checked={checkStateRes.Oeufs} />}
                style={{ color: "black" }}
                label={t("filter_restrictions_eggs")}
              />
            </Box>
          </FormGroup>
        </Box>
      </Box>
      <Box className={classes.C1}>
        <Box className={classes.TitleC1}>{t("filter_characteristics")}</Box>
        <Box className={classes.CH1C}>
          <FormGroup onChange={handleInputChange}>
            <Box className={classes.row}>
              <FormControlLabel
                // onChange={handleInputChange}
                control={<Checkbox checked={checkStatePay.France} />}
                label={t('filter_country_france')}
                value="France"
                style={{ color: "black" }}
              />
              <FormControlLabel
                // onChange={handleInputChange}
                value="Indonésie"
                control={<Checkbox checked={checkStatePay.Indonésie} />}
                style={{ color: "black" }}
                label={t('filter_country_indonesia')}
              />
            </Box>

            <Box className={classes.row}>
              <FormControlLabel
                // onChange={handleInputChange}
                value="Espagne"
                control={<Checkbox checked={checkStatePay.Espagne} />}
                style={{ color: "black" }}
                label={t('filter_country_spain')}
              />
              <FormControlLabel
                // onChange={handleInputChange}
                value="Italie"
                control={<Checkbox checked={checkStatePay.Italie} />}
                style={{ color: "black" }}
                label={t('filter_country_italy')}
              />
            </Box>

            <Box className={classes.row}>
              <FormControlLabel
                // onChange={handleInputChange}
                value="Portugal"
                control={<Checkbox checked={checkStatePay.Portugal} />}
                style={{ color: "black" }}
                label={t('filter_country_portugal')}
              />
              <FormControlLabel
                // onChange={handleInputChange}
                value="Vietnam"
                control={<Checkbox checked={checkStatePay.Vietnam} />}
                style={{ color: "black" }}
                label={t('filter_country_vietnam')}
              />
            </Box>
          </FormGroup>
        </Box>
      </Box>
      <Box className={classes.C1}>
        <Box className={classes.TitleC1}>{t("filter_characteristics")}</Box>
        <Box className={classes.CH1C}>
          <FormGroup onChange={handleInputChange}>
              <FormControlLabel
                // onChange={handleInputChange}
                control={<Checkbox checked={checkStateTyp.CuisineTraditionnelleFrançaise} />}
                label={t('filter_trad_cooking_french')}
                value="CuisineTraditionnelleFrançaise"
                style={{ color: "black" }}
              />
              <FormControlLabel
                // onChange={handleInputChange}
                value="Casher"
                control={<Checkbox checked={checkStateTyp.CuisineCorse} />}
                style={{ color: "black" }}
                //label="Casher"
                //label={t('filter_casher')}
                label={t('filter_trad_cooking_corse')}
              />

            <FormControlLabel
              // onChange={handleInputChange}
              value="Végétarien"
              control={<Checkbox checked={checkStateTyp.CuisineBretonCrêperie} />}
              style={{ color: "black" }}
              //label="Végétarien"
              //label={t('filter_vegetarian')}
              label={t('filter_trad_cooking_breton')}
            />
          </FormGroup>
        </Box>
      </Box>
      <Box className={classes.C1}>
        <Box className={classes.TitleC1}>{t("filter_characteristics")}</Box>
        <Box className={classes.CH1C}>
          <FormGroup onChange={handleInputChange}>
            <Box className={classes.row}>
              <FormControlLabel
                // onChange={handleInputChange}
                control={<Checkbox checked={checkStateTypPl.Burgers} />}
                label={t('filter_type_cooking_burger')}
                value="Burgers"
                style={{ color: "black" }}
              />
              <FormControlLabel
                // onChange={handleInputChange}
                value="Pâtes"
                control={<Checkbox checked={checkStateTypPl.Pâtes} />}
                style={{ color: "black" }}
                label={t('filter_type_cooking_pasta')}
              />
            </Box>

            <Box className={classes.row}>
              <FormControlLabel
                // onChange={handleInputChange}
                value="Viandes"
                control={<Checkbox checked={checkStateTypPl.Viandes} />}
                style={{ color: "black" }}
                label={t('filter_type_cooking_meat')}
              />
              <FormControlLabel
                // onChange={handleInputChange}
                value="Poisson"
                control={<Checkbox checked={checkStateTypPl.Poisson} />}
                style={{ color: "black" }}
                label={t('filter_type_cooking_fish')}
              />
            </Box>

            <Box className={classes.row}>
              <FormControlLabel
                // onChange={handleInputChange}
                value="Salades"
                control={<Checkbox checked={checkStateTypPl.Salades} />}
                style={{ color: "black" }}
                label={t('filter_type_cooking_salad')}
              />
              <FormControlLabel
                // onChange={handleInputChange}
                value="Nouilles"
                control={<Checkbox checked={checkStateTypPl.Nouilles} />}
                style={{ color: "black" }}
                label={t('filter_type_cooking_noodles')}
              />
            </Box>
          </FormGroup>
        </Box>
      </Box>
    </Paper>
  );
}

export default FilterRestaunrants;
