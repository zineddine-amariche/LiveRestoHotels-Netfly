import { Box, Checkbox, Input, InputAdornment } from "@material-ui/core";
import useStyles from "../styles";
import { Field, Form } from "formik";
import AccountCircle from "@material-ui/icons/Euro";
import { withStyles } from "@material-ui/styles";
const ModePaiment = (props) => {
  const classes = useStyles();
  const { formik } = props;

  const CustomColorCheckbox = withStyles({
    root: {
      color: "#5DBCA3",
      "&$checked": {
        color: "#5DBCA3",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  return (
    <Box
      role="group"
      aria-labelledby="checkbox-group"
      className={classes.BoxColumnCheck}
    >
      <Box className={classes.rowItemBoxes}>
        <Box className={classes.ItemRight}>
          <Field
            as={CustomColorCheckbox}
            name="value"
            value="0"
            className={classes.checkBoxItem}
            disabled
          />
          <label className={classes.labelCheck}>CB en ligne</label>
        </Box>
        {formik.values?.value?.includes("0") ? (
          <Box className={classes.LeftInputItem}>
            <Input
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.Inpt}
              variant="outlined"
              id="input-with-icon-adornment"
              endAdornment={
                <InputAdornment position="start">
                  <AccountCircle
                    style={{
                      marginLeft: 5,
                      fontSize: 20,
                      color: "#5DBCA3",
                    }}
                  />
                </InputAdornment>
              }
            />
          </Box>
        ) : null}
      </Box>
      <Box className={classes.rowItemBoxes}>
        <Box className={classes.ItemRight}>
          <Field
            as={CustomColorCheckbox}
            name="value"
            value={1}
            className={classes.checkBoxItem}
          />
          <label className={classes.labelCheck}>Chèques</label>
        </Box>
        {formik.values?.value?.includes("1") ? (
          <Box className={classes.LeftInputItem}>
            <Input
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.Inpt}
              variant="outlined"
              id="input-with-icon-adornment"
              endAdornment={
                <InputAdornment position="start">
                  <AccountCircle
                    style={{
                      marginLeft: 5,
                      fontSize: 20,
                      color: "#5DBCA3",
                    }}
                  />
                </InputAdornment>
              }
            />
          </Box>
        ) : null}
      </Box>
      <Box className={classes.rowItemBoxes}>
        <Box className={classes.ItemRight}>
          <Field
            // type="checkbox"
            as={CustomColorCheckbox}
            name="value"
            value="2"
            className={classes.checkBoxItem}
          />
          <label className={classes.labelCheck}>Espèces</label>
        </Box>
        {formik.values?.value?.includes("2") ? (
          <Box className={classes.LeftInputItem}>
            <Input
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.Inpt}
              variant="outlined"
              id="input-with-icon-adornment"
              endAdornment={
                <InputAdornment position="start">
                  <AccountCircle
                    style={{
                      marginLeft: 5,
                      fontSize: 20,
                      color: "#5DBCA3",
                    }}
                  />
                </InputAdornment>
              }
            />
          </Box>
        ) : null}
      </Box>
      <Box className={classes.rowItemBoxes}>
        <Box className={classes.ItemRight}>
          <Field
            as={CustomColorCheckbox}
            name="value"
            value="3"
            className={classes.checkBoxItem}
          />
          <label className={classes.labelCheck}>Ticket restaurant</label>
        </Box>
      </Box>
    </Box>
  );
};

export default ModePaiment;
