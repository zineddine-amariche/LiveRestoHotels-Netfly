import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import { Field } from "formik";
import React from "react";
import useStyles from "../styles";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function DetailsPersonnel(props) {
  const { formik, code, HandelCode } = props;
  const classes = useStyles();

  return (
    <Box className={classes.DetailsPersonnel}>
      <Box className={classes.InformationTitre}>Informations personnelles</Box>
      <Box style={{ margin: "10px 0" }}>
        <Accordion style={{ margin: "0px 5px 5px 0" }} elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontWeight: 600 }}>
              {!formik.errors.fullName && formik.values.fullName
                ? `Nom complet : ${formik.values.fullName}`
                : !formik.errors.fullName && "Nom complet"}
              {formik.errors.fullName && (
                <span className={classes.spanError}>
                  {formik.errors.fullName}
                </span>
              )}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.Field}>
            <Field
              className={classes.Field}
              variant="outlined"
              label="Nom complet"
              name="fullName"
              type="input"
              as={TextField}
              required
            />
          </AccordionDetails>
        </Accordion>

        <Accordion
          disabled={formik.values.fullName.length ? false : true}
          style={{ margin: "0px 5px 5px 0" }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: 600 }}>
              {!formik.errors.phone && formik.values.fullName
                ? `Numéro téléphone : ${formik.values.phone}`
                : !formik.errors.phone && "Numéro téléphone"}

              {formik.errors.phone && (
                <span className={classes.spanError}>{formik.errors.phone}</span>
              )}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.Field}>
            <Field
              className={classes.Field}
              variant="outlined"
              id="phone"
              label="Numéro téléphone"
              name="phone"
              type="tel"
              as={TextField}
              required
              // value={formik.values.phone}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          style={{ margin: "0px 5px 5px 0" }}
          disabled={
            formik.values.fullName.length && formik.values.phone.length
              ? false
              : true
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: 600 }}>
              {!formik.errors.apartement && formik.values.apartement
                ? `Numéro de l'partement : ${formik.values.apartement}`
                : !formik.errors.apartement && "Numéro de l'partement"}

              {formik.errors.apartement && (
                <span className={classes.spanError}>
                  {formik.errors.apartement}
                </span>
              )}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.Field}>
              <Field
                className={classes.Field}
                variant="outlined"
                id="apartement"
                label="Apartement"
                name="apartement"
                type="input"
                as={TextField}
                required
              />
            <Box >

              <FormControlLabel
                control={<Checkbox checked={code} />}
                label="j'ai un code promotionnel"
                value={code}
                style={{ color: "black" }}
                onChange={HandelCode}
                style={{ display: "flex" }}
              />
            </Box>
            {code && (
              <>
                <Field
                  className={classes.Field}
                  variant="outlined"
                  id="voucher_code"
                  label="Code promotionnel"
                  name="voucher_code"
                  type="input"
                  as={TextField}
                />
                {formik.errors.voucher_code && (
                  <span className={classes.spanError}>
                    {formik.errors.voucher_code}
                  </span>
                )}
              </>
            )}
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
export default DetailsPersonnel;
