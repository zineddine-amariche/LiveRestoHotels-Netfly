import {
  Box,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../stylesDetails";
import imageHeader from "../../../../../assets/unsplash_Qa29U4Crvn4.svg";
import logoRestaurent from "../../../../../assets/logo_liveresto.png";

import Start from "@material-ui/icons/Star"

function HeaderBodyDétails(props) {
  const {establishment} = props
  const classes = useStyles();
  return (
    <Paper className={classes.HeaderDetailsContainer} elevation={0}>
      <Box className={classes.BoxHeaderImage}>
        <img
          src={imageHeader}
          alt="image restaurant"
          className={classes.Image}
        />
        <Box className={classes.BottomHeaderDeatils}>
          <Box className={classes.CircleImageContainer}>
            <img src={logoRestaurent} className={classes.ImageX} />
          </Box>
          <Box className={classes.Title}>
            <Box className={classes.LeftTitleBody}>
              <Typography className={classes.TitleText}>
                {establishment && establishment.title}
              </Typography>
              <span className={classes.BacYellow}></span>

              {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
              <Typography variant="body2" className={classes.body2}>
                {establishment && establishment.caption}
              </Typography>
              <span className={classes.VoirPlus}>Plus d'infromation</span>
            </Box>

            <Box className={classes.RightTitleBody}>
              <Typography className={classes.CommentStarts}>
              {establishment && establishment.ratings.count} commentaires
              </Typography>
              <Typography className={classes.SubTitleText}>
               {establishment && establishment.ratings.rate}  <Start/>
           
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default HeaderBodyDétails;
