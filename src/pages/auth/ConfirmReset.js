import React from 'react';
import { Box, TextField, Container, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import Alert from '@material-ui/lab/Alert';

import Typography from '@material-ui/core/Typography';
import Logo from '../../assets/logo.png';

import useConfirmReset from './hooks/useConfirmReset';
import { useTranslation } from 'react-i18next';

const ConfirmReset = () => {
  const { classes, auth, onSubmit, register, handleSubmit, isSubmitting, errors } =
    useConfirmReset();

    const {t} =useTranslation(['confirm_reset']) ; 

  return (
    <>
      <Box width="100%" display="flex" justifyContent="center" alignItems="center">
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Box marginTop="100px" display="flex" justifyContent="center">
              <img src={Logo} alt="NBK Logo" />
            </Box>
            <Box marginTop="20px" display="flex" justifyContent="center">
              <Typography component="h1" variant="h5">
              {t('confirm_reset_password')}
              </Typography>
            </Box>
            {auth.resetError && <Alert severity="error">{auth.resetError}</Alert>}
            {auth.forgetStatus === 'success' && (
              <Alert severity="success">vérifiez votre e-mail pour le code</Alert>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
              <TextField
                error={!!errors.email?.message}
                helperText={errors.email ? t('confirm_rest_email_error') : null}
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label={t('cconfirm_rest_email')}
                autoComplete="email"
                autoFocus
                {...register('email')}
              />

              <TextField
                error={!!errors.password?.message}
                helperText={errors.password ? t('confirm_rest_password') : null}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label={t('confirm_rest_password_error')}
                type="password"
                id="password"
                autoComplete="current-password"
                {...register('password')}
              />
              <TextField
                error={!!errors.confirmPassword?.message}
                helperText={errors.confirmPassword ? t('confirm_confirmPassword_error'):null}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label={t('confirm_confirmPassword')}
                type="password"
                id="password"
                autoComplete="current-password"
                {...register('confirmPassword')}
              />

              <TextField
                error={!!errors.code?.message}
                helperText={errors.code ? t('confirm_code_error'):null}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="code"
                label={t('confirm_code')}
                type="text"
                id="password"
                {...register('code')}
              />

              <Button
                marginY="10px"
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
                {t('reset_demande')}
              </Button>
            </form>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default ConfirmReset;
