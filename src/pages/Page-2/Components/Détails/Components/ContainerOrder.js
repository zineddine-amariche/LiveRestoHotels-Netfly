import { Box, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../../stylesDetails";
import Plus from "@material-ui/icons/Add";
import imageDétails from "../../../../../assets/Intersect.svg";
import { useDispatch } from "react-redux";
import { addCart } from "../../../../../redux/actions/addToCartAction";

import ModaLimage from "./ModaLimage";

function ContainerOrder(props) {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles(open);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { categories, value } = props;
  return (
    <Paper className={classes.OrderContainer} elevation={0}>
      {categories.map((i, index) => {
        return (
          <Box className={classes.ColBodyMenu} key={i.id} value={value}>
            {value === index && (
              <>
                <Box className={classes.BoxBody}>{i.title} :</Box>
                <Box className={classes.Wraper}>
                  {i.products.map((i) => {
                    return (
                      <Paper
                        className={classes.ItemOrderBOX}
                        elevation={0}
                        key={i.id}
                      >
                        <Paper className={classes.ItemOrderLeft} elevation={0}>
                          <Typography className={classes.TitleBoxOrder}>
                            {i.title}
                          </Typography>
                          <Typography className={classes.TextBoxOrder}>
                            {i.description}
                          </Typography>
                        </Paper>
                        <Paper className={classes.ContR}>
                          <Box className={classes.ImageRightBoxDétails}>
                            <img
                              src={imageDétails}
                              alt="restaurant détails"
                              onClick={() => {
                                handleClickOpen();
                                console.log("open Modal");
                              }}
                              className={classes.imageDétails}
                            />

                            <Box className={classes.BTNOpenABS}>
                              <Plus onClick={() => handleAdd(i)} />
                            </Box>
                          </Box>
                        </Paper>
                      </Paper>
                    );
                  })}
                </Box>
              </>
            )}
            {open && <ModaLimage handleClose={handleClose} i={imageDétails} />}
          </Box>
        );
      })}
    </Paper>
  );
}

export default ContainerOrder;
