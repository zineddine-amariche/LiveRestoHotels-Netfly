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
import React, { useState, useEffect } from "react";
import useStyles from "../styles";
import "react-phone-input-2/lib/style.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

function DetailsPersonnel(props) {
  const { formik, code, HandelCode } = props;
  const classes = useStyles();
  console.log("formik", formik);

  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const RestfullName = () => {
    // formik.resetForm()
    formik.setFieldValue("fullName", "");
  };

  const RestPhone = () => {
    // formik.resetForm()
    formik.setFieldValue("phone", "");
  };
  const RestAppartement = () => {
    // formik.resetForm()
    formik.setFieldValue("apartement", "");
  };

  return (
    <Box className={classes.DetailsPersonnel}>
      <Box className={classes.InformationTitre}>Informations personnelles</Box>
      <Box style={{ margin: "10px 0" }}>
        <Accordion
          expanded={
            formik.values.fullName.length ? false : expanded === "panel1"
          }
          onChange={handleChange("panel1")}
          style={{ margin: "0px 5px 5px 0" }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box className={classes.RowApp}>
              <Typography style={{ fontWeight: 600 }}>
                {!formik.errors.fullName && formik.values.fullName
                  ? ` ${formik.values.fullName}`
                  : !formik.errors.fullName}
                {formik.errors.fullName && (
                  <span className={classes.spanError}>
                    {formik.errors.fullName}
                  </span>
                )}
              </Typography>
              {formik.values.fullName.length ? (
                <Box onClick={RestfullName}>
                  <AutoFixHighIcon fontSize="small" sx={{ marginLeft: 20 }} />{" "}
                </Box>
              ) : null}
            </Box>
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
        {formik.values.fullName.length ? (
          <Accordion
            style={{ margin: "0px 5px 5px 0" }}
            elevation={0}
            expanded={
              formik.values.fullName.length && formik.values.phone.length
                ? false
                : true
            }
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Box className={classes.RowApp}>
                <Typography style={{ fontWeight: 600 }}>
                  {!formik.errors.phone && formik.values.fullName
                    ? `${formik.values.phone}`
                    : !formik.errors.phone && "Numéro téléphone"}

                  {formik.touched.phone && formik.errors.phone && (
                    <span className={classes.spanError}>
                      {formik.errors.phone}
                    </span>
                  )}
                </Typography>
                {formik.values.phone.length ? (
                  <Box onClick={RestPhone}>
                    <AutoFixHighIcon fontSize="small" sx={{ marginLeft: 20 }} />{" "}
                  </Box>
                ) : null}
              </Box>
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
        ) : null}
        {formik.values.fullName.length && formik.values.phone.length ? (
          <Accordion
            elevation={0}
            style={{ margin: "0px 5px 5px 0" }}
            expanded={
              formik.values.phone.length && formik.values.apartement.length
                ? false
                : true
            }
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Box className={classes.RowApp}>
                <Typography style={{ fontWeight: 600 }}>
                  {!formik.errors.apartement && formik.values.apartement
                    ? ` ${formik.values.apartement}`
                    : !formik.errors.apartement && "Numéro de l'partement"}

                  {formik.touched.apartement && formik.errors.apartement && (
                    <span className={classes.spanError}>
                      {formik.errors.apartement}
                    </span>
                  )}
                </Typography>
                {formik.values.apartement.length ? (
                  <Box onClick={RestAppartement}>
                    <AutoFixHighIcon fontSize="small" sx={{ marginLeft: 20 }} />{" "}
                  </Box>
                ) : null}
              </Box>
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
              <Box>
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
        ) : null}
      </Box>
    </Box>
  );
}
export default DetailsPersonnel;

{
  /* <Box className={classes.rowInputs}> */
}
{
  /* {!selected && ( */
}
{
  /* <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              className={classes.ReactFlagsSelect}
              // searchable={true}
              searchPlaceholder="Rechercher un pays"
              showSelectedLabel={false}
              showOptionLabel={false}
              selectedSize={18}
              optionsSize={14}
              // disabled={true}
              ref={userFlag}
              defaultCountry={selected}
            /> */
}
{
  /* )} */
}

{
  /* {selected && (
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
            )} */
}
{
  /* </Box> */
}
