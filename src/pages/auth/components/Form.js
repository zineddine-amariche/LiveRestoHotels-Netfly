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

} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import CircularProgress from "@material-ui/core/CircularProgress";
import useLogin from "../hooks/useLogin";
import {useTranslation} from"react-i18next" ; 

export default function Form() {
  const [open, setOpen] = React.useState(true);
  const {t} = useTranslation(['form']) ; 

  const {
    classes,
    auth,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    authUser,
    handleChangeInput,
    handelShow,
    Faketoken,
  } = useLogin();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Box marginTop="20px" display="flex" justifyContent="center">
        <Typography
          sx={{ color: "btnBackground", marginBottom: 15 }}
          component="h1"
          variant="h5"
        >
          {t('form_connect')}
        </Typography>
      </Box>
   

      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextField
          error={!!errors.email?.message}
          helperText={errors.email ? t('form_input_email_error'): null}
          className={classes.inputStyles}
          type="email"
          variant="outlined"
          margin="normal"
          required
          id="email"
          label={t('form_input_email')}
          autoComplete="email"
          autoFocus
          {...register("email")}
          value={authUser.email}
          onChange={handleChangeInput}
        />
        <TextField
          error={!!errors.password?.message}
          helperText={errors.password ? t("form_input_password_error") :null}
          className={classes.inputStyles}
          variant="outlined"
          margin="normal"
          required
          name="password"
          label={t('form_input_password')}
          type="password"
          id="password"
          autoComplete="current-password"
          {...register("password")}
          value={authUser.password}
          onChange={handleChangeInput}
        />

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
            label={t('form_remember_me')}
          />
          <Link
            href="/resetPassword"
            variant="body2"
            sx={{ color: "btnBackground" }}
          >
            {t('form_forgot')}
          </Link>
        </Box>
        {/* <Button
          disabled={auth.loading || isSubmitting}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {auth.loading && (
            <CircularProgress color="black" className={classes.circularProgress} size={20} />
          )}
          Se connecter
        </Button> */}
        <Button
          variant="contained"
          fullWidth
          // onClick={handelShow}
          type="submit"
          sx={{
            bg: "#237a57",
            color: "white",
            fontWeight: "600",
          }}
        >
          {t('form_submit')}
        </Button>
      </form>
    </>
  );
}
