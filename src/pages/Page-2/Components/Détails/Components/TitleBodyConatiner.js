import { Box, Paper } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesDetails";
function TitleBodyConatiner(props) {
  const {categories} = props
  const classes = useStyles();
  return (
    <Paper className={classes.ContainerTitleBoxBody} elevation={0}>
      {
        categories.map((i) =>{
          return(
            <Box className={classes.BoxBody}>{i.title}</Box>

          )
        })
      }
    </Paper>
  );
}

export default TitleBodyConatiner;
