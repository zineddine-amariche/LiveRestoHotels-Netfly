import {
  Box,
  Checkbox,
  Input,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import useStyles from "../styles";
import { Field, Form } from "formik";
import AccountCircle from "@material-ui/icons/Euro";
import { withStyles } from "@material-ui/styles";
import { useValidation } from "../Hooks/useValidation";
import Controls from "../../../../../components/Reusable/RuseForm/Controls/Controls";
import { useEffect } from "react";
const ModePaiment = (props) => {
  const classes = useStyles();
  const {
    formik,
    GetCheque,
    GetTicket,
    GetEspèces,
    Cheque,
    Ticket,
    Especes,
    check,
    all,
  } = props;
  console.log("check", check);

  return (
    <Box
      role="group"
      aria-labelledby="checkbox-group"
      className={classes.BoxColumnCheck}
    >
      <Box className={classes.rowItemBoxes}>
        <Box className={classes.ItemRight}>
          <Field
            as={Checkbox}
            name="id"
            value="1"
            className={classes.checkBoxItem}
            disabled
            color="#5DBCA3"
          />
          <label className={classes.labelCheck}>CB en ligne</label>
        </Box>
        {formik.values?.id?.includes("1") ? (
          <Box className={classes.LeftInputItem}>
            <Input
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              name="amount"
              className={classes.Inpt}
              variant="outlined"
              id="amount"
              value={formik.values.amount}
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
            as={Checkbox}
            name="id"
            value="3"
            className={classes.checkBoxItem}
            color="#5DBCA3"
          />
          <label className={classes.labelCheck}>Chèques</label>
        </Box>
        {formik?.values?.id?.includes("3") ? (
          <Box className={classes.LeftInputItem}>
            <Field
              label={"Chèques"}
              value={Cheque.amount}
              onChange={GetCheque}
              name="amount"
              required
              as={TextField}
            />
          </Box>
        ) : null}
      </Box>
      <Box className={classes.rowItemBoxes}>
        <Box className={classes.ItemRight}>
          <Field
            // type="checkbox"
            as={Checkbox}
            name="id"
            value="4"
            className={classes.checkBoxItem}
            color="#5DBCA3"
          />
          <label className={classes.labelCheck}>Espèces</label>
        </Box>
        {formik?.values?.id?.includes("4") ? (
          <Box className={classes.LeftInputItem}>
            <Field
              label={"Espèces"}
              value={Especes.amount}
              onChange={GetEspèces}
              name="amount"
              required
              as={TextField}
            />
          </Box>
        ) : null}
      </Box>
      <Box className={classes.rowItemBoxes}>
        <Box className={classes.ItemRight}>
          <Field
            as={Checkbox}
            name="id"
            value="5"
            className={classes.checkBoxItem}
            color="#5DBCA3"
          />
          <label className={classes.labelCheck}>Ticket restaurant</label>
        </Box>
        {formik?.values?.id?.includes("5") ? (
          <Box className={classes.LeftInputItem}>
            <Field
              label={"Ticket restaurant"}
              value={Ticket.amount}
              onChange={GetTicket}
              name="amount"
              required
              as={TextField}
            />
          </Box>
        ) : null}
      </Box>
      {formik?.values?.id?.includes("3") || formik?.values?.id?.includes("4") || formik?.values?.id?.includes("5") 
        ? check !== all &&
         <Box style={{color:"#f00",fontSize:'12px', marginTop:20}}>La somme des paiements  ne correspond pas au total de la commande</Box> 
        : null}
    </Box>
  );
};

export default ModePaiment;

{
  /* <Field
              type="number"
              as={TextField}
              InputLabelProps={{
                shrink: true,
              }}
              name="amount"
              className={classes.Inpt}
              variant="outlined"
              id="amount"
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
            /> */
}

{
  /* <Field
type="number"
as={TextField}
InputLabelProps={{
  shrink: true,
}}
name="amount"
className={classes.Inpt}
variant="outlined"
id="amount"
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
/> */
}
