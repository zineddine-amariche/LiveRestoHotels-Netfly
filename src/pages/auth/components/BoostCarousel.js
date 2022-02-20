import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Carousel } from "react-bootstrap";
import "../../../App.css";
import useStyles from "../hooks/styles/stylesLogin";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselContainer = () => {
  const classes = useStyles();
  const { t } = useTranslation(["form"]);
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={5000} className={classes.PaperConatinerSilder}>
        <Paper className={classes.BoxCenterContainer} elevation={0}>
          <Paper className={classes.BoxTopSlid} elevation={0}>
            <Box className={classes.LeftSlid}>
              <Box className={classes.RowTitles}>
                <Typography className={classes.TextNumber}>01</Typography>
              </Box>
              <Box className={classes.ContentText}>
                <Typography className={classes.TextTitle}>
                  {t("form_carousel_1_title")}
                </Typography>
                <Typography className={classes.TextInfo}>
                  {t("form_carousel_1_text1")}
                </Typography>
                <Typography className={classes.TextInfo}>
                  {t("form_carousel_1_text2")}
                </Typography>
                <Typography className={classes.TextInfo}>
                  {t("form_carousel_1_text3")}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.BoxImageGif}></Box>
          </Paper>

          <Paper className={classes.ImagesSlideHor} elevation={0}>
            <Box className={classes.FirstImageH}>
              <Typography className={classes.TextNomPlat}>
                {t("form_carousel_1_plat1")}
              </Typography>
            </Box>
            <Box className={classes.FirstImageH2}>
              <Typography className={classes.TextNomPlat}>
                {t("form_carousel_1_plat2")}
              </Typography>
            </Box>
            <Box className={classes.FirstImageH3}>
              <Typography className={classes.TextNomPlat}>
                {t("form_carousel_1_plat3")}
              </Typography>
            </Box>
          </Paper>
        </Paper>
      </Carousel.Item>
      <Carousel.Item interval={5000} className={classes.PaperConatinerSilder2}>
        <Paper className={classes.BoxCenterContainer} elevation={0}>
          <Paper className={classes.BoxTopSlidMidle} elevation={0}>
            <Box className={classes.LeftSlidMidle}>
              <Box className={classes.RowTitles}>
                <Typography className={classes.TextNumber}>02</Typography>
              </Box>
              <Box className={classes.ContentText}>
                <Typography className={classes.TextTitle}>
                  {t("form_carousel_2_title1")}
                </Typography>
                <Typography className={classes.TextInfBig}>
                  {t("form_carousel_2_subtitle1")}
                </Typography>
                <Typography className={classes.TextInfo}>
                  {t("form_carousel_2_text1")}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.BoxImageGif2}></Box>
          </Paper>
          <Paper className={classes.BoxTopSlid2} elevation={0}>
            <Box className={classes.BoxImageGif3}></Box>

            <Box className={classes.LeftSlid2}>
              <Box className={classes.ContentText}>
                <Typography className={classes.TextTitle}>
                  {t("form_carousel_2_title2")}
                </Typography>
                <Typography className={classes.TextInfBig}>
                  {t("form_carousel_2_subtitle2")}
                </Typography>
                <Typography className={classes.TextInfo}>
                  {t("form_carousel_2_text2")}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Paper>
      </Carousel.Item>
      <Carousel.Item interval={5000} className={classes.PaperConatinerSilder2}>
        <Paper className={classes.BoxCenterContainer} elevation={0}>
          <Paper className={classes.BoxTopSlid} elevation={0}>
            <Box className={classes.LeftSlid}>
              <Box className={classes.RowTitles}>
                <Typography className={classes.TextNumber}>03</Typography>
              </Box>
              <Box className={classes.ContentText}>
                <Typography className={classes.TextTitle}>
                  {t("form_carousel_3_title1")}
                </Typography>
                <Typography className={classes.TextInfBig}>
                  {t("form_carousel_3_subtitle1")}
                </Typography>
                <Typography className={classes.TextInfo}>
                  {t("form_carousel_3_text1")}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.BoxImageGif4}></Box>
          </Paper>
          <Paper className={classes.BoxTopSlid2} elevation={0}>
            <Box className={classes.BoxImageGif5}></Box>

            <Box className={classes.LeftSlid2}>
              <Box className={classes.ContentText}>
                <Typography className={classes.TextTitle}>
                  {t("form_carousel_3_title2")}
                </Typography>
                <Typography className={classes.TextInfBig}>
                  {t("form_carousel_3_subtitle2")}
                </Typography>
                <Typography className={classes.TextInfo}>
                  {t("form_carousel_3_text2")}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Paper>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;


