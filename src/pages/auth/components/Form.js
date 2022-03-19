/* eslint-disable */

/** @jsxImportSource theme-ui */
import React, { useEffect } from "react";

import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Typography,
  Paper,
  Snackbar,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import CircularProgress from "@material-ui/core/CircularProgress";
import useLogin from "../hooks/useLogin";
import { useTranslation } from "react-i18next";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { AUTH_DESACTIVE_ERROR } from "../../../redux/types/authTypes";
import { useDispatch } from "react-redux";
import  Close from "@material-ui/icons/Close"
import  Menue from "@material-ui/icons/MenuOpen"


export default function FormLogin({FromClose,CloseForm}) {
  const [open, setOpen] = React.useState(true);
  const { t } = useTranslation(["form"]);
  //Data
  const initialValues = {
    email: "",
    password: "",
  };
  const [openSuuces, setOpens] = React.useState(true);



  const [state, setState] = useState(initialValues);
  const { classes, onSubmit } = useLogin(FromClose);
  const [showPassword, setShowPassword] = useState(false);
  const auth = useSelector((state) => state.auth);
  const { isAuth, isActive ,snack_err} = auth;
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);


  const handleClose = (event, reason) => {
    if (snack_err) {
      dispatch({type:AUTH_DESACTIVE_ERROR})

    }
  };

  const handleCloseSuccess = (event, reason) => {
    if (openSuuces) {
      auth.error && setOpen(!openSuuces);
    }
  };
  const dispatch = useDispatch()

  useEffect(() => {
 if(snack_err){
   setTimeout(() => {
    dispatch({type:AUTH_DESACTIVE_ERROR})
   }, 6000);
 }
  }, [snack_err])

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
  return [
    <Paper sx={{ bg: "#fff", padding: "25px 25px"  }} elevation={0}>
     {/* {!FromClose ? <Menue onClick={CloseForm}  /> : <Close onClick={CloseForm} />} */}
      <Paper className={classes.Abolute}>
        <Snackbar
          open={snack_err}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "22vw" }}>
            {auth.error} !
          </Alert>
        </Snackbar>
      </Paper>
      <Box marginTop="60px" display="flex" justifyContent="center">
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
          // console.log("formik", formik);
          return (
            <Form className={classes.InputContainer}>
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

              {formik.errors.email &&  formik.touched.email && (
                <span className={classes.spanError}>{formik.errors.email}</span>
              )}

              <Field
                className={classes.inputStyles}
                variant="outlined"
                label={t("form_input_password")}
                name="password"
                as={TextField}
                required
                autoComplete="current-password"
                type={showPassword ? "text" : "password"} 
                InputProps={{ // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              {formik.errors.password && formik.touched.email && (
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
                {/* <Link
                  href="/resetPassword"
                  variant="body2"
                  sx={{ color: "btnBackground" }}
                >
                  {t("form_forgot")}
                </Link> */}
              </Box>

              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  bg: "#237a57",
                  color: "white",
                  fontWeight: "600",
                }}
                onClick={() => onSubmit(formik.values)}
              >
                {t("form_submit")}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Paper>,
  ];
}
