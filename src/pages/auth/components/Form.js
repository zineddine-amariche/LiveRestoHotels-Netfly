/* eslint-disable */

/** @jsxImportSource theme-ui */
import React from "react";

import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Typography,
  Paper,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import CircularProgress from "@material-ui/core/CircularProgress";
import useLogin from "../hooks/useLogin";
import { useTranslation } from "react-i18next";
import { Field, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export default function Form() {
  const [open, setOpen] = React.useState(true);
  const { t } = useTranslation(["form"]);
  //Data
  const initialValues = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialValues);
  const { classes, onSubmit } = useLogin();

  //password validation
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  let validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(emailRegex, "Must Valide Email!")
      .required("email is required"),

    password: Yup.string()
      .min(6, "Password is too short - should be 6 number Minimum.")
      // .matches(emailRegex, "Must Valide Password!")
      .required("Password is required"),
  });
  return (
    <Paper sx={{ bg: "#fff", padding: "25px 25px" }} elevation={0}>
      <Box marginTop="20px" display="flex" justifyContent="center">
        <Typography
          sx={{ color: "btnBackground", marginBottom: 15 }}
          component="h1"
          variant="h5"
        >
          {t("form_connect")}
        </Typography>
      </Box>

      <Formik
        className={classes.form}
        initialValues={state}
        validationSchema={validationSchema}
      >
        {(formik) => {
          console.log("formik", formik);
          return (
            <Box className={classes.InputContainer}>
              <Field
                className={classes.inputStyles}
                variant="outlined"
                label={t("form_input_email")}
                name="email"
                type="input"
                as={TextField}
                required
                autoComplete="email"
                autoFocus
              />

              {formik.errors.email && (
                <span className={classes.spanError}>{formik.errors.email}</span>
              )}

              <Field
                className={classes.inputStyles}
                variant="outlined"
                label={t("form_input_password")}
                name="password"
                type="input"
                as={TextField}
                required
                autoComplete="current-password"
              />

              {formik.errors.password && (
                <span className={classes.spanError}>
                  {formik.errors.password}
                </span>
              )}

              <Box
                marginY="10px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      sx={{ color: "btnBackground" }}
                    />
                  }
                  label={t("form_remember_me")}
                />
                <Link
                  href="/resetPassword"
                  variant="body2"
                  sx={{ color: "btnBackground" }}
                >
                  {t("form_forgot")}
                </Link>
              </Box>

              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  onSubmit(formik.values);
                }}
                sx={{
                  bg: "#237a57",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                {t("form_submit")}
              </Button>
            </Box>
          );
        }}
      </Formik>
    </Paper>
  );
}


