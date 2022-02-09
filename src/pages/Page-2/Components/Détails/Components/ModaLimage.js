import { Box } from "@mui/material";
import React from "react";
import useStyles from "../styles";

function ModaLimage(props) {
  const classes = useStyles();
  const { open, i, handleClose } = props;
  return (
    <Box className={classes.BoxImageHandler } onClick={handleClose}>
      <Box onClick={handleClose} className={classes.ImageHandeler}>
        <img src={i} className={classes.ImageStyles} />
      </Box>
    </Box>
  );
}

export default ModaLimage;
