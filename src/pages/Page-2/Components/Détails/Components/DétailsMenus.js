import { Box, Paper, Tab, Tabs, Button } from "@material-ui/core";
import React, { Children } from "react";
import useStyles from "../../stylesDetails";
import logoSearch from "../../../../../assets/Group 6.svg";
import ContainerOrder from "./ContainerOrder";
import ScrollIntoView from "react-scroll-into-view";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
// var Scroll   = require('react-scroll');
// var Element  = Scroll.Element;
// var scroller = Scroll.scroller;
function DétailsMenus(props) {
  const { categories } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  const scrollTo = (val) => {
    console.log("scrollTo", val);
    scroller.scrollTo(val, {
      duration: 100,
      delay: 100,
      smooth: true,
      // containerId: val,
      offset: 50, // Scrolls to element + 50 pixels down the page
    });
    // refMenue.current?.scrollIntoView()
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // scrollTo(newValue);
  };
  const refMenue = useRef(null);

  // useEffect(() => {
  //   refMenue.current?.scrollIntoView()
  // }, [value])
  
  
  const [val, setVale] = useState(null);


  const handel = (val) => {
    setVale(val);
    console.log('val', val)
  };
  return (
    <Paper className={classes.ContainerDetailsMenue} elevation={0}>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#eee",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box className={classes.IconFV}>
          <img src={logoSearch} alt="logo search" />
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          classes={{
            indicator: classes.private,
          }}
          TabIndicatorProps={{ style: { backgroundColor: "#485" } }}
        >
          {categories.map((i) => {
            return <Tab label={i.title} key={i.title} />;
          })}
        </Tabs>


      </Box>

      <ContainerOrder
        categories={categories}
        value={value}
        refMenue={refMenue}
      />
    </Paper>
  );
}

export default DétailsMenus;

// {categories.map((i) => {
//   return (
//     <ScrollIntoView >
//
//     </ScrollIntoView>
//   );
// })}


// <Box
// activeClass="active"
// //  onClick={handleChange}
// //  value={value}
// // variant="scrollable"
// // scrollButtons="auto"
// // aria-label="scrollable auto tabs example"

// classes={{
//   indicator: classes.private,
// }}
// TabIndicatorProps={{ style: { backgroundColor: "#485" } }}
// >
// {categories.map((i) => {
//   return (
//     <ScrollIntoView
//       // key={i.title}
//       // className={classes.LinkTo}
//       // to={i.title}
//       // spy={true}
//       // smooth={true}
//       // hashSpy={true}
//       // offset={50}
//       // duration={500}
//       // delay={1000}
//       // isDynamic={true}
//       selector={val}
//     >
//       <Button
//         className={classes.btn}
//         onClick={() => {
//           handel(i.title);
//         }}
//       >
//         {i.title}
//       </Button>
//     </ScrollIntoView>
//   );
// })}
// </Box>