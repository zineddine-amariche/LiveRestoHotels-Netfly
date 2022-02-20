import React from "react";
import { TextField, withStyles } from "@material-ui/core";
import ReactPhoneInput from "react-phone-input-2";

function PhoneField(props) {
  const { value, defaultCountry, onChange, classes } = props;

  return (
    <>
      <ReactPhoneInput
        // value={value}
        // defaultCountry={defaultCountry || 'gb'}
        // onChange={onChange}
        // className={classes.field}
        // dropdownClass={classes.countryList}
        // component={TextField}
        defaultCountry={"us"}
      />
    </>
  );
}

// export default withStyles(styles)(PhoneField);
export default PhoneField;

{
  /* Simple usage */
}
{
  /* <ReactPhoneInput
        value={value}
        onChange={onChange} // passed function receives the phone value
        component={TextField}
      /> */
}

{
  /* Configure more */
}
