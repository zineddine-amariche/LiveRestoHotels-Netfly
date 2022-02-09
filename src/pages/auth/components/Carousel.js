import React from "react";
import { Box, Paper } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import useStyles from "../hooks/styles/stylesLogin";
export default function LoginCarousel() {
  const classes = useStyles();
  const images = [
    { src: "../../../assets/imageR1.jpeg" },
    { src: "../../../assets/imageR2.jpg" },
    { src: "../../../assets/imageR3.jpg" },
  ];

  return (
      <Carousel
        styles={{ height: "100%" }}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        dynamicHeight={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        transitionTime={500}
      >
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img alt="" className={classes.carouselImages} src={image.src} />
            </div>
          );
        })}
      </Carousel>
  );
}

{
}
