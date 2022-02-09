import { Box, Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import { Field } from "formik";
import React from "react";
import Controls from "../../../../../components/Reusable/RuseForm/Controls/Controls";
import useStyles from "../styles";

function DetailsPersonnel(props) {
  const {
    hotel,
    handleInputChange,
    formik,
    register,
    errors,
    code,
    HandelCode,
    order,
    handleInputChangeOrder,
    handleChange
  } = props;
  const classes = useStyles();
  // console.log('formik DetailsPersonnel ',formik)
  return (
    <Box className={classes.DetailsPersonnel}>
      <Box className={classes.InformationTitre}>Informations personnelles</Box>
       <Field
        className={classes.Field}
        variant="outlined"
        label="Nom"
        name="fullName"
        type="input"
        as={TextField}
        required
      />
      {formik.errors.fullName && (
        <span className={classes.spanError}>{formik.errors.fullName}</span>
      )} 
       <Field
        className={classes.Field}
        variant="outlined"
        id="phone"
        label="Numéro téléphone"
        name="phone"
        type="input"
        as={TextField}
        required
      />
      {formik.errors.phone && (
        <span className={classes.spanError}>{formik.errors.phone}</span>
      )}
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
      {formik.errors.apartement && (
        <span className={classes.spanError}>{formik.errors.apartement}</span>
      )}

      <FormControlLabel
        control={<Checkbox checked={code} />}
        label="j'ai un code promotionnel"
        value={code}
        style={{ color: "black" }}
        onChange={HandelCode}
        className={classes.Field}
        
      />
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
    </Box>
  );
}
export default DetailsPersonnel;
{
  /* <TextField
label={"Code promotionnel"}
{...register("voucher_code")}
error={!!errors.voucher_code?.message}
helperText={errors.voucher_code?.message}
variant="outlined"
className={classes.Field}
value={order.voucher_code}
onChange={handleInputChangeOrder}
name={"voucher_code"}
/> */
}
{
  /* <Controls.Input
        label={"Nom et prénom"}
        {...register("fullName")}
        required
        variant="outlined"
        className={classes.Container}
        value={hotel.fullName}
        onChange={handleInputChange}
        name={'fullName'}
      /> */
}

{
  /* <Controls.Input
label={"Numéro téléphone"}
required
{...register("phone")}
variant="outlined"
className={classes.Container}
name={"phone"}
onChange={handleInputChange}
value={hotel.phone}
/>
<Controls.Input
label={"Numéro de la chambre"}
required
{...register("apartement")}
variant="outlined"
className={classes.Container}
name={"apartement"}
onChange={handleInputChange}
value={hotel.apartement}
/> */
}
