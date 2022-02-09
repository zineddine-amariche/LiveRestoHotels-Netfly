import { Box, Paper, Tab, Tabs } from "@material-ui/core";
import React, { Children } from "react";
import useStyles from "../../stylesDetails";
import logoSearch from "../../../../../assets/Group 6.svg";
import ContainerOrder from "./ContainerOrder";
function DétailsMenus(props) {
  const { categories } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { value, index, Children } = props;
    return (
      <Box style={{ color: "#000" }}>
        {value === index && <Box>{Children}</Box>}
      </Box>
    );
  };
  return (
    <Paper className={classes.ContainerDetailsMenue} elevation={0}>
      <Box
        sx={{
          maxWidth: "100%",
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
            return <Tab label={i.title} key={i.title} />;
          })}
        </Tabs>
      </Box>
      <ContainerOrder categories={categories} value={value} />
    </Paper>
  );
}

export default DétailsMenus;
