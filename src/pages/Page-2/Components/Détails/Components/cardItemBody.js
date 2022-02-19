import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../../stylesDetails";
import Close from "@material-ui/icons/Close";
import Plus from "@material-ui/icons/Add";
import imageDétails from "../../assets/Intersect.svg";

function CardItemBody(props) {
  const { CardOrder, openCardOrder, i } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.ItemOrderBOX}>
      <Box className={classes.BoxItemBody}>
        <Paper className={classes.ItemOrderLeft} elevation={0}>
          <Typography className={classes.TitleBoxOrder}>{i.title}</Typography>
          <Typography className={classes.TextBoxOrder}>description</Typography>
          {/* <Typography className={classes.PriceBoxOrder}>90 Da</Typography> */}
        </Paper>
        <Paper className={classes.ContR}>
          <Box className={classes.ImageRightBoxDétails}>
            <img src={imageDétails} alt="restaurant détails" />

            <Box className={classes.BTNOpenABS}>
              {CardOrder ? (
                <Close onClick={openCardOrder} />
              ) : (
                <Plus onClick={openCardOrder} />
              )}
            </Box>
          </Box>
        </Paper>
      </Box>
      ;
    </Paper>
  );
}

export default CardItemBody;
