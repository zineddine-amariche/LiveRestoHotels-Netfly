import * as React from "react";
import Box from "@mui/material/Box";
import DétailsMenus from "./DétailsMenus";
import { useSelector } from "react-redux";
import Loading from "../../../../../components/Loading/Loading";
import { Paper } from "@material-ui/core";

export default function LabTabs(props) {
  const restoOne = useSelector((state) => state.Restaurant);
  const { OneResto } = restoOne;
  const { categories } = OneResto;
  const { loading } = props;

  return (
    <Paper sx={{ typography: "body1",  }}>
      {loading ? (
        <Box sx={{ }}>
          <DétailsMenus categories={categories} />
        </Box>
      ) : (
        <Loading />
      )}
    </Paper>
  );
}
