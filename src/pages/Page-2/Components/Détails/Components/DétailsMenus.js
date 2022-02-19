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
// var Scroll   = require('react-scroll');
// var Element  = Scroll.Element;
// var scroller = Scroll.scroller;
function DétailsMenus(props) {
  const { categories,actAppBare } = props;
  const classes = useStyles();

  const myRef = useRef(null);
  const executeScroll = (id) => {
    const section = document.querySelector(`#tit${id}`);
    console.log('section', section)
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  

  // actAppBare ? classes.fixed :

  return (
    <Paper className={classes.ContainerDetailsMenue} elevation={0}>
      <div className={ classes.fixednull } >
        {categories.map((i) => {
          return (
            <a
              data-link={i.title}
              className={classes.scrolTo}
              onClick={()=>{executeScroll(i.id)}}
            >
              {i.title}
            </a>
          );
        })}
      </div>

      <ContainerOrder categories={categories} myRef={myRef} />
    </Paper>
  );
}

export default DétailsMenus;

{
  /* <Box
sx={{
  width: "100%",
  bgcolor: "#ccc",
  display: "flex",
  alignItems: "center",
}}
>
<Box className={classes.IconFV}>
  <img src={logoSearch} alt="logo search" />
</Box>
<Tabs
  // onClick={() => {
  //   HandelGo(value);
  // }}
  value={value}
  onChange={HandelGo(value)}
  variant="scrollable"
  scrollButtons="auto"
  aria-label="scrollable auto tabs example"
  classes={{
    indicator: classes.private,
  }}
  TabIndicatorProps={{ style: { backgroundColor: "#485" } }}
>
  {categories.map((i) => {
    return <Tab label={i.title} key={i.id} id={i.id} />;
  })}
</Tabs>
</Box> */
}

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
