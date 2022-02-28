import { Box, Paper, Tab, Tabs, Button } from "@material-ui/core";
import React, { Children } from "react";
import useStyles from "../../stylesDetails";
import logoSearch from "../../../../../assets/Group 6.svg";
import ContainerOrder from "./ContainerOrder";

import { useRef } from "react";

function DétailsMenus(props) {
  const { categories, actAppBare } = props;
  const classes = useStyles(actAppBare);

  const executeScroll = (id) => {
    const section = document.querySelector(`#tit${id}`);
    console.log("section", section);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.ContainerDetailsMenue} elevation={0}>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#fff",
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
            return (
              <Tab
                label={i.title}
                key={i.id}
                id={i.id}
                onClick={() => {
                  executeScroll(i.id);
                }}
              />
            );
          })}
        </Tabs>
      </Box>

      <ContainerOrder categories={categories} actAppBare={actAppBare} />
    </Paper>
  );
}

export default DétailsMenus;


