import { Box, Checkbox, InputAdornment, TextField } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React from "react";
import useStyles from "../styles";
import { useValidation } from "../Hooks/useValidation";
import { Form, Formik } from "formik";
import { useFormik } from "formik";

function PaiementModeForm() {
  const classes = useStyles();
  const { value, onChangeInput } = useValidation();
  const formik = useFormik({
    initialValues: value,
  });
  console.log('formik', formik)
  return (
    <form className={classes.ItemRight} >
      <Checkbox
        name="id"
        value="1"
        onChange={formik.handleChange}
        value={formik.values.id}
        className={classes.checkBoxItem}
        color="#5DBCA3"
      />
      <label className={classes.labelCheck} htmlFor="id">
        Chèques
      </label>

      <input
        type="number"
        // type="input"
        // InputLabelProps={{
        //   shrink: true,
        // }}
        // value={value.amount}
        className={classes.Inpt}
        variant="outlined"
        name="amount"
        // onChange={onChangeInput}
        onChange={formik.handleChange}

        value={formik.values.amount}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <AccountCircle
                style={{
                  marginLeft: 5,
                  fontSize: 20,
                  color: "#5DBCA3",
                }}
              />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}

export default PaiementModeForm;
